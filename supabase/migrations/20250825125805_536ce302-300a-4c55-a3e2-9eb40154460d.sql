-- 1) Create roles enum if not exists
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'app_role') THEN
    CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');
  END IF;
END
$$;

-- 2) Create user_roles table if not exists
CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Allow users to read their own roles (helps has_role and introspection)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'user_roles' AND policyname = 'Users can read their own roles'
  ) THEN
    CREATE POLICY "Users can read their own roles"
      ON public.user_roles
      FOR SELECT
      TO authenticated
      USING (user_id = auth.uid());
  END IF;
END
$$;

-- 3) Create has_role function (security definer) to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles ur
    WHERE ur.user_id = _user_id AND ur.role = _role
  );
$$;

-- 4) Add user_id to consultation_requests to associate rows with a user (nullable to support public/edge inserts)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'consultation_requests' AND column_name = 'user_id'
  ) THEN
    ALTER TABLE public.consultation_requests
    ADD COLUMN user_id uuid NULL;
  END IF;
END
$$;

-- Optional index to speed up owner lookups
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_indexes WHERE schemaname='public' AND tablename='consultation_requests' AND indexname='idx_consultation_requests_user_id'
  ) THEN
    CREATE INDEX idx_consultation_requests_user_id ON public.consultation_requests(user_id);
  END IF;
END
$$;

-- 5) Tighten RLS policies on consultation_requests
-- Remove overly broad SELECT policy if it exists
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='consultation_requests' AND policyname='Authenticated users can view consultation requests'
  ) THEN
    DROP POLICY "Authenticated users can view consultation requests" ON public.consultation_requests;
  END IF;
END
$$;

-- Ensure anon is denied (keep or create)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='consultation_requests' AND policyname='Deny public access to consultation requests'
  ) THEN
    CREATE POLICY "Deny public access to consultation requests"
      ON public.consultation_requests
      FOR ALL
      TO anon
      USING (false);
  END IF;
END
$$;

-- Ensure service role can insert (keep or create)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='consultation_requests' AND policyname='Allow service role to insert consultation requests'
  ) THEN
    CREATE POLICY "Allow service role to insert consultation requests"
      ON public.consultation_requests
      FOR INSERT
      TO service_role
      WITH CHECK (true);
  END IF;
END
$$;

-- Allow admins to view all consultation requests
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='consultation_requests' AND policyname='Admins can view all consultation requests'
  ) THEN
    CREATE POLICY "Admins can view all consultation requests"
      ON public.consultation_requests
      FOR SELECT
      TO authenticated
      USING (public.has_role(auth.uid(), 'admin'));
  END IF;
END
$$;

-- Allow users to view their own consultation requests
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='consultation_requests' AND policyname='Users can view their own consultation requests'
  ) THEN
    CREATE POLICY "Users can view their own consultation requests"
      ON public.consultation_requests
      FOR SELECT
      TO authenticated
      USING (user_id = auth.uid());
  END IF;
END
$$;