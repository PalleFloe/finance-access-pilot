-- Fix security vulnerability: Restrict model_analytics inserts to service role only
-- This prevents attackers from flooding analytics with fake data

-- Drop the existing overly permissive policy
DROP POLICY IF EXISTS "Allow service role to insert analytics" ON public.model_analytics;

-- Create a new policy that only allows service role to insert
-- The edge function uses service role credentials, so this will continue to work
CREATE POLICY "Service role can insert analytics" 
ON public.model_analytics 
FOR INSERT 
WITH CHECK (auth.role() = 'service_role');
