
import React, { useState, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Play, Image as ImageIcon, Video, Info, Maximize, X, MapPin, ChevronLeft, ChevronRight, PanelRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "../ui/badge";

interface Hotspot {
  x: number;
  y: number;
  title: string;
  description: string;
}

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc?: string;
  videoSrc?: string;
  hotspots?: Hotspot[];
  detailedDescription?: string;
}

const farmFeatures: Feature[] = [
  {
    id: 1,
    title: "Modern Greenhouses",
    description: "Climate-controlled environments for optimal seedling growth.",
    icon: <ImageIcon className="h-6 w-6 text-primary" />,
    imageSrc:
      "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    hotspots: [
      {
        x: 20,
        y: 30,
        title: "Temperature Control",
        description: "Advanced system maintaining optimal growth conditions 24/7"
      },
      {
        x: 70,
        y: 50,
        title: "Irrigation System",
        description: "Automated drip irrigation delivering precise water amounts"
      }
    ],
    detailedDescription: "Our state-of-the-art greenhouses utilize advanced climate control systems to maintain optimal temperature, humidity, and light levels throughout the year. The structures are built with durable materials designed to withstand various weather conditions while maximizing natural light penetration. Each greenhouse features automated irrigation, ventilation, and monitoring systems to ensure ideal growing conditions."
  },
  {
    id: 2,
    title: "Water Reservoir",
    description: "Sustainable water management for year-round irrigation.",
    icon: <ImageIcon className="h-6 w-6 text-primary" />,
    imageSrc:
      "https://images.unsplash.com/photo-1603994236402-89df2b9341a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    hotspots: [
      {
        x: 45,
        y: 65,
        title: "Filtration System",
        description: "Multi-stage filtration ensuring clean water for all plants"
      }
    ],
    detailedDescription: "Our water reservoir system collects and stores rainwater, reducing reliance on municipal sources. The water undergoes multi-stage filtration and treatment before distribution to our seedlings. During dry seasons, the reservoir ensures a consistent water supply, while the sustainable design minimizes environmental impact and reduces operating costs."
  },
  {
    id: 3,
    title: "Seedling Nursery",
    description: "Purpose-built facilities for nurturing healthy seedlings.",
    icon: <Video className="h-7 w-7 text-primary" />,
    imageSrc:
      "https://images.unsplash.com/photo-1590599145006-5136937ecf37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    videoSrc:
      "https://www.w3schools.com/html/mov_bbb.mp4",
    hotspots: [
      {
        x: 30,
        y: 40,
        title: "Germination Area",
        description: "Controlled environment for optimal seed germination"
      },
      {
        x: 70,
        y: 30,
        title: "Growth Monitoring",
        description: "Real-time tracking of seedling development stages"
      }
    ],
    detailedDescription: "The seedling nursery is the heart of our farm, where seeds transform into vibrant, healthy seedlings. The nursery features specialized germination chambers, growth areas with adjustable lighting, and automated nutrient delivery systems. Our skilled horticulturists monitor each batch closely, ensuring proper development at every stage. The facility is designed to prevent cross-contamination and protect young plants from pests and diseases."
  }
];

export const VirtualTour: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState<Feature | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showHotspots, setShowHotspots] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const openMedia = (feature: Feature) => {
    setActiveFeature(feature);
    if (feature.videoSrc) {
      setActiveVideo(feature.videoSrc);
    } else {
      setActiveVideo(null);
    }
    setModalOpen(true);
    setShowHotspots(false);
    setActiveHotspot(null);
  };

  const closeModal = () => {
    setActiveFeature(null);
    setActiveVideo(null);
    setModalOpen(false);
    setIsFullscreen(false);
    setShowDetails(false);
    setShowHotspots(false);
    setActiveHotspot(null);
  };

  const toggleFullscreen = () => {
    if (!modalRef.current) return;
    
    if (!document.fullscreenElement) {
      modalRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const toggleHotspots = () => {
    setShowHotspots(!showHotspots);
    if (showHotspots) {
      setActiveHotspot(null);
    }
  };

  // Animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const detailsVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      x: '100%', 
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const hotspotVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: (i: number) => ({ 
      scale: 1, 
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    }),
    hover: { 
      scale: 1.2,
      transition: {
        duration: 0.2,
        ease: "easeOut",
        yoyo: Infinity
      }
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
          >
            Virtual Farm Tour
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Explore our modern farm – see the greenhouses, water reservoirs, and seedling nursery with immersive images and video.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Carousel ref={carouselRef} className="relative rounded-xl overflow-hidden shadow-xl">
              <CarouselContent>
                {farmFeatures.map((feature, idx) => (
                  <CarouselItem key={feature.id}>
                    <Card className="bg-card border-0 overflow-hidden shadow-2xl">
                      <div className="h-[400px] relative group">
                        {feature.imageSrc && (
                          <img
                            src={feature.imageSrc}
                            alt={feature.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        )}
                        <div 
                          className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 flex flex-col justify-between p-6"
                        >
                          <div className="flex items-center gap-2 z-10">
                            <Badge className="bg-primary text-primary-foreground">
                              Tour Stop {idx + 1}
                            </Badge>
                          </div>
                          
                          <div>
                            <h3 className="text-white text-3xl font-display font-bold mb-2 drop-shadow-md">
                              {feature.title}
                            </h3>
                            <p className="text-white/90 text-lg max-w-lg drop-shadow">
                              {feature.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-3 mt-4">
                              <Button 
                                onClick={() => openMedia(feature)}
                                className="bg-primary text-primary-foreground hover:bg-primary/90"
                              >
                                {feature.videoSrc ? (
                                  <>
                                    <Play className="h-5 w-5 mr-2" />
                                    Watch Video
                                  </>
                                ) : (
                                  <>
                                    <Maximize className="h-5 w-5 mr-2" />
                                    View Details
                                  </>
                                )}
                              </Button>
                              
                              {feature.hotspots && feature.hotspots.length > 0 && (
                                <Button 
                                  variant="outline" 
                                  className="bg-white/20 backdrop-blur-sm border-white/20 text-white hover:bg-white/30"
                                  onClick={() => {
                                    openMedia(feature);
                                    setTimeout(() => setShowHotspots(true), 500);
                                  }}
                                >
                                  <MapPin className="h-5 w-5 mr-2" />
                                  Explore Hotspots
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <div className="hidden sm:block">
                <CarouselPrevious className="left-4 bg-white/30 backdrop-blur-sm border-white/10 text-white hover:bg-white/50 hover:text-white" />
                <CarouselNext className="right-4 bg-white/30 backdrop-blur-sm border-white/10 text-white hover:bg-white/50 hover:text-white" />
              </div>
              
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {farmFeatures.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === 0 ? "bg-white w-6" : "bg-white/50"
                    }`}
                    onClick={() => {
                      if (carouselRef.current) {
                        const scrollableElement = carouselRef.current.querySelector('[role="region"]');
                        if (scrollableElement) {
                          const itemWidth = scrollableElement.clientWidth;
                          scrollableElement.scrollTo({
                            left: index * itemWidth,
                            behavior: 'smooth'
                          });
                        }
                      }
                    }}
                  />
                ))}
              </div>
            </Carousel>
          </motion.div>
        </div>

        <AnimatePresence>
          {modalOpen && activeFeature && (
            <motion.div 
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0 bg-black/80"
              onClick={closeModal}
            >
              <motion.div 
                ref={modalRef}
                className={`relative max-w-5xl w-full bg-card rounded-lg shadow-2xl ${isFullscreen ? 'h-screen' : 'max-h-[90vh]'} overflow-hidden`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute top-3 right-3 z-10 flex space-x-2">
                  {!activeVideo && activeFeature.hotspots && activeFeature.hotspots.length > 0 && (
                    <Button
                      className="bg-background/30 backdrop-blur-sm border-0 text-white hover:bg-background/50 rounded-full h-10 w-10 p-0"
                      size="icon"
                      onClick={toggleHotspots}
                    >
                      <MapPin className="h-5 w-5" />
                    </Button>
                  )}
                  
                  <Button
                    className="bg-background/30 backdrop-blur-sm border-0 text-white hover:bg-background/50 rounded-full h-10 w-10 p-0"
                    size="icon"
                    onClick={toggleDetails}
                  >
                    <Info className="h-5 w-5" />
                  </Button>
                  
                  <Button
                    className="bg-background/30 backdrop-blur-sm border-0 text-white hover:bg-background/50 rounded-full h-10 w-10 p-0"
                    size="icon"
                    onClick={toggleFullscreen}
                  >
                    <Maximize className="h-5 w-5" />
                  </Button>
                  
                  <Button
                    className="bg-background/30 backdrop-blur-sm border-0 text-white hover:bg-background/50 rounded-full h-10 w-10 p-0"
                    size="icon"
                    onClick={closeModal}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="flex h-full">
                  <div className={`relative ${showDetails ? 'w-3/5' : 'w-full'} h-full transition-all duration-300`}>
                    {activeVideo ? (
                      <video
                        src={activeVideo}
                        controls
                        autoPlay
                        className="w-full h-full object-contain bg-black"
                      />
                    ) : (
                      <div className="relative h-full">
                        <img 
                          src={activeFeature.imageSrc} 
                          alt={activeFeature.title} 
                          className="w-full h-full object-cover" 
                        />
                        
                        {showHotspots && activeFeature.hotspots && (
                          <div className="absolute inset-0">
                            {activeFeature.hotspots.map((hotspot, index) => (
                              <motion.button
                                key={index}
                                initial="initial"
                                animate="animate"
                                whileHover="hover"
                                custom={index}
                                variants={hotspotVariants}
                                className="absolute bg-primary rounded-full w-6 h-6 flex items-center justify-center cursor-pointer"
                                style={{ 
                                  left: `${hotspot.x}%`, 
                                  top: `${hotspot.y}%`,
                                  transform: 'translate(-50%, -50%)'
                                }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveHotspot(activeHotspot === hotspot ? null : hotspot);
                                }}
                              >
                                <span className="text-white font-bold">{index + 1}</span>
                                <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></span>
                              </motion.button>
                            ))}
                            
                            {activeHotspot && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute left-1/2 bottom-6 transform -translate-x-1/2 bg-background/80 backdrop-blur-md p-4 rounded-lg shadow-lg max-w-md"
                              >
                                <h4 className="text-lg font-medium mb-1 text-foreground">
                                  {activeHotspot.title}
                                </h4>
                                <p className="text-muted-foreground text-sm">
                                  {activeHotspot.description}
                                </p>
                              </motion.div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-white text-2xl font-display font-bold">
                        {activeFeature.title}
                      </h3>
                      <p className="text-white/80">
                        {activeFeature.description}
                      </p>
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {showDetails && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={detailsVariants}
                        className="w-2/5 bg-card border-l border-border p-6 overflow-y-auto"
                      >
                        <div className="mb-4 pb-4 border-b border-border">
                          <h3 className="text-xl font-display font-bold text-foreground mb-2">
                            {activeFeature.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {activeFeature.detailedDescription}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-medium mb-3">Key Features</h4>
                          <ul className="space-y-3">
                            {activeFeature.hotspots?.map((hotspot, i) => (
                              <li key={i} className="flex">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3">
                                  {i + 1}
                                </div>
                                <div>
                                  <h5 className="font-medium text-foreground">{hotspot.title}</h5>
                                  <p className="text-sm text-muted-foreground">{hotspot.description}</p>
                                </div>
                              </li>
                            ))}
                            
                            {(!activeFeature.hotspots || activeFeature.hotspots.length === 0) && (
                              <li className="text-muted-foreground text-sm italic">
                                Detailed information being updated. Check back soon for more insights about this area.
                              </li>
                            )}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="text-center mt-12">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
            Schedule a Farm Visit
          </Button>
        </div>
      </div>
    </section>
  );
};
