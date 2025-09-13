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
      from: "Financial Decision Models <noreply@financialdecisionmodels.com>",
      to: [email],
      subject: "Welcome to Financial Decision Models!",
      html: `
        <div style="font-family: 'Garamond', 'Times New Roman', serif; font-size: 16px; line-height: 1.6; color: #222222; max-width: 600px; margin: 0 auto; padding: 20px;">

          <h2 style="font-family: 'Garamond', 'Times New Roman', serif; font-size: 24px; font-weight: bold; color: #326496; margin-bottom: 20px;">
            Hello ${firstName},
          </h2>

          <p style="margin-bottom: 16px;">
            Thank you for registering at Financial Decision Models. Your account has been successfully created, and you now have access to download our Excel financial decision models.
          </p>

          <p style="margin-bottom: 20px;">
            Our models are Excel-protected to ensure quality and consistency, with input cells available for your analysis. Unprotected versions will be available later.
          </p>

          <h3 style="font-family: 'Garamond', 'Times New Roman', serif; font-size: 20px; font-weight: bold; color: #326496; margin-bottom: 12px;">
            What's Next?
          </h3>

          <ul style="margin-bottom: 20px; padding-left: 20px;">
            <li style="margin-bottom: 8px;"><strong>Browse models:</strong> Click "Online & Free" to preview models in your browser</li>
            <li style="margin-bottom: 8px;"><strong>Download models:</strong> Click "Download & Free" to download Excel files directly</li>
          </ul>

          <p style="margin-bottom: 20px;">
            Keep exploring: <a href="https://www.financialdecisionmodels.com" style="color: #326496; text-decoration: none; font-size: 18px; font-weight: 500;">https://www.financialdecisionmodels.com</a>
          </p>

          <p style="font-size: 16px; margin-bottom: 20px; color: #666666;">
            For inquiries about customisation, consulting services, or questions, please contact palle@financialdecisionmodels.com.
          </p>

          <p style="margin-bottom: 8px;">
            Welcome aboard,
          </p>

          <p style="margin-bottom: 0;">
            <strong>Palle Fløe Nielsen</strong><br>
            Financial Decision Models
          </p>

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