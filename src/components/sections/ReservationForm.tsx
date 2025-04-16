
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { ShoppingBag, Gift, CreditCard, ArrowRight } from "lucide-react";

export const ReservationForm: React.FC = () => {
  const [selectedSeedling, setSelectedSeedling] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);
  
  const seedlings = [
    { value: "victoria", label: "Victoria F1" },
    { value: "gloria", label: "Gloria F1" },
    { value: "pretoria", label: "Pretoria F1" },
    { value: "baraka", label: "Baraka F1" },
    { value: "ansal", label: "Ansal (Tomato)" },
    { value: "terminator", label: "Terminator F1" },
    { value: "managu", label: "Managu" },
    { value: "tausi", label: "Sukumawiki Tausi F1" },
    { value: "spiner", label: "Sukumawiki Spiner F1" },
  ];
  
  const handleProceedToCheckout = () => {
    setShowCheckout(true);
  };
  
  const handleBackToOrder = () => {
    setShowCheckout(false);
  };
  
  return (
    <Card className="bg-mbegu-card border-white/10 max-w-3xl mx-auto overflow-hidden">
      <CardHeader className="text-center bg-gradient-to-r from-mbegu-gray to-mbegu-dark/80 border-b border-white/10">
        <CardDescription className="text-white/70 text-sm">
          By submitting, you agree to our terms and consent to phone use per the Data Protection Act, 2019 (Kenya).
        </CardDescription>
        <CardTitle className="text-white text-2xl font-display">
          Reserve Your Seedlings
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-0">
        <Tabs defaultValue="order" className="w-full">
          <TabsList className="grid grid-cols-3 rounded-none bg-white/5">
            <TabsTrigger 
              value="order"
              className="data-[state=active]:bg-mbegu-primary data-[state=active]:text-mbegu-dark"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Order
            </TabsTrigger>
            <TabsTrigger 
              value="deposit"
              className="data-[state=active]:bg-mbegu-primary data-[state=active]:text-mbegu-dark"
            >
              <CreditCard className="h-4 w-4 mr-2" />
              Deposit
            </TabsTrigger>
            <TabsTrigger 
              value="gift"
              className="data-[state=active]:bg-mbegu-primary data-[state=active]:text-mbegu-dark"
            >
              <Gift className="h-4 w-4 mr-2" />
              Gift
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="order" className="p-6 space-y-4">
            {!showCheckout ? (
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="text-white">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white"
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="phone" className="text-white">Phone Number</Label>
                  <Input 
                    id="phone" 
                    placeholder="07XX XXX XXX" 
                    className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white"
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="seedling" className="text-white">Seedling Type</Label>
                  <Select value={selectedSeedling} onValueChange={setSelectedSeedling}>
                    <SelectTrigger className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white">
                      <SelectValue placeholder="Select a seedling" />
                    </SelectTrigger>
                    <SelectContent className="bg-mbegu-dark border-mbegu-dark/90 text-white">
                      {seedlings.map((seedling) => (
                        <SelectItem key={seedling.value} value={seedling.value}>
                          {seedling.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="quantity" className="text-white">Quantity</Label>
                  <Input 
                    id="quantity" 
                    type="number" 
                    min="1" 
                    defaultValue="1" 
                    className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white"
                  />
                </div>
              </div>
            ) : (
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
                      <span className="text-white">1</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Price per unit:</span>
                      <span className="text-white">KES 130</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Subtotal:</span>
                      <span className="text-white">KES 130</span>
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t border-white/10">
                    <div className="flex justify-between font-medium">
                      <span className="text-white">Total:</span>
                      <span className="text-mbegu-primary">KES 130</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-white text-lg font-medium mb-3">Payment Options</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-mbegu-dark/70 rounded-lg border border-white/10">
                      <input type="radio" id="wallet" name="payment" className="mr-3" />
                      <Label htmlFor="wallet" className="text-white cursor-pointer flex-1">Pay with Mbegu Wallet</Label>
                      <span className="text-mbegu-primary">KES 0</span>
                    </div>
                    
                    <div className="flex items-center p-3 bg-mbegu-dark/70 rounded-lg border border-white/10">
                      <input type="radio" id="mpesa" name="payment" className="mr-3" checked />
                      <Label htmlFor="mpesa" className="text-white cursor-pointer flex-1">Pay with M-Pesa</Label>
                      <span className="text-mbegu-primary">KES 130</span>
                    </div>
                    
                    <div className="mt-3 p-3 bg-mbegu-dark/50 rounded-lg">
                      <p className="text-white text-sm mb-1">M-Pesa Till Number:</p>
                      <p className="text-mbegu-primary text-lg font-medium">175372</p>
                      <p className="text-white/70 text-xs">Business Name: Mbegu Traders</p>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90">
                  Complete Order
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full border-white/10 text-white hover:bg-white/10"
                  onClick={handleBackToOrder}
                >
                  Back to Order
                </Button>
              </div>
            )}
            
            {!showCheckout && (
              <Button 
                className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90"
                onClick={handleProceedToCheckout}
              >
                Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </TabsContent>
          
          <TabsContent value="deposit" className="p-6 space-y-4">
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
            </div>
            
            <Button className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90">
              Make Deposit
            </Button>
          </TabsContent>
          
          <TabsContent value="gift" className="p-6 space-y-4">
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
                  <SelectContent className="bg-mbegu-dark border-mbegu-dark/90 text-white">
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
            </div>
            
            <Button className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90">
              Send Gift
            </Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
