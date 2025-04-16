
import React from "react";

interface CheckoutSummaryProps {
  selectedSeedling: string;
  quantity: number;
  seedlings: Array<{ value: string; label: string }>;
  onBack: () => void;
}

import { Button } from "../../ui/button";

export const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({
  selectedSeedling,
  quantity,
  seedlings,
  onBack
}) => {
  const pricePerUnit = 130;
  const subtotal = quantity * pricePerUnit;
  
  return (
    <div className="space-y-4">
      <div className="bg-white/5 rounded-lg p-4">
        <h3 className="text-white text-lg font-medium mb-3">Checkout Summary</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="text-white/70">Product:</span>
            <span className="text-white">
              {seedlings.find(s => s.value === selectedSeedling)?.label || "Selected Seedling"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70">Quantity:</span>
            <span className="text-white">{quantity}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70">Price per unit:</span>
            <span className="text-white">KES {pricePerUnit}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70">Subtotal:</span>
            <span className="text-white">KES {subtotal}</span>
          </div>
        </div>
        
        <div className="pt-3 border-t border-white/10">
          <div className="flex justify-between font-medium">
            <span className="text-white">Total:</span>
            <span className="text-mbegu-primary">KES {subtotal}</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white/5 rounded-lg p-4">
        <h3 className="text-white text-lg font-medium mb-3">Payment Options</h3>
        
        <div className="space-y-3">
          <div className="flex items-center p-3 bg-mbegu-dark/70 rounded-lg border border-white/10">
            <input type="radio" id="wallet" name="payment" className="mr-3" />
            <label htmlFor="wallet" className="text-white cursor-pointer flex-1">Pay with Mbegu Wallet</label>
            <span className="text-mbegu-primary">KES 0</span>
          </div>
          
          <div className="flex items-center p-3 bg-mbegu-dark/70 rounded-lg border border-white/10">
            <input 
              type="radio" 
              id="mpesa" 
              name="payment" 
              className="mr-3" 
              defaultChecked 
              readOnly
            />
            <label htmlFor="mpesa" className="text-white cursor-pointer flex-1">Pay with M-Pesa</label>
            <span className="text-mbegu-primary">KES {subtotal}</span>
          </div>
          
          <div className="mt-3 p-3 bg-mbegu-dark/50 rounded-lg">
            <p className="text-white text-sm mb-1">M-Pesa Till Number:</p>
            <p className="text-mbegu-primary text-lg font-medium">175372</p>
            <p className="text-white/70 text-xs">Business Name: Mbegu Traders</p>
            <p className="text-white/70 text-xs mt-2">Contact: <span className="text-mbegu-primary">info@mbegu.shop</span></p>
          </div>
        </div>
      </div>
      
      <Button className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium">
        Complete Order
      </Button>
      
      <Button 
        variant="outline" 
        className="w-full border-white/10 text-white hover:bg-white/10 font-medium"
        onClick={onBack}
      >
        Back to Order
      </Button>
    </div>
  );
};
