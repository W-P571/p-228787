
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { OrderNotification } from "@/services/NotificationService";
import { Share, Download, Check, MapPin, Calendar } from "lucide-react";

interface OrderReceiptProps {
  order: OrderNotification;
  onClose: () => void;
}

export const OrderReceipt: React.FC<OrderReceiptProps> = ({ order, onClose }) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-KE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const handleDownload = () => {
    // In a real implementation, this would generate and download a PDF receipt
    alert("Download functionality would be implemented in production");
  };

  const handleShare = () => {
    // In a real implementation, this would open a sharing dialog
    const shareText = `Track my Mbegu Traders order with tracking ID: ${order.trackingId}`;
    
    if (navigator.share) {
      navigator.share({
        title: "My Mbegu Traders Order",
        text: shareText,
        url: window.location.origin
      }).catch(err => console.error("Error sharing:", err));
    } else {
      // Fallback if Web Share API is not available
      alert("Share functionality would be implemented in production");
    }
  };

  return (
    <Card className="bg-mbegu-card border-white/10 max-w-md mx-auto">
      <CardHeader className="bg-gradient-to-r from-mbegu-gray to-mbegu-dark/80 border-b border-white/10">
        <CardTitle className="text-white flex items-center justify-between">
          <span>Order Receipt</span>
          <div className="flex gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-white/80 hover:text-white hover:bg-white/10"
              onClick={handleShare}
            >
              <Share className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-white/80 hover:text-white hover:bg-white/10"
              onClick={handleDownload}
            >
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="flex flex-col items-center justify-center py-4 border-b border-white/10">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-3">
            <Check className="h-10 w-10 text-green-500" />
          </div>
          <h3 className="text-white font-medium text-lg">Order Confirmed</h3>
          <p className="text-white/70 text-sm">{formatDate(new Date())}</p>
        </div>
        
        <div className="bg-white/5 p-4 rounded-lg">
          <div className="flex justify-between mb-2">
            <span className="text-white/70">Tracking ID:</span>
            <span className="text-white font-medium">{order.trackingId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70">Order ID:</span>
            <span className="text-white font-medium">{order.orderId}</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <h4 className="text-white font-medium">Order Details</h4>
          
          {order.items.map((item, index) => (
            <div key={index} className="flex justify-between items-center pb-2 border-b border-white/10">
              <div>
                <p className="text-white text-sm">{item.name}</p>
                <p className="text-white/60 text-xs">Qty: {item.quantity}</p>
              </div>
              <span className="text-white">KES {item.price * item.quantity}</span>
            </div>
          ))}
          
          <div className="pt-2 flex justify-between font-medium">
            <span className="text-white">Total</span>
            <span className="text-mbegu-primary">KES {order.totalAmount}</span>
          </div>
        </div>
        
        {order.deliveryAddress && (
          <div className="space-y-1">
            <div className="flex items-center text-white">
              <MapPin className="h-4 w-4 text-mbegu-primary mr-2" />
              <h4 className="font-medium">Delivery Address</h4>
            </div>
            <p className="text-white/70 pl-6">{order.deliveryAddress}</p>
          </div>
        )}
        
        {order.deliveryDate && (
          <div className="space-y-1">
            <div className="flex items-center text-white">
              <Calendar className="h-4 w-4 text-mbegu-primary mr-2" />
              <h4 className="font-medium">Expected Delivery</h4>
            </div>
            <p className="text-white/70 pl-6">{order.deliveryDate}</p>
          </div>
        )}
        
        <div className="pt-2 text-center text-white/60 text-xs">
          <p>A copy of this receipt has been sent to your phone</p>
          <p>via SMS to {order.phoneNumber}</p>
        </div>
        
        <Button 
          className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium"
          onClick={onClose}
        >
          Continue Shopping
        </Button>
      </CardContent>
    </Card>
  );
};
