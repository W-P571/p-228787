
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Phone, ArrowLeft, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface MpesaDetailsFormProps {
  phoneNumber: string;
  onPhoneNumberChange: (value: string) => void;
  onInitiatePayment: () => void;
  onBack: () => void;
  total: number;
}

export const MpesaDetailsForm: React.FC<MpesaDetailsFormProps> = ({
  phoneNumber,
  onPhoneNumberChange,
  onInitiatePayment,
  onBack,
  total,
}) => {
  const [isValid, setIsValid] = useState(false);
  
  const validatePhone = (value: string) => {
    // Simple Kenyan phone number validation (starts with 07 or 01 and has 10 digits)
    const isValidPhone = /^(07|01)\d{8}$/.test(value);
    setIsValid(isValidPhone);
    onPhoneNumberChange(value);
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-1 rounded-lg">
        <div className="bg-card p-4 rounded-md border border-border">
          <div className="flex items-center mb-2">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
              <Phone className="h-4 w-4 text-primary" />
            </div>
            <h3 className="text-foreground font-medium text-lg">M-Pesa Express</h3>
          </div>
          <p className="text-foreground/70 text-sm">
            Enter your M-Pesa registered phone number to receive a payment prompt instantly.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
          <div className="relative">
            <Input
              id="phone"
              placeholder="07XX XXX XXX"
              className="pl-4 pr-10 bg-muted/50 border-border text-foreground"
              value={phoneNumber}
              onChange={e => validatePhone(e.target.value)}
            />
            {isValid && (
              <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary" />
            )}
          </div>
          <p className="text-foreground/60 text-xs flex items-center">
            <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs mr-2">Example</span>
            0712345678 (without country code)
          </p>
        </div>

        <div className="pt-4 mt-2 border-t border-border">
          <div className="flex justify-between items-center text-sm mb-3">
            <span className="text-foreground/70">Amount to Pay</span>
            <span className="font-medium text-primary">KES {total.toLocaleString()}</span>
          </div>
          
          <Button
            className={`w-full font-medium group transition-all duration-300 ${
              isValid 
                ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                : "bg-muted text-muted-foreground cursor-not-allowed"
            }`}
            onClick={onInitiatePayment}
            disabled={!isValid}
          >
            {isValid ? (
              <>
                Pay KES {total.toLocaleString()} with M-Pesa
                <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              </>
            ) : (
              "Enter a valid phone number"
            )}
          </Button>
        </div>

        <Button
          variant="ghost"
          className="w-full border-border text-foreground hover:bg-foreground/10 font-medium"
          onClick={onBack}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Cart
        </Button>
      </div>
    </motion.div>
  );
};
