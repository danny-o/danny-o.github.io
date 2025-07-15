
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ["Kotlin", "Java", "Jetpack Compose", "XML", "Coroutines", "RxJava"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Architecture & Patterns",
      skills: ["MVVM", "MVP", "Clean Architecture", "Repository Pattern", "Dependency Injection", "Modular Architecture"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Tools & Libraries",
      skills: ["Android Studio", "Retrofit", "Room", "Hilt/Dagger", "Glide/Coil", "Material Design"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Testing & Quality",
      skills: ["Unit Testing", "UI Testing", "Espresso", "Mockito", "JUnit", "Firebase Test Lab"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Deployment & DevOps",
      skills: ["Google Play Console", "Firebase", "CI/CD", "Git", "Gradle", "ProGuard/R8"],
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Additional Skills",
      skills: ["REST APIs", "GraphQL", "SQLite", "Firebase", "Push Notifications", "Payment Integration"],
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building world-class Android applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <CardTitle className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors duration-200 text-sm py-1 px-3"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
