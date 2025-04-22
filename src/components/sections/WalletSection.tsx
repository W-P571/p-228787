
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { WalletIcon, Send, CreditCard, History, Landmark, Mail, Star, GiftIcon, Award, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "../ui/switch";
import { useIsMobile } from "@/hooks/use-mobile";

export const WalletSection: React.FC = () => {
  const [balance, setBalance] = useState(0);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loyaltyPoints, setLoyaltyPoints] = useState(180);
  const [showReferral, setShowReferral] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  const handleSignIn = () => {
    setIsSignedIn(true);
    toast({
      title: "Welcome back!",
      description: "You've successfully signed in to your wallet.",
      duration: 3000,
    });
  };

  const handleDeposit = () => {
    setBalance(prev => prev + 500);
    setLoyaltyPoints(prev => prev + 10);
    toast({
      title: "Deposit successful",
      description: "KES 500 has been added to your wallet. You earned 10 loyalty points!",
      duration: 3000,
    });
  };

  const handleSend = () => {
    if (balance >= 200) {
      setBalance(prev => prev - 200);
      toast({
        title: "Transfer successful",
        description: "KES 200 has been sent successfully.",
        duration: 3000,
      });
    } else {
      toast({
        title: "Insufficient funds",
        description: "Please deposit more funds to complete this transaction.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };
  
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
                <div className="flex flex-col md:flex-row justify-between items-center p-6 bg-mbegu-dark/50">
                  <div className="text-center mb-4 md:mb-0">
                    <p className="text-white/70 text-sm mb-1">Available Balance</p>
                    <h3 className="text-mbegu-primary text-4xl font-bold">KES {balance}</h3>
                  </div>
                  
                  <div className="text-center px-6 py-3 bg-white/5 rounded-lg">
                    <div className="flex items-center mb-1">
                      <Star className="h-4 w-4 text-amber-400 fill-amber-400 mr-2" />
                      <p className="text-white/70 text-sm">Loyalty Points</p>
                    </div>
                    <h3 className="text-amber-400 text-2xl font-bold">{loyaltyPoints} pts</h3>
                    <div className="mt-2 text-xs text-white/50">
                      <div className="flex items-center justify-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        <span>Level: {loyaltyPoints >= 200 ? 'Gold' : 'Silver'}</span>
                      </div>
                    </div>
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
                          defaultValue="500"
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

                      <div className="flex items-center justify-between py-2">
                        <Label htmlFor="earn-points" className="text-white cursor-pointer">
                          Earn loyalty points
                        </Label>
                        <Switch id="earn-points" defaultChecked />
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
                    
                    <Button 
                      className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium"
                      onClick={handleDeposit}
                    >
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
                          defaultValue="200"
                          placeholder="500" 
                          className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white"
                        />
                      </div>

                      <div 
                        className="bg-mbegu-primary/10 border border-mbegu-primary/20 rounded-lg p-3 cursor-pointer"
                        onClick={() => setShowReferral(!showReferral)}
                      >
                        <div className="flex items-center">
                          <GiftIcon className="h-4 w-4 text-mbegu-primary mr-2" />
                          <span className="text-white text-sm font-medium">Send as a gift</span>
                        </div>
                        {showReferral && (
                          <div className="mt-3 pt-3 border-t border-white/10">
                            <Label htmlFor="gift-message" className="text-white text-xs">Gift Message</Label>
                            <Input 
                              id="gift-message" 
                              placeholder="Add a personal message..." 
                              className="mt-1 bg-mbegu-dark/70 border-mbegu-dark/90 text-white text-xs"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium"
                      onClick={handleSend}
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Money
                    </Button>
                  </TabsContent>
                  
                  <TabsContent value="history" className="p-6 space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <div>
                          <p className="text-white text-sm font-medium">Deposit</p>
                          <p className="text-white/70 text-xs">2025-04-17</p>
                        </div>
                        <div className="text-right">
                          <span className="text-green-400 block">+500 KES</span>
                          <span className="text-amber-400 text-xs flex items-center justify-end">
                            <Award className="h-3 w-3 mr-1" /> +10 pts
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <div>
                          <p className="text-white text-sm font-medium">Purchase</p>
                          <p className="text-white/70 text-xs">2025-04-15</p>
                        </div>
                        <div className="text-right">
                          <span className="text-red-400 block">-300 KES</span>
                          <span className="text-amber-400 text-xs flex items-center justify-end">
                            <Award className="h-3 w-3 mr-1" /> +20 pts
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <div>
                          <p className="text-white text-sm font-medium">Deposit</p>
                          <p className="text-white/70 text-xs">2025-04-10</p>
                        </div>
                        <div className="text-right">
                          <span className="text-green-400 block">+1000 KES</span>
                          <span className="text-amber-400 text-xs flex items-center justify-end">
                            <Award className="h-3 w-3 mr-1" /> +20 pts
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-mbegu-primary/10 border border-mbegu-primary/20 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-white text-sm">Total Points Earned</span>
                        <span className="text-amber-400 font-bold">{loyaltyPoints} pts</span>
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
                <Button 
                  className="bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium px-8"
                  onClick={handleSignIn}
                >
                  Sign In
                </Button>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="bg-white/5 rounded-lg p-4 max-w-sm mx-auto">
                    <div className="flex items-center justify-center mb-2">
                      <Star className="h-5 w-5 text-amber-400 fill-amber-400 mr-2" />
                      <span className="text-white text-sm font-medium">Loyalty Program</span>
                    </div>
                    <p className="text-white/70 text-xs mb-2">Join our loyalty program and earn points with every purchase and deposit</p>
                    <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
                      <div className="bg-white/10 p-2 rounded">
                        <span className="text-amber-400 font-bold block">Silver</span>
                        <span className="text-white/60">0-199 points</span>
                      </div>
                      <div className="bg-white/10 p-2 rounded">
                        <span className="text-amber-400 font-bold block">Gold</span>
                        <span className="text-white/60">200+ points</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm mt-4">Need help? Contact us at <span className="text-mbegu-primary">info@mbegu.shop</span></p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
