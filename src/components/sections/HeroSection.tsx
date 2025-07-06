import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, ArrowRight } from "lucide-react";
import emailjs from '@emailjs/browser';

const HeroSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // You'll need to replace this with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // You'll need to replace this with your EmailJS template ID
        form,
        'YOUR_PUBLIC_KEY' // You'll need to replace this with your EmailJS public key
      );
      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200" variant="outline">
          Coming Soon - Beta Program
        </Badge>
        <h2 className="text-5xl font-bold text-slate-900 mb-6">
          Empower Your <span style={{ color: 'rgb(50, 100, 150)' }}>Financial Decisions</span>
        </h2>
        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Make better business decisions with our intuitive, business-minded Financial Decision Model toolbox 
          and expert consulting services. Transform complex financial choices into clear, actionable strategies.
        </p>
        
        {/* Beta Access Form */}
        <Card className="max-w-md mx-auto mb-12 shadow-lg border-slate-200">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5" style={{ color: 'rgb(50, 100, 150)' }} />
              <span>Request Beta Access</span>
            </CardTitle>
            <CardDescription>
              Get access to the beta version of the Financial Decision Model toolbox. Please give feedback. Thanks!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form 
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {submitStatus === 'success' && (
                <div className="p-3 bg-green-100 border border-green-200 rounded-md text-green-800 text-sm">
                  Thank you! Your request has been submitted successfully.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-3 bg-red-100 border border-red-200 rounded-md text-red-800 text-sm">
                  Sorry, there was an error sending your request. Please try again.
                </div>
              )}
              <input type="hidden" name="form-name" value="beta-access" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="position"
                placeholder="Position"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Business Email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-md transition-colors flex items-center justify-center"
              >
                {isSubmitting ? 'Sending...' : 'Request Access'}
                {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;