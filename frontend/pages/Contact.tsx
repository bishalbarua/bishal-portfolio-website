import { useState } from 'react';
import { Mail, MapPin, Globe, ExternalLink, Send, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import backend from '~backend/client';
import type { ContactFormRequest } from '~backend/portfolio/contact';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormRequest>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await backend.portfolio.submitContactForm(formData);
      
      if (response.success) {
        toast({
          title: "Message Sent!",
          description: response.message,
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'baruabishal123@gmail.com',
      link: 'mailto:baruabishal123@gmail.com'
    },
    {
      icon: github,
      label: 'Github',
      value: 'https://github.com/bishalbarua',
      link: 'https://github.com/bishalbarua'
    },
    {
      icon: ExternalLink,
      label: 'LinkedIn',
      value: 'linkedin.com/in/bishalbarua',
      link: 'https://www.linkedin.com/in/bishalbarua/'
    }
  ];

  const platforms = [
    {
      name: 'Fiverr',
      url: 'https://www.fiverr.com/bishalbarua',
      description: 'Freelance Services'
    },
    {
      name: 'Upwork',
      url: 'https://www.upwork.com/freelancers/~012f13b9ab484f9c34',
      description: 'Professional Projects'
    },
    {
      name: 'Behance',
      url: 'https://www.behance.net/bishalbarua/',
      description: 'Portfolio Showcase'
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Contacts</h1>
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? I'd love to hear about your goals and discuss 
            how I can help you achieve exceptional results through strategic marketing and project management.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="h-fit bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Send className="mr-3 h-6 w-6 text-orange-400" />
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-300">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-300">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-400"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-slate-300">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-300">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or inquiry..."
                    className="min-h-32 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-400"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-xl text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-400/20 rounded-lg flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-400">{info.label}</p>
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-orange-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Professional Platforms */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-xl text-white">Professional Platforms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {platforms.map((platform, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                    <div>
                      <p className="font-medium text-white">{platform.name}</p>
                      <p className="text-sm text-slate-400">{platform.description}</p>
                    </div>
                    <Button variant="outline" size="sm" className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900" asChild>
                      <a href={platform.url} target="_blank" rel="noopener noreferrer">
                        Visit
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Response Card */}
            <Card className="bg-gradient-to-br from-orange-400/20 to-orange-600/20 border-orange-400/30">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-slate-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Quick Response</h3>
                  <p className="text-slate-300 text-sm">
                    I typically respond to all inquiries within 24 hours. 
                    For urgent projects, feel free to reach out directly via email.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-slate-800 rounded-2xl p-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Let's discuss your goals and create a customized strategy that delivers 
            measurable results for your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
              <a href="mailto:baruabishal123@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Me Directly
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900" asChild>
              <a href="https://www.linkedin.com/in/bishalbarua/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
