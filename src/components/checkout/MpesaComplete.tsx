
import React from "react";
import { Button } from "../ui/button";
import { CheckCircle, Download, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import confetti from 'canvas-confetti';

interface MpesaCompleteProps {
  trackingId: string;
  orderId: string;
  onViewReceipt: () => void;
  onContinueShopping: () => void;
}

export const MpesaComplete: React.FC<MpesaCompleteProps> = ({
  trackingId,
  orderId,
  onViewReceipt,
  onContinueShopping,
}) => {
  // Trigger confetti animation on component mount
  React.useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 15
      }}
      className="p-8 text-center"
    >
      <div className="mb-6">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            delay: 0.2,
            type: "spring",
            stiffness: 200,
            damping: 10
          }}
          className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto"
        >
          <CheckCircle className="h-10 w-10 text-primary-foreground" />
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h3 className="text-foreground text-2xl font-bold mb-2">Payment Successful!</h3>
        <p className="text-foreground/70 mb-6">
          Your order has been placed successfully and will be processed shortly.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="bg-gradient-to-r from-primary/10 to-secondary/10 p-1 rounded-lg mb-6"
      >
        <div className="bg-card p-4 rounded-md border border-border">
          <p className="text-foreground/70 text-sm mb-2">Order Tracking Details:</p>
          <p className="text-foreground font-medium">Tracking ID: <span className="text-primary">{trackingId}</span></p>
          <p className="text-foreground/60 text-xs mt-1">Order ID: {orderId}</p>
          <p className="text-foreground/60 text-xs mt-1">
            M-Pesa Transaction ID: MPE-{Math.floor(Math.random() * 1000000)}
          </p>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex flex-col gap-3"
      >
        <Button
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
          onClick={onViewReceipt}
        >
          <Download className="mr-2 h-4 w-4" />
          View Receipt
        </Button>
        <Button
          variant="outline"
          className="border-border text-foreground hover:bg-foreground/10 font-medium"
          onClick={onContinueShopping}
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          Continue Shopping
        </Button>
      </motion.div>
    </motion.div>
  );
};
