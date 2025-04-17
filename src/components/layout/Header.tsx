
import React from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../ThemeProvider";
import { useToast } from "@/hooks/use-toast";
import { Button } from "../ui/button";
import { Bell, UserCircle, Star } from "lucide-react";

export const Header: React.FC = () => {
  const { toast } = useToast();
  
  const handleNotification = () => {
    toast({
      title: "Welcome to Mbegu Traders",
      description: "Thanks for visiting our seedlings platform!",
      duration: 3000,
    });
  };
  
  return (
    <header className="bg-mbegu-dark/80 backdrop-blur-sm sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="mr-4">
              <h1 className="text-mbegu-primary text-xl font-bold">Mbegu Traders</h1>
            </Link>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center bg-mbegu-dark/50 border border-white/10 py-1 px-3 rounded-full">
              <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
              <span className="ml-1 text-sm text-white/80">180 points</span>
            </div>
            
            <div className="flex items-center space-x-2">
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
