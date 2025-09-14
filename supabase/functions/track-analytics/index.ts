import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.56.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Simple hash function for IP anonymization
const hashString = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash).toString(16);
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { modelName, actionType, userId } = await req.json();

    // Validate required fields
    if (!modelName || !actionType) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: modelName, actionType' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Validate action type
    const validActions = ['page_visit', 'online_open', 'download'];
    if (!validActions.includes(actionType)) {
      return new Response(
        JSON.stringify({ error: 'Invalid actionType. Must be: page_visit, online_open, or download' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Get client IP for anonymization
    const clientIp = req.headers.get('x-forwarded-for') || 
                     req.headers.get('x-real-ip') || 
                     'unknown';
    const ipHash = hashString(clientIp);

    // Get user agent
    const userAgent = req.headers.get('user-agent')?.substring(0, 200) || 'unknown';

    console.log(`Tracking analytics: ${actionType} for ${modelName} by user ${userId || 'anonymous'}`);

    // Insert analytics record using service role privileges
    const { error } = await supabaseAdmin
      .from('model_analytics')
      .insert({
        model_name: modelName,
        action_type: actionType,
        user_id: userId || null,
        ip_hash: ipHash,
        user_agent: userAgent,
      });

    if (error) {
      console.error('Analytics insert error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to track analytics' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Analytics tracking error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});