-- Priority 1 Fix: Improve RLS policies for consultation_requests table

-- Drop the problematic "Deny public access" policy
DROP POLICY IF EXISTS "Deny public access to consultation requests" ON consultation_requests;

-- Drop existing policies to recreate them with proper structure
DROP POLICY IF EXISTS "Users can view their own consultation requests" ON consultation_requests;
DROP POLICY IF EXISTS "Admins can view all consultation requests" ON consultation_requests;
DROP POLICY IF EXISTS "Allow service role to insert consultation requests" ON consultation_requests;

-- Create comprehensive permissive SELECT policy
CREATE POLICY "Authenticated users can view own requests or admins view all"
ON consultation_requests
FOR SELECT
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND (
    user_id = auth.uid() 
    OR has_role(auth.uid(), 'admin'::app_role)
  )
);

-- Create INSERT policy - users can only insert their own records
CREATE POLICY "Users can insert own consultation requests"
ON consultation_requests
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Create UPDATE policy - users can only update their own records
CREATE POLICY "Users can update own consultation requests"
ON consultation_requests
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Create DELETE policy - only admins can delete
CREATE POLICY "Admins can delete consultation requests"
ON consultation_requests
FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Ensure user_id column is not nullable (for data integrity)
ALTER TABLE consultation_requests 
ALTER COLUMN user_id SET NOT NULL;