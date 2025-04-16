
import React from "react";
import { Card, CardContent } from "../ui/card";
import { MapPin, Clock, Phone } from "lucide-react";

export const Location: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-mbegu-gray/30">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Our Location
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Visit our farm to see our seedlings in person
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <Card className="bg-mbegu-card border-white/10 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video w-full bg-mbegu-gray/50 relative">
                  {/* This would be replaced with an actual map */}
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    Interactive Map - Kabianga, 20-Acres Farm
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-display font-semibold text-white mb-6">
              Visit Our Farm
            </h3>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-mbegu-primary/20 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-mbegu-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Farm Location</h4>
                  <p className="text-white/70">Kabianga, 20-Acres Farm</p>
                  <p className="text-white/70 mt-1">Coordinates: <span className="font-medium text-mbegu-primary">-0.3667, 35.2833</span></p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-mbegu-primary/20 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-mbegu-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Opening Hours</h4>
                  <p className="text-white/70">Monday - Saturday: 8AM - 5PM</p>
                  <p className="text-white/70">Sunday: Closed</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-mbegu-primary/20 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-mbegu-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Get in Touch</h4>
                  <p className="text-white/70">Call us to schedule a visit: 0721 867 944</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
