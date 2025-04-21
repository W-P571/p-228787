
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Phone, ArrowLeft } from "lucide-react";

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
}) => (
  <div className="space-y-4">
    <div className="bg-mbegu-primary/10 p-4 rounded-lg border border-mbegu-primary/20">
      <div className="flex items-center mb-2">
        <Phone className="h-5 w-5 text-mbegu-primary mr-2" />
        <h3 className="text-white font-medium">M-Pesa Express</h3>
      </div>
      <p className="text-white/70 text-sm">
        Enter your M-Pesa registered phone number to receive a payment prompt.
      </p>
    </div>

    <div className="space-y-2">
      <Label htmlFor="phone" className="text-white">Phone Number</Label>
      <Input
        id="phone"
        placeholder="07XX XXX XXX"
        className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white"
        value={phoneNumber}
        onChange={e => onPhoneNumberChange(e.target.value)}
      />
      <p className="text-white/60 text-xs">
        Example: 0712345678 (without country code)
      </p>
    </div>

    <Button
      className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium"
      onClick={onInitiatePayment}
    >
      Pay KES {total} with M-Pesa
    </Button>

    <Button
      variant="outline"
      className="w-full border-white/10 text-white hover:bg-white/10 font-medium"
      onClick={onBack}
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      Back to Cart
    </Button>
  </div>
);
