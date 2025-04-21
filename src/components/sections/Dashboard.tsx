
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Lock, CheckCircle, Clock, TrendingUp } from "lucide-react";

export const Dashboard: React.FC = () => {
  const isSignedIn = false; // This would be determined by your auth state

  return (
    <section className="py-8">
      <Card className="bg-mbegu-card border-white/10 max-w-3xl mx-auto overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-mbegu-gray to-mbegu-dark/80 border-b border-white/10">
          <CardTitle className="text-white flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-mbegu-primary" />
            Your Dashboard
          </CardTitle>
        </CardHeader>
        
        <CardContent className="p-6">
          {isSignedIn ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h3 className="text-white/70 text-sm mb-1">Victoria F1 Remaining</h3>
                  <p className="text-xl font-medium text-white">25 seedlings</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h3 className="text-white/70 text-sm mb-1">Wallet Balance</h3>
                  <p className="text-xl font-medium text-mbegu-primary">KES 2,500</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-white text-lg font-medium mb-3">Order Summary</h3>
                <div className="space-y-3">
                  <div className="bg-white/5 p-3 rounded-lg border border-white/10 flex justify-between items-center">
                    <div>
                      <p className="text-white font-medium">Order #12345</p>
                      <p className="text-white/70 text-sm">Victoria F1 (50)</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-mbegu-primary mb-1">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        <span className="text-sm font-medium">Processing</span>
                      </div>
                      <p className="text-white/70 text-xs">May 15, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h3 className="text-white/70 text-sm mb-1">Victoria F1 Remaining</h3>
                  <div className="flex items-center text-white">
                    <Lock className="h-4 w-4 mr-2 text-white/50" />
                    <p className="italic text-white/50">Sign in to view</p>
                  </div>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h3 className="text-white/70 text-sm mb-1">Wallet Balance</h3>
                  <div className="flex items-center text-white">
                    <Lock className="h-4 w-4 mr-2 text-white/50" />
                    <p className="italic text-white/50">Sign in to view</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-white text-lg font-medium mb-3">Order Summary</h3>
                <div className="bg-white/5 p-6 rounded-lg border border-white/10 text-center">
                  <p className="text-white/70 mb-4">Sign in to view your order details and track deliveries</p>
                  <Button className="bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium">
                    Sign In
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
};
