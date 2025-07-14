import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  discountPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
  inStock: boolean;
  onAddToCart?: (id: string) => void;
  onViewProduct?: (id: string) => void;
}

export const ProductCard = ({
  id,
  name,
  price,
  discountPrice,
  image,
  rating,
  reviewCount,
  category,
  inStock,
  onAddToCart,
  onViewProduct
}: ProductCardProps) => {
  const hasDiscount = discountPrice && discountPrice < price;
  
  return (
    <Card className="group cursor-pointer hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={name}
            className="h-48 w-full object-cover transition-transform group-hover:scale-105"
            onClick={() => onViewProduct?.(id)}
          />
          {hasDiscount && (
            <Badge variant="destructive" className="absolute top-2 left-2">
              -{Math.round(((price - discountPrice!) / price) * 100)}%
            </Badge>
          )}
          {!inStock && (
            <Badge variant="secondary" className="absolute top-2 right-2">
              Out of Stock
            </Badge>
          )}
        </div>
        
        <div className="p-4">
          <Badge variant="outline" className="mb-2">{category}</Badge>
          <h3 
            className="font-semibold text-sm mb-2 line-clamp-2 hover:text-primary" 
            onClick={() => onViewProduct?.(id)}
          >
            {name}
          </h3>
          
          <div className="flex items-center gap-1 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-3 w-3 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({reviewCount})</span>
          </div>
          
          <div className="flex items-center gap-2">
            {hasDiscount ? (
              <>
                <span className="font-bold text-lg text-primary">
                  KES {discountPrice!.toLocaleString()}
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  KES {price.toLocaleString()}
                </span>
              </>
            ) : (
              <span className="font-bold text-lg text-primary">
                KES {price.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full" 
          onClick={() => onAddToCart?.(id)}
          disabled={!inStock}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </CardFooter>
    </Card>
  );
};