-- Create model_analytics table for tracking usage
CREATE TABLE public.model_analytics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  model_name TEXT NOT NULL,
  action_type TEXT NOT NULL CHECK (action_type IN ('page_visit', 'online_open', 'download')),
  user_id UUID REFERENCES auth.users(id),
  ip_hash TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.model_analytics ENABLE ROW LEVEL SECURITY;

-- Create policies for model_analytics
CREATE POLICY "Admins can view all analytics" 
ON public.model_analytics 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Allow service role to insert analytics" 
ON public.model_analytics 
FOR INSERT 
WITH CHECK (true);

-- Create index for better query performance
CREATE INDEX idx_model_analytics_model_name ON public.model_analytics(model_name);
CREATE INDEX idx_model_analytics_action_type ON public.model_analytics(action_type);
CREATE INDEX idx_model_analytics_created_at ON public.model_analytics(created_at DESC);