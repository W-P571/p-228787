
import React from "react";
import { Header } from "../components/layout/Header";
import { Sidebar } from "../components/layout/Sidebar";
import { BarChart2, Leaf, TrendingUp, Cloud } from "lucide-react";
import { Card } from "@/components/ui/card";

const Analytics: React.FC = () => {
  return (
    <div className="bg-mbegu-dark min-h-screen overflow-x-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/5 md:min-h-screen">
            <Sidebar />
          </div>
          <div className="w-full md:w-4/5 p-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-4">Agricultural Analytics</h1>
              <p className="text-white/70">Monitor and analyze your agricultural data</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 bg-mbegu-card border-white/10">
                <div className="flex items-center mb-4">
                  <Leaf className="h-6 w-6 text-mbegu-primary mr-2" />
                  <h3 className="text-lg font-semibold text-white">Crop Health</h3>
                </div>
                <p className="text-white/70 mb-4">Monitor crop health and growth patterns</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-mbegu-primary">98%</span>
                  <TrendingUp className="h-5 w-5 text-green-500" />
                </div>
              </Card>
              
              <Card className="p-6 bg-mbegu-card border-white/10">
                <div className="flex items-center mb-4">
                  <Cloud className="h-6 w-6 text-mbegu-primary mr-2" />
                  <h3 className="text-lg font-semibold text-white">Weather Impact</h3>
                </div>
                <p className="text-white/70 mb-4">Analyze weather patterns and impact</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-mbegu-primary">Favorable</span>
                  <TrendingUp className="h-5 w-5 text-green-500" />
                </div>
              </Card>
              
              <Card className="p-6 bg-mbegu-card border-white/10">
                <div className="flex items-center mb-4">
                  <BarChart2 className="h-6 w-6 text-mbegu-primary mr-2" />
                  <h3 className="text-lg font-semibold text-white">Yield Forecast</h3>
                </div>
                <p className="text-white/70 mb-4">Predict and optimize crop yields</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-mbegu-primary">+12%</span>
                  <TrendingUp className="h-5 w-5 text-green-500" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
