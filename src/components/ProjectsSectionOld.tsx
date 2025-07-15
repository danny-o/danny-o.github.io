import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Code } from "lucide-react";

const ProjectsSectionOld = () => {
  const projects = [
    {
      title: "FinanceTracker Pro",
      description: "A comprehensive personal finance management app with expense tracking, budget planning, and financial insights.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "Jetpack Compose", "Room", "Hilt", "Coroutines"],
      playStoreUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "TaskMaster",
      description: "A productivity app with smart task management, team collaboration, and progress tracking features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "MVVM", "Firebase", "Material Design", "Notifications"],
      playStoreUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "WeatherWise",
      description: "Beautiful weather app with location-based forecasts, interactive maps, and personalized weather alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["Java", "Retrofit", "Location Services", "Custom Views", "Dark Mode"],
      playStoreUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "FoodieHub",
      description: "Social food discovery app connecting food lovers with local restaurants and recipes.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "Clean Architecture", "GraphQL", "Image Loading", "Social Features"],
      playStoreUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "FitnessCoach",
      description: "AI-powered fitness companion with workout plans, progress tracking, and health analytics.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "ML Kit", "Health Connect", "Charts", "Wear OS"],
      playStoreUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "ShopSmart",
      description: "E-commerce app with AR product visualization, secure payments, and personalized recommendations.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "ARCore", "Payment Gateway", "Push Notifications", "Analytics"],
      playStoreUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of Android applications that demonstrate technical excellence and user-centered design
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-yellow-500 text-yellow-900 border-0">
                  Featured
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800">{project.title}</CardTitle>
                <CardDescription className="text-slate-600 text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                    <Code className="w-4 h-4 mr-2" />
                    Play Store
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-800">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-slate-800">{project.title}</CardTitle>
                  <CardDescription className="text-slate-600 text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 text-xs">
                      View App
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSectionOld;
