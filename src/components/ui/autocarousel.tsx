import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";


export const AutoCarousel = ({ images, projectTitle }: { images: string[]; projectTitle: string }) => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!embla) return;

    const interval = setInterval(() => {
      if (embla.canScrollNext()) {
        embla.scrollNext();
      } else {
        embla.scrollTo(0); // restart
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [embla]);

  return (
    <div className="w-full md:w-1/2 rounded-xl relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((screen, index) => (
            <div key={index} className="min-w-full flex justify-center items-start p-5 mb-5">
              <img
                src={screen}
                alt={`${projectTitle} screen ${index + 1}`}
                className="w-60 object-contain self-start"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => embla && embla.scrollPrev()}
        className="absolute -left-7 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-slate-800 rounded-full shadow p-2 transition"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={() => embla && embla.scrollNext()}
        className="absolute -right-7 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-slate-800 rounded-full shadow p-2 transition"
      >
        <ChevronRight className="w-5 h-5" />
      </button>


      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {images.map((_, dotIndex) => (
            <div key={dotIndex} className="w-2 h-2 bg-cyan-400/50 rounded-full"></div>
          ))}
        </div>
      </div>
    </div>
  );
};



