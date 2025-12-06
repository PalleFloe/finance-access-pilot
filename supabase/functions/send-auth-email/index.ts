import React from 'npm:react@18.3.1'
import { Webhook } from 'https://esm.sh/standardwebhooks@1.0.0'
import { Resend } from 'npm:resend@4.0.0'
import { renderAsync } from 'npm:@react-email/components@0.0.31'
import { ConfirmSignupEmail } from './_templates/confirm-signup.tsx'
import { RecoveryEmail } from './_templates/recovery-email.tsx'

const resend = new Resend(Deno.env.get('RESEND_API_KEY') as string)
const hookSecret = Deno.env.get('SEND_AUTH_EMAIL_HOOK_SECRET') as string

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { 
      status: 405,
      headers: corsHeaders 
    })
  }

  try {
    const payload = await req.text()
    const headers = Object.fromEntries(req.headers)
    
    // Verify webhook signature if secret is provided
    if (hookSecret) {
      const wh = new Webhook(hookSecret)
      try {
        wh.verify(payload, headers)
      } catch (error) {
        console.error('Webhook verification failed:', error)
        return new Response('Unauthorized', { 
          status: 401,
          headers: corsHeaders 
        })
      }
    }

    const webhookData = JSON.parse(payload)
    
    const {
      user,
      email_data: { 
        token, 
        token_hash, 
        redirect_to, 
        email_action_type,
        site_url
      },
    } = webhookData

    console.log('Processing auth email:', {
      email: user.email,
      action_type: email_action_type,
      redirect_to
    })

    // Determine email type and render appropriate template
    let html: string
    let subject: string
    
    const emailProps = {
      supabase_url: Deno.env.get('SUPABASE_URL') ?? site_url ?? '',
      token,
      token_hash,
      redirect_to: redirect_to || 'https://financialdecisionmodels.com',
      email_action_type,
    }

    switch (email_action_type) {
      case 'signup':
        subject = 'Confirm Your Access to Financial Decision Models'
        html = await renderAsync(
          React.createElement(ConfirmSignupEmail, emailProps)
        )
        break
      
      case 'recovery':
        subject = 'Reset Your Financial Decision Models Password'
        html = await renderAsync(
          React.createElement(RecoveryEmail, emailProps)
        )
        break
      
      case 'magiclink':
        subject = 'Sign in to Financial Decision Models'
        html = await renderAsync(
          React.createElement(ConfirmSignupEmail, emailProps)
        )
        break
      
      default:
        subject = 'Financial Decision Models - Action Required'
        html = await renderAsync(
          React.createElement(ConfirmSignupEmail, emailProps)
        )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Financial Decision Models <noreply@financialdecisionmodels.com>',
      to: [user.email],
      subject,
      html,
    })

    if (error) {
      console.error('Failed to send email:', error)
      throw error
    }

    console.log('Email sent successfully:', {
      id: data?.id,
      to: user.email,
      subject
    })

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        id: data?.id 
      }), 
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    )

  } catch (error: any) {
    console.error('Error in send-auth-email function:', error)
    return new Response(
      JSON.stringify({
        error: {
          message: error.message,
          type: error.name || 'UnknownError'
        },
      }),
      {
        status: 500,
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders 
        },
      }
    )
  }
})