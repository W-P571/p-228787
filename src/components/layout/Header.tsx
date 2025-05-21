
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "../ThemeProvider";
import { useToast } from "@/hooks/use-toast";
import { Button } from "../ui/button";
import { ShoppingBag, Bell, UserCircle, Sprout, Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const Header: React.FC = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeOfDay, setTimeOfDay] = useState("");
  
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

  // Determine time of day for personalized greeting
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setTimeOfDay("morning");
    } else if (hour >= 12 && hour < 18) {
      setTimeOfDay("afternoon");
    } else {
      setTimeOfDay("evening");
    }
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNotification = () => {
    toast({
      title: `Good ${timeOfDay}!`,
      description: "We've got some exciting updates for you today. Check them out!",
      duration: 3000,
    });
  };

  const handleChatSupport = () => {
    toast({
      title: "Mbegu Support",
      description: "Our support team will be with you shortly. Thank you for your patience!",
      duration: 5000,
    });
  };

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "backdrop-blur-md bg-background/70 shadow-sm border-b border-border/50" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group mr-8">
              <div className="relative mr-2 h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary p-0.5">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-background/70 backdrop-blur-sm">
                  <Sprout className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Mbegu
              </span>
            </Link>
            
            <div className="hidden lg:block">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/" 
                        className={cn(
                          "px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted",
                          isActiveLink("/") && "bg-primary/10 text-primary font-medium"
                        )}
                      >
                        Home
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm">
                      Products
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link 
                              to="/inventory" 
                              className="block p-3 space-y-1 rounded-md hover:bg-muted"
                            >
                              <div className="text-sm font-medium">Seedlings</div>
                              <p className="text-xs text-muted-foreground">
                                Premium hybrid seedlings for maximum yield
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link 
                              to="/inventory" 
                              className="block p-3 space-y-1 rounded-md hover:bg-muted"
                            >
                              <div className="text-sm font-medium">Equipment</div>
                              <p className="text-xs text-muted-foreground">
                                High-quality tools for modern farming
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/analytics" 
                        className={cn(
                          "px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted",
                          isActiveLink("/analytics") && "bg-primary/10 text-primary font-medium"
                        )}
                      >
                        Market Trends
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/wallet" 
                        className={cn(
                          "px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted",
                          isActiveLink("/wallet") && "bg-primary/10 text-primary font-medium"
                        )}
                      >
                        Wallet
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="hidden md:flex items-center space-x-1">
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative rounded-full hover:bg-primary/10"
                onClick={handleNotification}
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="relative rounded-full hover:bg-primary/10"
                onClick={handleChatSupport}
              >
                <MessageCircle className="h-5 w-5" />
              </Button>
              
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 relative">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">3</span>
                </Button>
              </Link>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="rounded-full border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/30 hidden md:flex"
                >
                  <UserCircle className="h-4 w-4 mr-2" />
                  <span className="text-sm">Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-4 py-3 border-b border-border">
                  <p className="text-sm font-medium">Good {timeOfDay}</p>
                  <p className="text-xs text-muted-foreground">Welcome to Mbegu!</p>
                </div>
                <Link to="/profile">
                  <DropdownMenuItem className="cursor-pointer">
                    <UserCircle className="h-4 w-4 mr-2" />
                    Profile
                  </DropdownMenuItem>
                </Link>
                <Link to="/wallet">
                  <DropdownMenuItem className="cursor-pointer">
                    Wallet & Payments
                  </DropdownMenuItem>
                </Link>
                <Link to="/auth">
                  <DropdownMenuItem className="cursor-pointer">
                    Sign In / Register
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <ThemeToggle />
            
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }} 
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden py-4 px-4 space-y-3 border-t border-border/50 bg-background/80 backdrop-blur-md"
        >
          <Link 
            to="/" 
            className={cn(
              "block py-3 px-4 rounded-lg transition-colors",
              isActiveLink("/") ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted"
            )}
          >
            Home
          </Link>
          
          <div className="py-3 px-4 rounded-lg">
            <div className="flex items-center justify-between cursor-pointer">
              <span>Products</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="mt-2 ml-4 space-y-2">
              <Link to="/inventory" className="block py-2 px-3 text-sm hover:text-primary">
                Seedlings
              </Link>
              <Link to="/inventory" className="block py-2 px-3 text-sm hover:text-primary">
                Equipment
              </Link>
            </div>
          </div>
          
          <Link 
            to="/analytics" 
            className={cn(
              "block py-3 px-4 rounded-lg transition-colors",
              isActiveLink("/analytics") ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted"
            )}
          >
            Market Trends
          </Link>
          
          <Link 
            to="/wallet" 
            className={cn(
              "block py-3 px-4 rounded-lg transition-colors",
              isActiveLink("/wallet") ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted"
            )}
          >
            Wallet
          </Link>
          
          <div className="flex items-center justify-between py-3 px-4 border-t border-border/50">
            <Link 
              to="/cart" 
              className="flex items-center space-x-2"
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Cart</span>
              <span className="ml-2 inline-flex items-center justify-center rounded-full bg-primary text-xs text-primary-foreground h-5 w-5">3</span>
            </Link>
            
            <Link to="/profile">
              <Button 
                variant="outline" 
                size="sm"
                className="rounded-full border-primary/20"
              >
                Account
              </Button>
            </Link>
          </div>
          
          <div className="py-3 px-4 text-center text-sm text-muted-foreground border-t border-border/50">
            <p>Good {timeOfDay}! How can we help you today?</p>
            <Button 
              variant="link" 
              size="sm" 
              className="mt-2 text-primary"
              onClick={handleChatSupport}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Chat with support
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
};
