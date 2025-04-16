
import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ChevronRight, GiftIcon, Shield, Truck } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-4 pb-16">
      {/* Promo Banner */}
      <div className="bg-mbegu-primary text-mbegu-dark px-4 py-2 rounded-md text-center font-medium text-sm mb-10 shadow-lg shadow-mbegu-primary/20 max-w-3xl mx-auto">
        Earn Loyalty Points! Refer a friend and get 10% off your next order.
      </div>

      {/* Main Hero Content */}
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 animate-fade-in">
            <Badge className="bg-mbegu-primary/20 text-mbegu-primary hover:bg-mbegu-primary/30 mb-2">
              Rainy Season Special
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              Preorder Healthy <span className="text-mbegu-primary">HYBRID</span> Seedlings
            </h1>
            
            <p className="text-lg text-white/80 max-w-2xl mx-auto lg:mx-0">
              Plant Now, Harvest Big! Rains have started—don't wait! Preorder premium seedlings today and gift some to your neighbors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <Button size="lg" className="bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium">
                Preorder Now
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <GiftIcon className="mr-2 h-4 w-4" />
                Gift Seedlings
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-square bg-gradient-to-br from-mbegu-gray to-mbegu-dark/30 rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                alt="Healthy seedlings" 
                className="w-full h-full object-cover opacity-80 mix-blend-overlay"
              />
            </div>
            
            {/* Floating badges */}
            <Card className="absolute -bottom-5 -left-5 md:-left-10 bg-mbegu-dark/80 backdrop-blur-md border-white/10 shadow-xl w-40">
              <CardContent className="flex flex-col items-center p-4">
                <Shield className="h-8 w-8 text-mbegu-primary mb-2" />
                <p className="text-white text-center text-sm font-medium">100% Quality Guarantee</p>
              </CardContent>
            </Card>
            
            <Card className="absolute -bottom-5 -right-5 md:-right-10 bg-mbegu-dark/80 backdrop-blur-md border-white/10 shadow-xl w-40">
              <CardContent className="flex flex-col items-center p-4">
                <Truck className="h-8 w-8 text-mbegu-primary mb-2" />
                <p className="text-white text-center text-sm font-medium">Nationwide Delivery</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
