
import React from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../ThemeProvider";
import { useToast } from "@/hooks/use-toast";
import { Button } from "../ui/button";
import { Bell, UserCircle, Star, Sprout, Layers } from "lucide-react";

export const Header: React.FC = () => {
  const { toast } = useToast();
  
  const handleNotification = () => {
    toast({
      title: "Mbegu Commercial Partners & Traders Notification",
      description: "Welcome to the agricultural business platform for modern farming",
      duration: 3000,
    });
  };
  
  return (
    <header className="bg-mbegu-dark/95 backdrop-blur-sm sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="mr-4 flex items-center">
              <Sprout className="h-5 w-5 text-mbegu-primary mr-2" />
              <h1 className="text-mbegu-primary text-xl font-bold">Mbegu Commercial Partners & Traders</h1>
            </Link>
            
            <div className="hidden md:flex space-x-4 ml-8">
              <Link to="/" className="text-white/80 hover:text-white text-sm font-medium transition">Dashboard</Link>
              <Link to="/" className="text-white/80 hover:text-white text-sm font-medium transition">Inventory</Link>
              <Link to="/" className="text-white/80 hover:text-white text-sm font-medium transition">Analytics</Link>
              <Link to="/wallet" className="text-white/80 hover:text-white text-sm font-medium transition">Marketplace</Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center bg-mbegu-dark/50 border border-white/10 py-1 px-3 rounded-full">
              <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
              <span className="ml-1 text-sm text-white/80">180 FieldCreds</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="hidden md:flex bg-mbegu-primary/20 text-mbegu-primary text-xs font-medium px-3 py-1 rounded-full items-center">
                <Layers className="h-3 w-3 mr-1" />
                <span>AgriOS v1.2</span>
              </div>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative rounded-full"
                onClick={handleNotification}
              >
                <Bell className="h-5 w-5 text-white/80" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-mbegu-primary rounded-full"></span>
              </Button>
              
              <Link to="/wallet">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <UserCircle className="h-5 w-5 text-white/80" />
                </Button>
              </Link>
              
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
