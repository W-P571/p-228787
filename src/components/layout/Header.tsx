
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "../ThemeProvider";
import { useToast } from "@/hooks/use-toast";
import { Button } from "../ui/button";
import { ShoppingBag, Bell, UserCircle, Star, Sprout, Menu, X, ChevronDown } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header: React.FC = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNotification = () => {
    toast({
      title: "Mbegu Updates",
      description: "Welcome to our new interactive platform",
      duration: 3000,
    });
  };

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-background/70 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="relative mr-2 h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary p-0.5 animate-glow">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
                  <Sprout className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <h1 className="text-xl font-bold gradient-text">Mbegu</h1>
            </Link>
            
            <nav className="hidden md:flex space-x-6 ml-8">
              <Link 
                to="/" 
                className={`text-sm font-medium transition-colors relative ${
                  isActiveLink("/") 
                    ? "text-primary" 
                    : "text-foreground/70 hover:text-foreground"
                } after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform`}
              >
                Home
              </Link>
              <Link 
                to="/inventory" 
                className={`text-sm font-medium transition-colors relative ${
                  isActiveLink("/inventory") 
                    ? "text-primary" 
                    : "text-foreground/70 hover:text-foreground"
                } after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform`}
              >
                Products
              </Link>
              <Link 
                to="/analytics" 
                className={`text-sm font-medium transition-colors relative ${
                  isActiveLink("/analytics") 
                    ? "text-primary" 
                    : "text-foreground/70 hover:text-foreground"
                } after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform`}
              >
                Market Trends
              </Link>
              <Link 
                to="/wallet" 
                className={`text-sm font-medium transition-colors relative ${
                  isActiveLink("/wallet") 
                    ? "text-primary" 
                    : "text-foreground/70 hover:text-foreground"
                } after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform`}
              >
                Wallet
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-1 md:space-x-3">
            <div className="hidden md:flex items-center space-x-1 md:space-x-3">
              <div className="hidden lg:flex items-center bg-muted p-1.5 pl-3 rounded-full">
                <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                <span className="ml-1 text-xs text-foreground/80">150 Points</span>
              </div>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="relative rounded-full hover:bg-primary/20"
                      onClick={handleNotification}
                    >
                      <Bell className="h-5 w-5 text-foreground/80" />
                      <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Notifications</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link to="/cart">
                      <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20 relative">
                        <ShoppingBag className="h-5 w-5 text-foreground/80" />
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">3</span>
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>View Cart (3 items)</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full hover:bg-primary/20"
                >
                  <UserCircle className="h-5 w-5 text-foreground/80" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <Link to="/profile">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                </Link>
                <Link to="/wallet">
                  <DropdownMenuItem>Wallet & Payments</DropdownMenuItem>
                </Link>
                <Link to="/auth">
                  <DropdownMenuItem>Sign In / Register</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <ThemeToggle />
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden animated-slide-up py-4 px-4 space-y-4 bg-card">
          <Link 
            to="/" 
            className={`block py-2 px-3 rounded-lg ${isActiveLink("/") ? "bg-primary/10 text-primary" : "text-foreground/70"}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/inventory" 
            className={`block py-2 px-3 rounded-lg ${isActiveLink("/inventory") ? "bg-primary/10 text-primary" : "text-foreground/70"}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Products
          </Link>
          <Link 
            to="/analytics" 
            className={`block py-2 px-3 rounded-lg ${isActiveLink("/analytics") ? "bg-primary/10 text-primary" : "text-foreground/70"}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Market Trends
          </Link>
          <Link 
            to="/wallet" 
            className={`block py-2 px-3 rounded-lg ${isActiveLink("/wallet") ? "bg-primary/10 text-primary" : "text-foreground/70"}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Wallet
          </Link>
          <Link 
            to="/cart" 
            className={`block py-2 px-3 rounded-lg ${isActiveLink("/cart") ? "bg-primary/10 text-primary" : "text-foreground/70"}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Cart
            <span className="ml-2 inline-flex items-center justify-center rounded-full bg-primary text-xs text-primary-foreground h-5 w-5">3</span>
          </Link>
        </div>
      )}
    </header>
  );
};
