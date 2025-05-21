
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ChevronRight, ShieldCheck, Database, BarChart2, Cloud, Sprout, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <section className="relative pt-8 pb-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-gradient-to-r from-primary/80 to-secondary/80 p-3 rounded-xl text-center mb-12 backdrop-blur-sm shadow-lg">
          <div className="bg-background/30 rounded-lg px-4 py-2 backdrop-blur-sm flex items-center justify-center">
            <Badge className="bg-primary/20 text-primary-foreground font-medium mr-2">NEW</Badge>
            <p className="text-sm font-medium">Introducing Mbegu's AI-Powered Farming Analytics</p>
          </div>
        </div>
      </motion.div>

      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-1/2 text-center lg:text-left space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              The <span className="text-primary">Agricultural Platform</span> for the Modern Farmer
            </h1>
            
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto lg:mx-0">
              Mbegu provides integrated seedling management, analytics, and marketplace solutions to revolutionize your farming operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-foreground/10">
                <Database className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
            
            <motion.div 
              variants={container}
              initial="hidden"
              animate={loaded ? "show" : "hidden"}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              <motion.div variants={item} className="flex items-center p-2 rounded-lg hover:bg-muted transition-colors">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 mr-3">
                  <Cloud className="h-4 w-4 text-primary" />
                </div>
                <span className="text-foreground/90 text-sm">Climate Analytics</span>
              </motion.div>
              <motion.div variants={item} className="flex items-center p-2 rounded-lg hover:bg-muted transition-colors">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-secondary/10 mr-3">
                  <BarChart2 className="h-4 w-4 text-secondary" />
                </div>
                <span className="text-foreground/90 text-sm">Yield Optimization</span>
              </motion.div>
              <motion.div variants={item} className="flex items-center p-2 rounded-lg hover:bg-muted transition-colors">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 mr-3">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                </div>
                <span className="text-foreground/90 text-sm">Crop Protection</span>
              </motion.div>
              <motion.div variants={item} className="flex items-center p-2 rounded-lg hover:bg-muted transition-colors">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-secondary/10 mr-3">
                  <Sprout className="h-4 w-4 text-secondary" />
                </div>
                <span className="text-foreground/90 text-sm">Seedling Management</span>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-square relative z-10 rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-muted to-muted/30 p-1">
              <div className="w-full h-full rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                  alt="Advanced agricultural monitoring" 
                  className="w-full h-full object-cover brightness-90"
                />
              </div>
              
              {/* Interactive overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 flex items-end">
                <div className="p-6 w-full">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm font-mono text-foreground/80">Mbegu<span className="text-primary">OS</span> v1.3.5</div>
                    <div className="flex space-x-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                      <div className="h-2 w-2 bg-amber-500 rounded-full animate-pulse delay-100"></div>
                      <div className="h-2 w-2 bg-primary rounded-full animate-pulse delay-200"></div>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-primary rounded-full relative">
                      <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-primary/50 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="text-foreground/60 text-xs mt-1 font-mono flex justify-between">
                    <span>System resources: 85%</span>
                    <span>Network: Optimal</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Card className="absolute -bottom-5 -left-5 md:-left-10 bg-card/80 backdrop-blur-md border-border shadow-xl w-40 animate-float">
                <CardContent className="flex flex-col items-center p-4">
                  <ShieldCheck className="h-8 w-8 text-primary mb-2" />
                  <p className="text-center text-sm font-medium">Secure AgriTech Platform</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Card className="absolute -bottom-5 -right-5 md:-right-10 bg-card/80 backdrop-blur-md border-border shadow-xl w-40 animate-float" style={{ animationDelay: "1s" }}>
                <CardContent className="flex flex-col items-center p-4">
                  <Database className="h-8 w-8 text-secondary mb-2" />
                  <p className="text-center text-sm font-medium">Integrated Data Platform</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -z-10 inset-0 blur-2xl opacity-30">
              <div className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full bg-primary/30"></div>
              <div className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full bg-secondary/30"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
