
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "../ThemeProvider";
import { useToast } from "@/hooks/use-toast";
import { Button } from "../ui/button";
import { ShoppingBag, Bell, UserCircle, Star, Sprout } from "lucide-react";

export const Header: React.FC = () => {
  const { toast } = useToast();
  const location = useLocation();
  
  const handleNotification = () => {
    toast({
      title: "Mbegu Commercial Updates",
      description: "Welcome to our agricultural e-commerce platform",
      duration: 3000,
    });
  };

  const isActiveLink = (path: string) => {
    return location.pathname === path ? "text-mbegu-primary" : "text-white/80";
  };
  
  return (
    <header className="bg-mbegu-dark/95 backdrop-blur-sm sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="mr-4 flex items-center group">
              <Sprout className="h-5 w-5 text-mbegu-primary mr-2 group-hover:scale-110 transition-transform" />
              <h1 className="text-mbegu-primary text-xl font-bold">Mbegu Market</h1>
            </Link>
            
            <nav className="hidden md:flex space-x-6 ml-8">
              <Link 
                to="/" 
                className={`${isActiveLink("/")} hover:text-white text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-mbegu-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform`}
              >
                Home
              </Link>
              <Link 
                to="/inventory" 
                className={`${isActiveLink("/inventory")} hover:text-white text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-mbegu-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform`}
              >
                Products
              </Link>
              <Link 
                to="/analytics" 
                className={`${isActiveLink("/analytics")} hover:text-white text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-mbegu-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform`}
              >
                Market Trends
              </Link>
              <Link 
                to="/wallet" 
                className={`${isActiveLink("/wallet")} hover:text-white text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-mbegu-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform`}
              >
                Cart & Checkout
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center bg-mbegu-dark/50 border border-white/10 py-1 px-3 rounded-full">
              <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
              <span className="ml-1 text-sm text-white/80">Rewards Points</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative rounded-full hover:bg-mbegu-primary/20"
                onClick={handleNotification}
              >
                <Bell className="h-5 w-5 text-white/80" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-mbegu-primary rounded-full animate-pulse"></span>
              </Button>
              
              <Link to="/wallet">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-mbegu-primary/20 relative">
                  <ShoppingBag className="h-5 w-5 text-white/80" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-mbegu-primary text-mbegu-dark text-xs rounded-full flex items-center justify-center">3</span>
                </Button>
              </Link>
              
              <Link to="/profile">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-mbegu-primary/20">
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
