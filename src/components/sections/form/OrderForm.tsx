
import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
import { CheckoutSummary } from "./CheckoutSummary";

interface OrderFormProps {
  seedlings: Array<{ value: string; label: string }>;
}

export const OrderForm: React.FC<OrderFormProps> = ({ seedlings }) => {
  const [selectedSeedling, setSelectedSeedling] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleProceedToCheckout = () => {
    setShowCheckout(true);
  };

  const handleBackToOrder = () => {
    setShowCheckout(false);
  };

  const isFormValid = name && phone && selectedSeedling && quantity > 0;

  return (
    <div className="grid gap-4">
      {!showCheckout ? (
        <div className="grid gap-5">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-white font-medium">Full Name</Label>
            <Input 
              id="name" 
              placeholder="Your name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white h-12"
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="phone" className="text-white font-medium">Phone Number</Label>
            <Input 
              id="phone" 
              placeholder="07XX XXX XXX" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white h-12"
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="seedling" className="text-white font-medium">Seedling Type</Label>
            <Select value={selectedSeedling} onValueChange={setSelectedSeedling}>
              <SelectTrigger id="seedling" className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white h-12">
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
              className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white h-12"
            />
          </div>

          <div className="bg-white/5 rounded-lg p-4 text-sm border border-white/10 mt-2">
            <div className="flex items-center">
              <ShoppingBag className="h-5 w-5 text-mbegu-primary mr-2" />
              <span className="text-white font-medium">Order Information</span>
            </div>
            <p className="text-white/70 mt-2 text-sm">
              Select your preferred seedling type and quantity. Your order will be prepared and ready for pickup within 24 hours.
            </p>
          </div>

          <Button 
            className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium h-12 mt-2"
            onClick={handleProceedToCheckout}
            disabled={!isFormValid}
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
