
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Phone, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

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
  const [paymentStep, setPaymentStep] = useState<"details" | "processing" | "confirmation" | "complete">("details");
  const [otpValue, setOtpValue] = useState("");
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
    
    // Here we would typically make the M-Pesa API call
    // For demo purposes, we'll simulate the process
    setPaymentStep("processing");
    
    // Simulate API response
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
    
    // Here we would typically validate the OTP
    // For demo purposes, we'll simulate the process
    setPaymentStep("complete");
    
    toast({
      title: "Payment Successful",
      description: "Your order has been placed successfully",
      duration: 3000,
    });
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
      <div className="md:col-span-3">
        <Card className="bg-mbegu-card border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Payment Method</CardTitle>
          </CardHeader>
          <CardContent>
            {paymentStep === "details" && (
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
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <p className="text-white/60 text-xs">
                    Example: 0712345678 (without country code)
                  </p>
                </div>
                
                <Button
                  className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium"
                  onClick={handleInitiatePayment}
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
            )}
            
            {paymentStep === "processing" && (
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
            )}
            
            {paymentStep === "confirmation" && (
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
                      onChange={setOtpValue}
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
                  onClick={handleConfirmPayment}
                >
                  Confirm Payment
                </Button>
              </div>
            )}
            
            {paymentStep === "complete" && (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-10 w-10 text-green-400" />
                </div>
                <h3 className="text-white text-xl font-medium mb-2">Payment Successful!</h3>
                <p className="text-white/70 mb-6">
                  Your order has been placed successfully and will be processed shortly.
                </p>
                <div className="bg-white/5 p-4 rounded-lg mb-4">
                  <p className="text-white/70 text-sm">M-Pesa Transaction Details:</p>
                  <p className="text-white font-medium">KES {total} paid from {phoneNumber}</p>
                  <p className="text-white/60 text-xs mt-1">Transaction ID: MPE-{Math.floor(Math.random() * 1000000)}</p>
                </div>
                <Button
                  className="bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium"
                  asChild
                >
                  <a href="/profile">View My Orders</a>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      <div className="md:col-span-2">
        <Card className="bg-mbegu-card border-white/10 sticky top-24">
          <CardHeader>
            <CardTitle className="text-white text-lg">Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center pb-2 border-b border-white/10">
                  <div>
                    <p className="text-white text-sm">{item.name}</p>
                    <p className="text-white/60 text-xs">Qty: {item.quantity}</p>
                  </div>
                  <span className="text-white">KES {item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Subtotal</span>
                <span className="text-white">KES {subtotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Delivery</span>
                <span className="text-white">KES {deliveryFee}</span>
              </div>
              <div className="pt-2 mt-2 border-t border-white/10">
                <div className="flex justify-between font-medium">
                  <span className="text-white">Total</span>
                  <span className="text-mbegu-primary">KES {total}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 p-3 rounded-lg">
              <p className="text-white/70 text-xs">
                By proceeding with this payment, you agree to our terms and conditions.
                Your personal information will be used to process your order and support
                your experience throughout this website.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
