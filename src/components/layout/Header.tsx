
import React, { useState } from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X, ShoppingCart, User, Wallet } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [walletBalance, setWalletBalance] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignIn = () => {
    // This would be replaced with actual authentication logic
    setIsSignedIn(true);
    setWalletBalance(500); // Mock balance for demo
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
  };

  return (
    <header className="bg-mbegu-dark/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-white font-display font-bold text-xl">
            Mbegu Traders
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:text-mbegu-primary focus:bg-white/10 focus:text-mbegu-primary focus:outline-none"
                  )}
                  href="/"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-mbegu-primary">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-mbegu-gray/50 to-mbegu-gray p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium text-white">
                            Featured Products
                          </div>
                          <p className="text-sm leading-tight text-white/80">
                            Discover our premium seedlings for your farm
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-mbegu-gray/30 hover:text-mbegu-primary focus:bg-mbegu-gray/30 focus:text-mbegu-primary"
                          href="/"
                        >
                          <div className="text-sm font-medium leading-none text-white">
                            Vegetable Seedlings
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-white/70">
                            High-quality hybrid vegetable seedlings
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-mbegu-gray/30 hover:text-mbegu-primary focus:bg-mbegu-gray/30 focus:text-mbegu-primary"
                          href="/"
                        >
                          <div className="text-sm font-medium leading-none text-white">
                            Fruit Seedlings
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-white/70">
                            Robust fruit tree seedlings for your orchard
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:text-mbegu-primary focus:bg-white/10 focus:text-mbegu-primary focus:outline-none"
                  )}
                  href="/"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:text-mbegu-primary focus:bg-white/10 focus:text-mbegu-primary focus:outline-none"
                  )}
                  href="/"
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* User Controls */}
        <div className="flex items-center gap-4">
          {isSignedIn ? (
            <>
              <div className="hidden md:flex items-center mr-2 bg-mbegu-dark/60 rounded-full px-3 py-1 border border-white/10">
                <Wallet className="h-4 w-4 text-mbegu-primary mr-1" />
                <span className="text-white text-sm">{walletBalance} KES</span>
              </div>
              <Link to="/wallet">
                <Button size="sm" variant="ghost" className="text-white hover:text-mbegu-primary">
                  <Wallet className="h-5 w-5" />
                </Button>
              </Link>
              <Button size="sm" variant="ghost" className="text-white hover:text-mbegu-primary">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                onClick={handleSignOut} 
                className="hidden md:flex border-white/10 text-white hover:bg-white/10"
              >
                Sign Out
              </Button>
            </>
          ) : (
            <Button 
              size="sm" 
              variant="outline" 
              onClick={handleSignIn} 
              className="hidden md:flex border-white/10 text-white hover:bg-white/10"
            >
              Sign In
            </Button>
          )}
          <Button size="sm" variant="ghost" className="text-white hover:text-mbegu-primary">
            <User className="h-5 w-5" />
          </Button>
          <Button 
            size="sm"
            variant="ghost"
            className="md:hidden text-white hover:text-mbegu-primary"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-mbegu-dark border-t border-white/10 animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <a href="/" className="text-white hover:text-mbegu-primary py-2 font-medium">Home</a>
            <a href="/" className="text-white hover:text-mbegu-primary py-2 font-medium">Products</a>
            <a href="/" className="text-white hover:text-mbegu-primary py-2 font-medium">About</a>
            <a href="/" className="text-white hover:text-mbegu-primary py-2 font-medium">Contact</a>
            
            {isSignedIn ? (
              <>
                <div className="flex items-center py-2">
                  <Wallet className="h-4 w-4 text-mbegu-primary mr-2" />
                  <span className="text-white">{walletBalance} KES</span>
                </div>
                <Link to="/wallet" className="text-white hover:text-mbegu-primary py-2 font-medium">
                  My Wallet
                </Link>
                <Button 
                  variant="outline" 
                  onClick={handleSignOut} 
                  className="mt-2 w-full border-white/10 text-white hover:bg-white/10"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Button 
                variant="outline" 
                onClick={handleSignIn} 
                className="mt-2 w-full border-white/10 text-white hover:bg-white/10"
              >
                Sign In
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};
