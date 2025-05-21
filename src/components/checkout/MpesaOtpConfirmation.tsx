
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { AlertCircle } from "lucide-react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { motion } from "framer-motion";

interface MpesaOtpConfirmationProps {
  otpValue: string;
  onOtpChange: (value: string) => void;
  onConfirmPayment: () => void;
  phoneNumber: string;
}

export const MpesaOtpConfirmation: React.FC<MpesaOtpConfirmationProps> = ({
  otpValue,
  onOtpChange,
  onConfirmPayment,
  phoneNumber,
}) => {
  const [focused, setFocused] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div className="bg-amber-500/10 p-4 rounded-lg border border-amber-500/20">
        <div className="flex items-center mb-2">
          <div className="h-8 w-8 rounded-full bg-amber-500/20 flex items-center justify-center mr-3">
            <AlertCircle className="h-4 w-4 text-amber-500" />
          </div>
          <h3 className="text-foreground font-medium">OTP Verification Required</h3>
        </div>
        <p className="text-foreground/70 text-sm">
          A one-time password (OTP) has been sent to <span className="text-primary font-medium">{phoneNumber}</span>. 
          Please enter it below to complete your payment.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="otp" className="text-foreground">OTP Code</Label>
          <div 
            className={`flex justify-center py-6 px-4 rounded-lg transition ${
              focused ? "bg-muted/50 border border-primary/30" : "bg-muted/20"
            }`}
            onClick={() => document.getElementById("otp-input")?.focus()}
          >
            <InputOTP
              id="otp-input"
              maxLength={6}
              value={otpValue}
              onChange={onOtpChange}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              render={({ slots }) => (
                <InputOTPGroup className="gap-2">
                  {slots.map((slot, index) => (
                    <InputOTPSlot
                      key={index}
                      index={index}
                      className="w-10 h-12 text-lg bg-card border-border text-foreground"
                    />
                  ))}
                </InputOTPGroup>
              )}
            />
          </div>
          <p className="text-foreground/60 text-xs text-center">
            Didn't receive the code? <button className="text-primary hover:underline">Resend OTP</button>
          </p>
        </div>

        <Button
          className={`w-full font-medium ${
            otpValue.length === 6
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          }`}
          onClick={onConfirmPayment}
          disabled={otpValue.length !== 6}
        >
          {otpValue.length === 6 ? "Confirm Payment" : "Enter Complete OTP"}
        </Button>
      </div>
    </motion.div>
  );
};
