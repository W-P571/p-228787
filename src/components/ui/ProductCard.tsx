
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "./card";
import { Button } from "./button";
import { ShoppingBag, ExternalLink, Star, Tag, Check, X, Info, Heart, Eye } from "lucide-react";
import { Badge } from "./badge";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

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
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
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

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: isFavorite 
        ? `${title} has been removed from your favorites.` 
        : `${title} has been added to your favorites.`,
      duration: 2000,
    });
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast({
      title: "Quick view",
      description: `Quick view for ${title}`,
      duration: 2000,
    });
  };

  // Get stock status indicator
  const getStockIndicator = () => {
    if (status) {
      return <span className="flex items-center text-amber-500"><Info className="h-3 w-3 mr-1" /> {status}</span>;
    }
    
    switch (stockStatus) {
      case "in-stock":
        return <span className="flex items-center text-mbegu-success"><Check className="h-3 w-3 mr-1" /> In Stock</span>;
      case "low-stock":
        return <span className="flex items-center text-mbegu-warning"><Info className="h-3 w-3 mr-1" /> Low Stock</span>;
      case "out-of-stock":
        return <span className="flex items-center text-mbegu-danger"><X className="h-3 w-3 mr-1" /> Out of Stock</span>;
      default:
        return null;
    }
  };

  // Card hover animation variants
  const cardVariants = {
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    initial: {
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Quick action buttons animation variants
  const actionButtonsVariants = {
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    initial: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      variants={cardVariants}
      className="h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="h-full relative bg-card border-muted/50 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 group">
        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden">
            <img
              src={imageSource}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          
          {/* Quick Action Buttons */}
          <motion.div 
            variants={actionButtonsVariants}
            className="absolute top-0 right-0 p-2 flex flex-col gap-2"
          >
            <Button
              size="icon"
              variant="outline"
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background border-muted/50 w-8 h-8"
              onClick={toggleFavorite}
            >
              <Heart 
                className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-foreground'}`} 
              />
            </Button>
            
            <Button
              size="icon"
              variant="outline"
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background border-muted/50 w-8 h-8"
              onClick={handleQuickView}
            >
              <Eye className="h-4 w-4 text-foreground" />
            </Button>
          </motion.div>
          
          {/* Category Badge */}
          <Badge className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm text-foreground border-0">
            {category}
          </Badge>
          
          {/* Featured Badge */}
          {showLearnMore && (
            <Badge className="absolute bottom-3 left-3 bg-primary text-primary-foreground border-0">
              Featured
            </Badge>
          )}
        </div>
        
        <CardContent className="p-5 pb-0">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-medium text-foreground font-display">{title}</h3>
            {rating && (
              <div className="flex items-center text-amber-400 text-sm">
                <Star className="h-4 w-4 fill-current mr-1" />
                <span>{rating}</span>
              </div>
            )}
          </div>
          
          <p className="text-muted-foreground text-sm mb-3">{description}</p>
          
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs bg-muted/50">
                  <Tag className="h-3 w-3 mr-1" /> {tag}
                </Badge>
              ))}
            </div>
          )}
          
          <div className="flex justify-between items-center mb-1">
            {price && (
              <span className="text-primary font-bold text-lg">{price}</span>
            )}
            <span className="text-xs">{getStockIndicator()}</span>
          </div>
          
          {isExpanded && !isMobile && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 pt-3 border-t border-border text-xs text-muted-foreground space-y-1"
            >
              <p>• Premium quality seedlings</p>
              <p>• Delivery within 25 days</p>
              <p>• Growth guarantee</p>
            </motion.div>
          )}
          
          {isMobile && (
            <Button 
              variant="link" 
              onClick={() => setIsExpanded(!isExpanded)} 
              className="text-primary p-0 mt-2 h-auto text-xs"
            >
              {isExpanded ? "Show less" : "Show more"}
            </Button>
          )}
        </CardContent>
        
        <CardFooter className="p-5 pt-3 flex justify-between gap-2">
          {showLearnMore ? (
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
              <ExternalLink className="h-4 w-4 mr-2" />
              Learn More
            </Button>
          ) : (
            <div className="grid grid-cols-2 gap-2 w-full">
              <Button 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Add
              </Button>
              <Button 
                variant="outline" 
                className="w-full border border-input hover:bg-muted font-medium"
                onClick={handlePreorder}
              >
                Preorder
              </Button>
            </div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};
