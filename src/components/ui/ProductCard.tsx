
import React from "react";
import { Card, CardContent, CardFooter } from "./card";
import { Button } from "./button";
import { ShoppingBag, ExternalLink, Star } from "lucide-react";
import { Badge } from "./badge";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  description: string;
  price?: string;
  showLearnMore?: boolean;
  rating?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  title,
  description,
  price,
  showLearnMore = false,
  rating = 0,
}) => {
  return (
    <Card className="bg-gradient-to-br from-mbegu-card to-mbegu-dark/90 border-white/10 overflow-hidden h-full transition-all hover:shadow-lg hover:shadow-mbegu-primary/10 hover:border-mbegu-primary/30 group">
      <div className="relative">
        <div className="aspect-[4/3] w-full overflow-hidden bg-mbegu-gray/50">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
          />
        </div>
        
        {showLearnMore && (
          <Badge className="absolute top-3 right-3 bg-mbegu-primary text-mbegu-dark font-medium px-3">
            Featured
          </Badge>
        )}
        
        {rating > 0 && (
          <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
            <Star className="h-3 w-3 fill-mbegu-primary text-mbegu-primary mr-1" />
            <span className="text-white text-xs font-medium">{rating.toFixed(1)}</span>
          </div>
        )}
      </div>
      
      <CardContent className="p-5">
        <h3 className="text-xl font-medium text-white mb-2 group-hover:text-mbegu-primary transition-colors">{title}</h3>
        <p className="text-white/70 text-sm mb-4 line-clamp-2">{description}</p>
        
        {price && (
          <div className="flex justify-between items-center">
            <span className="text-mbegu-primary font-semibold text-lg">{price}</span>
            <span className="text-white/50 text-xs">Per seedling</span>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="p-5 pt-0 flex justify-between gap-2">
        {showLearnMore ? (
          <Button className="w-full bg-white/10 text-white hover:bg-white/20 border border-white/10 transition-all group-hover:border-mbegu-primary/30">
            <ExternalLink className="h-4 w-4 mr-2" />
            Learn More
          </Button>
        ) : (
          <>
            <Button className="w-full bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90 font-medium">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-white/10 text-white hover:bg-white/10 font-medium"
            >
              Preorder
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
};
