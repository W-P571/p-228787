
import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { motion, AnimatePresence } from "framer-motion";

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visitCount, setVisitCount] = useState(0);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  
  useEffect(() => {
    // Add a small delay to ensure smooth animation on page load
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Check visit count from localStorage
    const storedVisitCount = localStorage.getItem('visitCount');
    const newVisitCount = storedVisitCount ? parseInt(storedVisitCount) + 1 : 1;
    setVisitCount(newVisitCount);
    localStorage.setItem('visitCount', newVisitCount.toString());
    
    // Show welcome back message for returning visitors
    if (newVisitCount > 1 && newVisitCount < 5) {
      setShowWelcomeMessage(true);
      const welcomeTimer = setTimeout(() => {
        setShowWelcomeMessage(false);
      }, 5000);
      return () => {
        clearTimeout(timer);
        clearTimeout(welcomeTimer);
      };
    }
    
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
        
        {/* Welcome back message for returning visitors */}
        <AnimatePresence>
          {showWelcomeMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-card border border-primary/20 shadow-lg rounded-lg px-6 py-3 text-center"
            >
              <h3 className="font-medium text-foreground">
                {visitCount === 2 ? "Welcome back!" : `Great to see you again! Visit #${visitCount}`}
              </h3>
              <p className="text-sm text-muted-foreground">
                {visitCount === 2 
                  ? "We've saved your preferences from your last visit."
                  : "Your favorite items are ready for you to explore."}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        
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
