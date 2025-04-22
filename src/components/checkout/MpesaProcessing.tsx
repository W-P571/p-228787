
import React from "react";
import { Loader2 } from "lucide-react";

interface MpesaProcessingProps {
  phoneNumber: string;
}

export const MpesaProcessing: React.FC<MpesaProcessingProps> = ({ phoneNumber }) => (
  <div className="p-8 text-center">
    <Loader2 className="h-12 w-12 text-mbegu-primary mx-auto mb-4 animate-spin" />
    <h3 className="text-white text-xl font-medium mb-2">Processing Payment</h3>
    <p className="text-white/70 mb-4">
      We're sending an M-Pesa payment request to {phoneNumber}. 
      Please check your phone.
    </p>
    <p className="text-white/60 text-sm">
      Do not close this window or refresh the page.
    </p>
  </div>
);
