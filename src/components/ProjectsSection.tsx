
import { Card, CardContent } from "@/components/ui/card";
import { User, Code, Briefcase } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Smartphone, Github, ExternalLink } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AutoCarousel } from "./ui/autocarousel";




const ProjectsSection = () => {

  const projects = [
    {
      title: "Virtualclothier E-Commerce App",
      description: "A fully fledged e-commerce open-source app. Complete with user-authentication, product  tagging, searching, checkout and admin management. It features a clean UI and a smooth user-flow. It features clothes for demo purposes but can be used for sale of any products.\n     \n\tProgrammed in Java and follows modern android development practices.",
      image: "/assets/e-commerce-app-demo.png",
      appScreens: [
        "/assets/ecommerce_app_home.png",
        "/assets/ecommerce_app_product_detail.png",
        "/assets/ecommerce_app_checkout_product_detail_slanted.png",
        "/assets/ecommerce_app_profile.png",
        "/assets/ecommerce_app_checkout.png"
      ],
      technologies: ["Java", "MVVM", "Firebase", "Material Design", "Android Navigation", "Modern Android Development"],
      github: "#",
      demo: "https://github.com/danny-o/VirtualClothierDemo",
      featured: false,
    },
    {
      title: "Trading App",
      description: "An application that helps beginner traders kickstart their trading journey. The app automatically copies trading orders placed by select professional traders. Users are also able to set trading configurations to manage risk and can view their trading statistics to inform on their trading settings.Features an easy to use UI and a smooth user experience.",
      image: "/assets/trading-app6.png",
      appScreens: [
        "/assets/trading-app1.png",
        "/assets/trading-app2.png",
        "/assets/trading-app3.png",
        "/assets/trading-app4.png",
        "/assets/trading-app5.png"
      ],
      technologies: ["Kotlin", "Material Design", "Modern Android Development", "Firebase", "Native Java"],
      github: "#",
      demo: "https://play.google.com/store/apps/details?id=com.digitalskies.testapp",
      featured: true,
    },
    {
      title: "Drupp Ride Hailing App",
      description: "A ride-hailing app developed for Drupp Ltd Nigeria. Features ability to see nearby drivers, one-on-one communication between drivers and riders, ride  live-tracking, payment system among other features of ride-hailing apps. Easy to use and a visually appealing UI.The app  uses android and third-party APIs to be able to support these capabilities. ",
      image: "/assets/ride-hailing1.png",
      appScreens: [
        "/assets/ride-hailing1.png",
        "/assets/ride-hailing2.png",
        "/assets/ride-hailing3.png",
        "/assets/ride-hailing4.png",
        "/assets/ride-hailing5.png",
        "/assets/ride-hailing6.png",
        "/assets/ride-hailing7.png"
      ],
      technologies: ["Java", "Google Maps", "REST APIs", "Material Design", "Firebase Cloud Messaging", "Payment APIs"],
      github: "#",
      demo: "https://www.mydrupp.com/",
      featured: true,
    },
    {
      title: "Plada Inventory Management App",
      description: "An Inventory management app made for SDV ,Portugal. It features inter-shop inventory transfers, sales recording, Sample registration and periodic inventory events.\n\tThe app is data heavy and called for rigorous testing to ensure accuracy.",
      image: "/assets/inventory-app6.png",
      appScreens: [
        "/assets/inventory-app1.png",
        "/assets/inventory-app2.png",

      ],
      technologies: ["Kotlin", "Firebase", "WorkManager", "Encryption", "Room Database", "REST API", "Oauth2"],
      github: "#",
      demo: "#",
      featured: false,
    },
  ];

  const project1 = projects.filter(project => project.featured)[0]
  const project2 = projects.filter(project => project.featured)[1]

  return (
    <section id="projects" className="py-8 bg-slate-800/30">

      <div className="text-center mb-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Featured <span className="text-cyan-500 font-bold">Projects</span>
        </h2>
        <p className="text-xl text-white font-bold max-w-3xl mx-auto">
          Showcasing my expertise through real-world Android applications
        </p>
      </div>




      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl p-2 transition-all duration-300 hover:border-cyan-400/50">

          <div className="bg-gradient-to-br from-slate-700 to-slate-900/50 rounded-xl flex flex-col md:flex-row items-start  gap-8 py-4 px-4 min-h-[400px]">

            {/* Image section */}
            {/* <div className="w-full md:w-1/2 rounded-xl relative"> */}

            <div className="w-full md:w-1/2 h-full flex items-start justify-center">
              <AutoCarousel images={project1.appScreens} projectTitle={project1.title} />

            </div>
            {/* </div> */}

            {/* Content section */}
            <div className="w-full md:w-1/2 space-y-4 flex-col justify-between">

              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 pt-10 sm:pt-5 lg:pt-10">
                  {project1.title}
                </h3>
                <Smartphone className="text-cyan-400" size={20} />
              </div>


              <p className="text-gray-300 leading-relaxed">{project1.description}</p>


              <div className="space-y-4 pt-6">

                <div className="flex flex-wrap gap-2">
                  {project1.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-2">
                  {/* <Button variant="outline" size="sm" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900" asChild>
                    <a href={project1.github} className="flex items-center space-x-2">
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </Button> */}
                  <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600" asChild>
                    <a href={project1.demo} className="flex items-center space-x-2">
                      <ExternalLink size={16} />
                      <span>Link</span>
                    </a>
                  </Button>
                </div>

              </div>



            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl p-2 transition-all duration-300 hover:border-cyan-400/50">

          <div className="bg-gradient-to-br from-slate-700 to-slate-900/50 rounded-xl flex flex-col md:flex-row items-center md:items-start gap-8 py-8 px-10">



            {/* Content section */}
            <div className="w-full md:w-1/2 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 pt-10 lg:pt-10 sm:pt-5">
                  {project2.title}
                </h3>
                <Smartphone className="text-cyan-400" size={20} />
              </div>

              <p className="text-gray-300 leading-relaxed">{project2.description}</p>

              <div className="flex flex-wrap gap-2">
                {project2.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4 pt-2">
                {/* <Button variant="outline" size="sm" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900" asChild>
                  <a href={project2.github} className="flex items-center space-x-2">
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </Button> */}
                <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600" asChild>
                  <a href={project2.demo} className="flex items-center space-x-2">
                    <ExternalLink size={16} />
                    <span>Link</span>
                  </a>
                </Button>
              </div>
            </div>
            {/* Image section */}
            <div className="w-full md:w-1/2 rounded-xl relative">
              <div className="h-full flex items-center justify-center">
                <AutoCarousel images={project2.appScreens} projectTitle={project2.title} />

              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-2">
                  {project2.appScreens.map((_, dotIndex) => (
                    <div key={dotIndex} className="w-2 h-2 bg-cyan-400/50 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
          {projects.filter(project => !project.featured).map((project, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl overflow-hidden border border-slate-600/50 hover:border-cyan-400/50 transform hover:scale-[1.02] transition-all duration-300 flex flex-col ${project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
            >
              {/* App Screens Carousel for Featured Projects */}

              <div className="flex justify-center pt-2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-40 object-contained group-hover:scale-105 transition-transform duration-500 self-stretch"
                />

              </div>

              <div className="flex-1 flex flex-col">

                <div className="pt-1 pb-8 px-8">
                  <div className="flex items-center justify-center">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors self-center">
                      {project.title}
                    </h3>
                    <Smartphone className="text-cyan-400 ms-5" size={20} />
                  </div>

                  <p className="text-white leading-relaxed">
                    {project.description}
                  </p>

                </div>

              </div>

              <div className="pt-1 pb-8 px-8">

                <div className="self-stretch">

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


                    {/* <Button
                      variant="outline"
                      size="sm"
                      className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                      asChild
                      >
                      <a href={project.github} className="flex items-center space-x-2">
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                      </Button> */}



                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                      asChild
                    >
                      <a href={project.demo} className="flex items-center space-x-2">
                        <ExternalLink size={16} />
                        <span>Link</span>
                      </a>
                    </Button>
                  </div>
                </div>

              </div>



            </div>
          ))}
        </div>
      </div>

    </section>

  );
};

export default ProjectsSection;
