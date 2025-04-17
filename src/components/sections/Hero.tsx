
import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ChevronRight, Cpu, ShieldCheck, Database, BarChart2, Cloud, Sprout } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-4 pb-16">
      {/* System Status Banner */}
      <div className="bg-mbegu-primary/90 text-mbegu-dark px-4 py-2 rounded-md text-center font-medium text-sm mb-10 shadow-lg shadow-mbegu-primary/20 max-w-3xl mx-auto flex items-center justify-center">
        <Cpu className="h-4 w-4 mr-2" /> 
        MbeguOS System Status: All agricultural modules operating at optimal performance
      </div>

      {/* Main Hero Content */}
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 animate-fade-in">
            <Badge className="bg-mbegu-primary/20 text-mbegu-primary hover:bg-mbegu-primary/30 mb-2">
              AgriTech Operating System
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              The <span className="text-mbegu-primary">Operating System</span> for Modern Agriculture
            </h1>
            
            <p className="text-lg text-white/80 max-w-2xl mx-auto lg:mx-0">
              MbeguOS integrates seedling management, weather analytics, and marketplace dynamics into a unified platform for agricultural optimization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <Button size="lg" className="bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium">
                Launch Dashboard
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <Database className="mr-2 h-4 w-4" />
                System Documentation
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <Cloud className="h-5 w-5 text-mbegu-primary mr-2" />
                <span className="text-white/80 text-sm">Climate Analytics</span>
              </div>
              <div className="flex items-center">
                <BarChart2 className="h-5 w-5 text-mbegu-primary mr-2" />
                <span className="text-white/80 text-sm">Yield Optimization</span>
              </div>
              <div className="flex items-center">
                <ShieldCheck className="h-5 w-5 text-mbegu-primary mr-2" />
                <span className="text-white/80 text-sm">Crop Protection</span>
              </div>
              <div className="flex items-center">
                <Sprout className="h-5 w-5 text-mbegu-primary mr-2" />
                <span className="text-white/80 text-sm">Seedling Management</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-square bg-gradient-to-br from-mbegu-gray to-mbegu-dark/30 rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                alt="Advanced agricultural monitoring" 
                className="w-full h-full object-cover opacity-80 mix-blend-overlay"
              />
              
              {/* Technical Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-mbegu-dark/80 flex items-end">
                <div className="p-6 w-full">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-white text-sm font-mono">MbeguOS v1.2.4</div>
                    <div className="flex space-x-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
                      <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-mbegu-primary rounded-full"></div>
                  </div>
                  <div className="text-white/60 text-xs mt-1 font-mono">System resources: 75% | Network: Optimal</div>
                </div>
              </div>
            </div>
            
            {/* Floating badges */}
            <Card className="absolute -bottom-5 -left-5 md:-left-10 bg-mbegu-dark/80 backdrop-blur-md border-white/10 shadow-xl w-40">
              <CardContent className="flex flex-col items-center p-4">
                <ShieldCheck className="h-8 w-8 text-mbegu-primary mb-2" />
                <p className="text-white text-center text-sm font-medium">Secure AgriTech Infrastructure</p>
              </CardContent>
            </Card>
            
            <Card className="absolute -bottom-5 -right-5 md:-right-10 bg-mbegu-dark/80 backdrop-blur-md border-white/10 shadow-xl w-40">
              <CardContent className="flex flex-col items-center p-4">
                <Database className="h-8 w-8 text-mbegu-primary mb-2" />
                <p className="text-white text-center text-sm font-medium">Integrated Data Platform</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
