
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface MpesaProcessingProps {
  phoneNumber: string;
}

export const MpesaProcessing: React.FC<MpesaProcessingProps> = ({ phoneNumber }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 25;
        return newProgress <= 100 ? newProgress : 100;
      });
    }, 500);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="p-8 text-center"
    >
      <div className="h-20 w-20 mx-auto mb-6 relative">
        <svg className="h-full w-full" viewBox="0 0 100 100">
          <circle
            className="text-muted stroke-current"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r="42"
            cx="50"
            cy="50"
          />
          <circle
            className="text-primary stroke-current"
            strokeWidth="8"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="42"
            cx="50"
            cy="50"
            style={{
              strokeDasharray: 264,
              strokeDashoffset: 264 - (progress / 100) * 264
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-primary">{progress}%</span>
        </div>
      </div>
      
      <h3 className="text-foreground text-xl font-medium mb-4">Processing Your Payment</h3>
      
      <div className="max-w-xs mx-auto space-y-4">
        <p className="text-foreground/70 mb-4">
          We're sending an M-Pesa payment request to <span className="text-primary font-medium">{phoneNumber}</span>.
          Please check your phone for the STK push notification.
        </p>
        
        <div className="flex items-center justify-center space-x-2 text-foreground/40 text-sm">
          <div className="h-1.5 w-1.5 rounded-full bg-current animate-pulse"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" style={{ animationDelay: "0.2s" }}></div>
          <div className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" style={{ animationDelay: "0.4s" }}></div>
        </div>
        
        <div className="bg-muted mt-4 p-3 rounded-lg text-center text-sm text-foreground/60">
          Do not close this window or refresh the page
        </div>
      </div>
    </motion.div>
  );
};
