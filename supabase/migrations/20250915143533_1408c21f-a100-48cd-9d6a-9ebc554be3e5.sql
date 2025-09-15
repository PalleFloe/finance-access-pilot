-- Add RLS policy to allow users to view their own analytics data
CREATE POLICY "Users can view their own analytics" 
ON public.model_analytics 
FOR SELECT 
USING (auth.uid() = user_id);