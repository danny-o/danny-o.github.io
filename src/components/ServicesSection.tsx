
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, User, Briefcase, FileText } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <FileText className="h-12 w-12" />,
      title: "Technical Consulting & Code Review",
      description: "Providing expert guidance on Mobile application development best practices, architecture decisions, and code quality improvements.",
      features: ["Code Quality Assessment", "Architecture Planning", "Best Practices Training", "Technical Documentation"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: "Custom Mobile App Development",
      description: "From concept to Play Store, I build native Android applications tailored to your specific needs and business goals.",
      features: ["Native Kotlin/Java Development", "Modern UI with Jetpack Compose", "Clean Architecture Implementation", "Performance Optimization"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Briefcase className="h-12 w-12" />,
      title: "App Modernization & Migration",
      description: "Upgrading legacy Android applications with modern architecture, new features, and improved performance.",
      features: ["Legacy Code Refactoring", "Architecture Migration", "Library Updates", "Performance Improvements"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <User className="h-12 w-12" />,
      title: "UI/UX Design & Implementation",
      description: "Creating beautiful, intuitive user interfaces that follow Material Design principles and provide exceptional user experiences.",
      features: ["Material Design Implementation", "Responsive Layouts", "Accessibility Features", "Custom Animations"],
      color: "from-green-500 to-green-600"
    },
  ];

  const workProcess = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We'll discuss your project goals, target audience, and technical requirements to create a clear roadmap."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "I'll create wireframes and prototypes to visualize the user experience before development begins."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Building your app with clean, maintainable code and thorough testing to ensure quality and reliability."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Helping you publish to the Play Store and providing ongoing support and maintenance as needed."
    }
  ];

  return (
    <section id="services" className="py-10 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-purple-700 bg-clip-text text-transparent">
            Services I Offer
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive Android development services to bring your mobile app vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-5">
          {services.map((service, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-slate-800">{service.title}</CardTitle>
                <CardDescription className="text-slate-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

       

        {/* Call to Action */}
        {/* <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 shadow-xl">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Whether you have a detailed specification or just an idea, I'm here to help you create an amazing Android app. 
              Let's discuss your project and explore how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge className="bg-white/20 text-white text-base py-2 px-4">📱 Native Android Development</Badge>
              <Badge className="bg-white/20 text-white text-base py-2 px-4">🚀 Modern Architecture</Badge>
              <Badge className="bg-white/20 text-white text-base py-2 px-4">✨ Clean Code</Badge>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </section>
  );
};

export default ServicesSection;
