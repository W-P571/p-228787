
import React, { useState } from "react";
import { PageLayout } from "../components/layout/PageLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { User, Settings, ShoppingBag, Phone, CreditCard, Mail, Globe, Bell } from "lucide-react";

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const { toast } = useToast();
  
  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully.",
      duration: 3000,
    });
  };
  
  const handleConnectGoogle = () => {
    toast({
      title: "Google Integration",
      description: "Google authentication integration coming soon.",
      duration: 3000,
    });
  };

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">Your Profile</h1>
        <p className="text-white/70 mb-6">Manage your account details and preferences</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-mbegu-card border-white/10 md:col-span-1">
            <CardContent className="p-4">
              <div className="flex flex-col items-center space-y-4 mb-6 mt-4">
                <Avatar className="h-20 w-20 border-2 border-mbegu-primary">
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback className="bg-mbegu-primary/20 text-white">MB</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-white text-lg font-medium">Mbegu User</h3>
                  <p className="text-white/60 text-sm">Basic Account</p>
                </div>
              </div>
              
              <nav className="space-y-1">
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start ${activeTab === "profile" ? "bg-mbegu-primary/20 text-mbegu-primary" : "text-white"}`}
                  onClick={() => setActiveTab("profile")}
                >
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start ${activeTab === "orders" ? "bg-mbegu-primary/20 text-mbegu-primary" : "text-white"}`}
                  onClick={() => setActiveTab("orders")}
                >
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Orders
                </Button>
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start ${activeTab === "settings" ? "bg-mbegu-primary/20 text-mbegu-primary" : "text-white"}`}
                  onClick={() => setActiveTab("settings")}
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </nav>
            </CardContent>
          </Card>
          
          <Card className="bg-mbegu-card border-white/10 md:col-span-3">
            <CardContent className="p-0">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-3 rounded-none bg-white/5">
                  <TabsTrigger 
                    value="profile"
                    className="data-[state=active]:bg-mbegu-primary data-[state=active]:text-mbegu-dark"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </TabsTrigger>
                  <TabsTrigger 
                    value="orders"
                    className="data-[state=active]:bg-mbegu-primary data-[state=active]:text-mbegu-dark"
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Orders
                  </TabsTrigger>
                  <TabsTrigger 
                    value="settings"
                    className="data-[state=active]:bg-mbegu-primary data-[state=active]:text-mbegu-dark"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="profile" className="p-6 space-y-4">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullname" className="text-white">Full Name</Label>
                        <Input 
                          id="fullname" 
                          defaultValue="Mbegu User"
                          className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">Email Address</Label>
                        <Input 
                          id="email" 
                          defaultValue="user@mbegu.shop"
                          className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white">Phone Number</Label>
                        <Input 
                          id="phone" 
                          defaultValue="0712 345 678"
                          className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="location" className="text-white">Location</Label>
                        <Input 
                          id="location" 
                          defaultValue="Nairobi, Kenya"
                          className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white"
                        />
                      </div>
                    </div>
                    
                    <div className="pt-4 mt-4 border-t border-white/10">
                      <h3 className="text-white font-medium mb-4">Connected Accounts</h3>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-mbegu-dark/70 rounded-lg">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">
                              <Mail className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <p className="text-white text-sm font-medium">Email & Password</p>
                              <p className="text-white/60 text-xs">Primary Sign-in Method</p>
                            </div>
                          </div>
                          <span className="text-green-400 text-xs">Connected</span>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-mbegu-dark/70 rounded-lg">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">
                              <Globe className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <p className="text-white text-sm font-medium">Google</p>
                              <p className="text-white/60 text-xs">Connect with your Google account</p>
                            </div>
                          </div>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="text-white border-white/20"
                            onClick={handleConnectGoogle}
                          >
                            Connect
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      className="bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium"
                      onClick={handleSaveProfile}
                    >
                      Save Profile
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="orders" className="p-6">
                  <div className="space-y-4">
                    <div className="bg-mbegu-dark/50 rounded-lg p-4 border border-white/10">
                      <div className="flex flex-col md:flex-row justify-between">
                        <div className="mb-3 md:mb-0">
                          <p className="text-white/70 text-sm">Order #MBG-2025-001</p>
                          <h3 className="text-white font-medium">3x Victoria F1 Seedlings</h3>
                          <p className="text-white/60 text-xs">Placed on: April 15, 2025</p>
                        </div>
                        <div className="flex flex-col items-start md:items-end">
                          <span className="text-mbegu-primary font-medium">KES 390</span>
                          <span className="text-green-400 text-xs px-2 py-1 bg-green-400/10 rounded-full mt-1">
                            Delivered
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-mbegu-dark/50 rounded-lg p-4 border border-white/10">
                      <div className="flex flex-col md:flex-row justify-between">
                        <div className="mb-3 md:mb-0">
                          <p className="text-white/70 text-sm">Order #MBG-2025-002</p>
                          <h3 className="text-white font-medium">5x Baraka F1 Seedlings</h3>
                          <p className="text-white/60 text-xs">Placed on: April 10, 2025</p>
                        </div>
                        <div className="flex flex-col items-start md:items-end">
                          <span className="text-mbegu-primary font-medium">KES 650</span>
                          <span className="text-amber-400 text-xs px-2 py-1 bg-amber-400/10 rounded-full mt-1">
                            Processing
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center py-4">
                      <Button variant="outline" className="border-white/20 text-white">
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        View All Orders
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="settings" className="p-6 space-y-4">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-white font-medium mb-4">Notifications</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Bell className="h-4 w-4 text-mbegu-primary mr-2" />
                            <Label htmlFor="order-updates" className="text-white cursor-pointer">
                              Order Updates
                            </Label>
                          </div>
                          <Switch id="order-updates" defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Bell className="h-4 w-4 text-mbegu-primary mr-2" />
                            <Label htmlFor="promotions" className="text-white cursor-pointer">
                              Promotions & Offers
                            </Label>
                          </div>
                          <Switch id="promotions" defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Bell className="h-4 w-4 text-mbegu-primary mr-2" />
                            <Label htmlFor="newsletter" className="text-white cursor-pointer">
                              Newsletter
                            </Label>
                          </div>
                          <Switch id="newsletter" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-white/10">
                      <h3 className="text-white font-medium mb-4">Payment Methods</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-mbegu-dark/70 rounded-lg border border-white/10">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-mbegu-primary/20 rounded-full flex items-center justify-center mr-3">
                              <Phone className="h-4 w-4 text-mbegu-primary" />
                            </div>
                            <div>
                              <p className="text-white text-sm font-medium">M-Pesa</p>
                              <p className="text-white/60 text-xs">+254 7XX XXX XXX</p>
                            </div>
                          </div>
                          <span className="text-mbegu-primary text-xs">Default</span>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-mbegu-dark/70 rounded-lg border border-white/10">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">
                              <CreditCard className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <p className="text-white text-sm font-medium">Mbegu Wallet</p>
                              <p className="text-white/60 text-xs">Balance: KES 500</p>
                            </div>
                          </div>
                          <Button size="sm" variant="outline" className="text-white border-white/20">
                            Top Up
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      className="bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium"
                      onClick={handleSaveProfile}
                    >
                      Save Settings
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Profile;
