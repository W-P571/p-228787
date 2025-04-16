
import React from "react";
import { Card, CardContent, CardFooter } from "./card";
import { Button } from "./button";
import { ShoppingBag, ExternalLink } from "lucide-react";
import { Badge } from "./badge";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  description: string;
  price?: string;
  showLearnMore?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  title,
  description,
  price,
  showLearnMore = false,
}) => {
  return (
    <Card className="bg-mbegu-card border-white/10 overflow-hidden h-full transition-all hover:shadow-lg hover:shadow-mbegu-primary/5 hover:border-mbegu-primary/20 group">
      <div className="relative">
        <div className="aspect-[4/3] w-full overflow-hidden bg-mbegu-gray/50">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        
        {showLearnMore && (
          <Badge className="absolute top-3 right-3 bg-mbegu-primary text-mbegu-dark">
            Featured
          </Badge>
        )}
      </div>
      
      <CardContent className="p-5">
        <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
        <p className="text-white/70 text-sm mb-4">{description}</p>
        
        {price && (
          <div className="flex justify-between items-center">
            <span className="text-mbegu-primary font-semibold">{price}</span>
            <span className="text-white/50 text-xs">Per seedling</span>
          </div>
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
            <Button className="flex-1 bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
            <Button variant="outline" className="flex-1 border-white/10 text-white hover:bg-white/10">
              Preorder
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
};
