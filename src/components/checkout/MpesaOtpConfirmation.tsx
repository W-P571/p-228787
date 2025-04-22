
import React from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { AlertCircle } from "lucide-react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

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
}) => (
  <div className="space-y-4">
    <div className="bg-amber-400/10 p-4 rounded-lg border border-amber-400/20">
      <div className="flex items-center mb-2">
        <AlertCircle className="h-5 w-5 text-amber-400 mr-2" />
        <h3 className="text-white font-medium">Enter OTP Code</h3>
      </div>
      <p className="text-white/70 text-sm">
        A one-time password (OTP) has been sent to {phoneNumber}. 
        Please enter it below to complete your payment.
      </p>
    </div>

    <div className="space-y-2">
      <Label htmlFor="otp" className="text-white">OTP Code</Label>
      <div className="flex justify-center py-4">
        <InputOTP
          maxLength={6}
          value={otpValue}
          onChange={onOtpChange}
          render={({ slots }) => (
            <InputOTPGroup>
              {slots.map((slot, index) => (
                <InputOTPSlot
                  key={index}
                  index={index}
                  className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white"
                />
              ))}
            </InputOTPGroup>
          )}
        />
      </div>
    </div>

    <Button
      className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium"
      onClick={onConfirmPayment}
    >
      Confirm Payment
    </Button>
  </div>
);
