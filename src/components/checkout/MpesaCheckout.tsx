import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Phone, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { generateTrackingId, sendOrderNotification } from "@/services/NotificationService";
import { OrderReceipt } from "./OrderReceipt";
import { MpesaDetailsForm } from "./MpesaDetailsForm";
import { MpesaProcessing } from "./MpesaProcessing";
import { MpesaOtpConfirmation } from "./MpesaOtpConfirmation";
import { MpesaComplete } from "./MpesaComplete";
import { OrderSummary } from "./OrderSummary";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface MpesaCheckoutProps {
  cartItems: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  onBack: () => void;
}

export const MpesaCheckout: React.FC<MpesaCheckoutProps> = ({
  cartItems,
  subtotal,
  deliveryFee,
  total,
  onBack
}) => {
  const [phoneNumber, setPhoneNumber] = useState("07");
  const [paymentStep, setPaymentStep] = useState<"details" | "processing" | "confirmation" | "complete" | "receipt">("details");
  const [otpValue, setOtpValue] = useState("");
  const [trackingId, setTrackingId] = useState("");
  const [orderId, setOrderId] = useState("");
  const { toast } = useToast();
  
  const handleInitiatePayment = () => {
    if (phoneNumber.length < 10) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid phone number",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    setPaymentStep("processing");
    
    setTimeout(() => {
      setPaymentStep("confirmation");
    }, 2000);
  };
  
  const handleConfirmPayment = () => {
    if (otpValue.length < 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a valid OTP code",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    setPaymentStep("complete");
    
    const newTrackingId = generateTrackingId();
    const newOrderId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    
    setTrackingId(newTrackingId);
    setOrderId(newOrderId);
    
    sendOrderNotification({
      orderId: newOrderId,
      customerName: "Customer",
      phoneNumber: phoneNumber,
      totalAmount: total,
      trackingId: newTrackingId,
      items: cartItems.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price
      })),
      deliveryAddress: "Customer Address (will be collected)",
      deliveryDate: "Within 3-5 business days"
    }, ["sms"]).then(success => {
      if (success) {
        console.log("Notification sent successfully");
      } else {
        console.error("Failed to send notification");
      }
    });
    
    toast({
      title: "Payment Successful",
      description: "Your order has been placed successfully",
      duration: 3000,
    });
  };

  const handleViewReceipt = () => {
    setPaymentStep("receipt");
  };
  
  const handleContinueShopping = () => {
    window.location.href = "/";
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
      <div className="md:col-span-3">
        <div className="bg-mbegu-card border-white/10 rounded-lg">
          <div className="p-6">
            {paymentStep === "details" && (
              <MpesaDetailsForm
                phoneNumber={phoneNumber}
                onPhoneNumberChange={setPhoneNumber}
                onInitiatePayment={handleInitiatePayment}
                onBack={onBack}
                total={total}
              />
            )}

            {paymentStep === "processing" && (
              <MpesaProcessing phoneNumber={phoneNumber} />
            )}

            {paymentStep === "confirmation" && (
              <MpesaOtpConfirmation
                otpValue={otpValue}
                onOtpChange={setOtpValue}
                onConfirmPayment={handleConfirmPayment}
                phoneNumber={phoneNumber}
              />
            )}

            {paymentStep === "complete" && (
              <MpesaComplete
                trackingId={trackingId}
                orderId={orderId}
                onViewReceipt={handleViewReceipt}
                onContinueShopping={handleContinueShopping}
              />
            )}

            {paymentStep === "receipt" && (
              <OrderReceipt 
                order={{
                  orderId,
                  trackingId,
                  customerName: "Customer",
                  phoneNumber,
                  totalAmount: total,
                  items: cartItems.map(item => ({
                    name: item.name,
                    quantity: item.quantity,
                    price: item.price
                  })),
                  deliveryAddress: "Customer Address (will be collected)",
                  deliveryDate: "Within 3-5 business days"
                }}
                onClose={handleContinueShopping}
              />
            )}
          </div>
        </div>
      </div>
      
      <div className="md:col-span-2">
        <OrderSummary
          cartItems={cartItems}
          subtotal={subtotal}
          deliveryFee={deliveryFee}
          total={total}
        />
      </div>
    </div>
  );
};
