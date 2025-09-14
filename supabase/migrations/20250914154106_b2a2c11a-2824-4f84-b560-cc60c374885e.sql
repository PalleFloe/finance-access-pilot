-- Add admin role to pallefloe@gmail.com
INSERT INTO public.user_roles (user_id, role)
VALUES ('c70a1282-53af-4419-b9b0-98941ab2029c', 'admin')
ON CONFLICT (user_id, role) DO NOTHING;