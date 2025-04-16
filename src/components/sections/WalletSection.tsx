
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { WalletIcon, Send, CreditCard, History, Landmark, Mail } from "lucide-react";

export const WalletSection: React.FC = () => {
  const [balance, setBalance] = useState(0);
  const [isSignedIn, setIsSignedIn] = useState(false);
  
  return (
    <section className="py-12 px-4 bg-mbegu-gray/30">
      <div className="container mx-auto">
        <Card className="bg-mbegu-card border-white/10 max-w-3xl mx-auto overflow-hidden">
          <CardHeader className="text-center bg-gradient-to-r from-mbegu-gray to-mbegu-dark/80 border-b border-white/10">
            <CardTitle className="text-white text-2xl font-display">
              <WalletIcon className="inline-block mr-2 h-6 w-6 text-mbegu-primary" /> 
              Mbegu Wallet
            </CardTitle>
            <CardDescription className="text-white/70 text-sm">
              Fund your wallet for easy payments and earn bonus points
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-0">
            {isSignedIn ? (
              <>
                <div className="flex justify-center items-center p-6 bg-mbegu-dark/50">
                  <div className="text-center">
                    <p className="text-white/70 text-sm mb-1">Available Balance</p>
                    <h3 className="text-mbegu-primary text-4xl font-bold">KES {balance}</h3>
                  </div>
                </div>
                
                <Tabs defaultValue="deposit" className="w-full">
                  <TabsList className="grid grid-cols-3 rounded-none bg-white/5">
                    <TabsTrigger 
                      value="deposit"
                      className="data-[state=active]:bg-mbegu-primary data-[state=active]:text-mbegu-dark"
                    >
                      <CreditCard className="h-4 w-4 mr-2" />
                      Deposit
                    </TabsTrigger>
                    <TabsTrigger 
                      value="send"
                      className="data-[state=active]:bg-mbegu-primary data-[state=active]:text-mbegu-dark"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send
                    </TabsTrigger>
                    <TabsTrigger 
                      value="history"
                      className="data-[state=active]:bg-mbegu-primary data-[state=active]:text-mbegu-dark"
                    >
                      <History className="h-4 w-4 mr-2" />
                      History
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="deposit" className="p-6 space-y-4">
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="amount" className="text-white">Amount (KES)</Label>
                        <Input 
                          id="amount" 
                          type="number"
                          min="100"
                          placeholder="500" 
                          className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white"
                        />
                      </div>
                      
                      <div className="grid gap-2">
                        <Label htmlFor="phone" className="text-white">M-Pesa Phone Number</Label>
                        <Input 
                          id="phone" 
                          placeholder="07XX XXX XXX" 
                          className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white"
                        />
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-lg p-4 text-sm">
                      <div className="flex items-center mb-2">
                        <Landmark className="h-4 w-4 text-mbegu-primary mr-2" />
                        <span className="text-white">Payment Details</span>
                      </div>
                      <p className="text-white/70 mb-2">Till Number: <span className="text-mbegu-primary">175372</span></p>
                      <p className="text-white/70 mb-2">Business Name: <span className="text-mbegu-primary">Mbegu Traders</span></p>
                      <div className="flex items-center mt-3">
                        <Mail className="h-4 w-4 text-mbegu-primary mr-2" />
                        <span className="text-white">Contact: <span className="text-mbegu-primary">info@mbegu.shop</span></span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Deposit via M-Pesa
                    </Button>
                  </TabsContent>
                  
                  <TabsContent value="send" className="p-6 space-y-4">
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="recipient-phone" className="text-white">Recipient Phone</Label>
                        <Input 
                          id="recipient-phone" 
                          placeholder="07XX XXX XXX" 
                          className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white"
                        />
                      </div>
                      
                      <div className="grid gap-2">
                        <Label htmlFor="send-amount" className="text-white">Amount (KES)</Label>
                        <Input 
                          id="send-amount" 
                          type="number"
                          min="100"
                          placeholder="500" 
                          className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white"
                        />
                      </div>
                    </div>
                    
                    <Button className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium">
                      <Send className="h-4 w-4 mr-2" />
                      Send Money
                    </Button>
                  </TabsContent>
                  
                  <TabsContent value="history" className="p-6 space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <div>
                          <p className="text-white text-sm font-medium">Deposit</p>
                          <p className="text-white/70 text-xs">May 12, 2025</p>
                        </div>
                        <span className="text-green-400">+500 KES</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <div>
                          <p className="text-white text-sm font-medium">Purchase</p>
                          <p className="text-white/70 text-xs">May 10, 2025</p>
                        </div>
                        <span className="text-red-400">-300 KES</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <div>
                          <p className="text-white text-sm font-medium">Deposit</p>
                          <p className="text-white/70 text-xs">May 5, 2025</p>
                        </div>
                        <span className="text-green-400">+1000 KES</span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </>
            ) : (
              <div className="p-8 text-center">
                <WalletIcon className="h-12 w-12 text-mbegu-primary/50 mx-auto mb-4" />
                <h3 className="text-white text-xl font-medium mb-2">Sign In to Access Your Wallet</h3>
                <p className="text-white/70 mb-6">View your balance, make deposits, and transfer funds after signing in</p>
                <Button className="bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium px-8">
                  Sign In
                </Button>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-white/70 text-sm">Need help? Contact us at <span className="text-mbegu-primary">info@mbegu.shop</span></p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
