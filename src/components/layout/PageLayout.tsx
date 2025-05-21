
import React, { useState } from "react";
import { Header } from "./Header";
import { motion } from "framer-motion";

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  React.useEffect(() => {
    // Add a small delay to ensure smooth animation on page load
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 -right-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-[120px]"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute -bottom-1/4 left-0 w-1/2 h-1/2 rounded-full bg-gradient-to-tr from-secondary/20 to-accent/20 blur-[120px]"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="absolute top-1/3 left-1/3 w-1/3 h-1/3 rounded-full bg-gradient-to-r from-accent/10 to-primary/10 blur-[100px]"
        />
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <motion.main 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex-1 container mx-auto px-4 py-6 md:py-8"
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
};
