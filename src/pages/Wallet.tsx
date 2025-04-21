
import React, { useState } from "react";
import { Header } from "../components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { 
  ArrowRight, 
  WalletIcon, 
  Send, 
  Clock, 
  Plus, 
  ArrowDown, 
  Mail,
  ShieldCheck,
  BarChart3,
  BanknoteIcon
} from "lucide-react";

const Wallet: React.FC = () => {
  const [walletBalance, setWalletBalance] = useState(500);
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [transactionHistory, setTransactionHistory] = useState([
    { id: 1, type: "deposit", amount: 200, date: "2025-04-15", status: "completed" },
    { id: 2, type: "purchase", amount: -150, date: "2025-04-10", status: "completed" },
    { id: 3, type: "send", amount: -50, date: "2025-04-05", status: "completed" },
  ]);
  
  const [depositAmount, setDepositAmount] = useState("");
  const [sendAmount, setSendAmount] = useState("");
  const [recipientPhone, setRecipientPhone] = useState("");
  
  const handleDeposit = () => {
    if (depositAmount && !isNaN(Number(depositAmount))) {
      const amount = Number(depositAmount);
      setWalletBalance(prev => prev + amount);
      setTransactionHistory(prev => [
        { 
          id: prev.length + 1, 
          type: "deposit", 
          amount, 
          date: new Date().toISOString().split("T")[0], 
          status: "completed" 
        },
        ...prev
      ]);
      setDepositAmount("");
    }
  };
  
  const handleSend = () => {
    if (sendAmount && !isNaN(Number(sendAmount)) && recipientPhone) {
      const amount = Number(sendAmount);
      if (amount <= walletBalance) {
        setWalletBalance(prev => prev - amount);
        setTransactionHistory(prev => [
          { 
            id: prev.length + 1, 
            type: "send", 
            amount: -amount, 
            date: new Date().toISOString().split("T")[0], 
            status: "completed" 
          },
          ...prev
        ]);
        setSendAmount("");
        setRecipientPhone("");
      }
    }
  };

  const handleSignIn = () => {
    setIsSignedIn(true);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-mbegu-dark to-mbegu-gray/50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {isSignedIn ? (
          <div className="max-w-5xl mx-auto">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-display">Mbegu Wallet</h1>
              <p className="text-white/70 text-lg">Manage your funds and track your seedling transactions</p>
            </header>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <Card className="bg-gradient-to-br from-mbegu-card to-mbegu-dark/80 border-white/10 lg:col-span-2 backdrop-blur-sm overflow-hidden">
                <CardHeader className="pb-2 border-b border-white/10">
                  <CardTitle className="text-white text-xl flex items-center">
                    <BanknoteIcon className="h-5 w-5 text-mbegu-primary mr-2" />
                    Balance
                  </CardTitle>
                  <CardDescription className="text-white/70">Your current available balance</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex items-center">
                    <div className="h-14 w-14 rounded-full bg-mbegu-primary/20 flex items-center justify-center mr-4">
                      <WalletIcon className="h-8 w-8 text-mbegu-primary" />
                    </div>
                    <div>
                      <span className="text-4xl font-bold text-white">{walletBalance}</span>
                      <span className="text-white/90 ml-2 text-lg">KES</span>
                      <p className="text-white/50 text-sm">Updated: {new Date().toLocaleDateString()}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <BarChart3 className="h-5 w-5 text-green-400 mb-2" />
                      <h3 className="text-white text-sm font-medium">Earnings</h3>
                      <p className="text-green-400 text-xl font-bold">+200 KES</p>
                      <p className="text-white/50 text-xs">This month</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <ShieldCheck className="h-5 w-5 text-mbegu-primary mb-2" />
                      <h3 className="text-white text-sm font-medium">Security</h3>
                      <p className="text-white text-xl font-bold">High</p>
                      <p className="text-white/50 text-xs">2-Factor Auth</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-mbegu-card to-mbegu-dark/80 border-white/10 backdrop-blur-sm overflow-hidden">
                <CardHeader className="pb-2 border-b border-white/10">
                  <CardTitle className="text-white text-xl flex items-center">
                    <Clock className="h-5 w-5 text-mbegu-primary mr-2" />
                    Quick Actions
                  </CardTitle>
                  <CardDescription className="text-white/70">Manage your wallet</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 pt-4">
                  <Button 
                    className="w-full justify-between bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium transition-all hover:translate-x-1"
                    onClick={() => document.getElementById("deposit-tab")?.click()}
                  >
                    <span className="flex items-center">
                      <Plus className="h-4 w-4 mr-2" />
                      Deposit
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button 
                    className="w-full justify-between bg-white/10 text-white hover:bg-white/20 font-medium transition-all hover:translate-x-1"
                    onClick={() => document.getElementById("send-tab")?.click()}
                  >
                    <span className="flex items-center">
                      <Send className="h-4 w-4 mr-2" />
                      Send
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button 
                    className="w-full justify-between bg-white/10 text-white hover:bg-white/20 font-medium transition-all hover:translate-x-1"
                    onClick={() => document.getElementById("history-tab")?.click()}
                  >
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      History
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-gradient-to-br from-mbegu-card to-mbegu-dark/80 border-white/10 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <Tabs defaultValue="deposit" className="w-full">
                  <TabsList className="grid grid-cols-3 rounded-none bg-white/5 p-1">
                    <TabsTrigger 
                      id="deposit-tab"
                      value="deposit"
                      className="data-[state=active]:bg-mbegu-primary data-[state=active]:text-mbegu-dark rounded-md py-2"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Deposit
                    </TabsTrigger>
                    <TabsTrigger 
                      id="send-tab"
                      value="send"
                      className="data-[state=active]:bg-mbegu-primary data-[state=active]:text-mbegu-dark rounded-md py-2"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send
                    </TabsTrigger>
                    <TabsTrigger 
                      id="history-tab"
                      value="history"
                      className="data-[state=active]:bg-mbegu-primary data-[state=active]:text-mbegu-dark rounded-md py-2"
                    >
                      <Clock className="h-4 w-4 mr-2" />
                      History
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="deposit" className="p-6 md:p-8 space-y-6">
                    <div className="space-y-6 max-w-md mx-auto">
                      <div className="grid gap-3">
                        <Label htmlFor="deposit-amount" className="text-white text-base">Deposit Amount (KES)</Label>
                        <Input 
                          id="deposit-amount" 
                          type="number" 
                          placeholder="Enter amount" 
                          value={depositAmount}
                          onChange={(e) => setDepositAmount(e.target.value)}
                          className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white h-12 text-lg"
                        />
                      </div>
                      
                      <div className="bg-white/5 rounded-lg p-5 text-sm border border-white/10">
                        <div className="flex items-center mb-3 pb-2 border-b border-white/10">
                          <BanknoteIcon className="h-5 w-5 text-mbegu-primary mr-2" />
                          <h3 className="text-white font-medium">M-Pesa Payment Details</h3>
                        </div>
                        <div className="space-y-3">
                          <p className="text-white/80 flex justify-between">
                            <span>Till Number:</span> 
                            <span className="text-mbegu-primary font-medium">175372</span>
                          </p>
                          <p className="text-white/80 flex justify-between">
                            <span>Business Name:</span> 
                            <span className="text-mbegu-primary font-medium">Mbegu Traders</span>
                          </p>
                        </div>
                        <div className="flex items-center mt-4 pt-2 border-t border-white/10">
                          <Mail className="h-4 w-4 text-mbegu-primary mr-2" />
                          <span className="text-white/70 text-xs">Support: <span className="text-mbegu-primary">info@mbegu.shop</span></span>
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium h-12 text-base"
                        onClick={handleDeposit}
                      >
                        Deposit to Wallet
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="send" className="p-6 md:p-8 space-y-6">
                    <div className="space-y-6 max-w-md mx-auto">
                      <div className="grid gap-3">
                        <Label htmlFor="recipient-phone" className="text-white text-base">Recipient Phone</Label>
                        <Input 
                          id="recipient-phone" 
                          placeholder="07XX XXX XXX" 
                          value={recipientPhone}
                          onChange={(e) => setRecipientPhone(e.target.value)}
                          className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white h-12 text-lg"
                        />
                      </div>
                      
                      <div className="grid gap-3">
                        <Label htmlFor="send-amount" className="text-white text-base">Amount (KES)</Label>
                        <Input 
                          id="send-amount" 
                          type="number" 
                          placeholder="Enter amount" 
                          value={sendAmount}
                          onChange={(e) => setSendAmount(e.target.value)}
                          className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white h-12 text-lg"
                        />
                      </div>
                      
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="flex items-center">
                          <div className="bg-amber-500/20 p-2 rounded-full mr-3">
                            <ShieldCheck className="h-5 w-5 text-amber-500" />
                          </div>
                          <div>
                            <p className="text-white font-medium">Transfer Limit</p>
                            <p className="text-white/70 text-sm">Maximum: 50,000 KES per day</p>
                          </div>
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium h-12 text-base"
                        onClick={handleSend}
                        disabled={Number(sendAmount) > walletBalance}
                      >
                        Send Money
                      </Button>
                      
                      {Number(sendAmount) > walletBalance && (
                        <p className="text-red-500 text-sm text-center bg-red-500/10 p-2 rounded-md border border-red-500/20">
                          Insufficient funds in your wallet
                        </p>
                      )}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="history" className="p-6 md:p-8">
                    <div className="space-y-2">
                      <h3 className="text-white text-lg font-medium mb-4 flex items-center">
                        <Clock className="h-5 w-5 text-mbegu-primary mr-2" />
                        Transaction History
                      </h3>
                      
                      <div className="space-y-3">
                        {transactionHistory.map((transaction) => (
                          <div 
                            key={transaction.id} 
                            className="flex items-center justify-between p-4 bg-mbegu-dark/60 rounded-lg border border-white/10 hover:border-mbegu-primary/30 transition-colors"
                          >
                            <div className="flex items-center">
                              {transaction.type === "deposit" ? (
                                <div className="bg-green-500/20 p-2 rounded-full mr-3">
                                  <ArrowDown className="h-4 w-4 text-green-500" />
                                </div>
                              ) : (
                                <div className="bg-amber-500/20 p-2 rounded-full mr-3">
                                  <ArrowRight className="h-4 w-4 text-amber-500" />
                                </div>
                              )}
                              <div>
                                <p className="text-white capitalize font-medium">{transaction.type}</p>
                                <p className="text-white/60 text-xs">{transaction.date}</p>
                              </div>
                            </div>
                            <span className={`font-medium text-lg ${transaction.amount > 0 ? 'text-green-500' : 'text-amber-500'}`}>
                              {transaction.amount > 0 ? '+' : ''}{transaction.amount} KES
                            </span>
                          </div>
                        ))}
                        
                        {transactionHistory.length === 0 && (
                          <div className="text-white/70 text-center py-8 bg-white/5 rounded-lg border border-white/10">
                            <Clock className="h-10 w-10 text-white/30 mx-auto mb-2" />
                            <p>No transactions yet</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="max-w-md mx-auto">
            <Card className="bg-gradient-to-br from-mbegu-card to-mbegu-dark/80 border-white/10 overflow-hidden">
              <CardHeader className="text-center border-b border-white/10 pb-6">
                <div className="mx-auto bg-mbegu-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <WalletIcon className="h-8 w-8 text-mbegu-primary" />
                </div>
                <CardTitle className="text-white text-2xl font-display">Mbegu Wallet</CardTitle>
                <CardDescription className="text-white/70">
                  Access your wallet to manage funds and make transactions
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <Button 
                  className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium h-12 text-base"
                  onClick={handleSignIn}
                >
                  Sign In to Access Wallet
                </Button>
                <p className="text-white/50 text-sm text-center">
                  New to Mbegu? <span className="text-mbegu-primary">Create an account</span>
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default Wallet;
