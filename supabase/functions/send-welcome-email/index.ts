import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface WelcomeEmailRequest {
  email: string;
  firstName: string;
  lastName: string;
  company?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, firstName, lastName, company }: WelcomeEmailRequest = await req.json();

    const emailResponse = await resend.emails.send({
      from: "Financial Decision Models <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to Financial Decision Models!",
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="background: linear-gradient(135deg, #326496, #4f81c4); padding: 40px 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to Financial Decision Models</h1>
            <p style="color: #e8f4ff; margin: 10px 0 0 0; font-size: 16px;">Your gateway to professional financial modeling</p>
          </div>
          
          <div style="padding: 40px 20px; background: white;">
            <h2 style="color: #326496; margin-bottom: 20px;">Hello ${firstName}!</h2>
            
            <p>Thank you for joining Financial Decision Models! Your account has been successfully created and you now have access to download our premium Excel financial models.</p>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #326496; margin-top: 0;">What's Next?</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li><strong>Browse Models:</strong> Explore our collection of 12+ professional financial models</li>
                <li><strong>Download Instantly:</strong> Click any "Download & Free" button to get Excel files</li>
                <li><strong>Expert Consulting:</strong> Need custom solutions? Contact us for personalized help</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${Deno.env.get("SUPABASE_URL")?.replace('https://', 'https://').replace('.supabase.co', '.lovable.app') || 'https://financialdecisionmodels.com'}" 
                 style="background: #326496; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
                Start Exploring Models
              </a>
            </div>
            
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            
            <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 30px; color: #64748b; font-size: 14px;">
              <p>Need help? Reply to this email or visit our website for support.</p>
              <p>Best regards,<br>The Financial Decision Models Team</p>
            </div>
          </div>
        </div>
      `,
    });

    console.log("Welcome email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-welcome-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);