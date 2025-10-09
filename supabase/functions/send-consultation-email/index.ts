import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ConsultationRequest {
  name: string;
  email: string;
  company: string;
  role: string;
  challenge: string;
  service_interests: string;
  timeline?: string;
  additional_info?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const requestData: ConsultationRequest = await req.json();
    const { name, email, company, role, challenge, service_interests, timeline, additional_info } = requestData;

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: "Financial Decision Models <noreply@financialdecisionmodels.com>",
      to: [email],
      subject: "Consultation Request Received",
      html: `
        <h2>Hi ${name},</h2>
        <p>Thanks for reaching out. I've received your consultation request and will review it within 1 business day.</p>
        
        <h3>Your request details:</h3>
        <ul>
          <li><strong>Company:</strong> ${company}</li>
          <li><strong>Role:</strong> ${role}</li>
          <li><strong>Challenge:</strong> ${challenge.substring(0, 150)}${challenge.length > 150 ? '...' : ''}</li>
          ${timeline ? `<li><strong>Timeline:</strong> ${timeline}</li>` : ''}
        </ul>
        
        <p>I'll be in touch soon to discuss next steps.</p>
        
        <p>Best regards,<br>
        Palle Fløe Nielsen<br>
        Financial Decision Models</p>
        
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
        <p style="font-size: 12px; color: #666;">
          <a href="https://www.financialdecisionmodels.com" style="color: #326496;">www.financialdecisionmodels.com</a>
        </p>
      `,
    });

    console.log("User confirmation email sent:", userEmailResponse);

    // Send notification email to Palle
    const notificationEmailResponse = await resend.emails.send({
      from: "Financial Decision Models <noreply@financialdecisionmodels.com>",
      to: ["palle@financialdecisionmodels.com"],
      subject: `New Consultation Request from ${name} at ${company}`,
      html: `
        <h2>New consultation request received:</h2>
        
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Name:</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Email:</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Company:</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Role:</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${role}</td>
          </tr>
        </table>
        
        <h3>Challenge:</h3>
        <p style="background: #f5f5f5; padding: 15px; border-left: 3px solid #326496;">${challenge}</p>
        
        <h3>Service interests:</h3>
        <p style="background: #f5f5f5; padding: 15px; border-left: 3px solid #326496;">${service_interests}</p>
        
        ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
        
        ${additional_info ? `
          <h3>Additional info:</h3>
          <p style="background: #f5f5f5; padding: 15px; border-left: 3px solid #326496;">${additional_info}</p>
        ` : '<p><em>No additional information provided</em></p>'}
      `,
    });

    console.log("Notification email sent:", notificationEmailResponse);

    return new Response(
      JSON.stringify({ success: true, userEmailResponse, notificationEmailResponse }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-consultation-email function:", error);
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
