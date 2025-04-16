
import React from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

export const DepositForm: React.FC = () => {
  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="deposit-name" className="text-white">Full Name</Label>
        <Input 
          id="deposit-name" 
          placeholder="Your name" 
          className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="deposit-phone" className="text-white">Phone Number</Label>
        <Input 
          id="deposit-phone" 
          placeholder="07XX XXX XXX" 
          className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="deposit-amount" className="text-white">Deposit Amount (KES)</Label>
        <Input 
          id="deposit-amount" 
          type="number" 
          min="100" 
          placeholder="500" 
          className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white"
        />
      </div>
      
      <div className="bg-white/5 rounded-lg p-4 text-sm">
        <p className="text-white mb-2">M-Pesa Till Details:</p>
        <p className="text-white/70">Till Number: <span className="text-mbegu-primary">175372</span></p>
        <p className="text-white/70">Business Name: <span className="text-mbegu-primary">Mbegu Traders</span></p>
      </div>
      
      <Button className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90">
        Make Deposit
      </Button>
    </div>
  );
};
