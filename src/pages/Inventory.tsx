
import React from "react";
import { Header } from "../components/layout/Header";
import { Sidebar } from "../components/layout/Sidebar";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/ui/ProductCard";

const Inventory: React.FC = () => {
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
              <h1 className="text-3xl font-bold text-white mb-4">Inventory Management</h1>
              <p className="text-white/70 mb-6">Track and manage your agricultural products</p>
              
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/50" />
                <Input
                  placeholder="Search inventory..."
                  className="pl-10 bg-mbegu-dark/70 border-white/10 text-white"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProductCard 
                title="Premium Seeds"
                description="High-quality agricultural seeds"
                price={29.99}
                status="In Stock"
                image="/placeholder.svg"
              />
              <ProductCard 
                title="Organic Fertilizer"
                description="Natural soil enhancement"
                price={49.99}
                status="Low Stock"
                image="/placeholder.svg"
              />
              <ProductCard 
                title="Growth Boosters"
                description="Advanced plant nutrients"
                price={34.99}
                status="In Stock"
                image="/placeholder.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
