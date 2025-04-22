
import React, { useState } from "react";
import { PageLayout } from "../components/layout/PageLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingCart, ArrowRight, Leaf, Truck } from "lucide-react";
import { MpesaCheckout } from "../components/checkout/MpesaCheckout";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Victoria F1 Seedlings",
      price: 130,
      quantity: 2,
      image: "/placeholder.svg"
    },
    {
      id: "2",
      name: "Baraka F1 Seedlings",
      price: 150,
      quantity: 1,
      image: "/placeholder.svg"
    }
  ]);
  
  const [showCheckout, setShowCheckout] = useState(false);
  const { toast } = useToast();
  
  const updateQuantity = (id: string, change: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };
  
  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart",
      duration: 3000,
    });
  };
  
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryFee = 100;
  const total = subtotal + deliveryFee;
  
  const handleProceedToCheckout = () => {
    setShowCheckout(true);
  };
  
  const handleBackToCart = () => {
    setShowCheckout(false);
  };
  
  // Animate cart items
  const getAnimationDelay = (index: number) => {
    return `${index * 100}ms`;
  };
  
  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto px-4 py-8 animate-fade-in">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">
            {!showCheckout ? (
              <>
                <ShoppingCart className="inline-block mr-2 h-7 w-7" />
                Your Cart
              </>
            ) : (
              <>Checkout</>
            )}
          </h1>
          {!showCheckout && cartItems.length > 0 && (
            <span className="bg-mbegu-primary text-mbegu-dark px-3 py-1 rounded-full text-sm font-medium">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
            </span>
          )}
        </div>
        
        {!showCheckout ? (
          <>
            {cartItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                  {cartItems.map((item, index) => (
                    <Card 
                      key={item.id} 
                      className="bg-mbegu-card border-white/10 animate-fade-in hover:border-mbegu-primary/30 transition-colors"
                      style={{ animationDelay: getAnimationDelay(index) }}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center">
                          <div className="w-16 h-16 rounded-md bg-mbegu-dark/50 mr-4 relative overflow-hidden">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Leaf className="h-6 w-6 text-mbegu-primary/80" />
                            </div>
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="text-white font-medium">{item.name}</h3>
                            <p className="text-mbegu-primary font-bold">KES {item.price}</p>
                          </div>
                          
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 rounded-full border-white/20"
                                onClick={() => updateQuantity(item.id, -1)}
                              >
                                <Minus className="h-3 w-3 text-white" />
                              </Button>
                              
                              <span className="text-white font-medium w-5 text-center">
                                {item.quantity}
                              </span>
                              
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 rounded-full border-white/20"
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <Plus className="h-3 w-3 text-white" />
                              </Button>
                            </div>
                            
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-full hover:bg-white/10 text-white/60"
                              onClick={() => removeItem(item.id)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  
                  <Card className="bg-mbegu-card border-white/10 p-4 animate-fade-in" style={{ animationDelay: getAnimationDelay(cartItems.length) }}>
                    <div className="flex items-start">
                      <Truck className="h-5 w-5 text-mbegu-primary mt-1 mr-3" />
                      <div>
                        <h3 className="text-white font-medium mb-1">Delivery Information</h3>
                        <p className="text-white/70 text-sm">
                          We deliver seedlings across Kenya within 3-5 business days. All orders are carefully packaged to 
                          ensure seedlings arrive in optimal condition. You'll receive SMS tracking updates throughout the delivery process.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
                
                <div>
                  <Card className="bg-mbegu-card border-white/10 sticky top-24 animate-fade-in" style={{ animationDelay: getAnimationDelay(cartItems.length + 1) }}>
                    <CardHeader>
                      <CardTitle className="text-white text-lg">Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/70">Subtotal</span>
                          <span className="text-white">KES {subtotal}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/70">Delivery</span>
                          <span className="text-white">KES {deliveryFee}</span>
                        </div>
                        <div className="pt-2 mt-2 border-t border-white/10">
                          <div className="flex justify-between font-medium">
                            <span className="text-white">Total</span>
                            <span className="text-mbegu-primary">KES {total}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium"
                        onClick={handleProceedToCheckout}
                      >
                        Proceed to Checkout
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="w-full border-white/10 text-white hover:bg-white/10"
                        asChild
                      >
                        <Link to="/inventory">
                          Continue Shopping
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ) : (
              <Card className="bg-mbegu-card border-white/10 p-8 text-center animate-fade-in">
                <div className="flex flex-col items-center">
                  <ShoppingCart className="h-12 w-12 text-white/30 mb-4" />
                  <CardTitle className="text-white mb-2">Your cart is empty</CardTitle>
                  <CardDescription className="text-white/60 mb-6">
                    Looks like you haven't added any seedlings to your cart yet.
                  </CardDescription>
                  <Button className="bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90" asChild>
                    <Link to="/inventory">
                      Explore Seedlings
                    </Link>
                  </Button>
                </div>
              </Card>
            )}
          </>
        ) : (
          <MpesaCheckout
            cartItems={cartItems}
            subtotal={subtotal}
            deliveryFee={deliveryFee}
            total={total}
            onBack={handleBackToCart}
          />
        )}
      </div>
    </PageLayout>
  );
};

export default Cart;
