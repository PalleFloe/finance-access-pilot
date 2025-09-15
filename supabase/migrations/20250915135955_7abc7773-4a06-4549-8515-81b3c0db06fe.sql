-- Add columns for time tracking to model_analytics table
ALTER TABLE public.model_analytics 
ADD COLUMN session_id UUID DEFAULT gen_random_uuid(),
ADD COLUMN event_subtype TEXT, -- 'enter', 'exit', 'heartbeat'
ADD COLUMN duration_seconds INTEGER,
ADD COLUMN page_url TEXT;

-- Create index for better query performance
CREATE INDEX idx_model_analytics_session_id ON public.model_analytics(session_id);
CREATE INDEX idx_model_analytics_event_subtype ON public.model_analytics(event_subtype);

-- Update existing records to have a session_id and event_subtype
UPDATE public.model_analytics 
SET event_subtype = 'visit' 
WHERE event_subtype IS NULL;