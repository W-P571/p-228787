
import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { ArrowRight, Check, PhoneCall, User, Leaf, Package, Bell } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
import { CheckoutSummary } from "./CheckoutSummary";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { Switch } from "../../ui/switch";

interface OrderFormProps {
  seedlings: Array<{ value: string; label: string }>;
}

export const OrderForm: React.FC<OrderFormProps> = ({ seedlings }) => {
  const [selectedSeedling, setSelectedSeedling] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notifications, setNotifications] = useState(true);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const handleProceedToCheckout = () => {
    if (!name || !phone || !selectedSeedling) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    setShowCheckout(true);
    toast({
      title: "Ready for checkout",
      description: "Please review your order details",
      duration: 3000,
    });
  };

  const handleBackToOrder = () => {
    setShowCheckout(false);
  };

  return (
    <div className={`grid gap-4 ${isMobile ? 'max-w-sm mx-auto' : 'max-w-md mx-auto'}`}>
      {!showCheckout ? (
        <div className="grid gap-5">
          <div className="bg-mbegu-dark/30 p-4 rounded-lg border border-mbegu-primary/20 mb-2">
            <h3 className="text-white font-medium text-lg mb-3">Order Information</h3>
            
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-white font-medium flex items-center">
                  <User className="h-4 w-4 mr-2 text-mbegu-primary" />
                  Full Name
                </Label>
                <Input 
                  id="name" 
                  placeholder="Your name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white focus:border-mbegu-primary"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="phone" className="text-white font-medium flex items-center">
                  <PhoneCall className="h-4 w-4 mr-2 text-mbegu-primary" />
                  Phone Number
                </Label>
                <Input 
                  id="phone" 
                  placeholder="07XX XXX XXX" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white focus:border-mbegu-primary"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="seedling" className="text-white font-medium flex items-center">
                  <Leaf className="h-4 w-4 mr-2 text-mbegu-primary" />
                  Seedling Type
                </Label>
                <Select value={selectedSeedling} onValueChange={setSelectedSeedling}>
                  <SelectTrigger 
                    id="seedling" 
                    className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white focus:border-mbegu-primary"
                  >
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
                <Label htmlFor="quantity" className="text-white font-medium flex items-center">
                  <Package className="h-4 w-4 mr-2 text-mbegu-primary" />
                  Quantity
                </Label>
                <Input 
                  id="quantity" 
                  type="number" 
                  min="1" 
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white focus:border-mbegu-primary"
                />
              </div>

              <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10">
                <Label htmlFor="notifications" className="text-white cursor-pointer flex items-center">
                  <Bell className="h-4 w-4 mr-2 text-mbegu-primary" />
                  Receive SMS notifications
                </Label>
                <Switch 
                  id="notifications" 
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>
            </div>
          </div>

          <div className="bg-mbegu-primary/10 border border-mbegu-primary/20 p-3 rounded-lg mb-2">
            <div className="flex items-start">
              <Check className="h-4 w-4 text-mbegu-primary mt-1 mr-2" />
              <p className="text-white/80 text-sm">
                By proceeding, you agree to our terms and consent to the use of your phone number for order updates and delivery coordination.
              </p>
            </div>
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
