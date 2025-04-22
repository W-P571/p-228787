
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Lock, CheckCircle, Clock, LineChart, Database, Layers, Cpu, Sprout, CloudRain, Thermometer, Wind } from "lucide-react";

export const Dashboard: React.FC = () => {
  const isSignedIn = false; // This would be determined by your auth state

  return (
    <section className="py-8">
      <Card className="bg-mbegu-card border-white/10 max-w-3xl mx-auto overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-mbegu-gray to-mbegu-dark/80 border-b border-white/10">
          <CardTitle className="text-white flex items-center">
            <Cpu className="h-5 w-5 mr-2 text-mbegu-primary" />
            MbeguOS Control Center
          </CardTitle>
        </CardHeader>
        
        <CardContent className="p-6">
          {isSignedIn ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h3 className="text-white/70 text-sm mb-1">System Resources</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-medium text-white">25 Units Available</p>
                    <Layers className="h-5 w-5 text-mbegu-primary" />
                  </div>
                  <div className="mt-2 h-1 w-full bg-white/10 rounded-full">
                    <div className="h-full w-1/3 bg-mbegu-primary rounded-full"></div>
                  </div>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h3 className="text-white/70 text-sm mb-1">AgriCredits Balance</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-medium text-mbegu-primary">KES 2,500</p>
                    <Database className="h-5 w-5 text-mbegu-primary" />
                  </div>
                  <div className="mt-2 flex items-center">
                    <LineChart className="h-3 w-3 text-green-500 mr-1" />
                    <span className="text-xs text-green-500">+12% this month</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-white text-lg font-medium mb-3">Operation Logs</h3>
                <div className="space-y-3">
                  <div className="bg-white/5 p-3 rounded-lg border border-white/10 flex justify-between items-center">
                    <div>
                      <p className="text-white font-medium">SYS_12345</p>
                      <p className="text-white/70 text-sm">Resource Allocation: Victoria F1 (50)</p>
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
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white/70 text-sm">Temperature</h3>
                    <Thermometer className="h-4 w-4 text-amber-500" />
                  </div>
                  <p className="text-xl font-medium text-white">24°C</p>
                  <p className="text-white/50 text-xs">Optimal for germination</p>
                </div>
                <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white/70 text-sm">Precipitation</h3>
                    <CloudRain className="h-4 w-4 text-blue-500" />
                  </div>
                  <p className="text-xl font-medium text-white">80%</p>
                  <p className="text-white/50 text-xs">High rainfall expected</p>
                </div>
                <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white/70 text-sm">Wind Speed</h3>
                    <Wind className="h-4 w-4 text-green-500" />
                  </div>
                  <p className="text-xl font-medium text-white">12 km/h</p>
                  <p className="text-white/50 text-xs">Safe for field operations</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h3 className="text-white/70 text-sm mb-1">System Resources</h3>
                  <div className="flex items-center text-white">
                    <Lock className="h-4 w-4 mr-2 text-white/50" />
                    <p className="italic text-white/50">Authentication required</p>
                  </div>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h3 className="text-white/70 text-sm mb-1">AgriCredits Balance</h3>
                  <div className="flex items-center text-white">
                    <Lock className="h-4 w-4 mr-2 text-white/50" />
                    <p className="italic text-white/50">Authentication required</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-white text-lg font-medium mb-3">Operation Logs</h3>
                <div className="bg-white/5 p-6 rounded-lg border border-white/10 text-center">
                  <Sprout className="h-12 w-12 text-mbegu-primary/50 mx-auto mb-4" />
                  <p className="text-white/70 mb-4">Authenticate to access the MbeguOS platform and manage your agricultural operations</p>
                  <Button className="bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium">
                    System Access
                  </Button>
                </div>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg border border-white/20">
                <h3 className="text-white text-sm font-medium mb-2">Public System Status</h3>
                <div className="flex items-center mb-2">
                  <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                  <p className="text-white/70 text-sm">All agricultural modules operating normally</p>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-white/50 mr-2" />
                  <p className="text-white/50 text-xs">Last system update: 13 minutes ago</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
};
