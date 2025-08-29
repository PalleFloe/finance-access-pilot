import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
  Button,
} from 'npm:@react-email/components@0.0.22'
import * as React from 'npm:react@18.3.1'

interface ConfirmSignupEmailProps {
  supabase_url: string
  email_action_type: string
  redirect_to: string
  token_hash: string
  token: string
}

export const ConfirmSignupEmail = ({
  token_hash,
  supabase_url,
  email_action_type,
  redirect_to,
}: ConfirmSignupEmailProps) => (
  <Html>
    <Head />
    <Preview>Confirm Your Access to Financial Decision Models</Preview>
    <Body style={main}>
      <Container style={container}>
        <div style={header}>
          <Heading style={h1}>Financial Decision Models</Heading>
          <Text style={tagline}>Professional Excel Models for Financial Analysis</Text>
        </div>
        
        <div style={content}>
          <Heading style={h2}>Confirm Your Account</Heading>
          
          <Text style={text}>
            Welcome! You're just one click away from accessing our collection of professional 
            financial models including DCF models, valuation tools, and startup analysis spreadsheets.
          </Text>
          
          <div style={buttonContainer}>
            <Button
              href={`${supabase_url}/auth/v1/verify?token=${token_hash}&type=${email_action_type}&redirect_to=${redirect_to}`}
              style={button}
            >
              Confirm Your Access
            </Button>
          </div>
          
          <Text style={smallText}>
            After confirmation, you'll be able to download Excel models, access interactive tools, 
            and explore our complete financial modeling toolkit.
          </Text>
          
          <div style={featuresBox}>
            <Text style={featuresTitle}>What You'll Get Access To:</Text>
            <ul style={featuresList}>
              <li>12+ Professional Excel Financial Models</li>
              <li>Interactive Online Calculators</li>
              <li>DCF, Valuation & Startup Models</li>
              <li>Expert Financial Analysis Tools</li>
            </ul>
          </div>
        </div>
        
        <div style={footer}>
          <Text style={footerText}>
            If you didn't create this account, you can safely ignore this email.
          </Text>
          <Text style={footerText}>
            <Link href="https://financialdecisionmodels.com" style={footerLink}>
              Financial Decision Models
            </Link>
            <br />
            Professional Financial Modeling Solutions
          </Text>
        </div>
      </Container>
    </Body>
  </Html>
)

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
}

const header = {
  background: 'linear-gradient(135deg, #326496, #4f81c4)',
  padding: '40px 32px',
  textAlign: 'center' as const,
}

const content = {
  padding: '32px',
}

const h1 = {
  color: '#ffffff',
  fontSize: '32px',
  fontWeight: 'bold',
  margin: '0',
  textAlign: 'center' as const,
}

const h2 = {
  color: '#326496',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 20px 0',
}

const tagline = {
  color: '#e8f4ff',
  fontSize: '16px',
  margin: '8px 0 0 0',
  textAlign: 'center' as const,
}

const text = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 20px 0',
}

const smallText = {
  color: '#666666',
  fontSize: '14px',
  lineHeight: '1.5',
  margin: '20px 0',
}

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '32px 0',
}

const button = {
  backgroundColor: '#326496',
  borderRadius: '6px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '16px 32px',
}

const featuresBox = {
  backgroundColor: '#f8fafc',
  border: '1px solid #e2e8f0',
  borderRadius: '8px',
  padding: '20px',
  margin: '20px 0',
}

const featuresTitle = {
  color: '#326496',
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '0 0 12px 0',
}

const featuresList = {
  color: '#333333',
  fontSize: '14px',
  lineHeight: '1.5',
  margin: '0',
  paddingLeft: '20px',
}

const footer = {
  borderTop: '1px solid #e2e8f0',
  padding: '32px',
  textAlign: 'center' as const,
}

const footerText = {
  color: '#64748b',
  fontSize: '12px',
  lineHeight: '1.5',
  margin: '8px 0',
}

const footerLink = {
  color: '#326496',
  textDecoration: 'none',
}

export default ConfirmSignupEmail