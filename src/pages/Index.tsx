import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroBanner } from "@/components/ui/hero-banner";
import { ProductCard } from "@/components/ui/product-card";
import { CategoryGrid } from "@/components/ui/category-grid";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Mock data - replace with real data from your backend
const featuredProducts = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    price: 8500,
    discountPrice: 6800,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    rating: 4.5,
    reviewCount: 128,
    category: "Electronics",
    inStock: true
  },
  {
    id: "2", 
    name: "Smart Watch with Fitness Tracker",
    price: 15000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    rating: 4.3,
    reviewCount: 89,
    category: "Electronics",
    inStock: true
  },
  {
    id: "3",
    name: "Premium Cotton T-Shirt",
    price: 2500,
    discountPrice: 1800,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    rating: 4.7,
    reviewCount: 203,
    category: "Fashion",
    inStock: true
  },
  {
    id: "4",
    name: "Organic Coffee Beans 1kg",
    price: 3200,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",
    rating: 4.8,
    reviewCount: 156,
    category: "Food & Beverages",
    inStock: false
  }
];

const categories = [
  {
    id: "electronics",
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=200",
    productCount: 245
  },
  {
    id: "fashion",
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=200",
    productCount: 189
  },
  {
    id: "home",
    name: "Home & Garden",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200",
    productCount: 156
  },
  {
    id: "sports",
    name: "Sports",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200",
    productCount: 98
  }
];

const Index = () => {
  const handleAddToCart = (productId: string) => {
    console.log("Add to cart:", productId);
    // TODO: Implement cart functionality
  };

  const handleViewProduct = (productId: string) => {
    console.log("View product:", productId);
    // TODO: Navigate to product page
  };

  const handleCategoryClick = (categoryId: string) => {
    console.log("Category clicked:", categoryId);
    // TODO: Navigate to category page
  };

  const handleSearch = (query: string) => {
    console.log("Search:", query);
    // TODO: Implement search functionality
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItemCount={3}
        onSearchSubmit={handleSearch}
        onCartClick={() => console.log("Cart clicked")}
        onLoginClick={() => console.log("Login clicked")}
        onLanguageChange={(lang) => console.log("Language:", lang)}
      />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Banner */}
        <section className="mb-12">
          <HeroBanner
            title="Welcome to Shwari Store"
            subtitle="Discover amazing products at unbeatable prices"
            buttonText="Shop Now"
            imageUrl="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800"
          />
        </section>

        {/* Categories */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Shop by Category</h2>
            <Button variant="outline">View All</Button>
          </div>
          <CategoryGrid 
            categories={categories}
            onCategoryClick={handleCategoryClick}
          />
        </section>

        <Separator className="my-12" />

        {/* Featured Products */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Button variant="outline">View All</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={handleAddToCart}
                onViewProduct={handleViewProduct}
              />
            ))}
          </div>
        </section>

        {/* Promotional Banner */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-accent to-accent/80 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Special Offer!</h3>
            <p className="text-muted-foreground mb-4">
              Get 20% off on your first order. Use code: WELCOME20
            </p>
            <Button size="lg">Shop Now</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
