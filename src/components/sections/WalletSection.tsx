
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { WalletIcon, Send, CreditCard, History, Landmark, Mail, Shield } from "lucide-react";

export const WalletSection: React.FC = () => {
  const [balance, setBalance] = useState(0);
  const [isSignedIn, setIsSignedIn] = useState(false);
  
  const handleSignIn = () => {
    setIsSignedIn(true);
    setBalance(500); // Mock balance after sign in
  };
  
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-mbegu-gray/30 to-mbegu-dark">
      <div className="container mx-auto">
        <Card className="bg-gradient-to-br from-mbegu-card to-mbegu-dark/80 border-white/10 max-w-3xl mx-auto overflow-hidden backdrop-blur-sm">
          <CardHeader className="text-center border-b border-white/10">
            <CardTitle className="text-white text-2xl font-display flex items-center justify-center">
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
                <div className="flex justify-center items-center p-8 bg-mbegu-dark/50">
                  <div className="text-center">
                    <p className="text-white/70 text-sm mb-1">Available Balance</p>
                    <h3 className="text-mbegu-primary text-4xl font-bold">{balance} KES</h3>
                  </div>
                </div>
                
                <Tabs defaultValue="deposit" className="w-full">
                  <TabsList className="grid grid-cols-3 rounded-none bg-white/5 p-1">
                    <TabsTrigger 
                      value="deposit"
                      className="data-[state=active]:bg-mbegu-primary data-[state=active]:text-mbegu-dark rounded-md"
                    >
                      <CreditCard className="h-4 w-4 mr-2" />
                      Deposit
                    </TabsTrigger>
                    <TabsTrigger 
                      value="send"
                      className="data-[state=active]:bg-mbegu-primary data-[state=active]:text-mbegu-dark rounded-md"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send
                    </TabsTrigger>
                    <TabsTrigger 
                      value="history"
                      className="data-[state=active]:bg-mbegu-primary data-[state=active]:text-mbegu-dark rounded-md"
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

                    <div className="bg-white/5 rounded-lg p-4 text-sm border border-white/10">
                      <div className="flex items-center mb-3 pb-2 border-b border-white/10">
                        <Landmark className="h-4 w-4 text-mbegu-primary mr-2" />
                        <span className="text-white font-medium">Payment Details</span>
                      </div>
                      <p className="text-white/70 mb-2">Till Number: <span className="text-mbegu-primary">175372</span></p>
                      <p className="text-white/70 mb-2">Business Name: <span className="text-mbegu-primary">Mbegu Traders</span></p>
                      <div className="flex items-center mt-4 pt-2 border-t border-white/10">
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
                    
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex items-center">
                        <Shield className="h-5 w-5 text-mbegu-primary mr-2" />
                        <div>
                          <p className="text-white text-sm font-medium">Secure Transfer</p>
                          <p className="text-white/70 text-xs">All transfers are encrypted and secure</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium">
                      <Send className="h-4 w-4 mr-2" />
                      Send Money
                    </Button>
                  </TabsContent>
                  
                  <TabsContent value="history" className="p-6 space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-mbegu-dark/60 rounded-lg border border-white/10">
                        <div>
                          <p className="text-white text-sm font-medium">Deposit</p>
                          <p className="text-white/70 text-xs">May 12, 2025</p>
                        </div>
                        <span className="text-green-400 font-medium">+500 KES</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-mbegu-dark/60 rounded-lg border border-white/10">
                        <div>
                          <p className="text-white text-sm font-medium">Purchase</p>
                          <p className="text-white/70 text-xs">May 10, 2025</p>
                        </div>
                        <span className="text-amber-400 font-medium">-300 KES</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-mbegu-dark/60 rounded-lg border border-white/10">
                        <div>
                          <p className="text-white text-sm font-medium">Deposit</p>
                          <p className="text-white/70 text-xs">May 5, 2025</p>
                        </div>
                        <span className="text-green-400 font-medium">+1000 KES</span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </>
            ) : (
              <div className="p-8 text-center">
                <div className="bg-mbegu-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <WalletIcon className="h-8 w-8 text-mbegu-primary" />
                </div>
                <h3 className="text-white text-xl font-medium mb-2">Sign In to Access Your Wallet</h3>
                <p className="text-white/70 mb-6">View your balance, make deposits, and transfer funds after signing in</p>
                <Button 
                  className="bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium px-8"
                  onClick={handleSignIn}
                >
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
