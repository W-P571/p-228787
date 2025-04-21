
import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { ArrowRight } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
import { CheckoutSummary } from "./CheckoutSummary";

interface OrderFormProps {
  seedlings: Array<{ value: string; label: string }>;
}

export const OrderForm: React.FC<OrderFormProps> = ({ seedlings }) => {
  const [selectedSeedling, setSelectedSeedling] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleProceedToCheckout = () => {
    setShowCheckout(true);
  };

  const handleBackToOrder = () => {
    setShowCheckout(false);
  };

  return (
    <div className="grid gap-4">
      {!showCheckout ? (
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-white font-medium">Full Name</Label>
            <Input 
              id="name" 
              placeholder="Your name" 
              className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white"
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="phone" className="text-white font-medium">Phone Number</Label>
            <Input 
              id="phone" 
              placeholder="07XX XXX XXX" 
              className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white"
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="seedling" className="text-white font-medium">Seedling Type</Label>
            <Select value={selectedSeedling} onValueChange={setSelectedSeedling}>
              <SelectTrigger id="seedling" className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white">
                <SelectValue placeholder="Select a seedling" />
              </SelectTrigger>
              <SelectContent className="bg-mbegu-dark border-mbegu-dark/90">
                {seedlings.map((seedling) => (
                  <SelectItem 
                    key={seedling.value} 
                    value={seedling.value}
                    className="text-white hover:bg-mbegu-primary/20 focus:bg-mbegu-primary/20"
                  >
                    {seedling.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="quantity" className="text-white font-medium">Quantity</Label>
            <Input 
              id="quantity" 
              type="number" 
              min="1" 
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white"
            />
          </div>

          <Button 
            className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium"
            onClick={handleProceedToCheckout}
          >
            Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      ) : (
        <CheckoutSummary 
          selectedSeedling={selectedSeedling}
          quantity={quantity}
          seedlings={seedlings}
          onBack={handleBackToOrder}
        />
      )}
    </div>
  );
};
