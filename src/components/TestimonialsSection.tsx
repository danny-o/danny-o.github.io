
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rui Meleiro",
      role: "IT Director",
      company: "SOCIEDADE DE DISTRIBUIÇÃO DE VESTUÁRIO, S.A.",
      content: "We have been working with Daniel for a year now and at all times the deliveries were on time and on spec. Additional milestones, revision of specifications and overall project delays on our part were always met with a great commitment. This is not the last project and will continue to look up for Daniel's availability and hard work.",
      rating: 5,
      avatar: "RM",
      link: "https://www.upwork.com/freelancers/~01b8521f4a8c4fd8f2?promobnr=1"
    },
    {
      name: "Wallexbaba",
      role: "Founder",
      company: "Drupp Ltd",
      content: "Daniel is one of the best around with Android apps. Honest and was able to take up all the pressure that my project demanded. We continue to work with him because he not only has a great attitude, but also highly competent. Thank you Njoroge!",
      rating: 5,
      avatar: "WB",
      link: "https://www.freelancer.com/u/kym101?review_context_id=28247682&review_type=project&frm=kym101&sb=t"
    },
    {
      name: "Nikhil V",
      role: "Freelancer.com client",
      company: "Freelancer.com",
      content: "Daniel did a fantastic job understanding the project and delivered the project to my expectation. He was good in communication and provided a quick turnaround time. Will hire again for future projects., highly recommended. A+++",
      rating: 5,
      avatar: "NV",
      link: "https://www.freelancer.com/u/kym101?review_context_id=29504145&review_type=project&frm=kym101&sb=t"
    },

    {
      name: "Rui Meleiro",
      role: "Upwork Client",
      company: "Upwork",
      content: "Daniel showed proficiency on the tasks at hand and brought enhancements to the project that improved it. Mastered all techniques and technology involved, meeting the deadlines even when specifications changed and additional milestones had to be added. We've made a good team effort and will be looking forward to working withe Daniel on next projects",
      rating: 5,
      avatar: "RM",
      link: "https://www.upwork.com/freelancers/~01b8521f4a8c4fd8f2?promobnr=1"
    }
  ];

  return (
    <section id="testimonials" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            What clients say about working with me on their Android projects
          </p>
        </div>

        <div className="overflow-x-auto scroll-smooth">
          <div className="flex gap-8 min-w-full px-4 my-4">
            {testimonials.map((testimonial, index) => (
              <a
                key={index}
                href={testimonial.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block flex-shrink-0 w-[350px]"
              >
                <Card className="bg-gradient-to-br from-slate-50 to-blue-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    {/* Stars */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>

                    <p className="text-slate-700 leading-relaxed mb-6 italic line-clamp-6">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800">{testimonial.name}</div>
                        <div className="text-sm text-slate-600">{testimonial.role}</div>
                        <Badge variant="outline" className="text-xs mt-1">
                          {testimonial.company.length > 25
                            ? testimonial.company.slice(0, 25) + '...'
                            : testimonial.company}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>


        {/* Stats Section */}
        {/* <div className="mt-20">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 shadow-xl">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">50+</div>
                  <div className="text-blue-100">Apps Delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">5+</div>
                  <div className="text-blue-100">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-blue-100">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-blue-100">Support Available</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;
