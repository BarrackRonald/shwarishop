import { Card, CardContent } from "@/components/ui/card";

interface CategoryItem {
  id: string;
  name: string;
  image: string;
  productCount: number;
}

interface CategoryGridProps {
  categories: CategoryItem[];
  onCategoryClick?: (categoryId: string) => void;
}

export const CategoryGrid = ({ categories, onCategoryClick }: CategoryGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map((category) => (
        <Card 
          key={category.id}
          className="group cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => onCategoryClick?.(category.id)}
        >
          <CardContent className="p-4 text-center">
            <div className="relative mb-3 overflow-hidden rounded-lg">
              <img 
                src={category.image} 
                alt={category.name}
                className="h-24 w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
            <p className="text-xs text-muted-foreground">
              {category.productCount} products
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};