
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { ShoppingBag, Gift, CreditCard } from "lucide-react";

export const ReservationForm: React.FC = () => {
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
                <Select>
                  <SelectTrigger className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white">
                    <SelectValue placeholder="Select a seedling" />
                  </SelectTrigger>
                  <SelectContent className="bg-mbegu-dark border-mbegu-dark/90 text-white">
                    <SelectItem value="victoria">Victoria F1</SelectItem>
                    <SelectItem value="gloria">Gloria F1</SelectItem>
                    <SelectItem value="pretoria">Pretoria F1</SelectItem>
                    <SelectItem value="baraka">Baraka F1</SelectItem>
                    <SelectItem value="terminator">Terminator F1</SelectItem>
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
            
            <Button className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90">
              Place Order
            </Button>
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
                    <SelectItem value="victoria">Victoria F1</SelectItem>
                    <SelectItem value="gloria">Gloria F1</SelectItem>
                    <SelectItem value="pretoria">Pretoria F1</SelectItem>
                    <SelectItem value="baraka">Baraka F1</SelectItem>
                    <SelectItem value="terminator">Terminator F1</SelectItem>
                  </SelectContent>
                </Select>
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
