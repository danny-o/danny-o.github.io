
import { Card, CardContent } from "@/components/ui/card";
import {
  MonitorSmartphone, Bug,
  Building2,
  Code2,
  Rocket,
  Users
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AboutSection = () => {

  const strengths = [
    { label: "Building sleek, responsive and modern UI", icon: <MonitorSmartphone className="text-blue-600 w-7 h-7 mt-0.5" /> },
    { label: "Application design and architecture planning", icon: <Building2 className="text-blue-600 w-7 h-7 mt-0.5" /> },
    { label: "Debugging and testing", icon: <Bug className="text-blue-600 w-7 h-7 mt-0.5" /> },
    { label: "Clean, maintainable and testable code", icon: <Code2 className="text-blue-600 w-7 h-7 mt-0.5" /> },
    // { label: "Fast learner & adaptive to new tech", icon: <Rocket className="text-cyan-500 w-7 h-7 mt-0.5" /> },
    { label: "Effective communicator & collaborative team player", icon: <Users className="text-blue-600 w-7 h-7 mt-0.5" /> }
  ];
  return (
    <section id="about" className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-6">
              <div className="flex items-center space-x-6 mb-8">
                <Avatar className="w-32 h-32 border-4 border-gradient-to-r from-cyan-400 to-purple-400">
                  <AvatarImage
                    src="src/components/assets/pp.png"
                    alt="Professional headshot"
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-2xl font-bold">
                    AD
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-2xl font-bold text-white">My Journey</h3>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed">
                My years of mobile developtment have seen me scale from building lean MVPs to architecting robust, 
                production-ready applications used at scale .My expertise spans Kotlin, Java, Jetpack Compose,
                 and modern Android architecture patterns.
              </p>
              <p className="text-slate-600 leading-relaxed">
                I'm passionate about clean code, performance optimization, and creating intuitive
                user interfaces that provide seamless mobile experiences. Always staying current
                with the latest Android technologies and best practices.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Kotlin", "Java", "Jetpack Compose", "MVVM", "Clean Architecture", "Firebase", "REST APIs"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-400/30 rounded-full text-cyan-800 text-sm font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          <div className="bg-gradient-to-br from-slate-100 to-blue-100 rounded-2xl p-8 h-full flex justify-center">
         
          <div className="flex flex-col justify-between h-full w-full">
              {/* <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">My Strengths</h3> */}

              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-purple-700 bg-clip-text text-transparent text-center">
                My Strengths
              </h3>

              <ul className="space-y-6">
                {strengths.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-900 font-bold ">
                    {item.icon}
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-600 to-slate-600 bg-clip-text text-transparent  mb-2">Let's bring your Android app idea to life!</h3>
              
              </div>

             
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
