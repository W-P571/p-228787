
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Play, Image, Video } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc?: string;
  videoSrc?: string;
}

const farmFeatures: Feature[] = [
  {
    title: "Modern Greenhouses",
    description: "Climate-controlled environments for optimal seedling growth.",
    icon: <Image className="h-6 w-6 text-mbegu-primary" />,
    imageSrc:
      "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Water Reservoir",
    description: "Sustainable water management for year-round irrigation.",
    icon: <Image className="h-6 w-6 text-mbegu-primary" />,
    imageSrc:
      "https://images.unsplash.com/photo-1603994236402-89df2b9341a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Seedling Nursery (Video Tour)",
    description: "Purpose-built facilities for nurturing healthy seedlings.",
    icon: <Video className="h-7 w-7 text-mbegu-primary" />,
    imageSrc:
      "https://images.unsplash.com/photo-1590599145006-5136937ecf37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    videoSrc:
      "https://www.w3schools.com/html/mov_bbb.mp4" // Demo video
  }
];

export const VirtualTour: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const openVideo = (videoSrc: string) => {
    setActiveVideo(videoSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setActiveVideo(null);
    setModalOpen(false);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-mbegu-dark to-mbegu-gray/50">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Virtual Farm Tour
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Swipe or click through our modern farm – see the greenhouses, water reservoirs, and nursery with immersive images and video.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto mb-10">
          <Carousel className="relative">
            <CarouselContent>
              {farmFeatures.map((feature, idx) => (
                <CarouselItem key={idx}>
                  <Card className="bg-mbegu-card border-white/10 overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
                    <div className="h-64 relative group">
                      {feature.imageSrc && (
                        <img
                          src={feature.imageSrc}
                          alt={feature.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      )}
                      {feature.videoSrc && (
                        <button
                          title="Play video"
                          className="absolute inset-0 flex items-center justify-center bg-black/40 transition hover:bg-black/60"
                          onClick={() => openVideo(feature.videoSrc!)}
                        >
                          <Play className="h-14 w-14 text-mbegu-primary bg-white/90 rounded-full p-3 shadow-xl" />
                        </button>
                      )}
                      <div className="absolute top-0 left-0 p-4 flex items-center gap-2 z-10">
                        {feature.icon}
                        <span className="text-white font-semibold text-lg drop-shadow">{feature.title}</span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-white/90 text-base">{feature.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Modal for video pop-up */}
        {modalOpen && activeVideo && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
            <div className="relative w-full max-w-2xl mx-auto bg-mbegu-dark rounded-lg overflow-hidden animate-fade-in">
              <button
                className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-white text-mbegu-dark rounded-full p-2 shadow-lg"
                aria-label="Close video"
                onClick={closeModal}
              >
                ×
              </button>
              <video
                src={activeVideo}
                controls
                autoPlay
                className="w-full h-80 object-contain bg-black rounded-t-lg"
              />
              <div className="px-5 py-4 text-white text-lg text-center">
                Virtual tour video
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <Button className="bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium">
            Schedule a Farm Visit
          </Button>
        </div>
      </div>
    </section>
  );
};
