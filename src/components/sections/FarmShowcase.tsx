
import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Leaf, Droplets, PanelTop } from "lucide-react";

export const FarmShowcase: React.FC = () => {
  // Farm features to showcase
  const farmFeatures = [
    {
      title: "Modern Greenhouses",
      description: "Climate-controlled environments for optimal seedling growth",
      icon: <PanelTop className="h-6 w-6 text-mbegu-primary" />,
      imageSrc: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Water Reservoir",
      description: "Sustainable water management for year-round irrigation",
      icon: <Droplets className="h-6 w-6 text-mbegu-primary" />,
      imageSrc: "https://images.unsplash.com/photo-1603994236402-89df2b9341a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Seedling Nursery",
      description: "Purpose-built facilities for nurturing healthy seedlings",
      icon: <Leaf className="h-6 w-6 text-mbegu-primary" />,
      imageSrc: "https://images.unsplash.com/photo-1590599145006-5136937ecf37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-mbegu-dark to-mbegu-gray/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Our Farm Facilities
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Take a virtual tour of our state-of-the-art farm where we grow high-quality seedlings using sustainable farming practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {farmFeatures.map((feature, index) => (
            <Card key={index} className="bg-mbegu-card border-white/10 overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={feature.imageSrc} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mbegu-dark/90 to-transparent flex items-end p-4">
                  <div className="flex items-center">
                    {feature.icon}
                    <h3 className="text-white font-medium ml-2">{feature.title}</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-white/70 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium">
            Schedule a Farm Visit
          </Button>
        </div>
      </div>
    </section>
  );
};
