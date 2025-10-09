-- Add new columns to consultation_requests table
ALTER TABLE public.consultation_requests
ADD COLUMN IF NOT EXISTS role text,
ADD COLUMN IF NOT EXISTS challenge text,
ADD COLUMN IF NOT EXISTS service_interests text,
ADD COLUMN IF NOT EXISTS timeline text,
ADD COLUMN IF NOT EXISTS additional_info text,
ADD COLUMN IF NOT EXISTS status text DEFAULT 'new',
ADD COLUMN IF NOT EXISTS notes text;

-- Rename message column to challenge if it exists (for backwards compatibility)
DO $$ 
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'consultation_requests' 
    AND column_name = 'message'
  ) AND NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'consultation_requests' 
    AND column_name = 'challenge'
  ) THEN
    ALTER TABLE public.consultation_requests RENAME COLUMN message TO challenge;
  END IF;
END $$;

-- Make role and challenge NOT NULL for new records (add defaults for existing data)
UPDATE public.consultation_requests 
SET role = 'Not specified' 
WHERE role IS NULL;

UPDATE public.consultation_requests 
SET challenge = COALESCE(message, 'Not specified')
WHERE challenge IS NULL;

UPDATE public.consultation_requests 
SET service_interests = 'Not specified'
WHERE service_interests IS NULL;

-- Now make them NOT NULL
ALTER TABLE public.consultation_requests
ALTER COLUMN role SET NOT NULL,
ALTER COLUMN challenge SET NOT NULL,
ALTER COLUMN service_interests SET NOT NULL;