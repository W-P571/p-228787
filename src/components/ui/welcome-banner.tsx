
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sprout } from "lucide-react";
import { Button } from "./button";

interface WelcomeBannerProps {
  userName?: string;
  onDismiss?: () => void;
}

export const WelcomeBanner: React.FC<WelcomeBannerProps> = ({
  userName,
  onDismiss,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);
  
  const welcomeMessages = [
    "Welcome to Mbegu! Let's grow something amazing together.",
    "Discover premium seeds that thrive in any environment.",
    "Join our community of passionate growers and innovators.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % welcomeMessages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    if (onDismiss) onDismiss();
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="relative px-4 py-3 mb-6 rounded-lg border border-primary/20 bg-primary/5 text-foreground"
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 h-6 w-6 rounded-full opacity-70 hover:opacity-100"
          onClick={handleDismiss}
        >
          <X className="h-4 w-4" />
        </Button>
        
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-secondary p-0.5 mr-3 flex-shrink-0">
            <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
              <Sprout className="h-5 w-5 text-primary" />
            </div>
          </div>
          
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={messageIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-medium">
                  {userName ? `Hello ${userName}! ` : ''}
                  {welcomeMessages[messageIndex]}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Explore our catalog or check out your personalized recommendations
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
