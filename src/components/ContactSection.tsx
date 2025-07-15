
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. I'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-10 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to turn your Android app idea into reality? Let's discuss your project and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center">
                <MessageSquare className="h-6 w-6 mr-3 text-blue-400" />
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Company
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                    placeholder="Tell me about your project, timeline, and requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Email</div>
                      <div className="text-blue-200">danielnjoroge812@gmail.com</div>
                    </div>
                  </div>

                  <a
                    href="https://www.linkedin.com/in/daniel-kimani-295363214"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >

                    <div className="flex items-center">


                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">

                        <Linkedin className="h-6 w-6 text-white" />

                      </div>
                      <div>
                        <div className="text-white font-medium">LinkedIn</div>
                        <div className="text-blue-200">https://www.linkedin.com/in/daniel-kimani-295363214/</div>
                      </div>

                    </div>
                  </a>


                  <a
                    href="https://github.com/danny-o"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                      <Github className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">GitHub</div>
                      <div className="text-blue-200">github.com/danny-o</div>
                    </div>
                  </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-900/20 to-blue-700/20 backdrop-blur-md border-green-400/30 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-4">Quick Response Promise</h3>
                <p className="text-green-700 mb-4">
                  I understand that time is crucial for your project. I typically respond to inquiries within 2-4 hours during business days.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-300/30 text-green-500 border-green-200/50">
                    Fast Response
                  </Badge>
                  <Badge className="bg-blue-300/30 text-blue-500 border-blue-200/50">
                    Free Consultation
                  </Badge>
                  <Badge className="bg-purple-300/30 text-purple-500 border-purple-200/50">
                    No Obligation Quote
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-orange-500/30 to-red-500/20 backdrop-blur-md border-orange-400/30 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-4">What Happens Next?</h3>
                <div className="space-y-3 text-orange-700">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">1</div>
                    <div>I'll review your project requirements and respond within 4 hours</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">2</div>
                    <div>We'll schedule a free consultation call to discuss details</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">3</div>
                    <div>You'll receive a detailed proposal with timeline and pricing</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
