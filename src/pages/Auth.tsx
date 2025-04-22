
import React, { useState } from "react";
import { PageLayout } from "../components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User, Phone, ChevronRight, AlertCircle } from "lucide-react";

const Auth: React.FC = () => {
  const [activeTab, setActiveTab] = useState("login");
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Logged in successfully",
      description: "Welcome back to Mbegu Market!",
      duration: 3000,
    });
    navigate("/profile");
  };
  
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Account created successfully",
      description: "Welcome to Mbegu Market!",
      duration: 3000,
    });
    navigate("/profile");
  };
  
  const handleGoogleAuth = () => {
    toast({
      title: "Google Authentication",
      description: "Google sign-in integration coming soon.",
      duration: 3000,
    });
  };
  
  return (
    <PageLayout>
      <div className="max-w-md mx-auto">
        <Card className="bg-mbegu-card border-white/10">
          <CardHeader className="text-center">
            <CardTitle className="text-white text-2xl">Welcome to Mbegu Market</CardTitle>
            <CardDescription className="text-white/70">
              Sign in or create an account to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2 rounded-lg bg-mbegu-dark/50">
                <TabsTrigger
                  value="login"
                  className="data-[state=active]:bg-mbegu-primary data-[state=active]:text-mbegu-dark"
                >
                  Sign In
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  className="data-[state=active]:bg-mbegu-primary data-[state=active]:text-mbegu-dark"
                >
                  Create Account
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="mt-6">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                      <Input
                        id="email"
                        placeholder="Enter your email"
                        type="email"
                        required
                        className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="password" className="text-white">Password</Label>
                      <a href="#" className="text-mbegu-primary text-sm hover:underline">
                        Forgot Password?
                      </a>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                      <Input
                        id="password"
                        placeholder="Enter your password"
                        type="password"
                        required
                        className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-white cursor-pointer text-sm">
                      Remember me
                    </Label>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium"
                  >
                    Sign In
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="signup" className="mt-6">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="full-name" className="text-white">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                      <Input
                        id="full-name"
                        placeholder="Enter your full name"
                        required
                        className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="text-white">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                      <Input
                        id="signup-email"
                        placeholder="Enter your email"
                        type="email"
                        required
                        className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone-number" className="text-white">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                      <Input
                        id="phone-number"
                        placeholder="e.g., 0712345678"
                        required
                        className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-white">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                      <Input
                        id="signup-password"
                        placeholder="Create a password"
                        type="password"
                        required
                        className="bg-mbegu-dark/70 border-mbegu-dark/90 text-white pl-10"
                      />
                    </div>
                    <p className="text-white/60 text-xs">
                      Must be at least 8 characters with a number and special character.
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-white cursor-pointer text-sm">
                      I agree to the <a href="#" className="text-mbegu-primary hover:underline">Terms of Service</a> and <a href="#" className="text-mbegu-primary hover:underline">Privacy Policy</a>
                    </Label>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium"
                  >
                    Create Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
            
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-mbegu-card px-2 text-white/60">Or continue with</span>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-1 gap-3">
                <Button 
                  variant="outline" 
                  className="border-white/10 text-white hover:bg-white/10 font-medium"
                  onClick={handleGoogleAuth}
                >
                  <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </Button>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="bg-mbegu-dark/30 border-t border-white/10 p-4">
            <div className="flex flex-col items-center space-y-2 w-full">
              <div className="bg-white/5 p-3 rounded-lg w-full">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-mbegu-primary mr-2 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-medium">Demo Account</p>
                    <p className="text-white/70 text-xs">
                      For testing, use <span className="text-mbegu-primary">user@mbegu.shop</span> / <span className="text-mbegu-primary">password123</span>
                    </p>
                  </div>
                </div>
              </div>
              
              <a href="/inventory" className="text-mbegu-primary text-sm flex items-center hover:underline">
                Continue as guest <ChevronRight className="h-3 w-3 ml-1" />
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Auth;
