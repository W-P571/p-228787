
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

interface OrderSummaryProps {
  cartItems: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }>;
  subtotal: number;
  deliveryFee: number;
  total: number;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  cartItems,
  subtotal,
  deliveryFee,
  total,
}) => (
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
);
