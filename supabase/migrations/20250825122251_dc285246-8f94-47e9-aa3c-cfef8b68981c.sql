-- Enable Row Level Security on consultation_requests table
ALTER TABLE public.consultation_requests ENABLE ROW LEVEL SECURITY;

-- Policy to allow service role (Edge Functions) to insert consultation requests
-- This ensures the contact form continues to work through Edge Functions
CREATE POLICY "Allow service role to insert consultation requests" 
ON public.consultation_requests 
FOR INSERT 
TO service_role 
WITH CHECK (true);

-- Policy to allow only authenticated users to read consultation requests
-- This restricts access to customer data to logged-in users only
CREATE POLICY "Authenticated users can view consultation requests" 
ON public.consultation_requests 
FOR SELECT 
TO authenticated 
USING (true);

-- Ensure no public access to consultation requests
-- This explicitly denies access to anonymous users
CREATE POLICY "Deny public access to consultation requests" 
ON public.consultation_requests 
FOR ALL 
TO anon 
USING (false);