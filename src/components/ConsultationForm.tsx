import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

const ConsultationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    challenge: '',
    service_interests: '',
    timeline: '',
    additional_info: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      timeline: value
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }

    if (!formData.role.trim()) {
      newErrors.role = "Role is required";
    }

    if (!formData.challenge.trim()) {
      newErrors.challenge = "Please describe your challenge";
    }

    if (!formData.service_interests.trim()) {
      newErrors.service_interests = "Please describe what service interests you";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Please fix the errors",
        description: "Check the form for required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      const { error: insertError } = await supabase
        .from('consultation_requests')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            role: formData.role,
            challenge: formData.challenge,
            message: formData.challenge, // Required by database schema
            service_interests: formData.service_interests,
            timeline: formData.timeline || null,
            additional_info: formData.additional_info || null,
            user_id: user?.id || null
          }
        ]);

      if (insertError) throw insertError;

      const { error: emailError } = await supabase.functions.invoke('send-consultation-email', {
        body: formData
      });

      if (emailError) {
        console.error('Email sending failed:', emailError);
      }

      toast({
        title: "Thanks for your request!",
        description: "I'll review it within 1 business day and get back to you with next steps. Check your email for confirmation.",
      });
      
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        challenge: '',
        service_interests: '',
        timeline: '',
        additional_info: ''
      });
      setErrors({});
    } catch (error) {
      console.error('Error submitting consultation request:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or email me directly at palle@financialdecisionmodels.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-white border border-slate-200 shadow-sm rounded-lg mb-12">
      <CardContent className="p-8 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-lg">Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-lg">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@company.com"
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-lg">Company *</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Your company name"
              className={errors.company ? "border-red-500" : ""}
            />
            {errors.company && <p className="text-sm text-red-500">{errors.company}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="role" className="text-lg">Your Role *</Label>
            <Input
              id="role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              placeholder="e.g., CFO, Finance Director, Business Owner"
              className={errors.role ? "border-red-500" : ""}
            />
            {errors.role && <p className="text-sm text-red-500">{errors.role}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="challenge" className="text-lg">What financial decision or challenge do you need help with? *</Label>
            <Textarea
              id="challenge"
              name="challenge"
              value={formData.challenge}
              onChange={handleInputChange}
              placeholder="Describe your situation..."
              rows={4}
              className={errors.challenge ? "border-red-500" : ""}
            />
            {errors.challenge && <p className="text-sm text-red-500">{errors.challenge}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="service_interests" className="text-lg">What type of service are you looking for? *</Label>
            <Textarea
              id="service_interests"
              name="service_interests"
              value={formData.service_interests}
              onChange={handleInputChange}
              placeholder="e.g., Custom model for M&A analysis, strategic consulting for investment decisions, etc."
              rows={4}
              className={errors.service_interests ? "border-red-500" : ""}
            />
            {errors.service_interests && <p className="text-sm text-red-500">{errors.service_interests}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline" className="text-lg">Timeline for service?</Label>
            <Select value={formData.timeline} onValueChange={handleSelectChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="urgent">Urgent (within 2 weeks)</SelectItem>
                <SelectItem value="near-term">Near-term (1-2 months)</SelectItem>
                <SelectItem value="exploratory">Exploratory (3+ months)</SelectItem>
                <SelectItem value="gathering">Just gathering information</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="additional_info" className="text-lg">Any other relevant informations?</Label>
            <Textarea
              id="additional_info"
              name="additional_info"
              value={formData.additional_info}
              onChange={handleInputChange}
              placeholder="Any additional context..."
              rows={3}
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue/90 text-white"
            size="lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Request Consultation"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ConsultationForm;
