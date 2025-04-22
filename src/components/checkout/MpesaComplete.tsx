
import React from "react";
import { Button } from "../ui/button";
import { CheckCircle } from "lucide-react";

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
}) => (
  <div className="p-8 text-center">
    <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
      <CheckCircle className="h-10 w-10 text-green-400" />
    </div>
    <h3 className="text-white text-xl font-medium mb-2">Payment Successful!</h3>
    <p className="text-white/70 mb-6">
      Your order has been placed successfully and will be processed shortly.
    </p>
    <div className="bg-white/5 p-4 rounded-lg mb-4">
      <p className="text-white/70 text-sm">Order Tracking Details:</p>
      <p className="text-white font-medium">Tracking ID: {trackingId}</p>
      <p className="text-white/60 text-xs mt-1">Order ID: {orderId}</p>
      <p className="text-white/60 text-xs mt-1">M-Pesa Transaction ID: MPE-{Math.floor(Math.random() * 1000000)}</p>
    </div>
    <div className="flex flex-col gap-3">
      <Button
        className="bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium"
        onClick={onViewReceipt}
      >
        View Receipt
      </Button>
      <Button
        variant="outline"
        className="border-white/10 text-white hover:bg-white/10 font-medium"
        onClick={onContinueShopping}
      >
        Continue Shopping
      </Button>
    </div>
  </div>
);
