-- Make user_id nullable to allow public submissions
ALTER TABLE consultation_requests ALTER COLUMN user_id DROP NOT NULL;

-- Drop all existing RLS policies
DROP POLICY IF EXISTS "Admins can delete consultation requests" ON consultation_requests;
DROP POLICY IF EXISTS "Authenticated users can view own requests or admins view all" ON consultation_requests;
DROP POLICY IF EXISTS "Users can insert own consultation requests" ON consultation_requests;
DROP POLICY IF EXISTS "Users can update own consultation requests" ON consultation_requests;

-- Policy 1: Allow anyone to INSERT (submit consultation requests)
CREATE POLICY "Anyone can submit consultation requests"
ON consultation_requests
FOR INSERT
TO public
WITH CHECK (true);

-- Policy 2: Allow authenticated admins to SELECT all requests
CREATE POLICY "Admins can view all consultation requests"
ON consultation_requests
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Policy 3: Allow authenticated admins to UPDATE all requests
CREATE POLICY "Admins can update all consultation requests"
ON consultation_requests
FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Policy 4: Allow authenticated admins to DELETE requests
CREATE POLICY "Admins can delete consultation requests"
ON consultation_requests
FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Policy 5: Users can view their own requests if authenticated
CREATE POLICY "Users can view their own consultation requests"
ON consultation_requests
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);