
import { ExternalLink, Github, Smartphone, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const Projects = () => {
  const projects = [
    // {
    //   title: "E-Commerce Android App",
    //   description: "A full-featured shopping app with modern UI, payment integration, and real-time notifications. Built with Jetpack Compose and Clean Architecture.",
    //   image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    //   appScreens: [
    //     "src/components/assets/ecommerce_app_home.png",
    //     "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=300&h=600&fit=crop",
    //     "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=600&fit=crop",
    //     "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=600&fit=crop"
    //   ],
    //   technologies: ["Kotlin", "Jetpack Compose", "Firebase", "Stripe API"],
    //   github: "#",
    //   demo: "#",
    //   featured: true,
    // },
    // {
    //   title: "Fitness Tracking App",
    //   description: "Personal fitness companion with workout tracking, progress analytics, and social features. Integrated with health APIs and wearable devices.",
    //   image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
    //   appScreens: [
    //     "https://images.unsplash.com/photo-1434596922112-19c563067271?w=300&h=600&fit=crop",
    //     "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=600&fit=crop",
    //     "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=600&fit=crop",
    //     "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=300&h=600&fit=crop"
    //   ],
    //   technologies: ["Kotlin", "Room", "Health API", "Material Design"],
    //   github: "#",
    //   demo: "#",
    //   featured: true,
    // },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather app with location-based forecasts, interactive maps, and customizable widgets. Clean, intuitive interface with smooth animations.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      appScreens: [],
      technologies: ["Java", "OpenWeather API", "Google Maps", "MVVM"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      title: "Task Management Suite",
      description: "Productivity app for teams with real-time collaboration, file sharing, and project tracking. Enterprise-grade security and offline support.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      appScreens: [],
      technologies: ["Kotlin", "Firebase", "WorkManager", "Encryption"],
      github: "#",
      demo: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-6 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl overflow-hidden border border-slate-600/50 hover:border-cyan-400/50 transform hover:scale-[1.02] transition-all duration-300 ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* App Screens Carousel for Featured Projects */}
              
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                </div>
           
              
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <Smartphone className="text-cyan-400" size={20} />
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                    asChild
                  >
                    <a href={project.github} className="flex items-center space-x-2">
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                    asChild
                  >
                    <a href={project.demo} className="flex items-center space-x-2">
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
