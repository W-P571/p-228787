
import React from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";

interface GiftFormProps {
  seedlings: Array<{ value: string; label: string }>;
}

export const GiftForm: React.FC<GiftFormProps> = ({ seedlings }) => {
  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="gift-your-name" className="text-white">Your Name</Label>
        <Input 
          id="gift-your-name" 
          placeholder="Your name" 
          className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="gift-recipient-name" className="text-white">Recipient's Name</Label>
        <Input 
          id="gift-recipient-name" 
          placeholder="Recipient's name" 
          className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="gift-recipient-phone" className="text-white">Recipient's Phone</Label>
        <Input 
          id="gift-recipient-phone" 
          placeholder="07XX XXX XXX" 
          className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="gift-seedling" className="text-white">Seedling Type</Label>
        <Select>
          <SelectTrigger className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white">
            <SelectValue placeholder="Select a seedling" />
          </SelectTrigger>
          <SelectContent>
            {seedlings.map((seedling) => (
              <SelectItem key={seedling.value} value={seedling.value}>
                {seedling.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="gift-quantity" className="text-white">Quantity</Label>
        <Input 
          id="gift-quantity" 
          type="number" 
          min="1" 
          defaultValue="1" 
          className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white"
        />
      </div>
      
      <Button className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90">
        Send Gift
      </Button>
    </div>
  );
};
