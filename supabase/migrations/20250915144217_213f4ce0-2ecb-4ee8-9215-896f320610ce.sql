-- Fix critical security vulnerability: Add admin-only RLS policies to user_roles table
-- This prevents regular users from escalating their privileges to admin

-- Policy to allow only admins to assign new roles
CREATE POLICY "Only admins can assign roles" 
ON public.user_roles 
FOR INSERT 
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Policy to allow only admins to modify existing roles  
CREATE POLICY "Only admins can modify roles" 
ON public.user_roles 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Policy to allow only admins to remove roles
CREATE POLICY "Only admins can remove roles" 
ON public.user_roles 
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));