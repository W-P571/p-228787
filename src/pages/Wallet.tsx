
import React, { useState } from "react";
import { PageLayout } from "../components/layout/PageLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { ArrowRight, WalletIcon, Send, Clock, Plus, ArrowDown, Mail } from "lucide-react";

const Wallet: React.FC = () => {
  const [walletBalance, setWalletBalance] = useState(500);
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
  
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">Mbegu Wallet</h1>
        <p className="text-white/70 mb-6">Manage your funds and track your transactions</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-mbegu-card border-white/10 md:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg">Balance</CardTitle>
              <CardDescription className="text-white/70">Your current wallet balance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <WalletIcon className="h-8 w-8 text-mbegu-primary mr-4" />
                <div>
                  <span className="text-3xl font-bold text-white">{walletBalance}</span>
                  <span className="text-white ml-2">KES</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-mbegu-card border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg">Quick Actions</CardTitle>
              <CardDescription className="text-white/70">Manage your wallet</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button 
                className="w-full justify-between bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium"
                onClick={() => document.getElementById("deposit-tab")?.click()}
              >
                <span className="flex items-center">
                  <Plus className="h-4 w-4 mr-2" />
                  Deposit
                </span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                className="w-full justify-between bg-white/10 text-white hover:bg-white/20 font-medium"
                onClick={() => document.getElementById("send-tab")?.click()}
              >
                <span className="flex items-center">
                  <Send className="h-4 w-4 mr-2" />
                  Send
                </span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                className="w-full justify-between bg-white/10 text-white hover:bg-white/20 font-medium"
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
        
        <Card className="bg-mbegu-card border-white/10">
          <CardContent className="p-0">
            <Tabs defaultValue="deposit" className="w-full">
              <TabsList className="grid grid-cols-3 rounded-none bg-white/5">
                <TabsTrigger 
                  id="deposit-tab"
                  value="deposit"
                  className="data-[state=active]:bg-mbegu-primary data-[state=active]:text-mbegu-dark"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Deposit
                </TabsTrigger>
                <TabsTrigger 
                  id="send-tab"
                  value="send"
                  className="data-[state=active]:bg-mbegu-primary data-[state=active]:text-mbegu-dark"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send
                </TabsTrigger>
                <TabsTrigger 
                  id="history-tab"
                  value="history"
                  className="data-[state=active]:bg-mbegu-primary data-[state=active]:text-mbegu-dark"
                >
                  <Clock className="h-4 w-4 mr-2" />
                  History
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="deposit" className="p-6 space-y-4">
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="deposit-amount" className="text-white">Deposit Amount (KES)</Label>
                    <Input 
                      id="deposit-amount" 
                      type="number" 
                      placeholder="Enter amount" 
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                      className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white"
                    />
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4 text-sm">
                    <p className="text-white mb-2">M-Pesa Till Details:</p>
                    <p className="text-white/70">Till Number: <span className="text-mbegu-primary">175372</span></p>
                    <p className="text-white/70">Business Name: <span className="text-mbegu-primary">Mbegu Traders</span></p>
                    <div className="flex items-center mt-3 pt-3 border-t border-white/10">
                      <Mail className="h-4 w-4 text-mbegu-primary mr-2" />
                      <span className="text-white/70">Contact: <span className="text-mbegu-primary">info@mbegu.shop</span></span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium"
                    onClick={handleDeposit}
                  >
                    Deposit to Wallet
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="send" className="p-6 space-y-4">
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="recipient-phone" className="text-white">Recipient Phone</Label>
                    <Input 
                      id="recipient-phone" 
                      placeholder="07XX XXX XXX" 
                      value={recipientPhone}
                      onChange={(e) => setRecipientPhone(e.target.value)}
                      className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white"
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="send-amount" className="text-white">Amount (KES)</Label>
                    <Input 
                      id="send-amount" 
                      type="number" 
                      placeholder="Enter amount" 
                      value={sendAmount}
                      onChange={(e) => setSendAmount(e.target.value)}
                      className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white"
                    />
                  </div>
                  
                  <Button 
                    className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium"
                    onClick={handleSend}
                    disabled={Number(sendAmount) > walletBalance}
                  >
                    Send Money
                  </Button>
                  
                  {Number(sendAmount) > walletBalance && (
                    <p className="text-red-500 text-sm text-center">Insufficient funds in your wallet</p>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="history" className="p-6">
                <h3 className="text-white text-lg font-medium mb-4">Transaction History</h3>
                
                <div className="space-y-3">
                  {transactionHistory.map((transaction) => (
                    <div 
                      key={transaction.id} 
                      className="flex items-center justify-between p-3 bg-mbegu-dark/70 rounded-lg border border-white/10"
                    >
                      <div className="flex items-center">
                        {transaction.type === "deposit" ? (
                          <ArrowDown className="h-4 w-4 text-green-500 mr-3" />
                        ) : (
                          <ArrowRight className="h-4 w-4 text-amber-500 mr-3" />
                        )}
                        <div>
                          <p className="text-white capitalize">{transaction.type}</p>
                          <p className="text-white/70 text-xs">{transaction.date}</p>
                        </div>
                      </div>
                      <span className={`font-medium ${transaction.amount > 0 ? 'text-green-500' : 'text-amber-500'}`}>
                        {transaction.amount > 0 ? '+' : ''}{transaction.amount} KES
                      </span>
                    </div>
                  ))}
                  
                  {transactionHistory.length === 0 && (
                    <p className="text-white/70 text-center py-4">No transactions yet</p>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Wallet;
