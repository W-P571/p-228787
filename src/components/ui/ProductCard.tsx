
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "./card";
import { Button } from "./button";
import { ShoppingBag, ExternalLink, Star, Tag, Check, X, Info } from "lucide-react";
import { Badge } from "./badge";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  status?: string;
  image?: string;
  imageSrc?: string;
  showLearnMore?: boolean;
  rating?: number;
  stockStatus?: "in-stock" | "low-stock" | "out-of-stock";
  category?: string;
  tags?: string[];
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  price,
  status,
  image,
  imageSrc,
  showLearnMore = false,
  rating = 4.5,
  stockStatus = "in-stock",
  category = "Seedling",
  tags = [],
}) => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Use image or imageSrc (for backward compatibility)
  const imageSource = imageSrc || image || "/placeholder.svg";

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${title} has been added to your cart.`,
      duration: 3000,
    });
  };

  const handlePreorder = () => {
    toast({
      title: "Preorder placed",
      description: `Your preorder for ${title} has been received.`,
      duration: 3000,
    });
  };

  // Get stock status indicator
  const getStockIndicator = () => {
    if (status) {
      return <span className="flex items-center text-amber-500"><Info className="h-3 w-3 mr-1" /> {status}</span>;
    }
    
    switch (stockStatus) {
      case "in-stock":
        return <span className="flex items-center text-green-500"><Check className="h-3 w-3 mr-1" /> In Stock</span>;
      case "low-stock":
        return <span className="flex items-center text-amber-500"><Info className="h-3 w-3 mr-1" /> Low Stock</span>;
      case "out-of-stock":
        return <span className="flex items-center text-red-500"><X className="h-3 w-3 mr-1" /> Out of Stock</span>;
      default:
        return null;
    }
  };

  return (
    <Card className="bg-mbegu-card border-white/10 overflow-hidden h-full transition-all hover:shadow-lg hover:shadow-mbegu-primary/5 hover:border-mbegu-primary/20 group">
      <div className="relative">
        <div className="aspect-[4/3] w-full overflow-hidden bg-mbegu-gray/50">
          <img
            src={imageSource}
            alt={title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        
        {showLearnMore && (
          <Badge className="absolute top-3 right-3 bg-mbegu-primary text-mbegu-dark">
            Featured
          </Badge>
        )}
        
        {category && (
          <Badge className="absolute top-3 left-3 bg-mbegu-dark/70 text-white border border-white/10">
            {category}
          </Badge>
        )}
      </div>
      
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-medium text-white">{title}</h3>
          {rating && (
            <div className="flex items-center text-amber-400 text-sm">
              <Star className="h-4 w-4 fill-current mr-1" />
              <span>{rating}</span>
            </div>
          )}
        </div>
        
        <p className="text-white/70 text-sm mb-3">{description}</p>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {tags.map((tag, index) => (
              <Badge key={index} className="bg-mbegu-dark/50 text-white/80 text-xs">
                <Tag className="h-3 w-3 mr-1" /> {tag}
              </Badge>
            ))}
          </div>
        )}
        
        <div className="flex justify-between items-center">
          {price && (
            <span className="text-mbegu-primary font-semibold">{price}</span>
          )}
          <span className="text-xs">{getStockIndicator()}</span>
        </div>
        
        {isExpanded && !isMobile && (
          <div className="mt-3 pt-3 border-t border-white/10 text-xs text-white/60 space-y-1">
            <p>• Premium quality seedlings</p>
            <p>• Delivery within 25 days</p>
            <p>• Growth guarantee</p>
          </div>
        )}
        
        {isMobile && (
          <Button 
            variant="link" 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="text-mbegu-primary p-0 mt-2 h-auto text-xs"
          >
            {isExpanded ? "Show less" : "Show more"}
          </Button>
        )}
      </CardContent>
      
      <CardFooter className="p-5 pt-0 flex justify-between gap-2">
        {showLearnMore ? (
          <Button className="w-full bg-white/10 text-white hover:bg-white/20 border border-white/10">
            <ExternalLink className="h-4 w-4 mr-2" />
            Learn More
          </Button>
        ) : (
          <>
            <Button 
              className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-white/10 text-white hover:bg-white/10 font-medium"
              onClick={handlePreorder}
            >
              Preorder
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
};
