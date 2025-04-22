
import React, { useState, useEffect } from "react";
import { ProductCard } from "../ui/ProductCard";
import { Button } from "../ui/button";
import { Search, Filter, ArrowUp, Leaf, Grid3X3, ListFilter } from "lucide-react";
import { FilterSidebar } from "../ui/FilterSidebar";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { motion, AnimatePresence } from "framer-motion";

interface Product {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  price: string;
  rating: number;
  stockStatus: "in-stock" | "low-stock" | "out-of-stock";
  category: string;
  tags: string[];
  showLearnMore?: boolean;
}

interface FilterState {
  categories: string[];
  priceRange: [number, number];
  ratings: number[];
  tags: string[];
  stockStatus: string[];
}

const defaultFilters: FilterState = {
  categories: [],
  priceRange: [50, 200],
  ratings: [],
  tags: [],
  stockStatus: [],
};

// Animation variants for products
const productVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

export const ProductCatalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeFilters, setActiveFilters] = useState<FilterState>(defaultFilters);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [sortOption, setSortOption] = useState<string>("featured");

  // Initialize products
  useEffect(() => {
    const productData = [
      {
        id: 1,
        imageSrc: "https://images.unsplash.com/photo-1590599145006-5136937ecf37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Victoria F1",
        description: "Premium celery seedling with crisp, fresh leaves.",
        price: "KES 120",
        rating: 4.8,
        stockStatus: "in-stock" as const,
        category: "Vegetable",
        tags: ["Organic", "High Yield"],
      },
      {
        id: 2,
        imageSrc: "https://images.unsplash.com/photo-1603994236402-89df2b9341a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Gloria F1",
        description: "Robust cabbage seedling known for its healthy growth.",
        price: "KES 150",
        rating: 4.6,
        stockStatus: "in-stock" as const,
        category: "Vegetable",
        tags: ["Pest Resistant", "Popular"],
      },
      {
        id: 3,
        imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Pretoria F1",
        description: "Reliable seedling for vibrant growth and high yield.",
        price: "KES 130",
        rating: 4.4,
        stockStatus: "low-stock" as const,
        category: "Vegetable",
        tags: ["High Yield"],
      },
      {
        id: 4,
        imageSrc: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Baraka F1",
        description: "Seedling with excellent flavor and texture.",
        price: "KES 140",
        rating: 4.7,
        stockStatus: "in-stock" as const,
        category: "Vegetable",
        tags: ["Flavor Enhanced"],
      },
      {
        id: 5,
        imageSrc: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Ansal (Tomato)",
        description: "Vigorous tomato seedling ideal for organic farming.",
        price: "KES 110",
        rating: 4.3,
        stockStatus: "in-stock" as const,
        category: "Fruit",
        tags: ["Organic", "Vitamin Rich"],
      },
      {
        id: 6,
        imageSrc: "https://images.unsplash.com/photo-1525423235703-6c285d74010e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Terminator F1",
        description: "Robust seedling designed for high resistance and yield.",
        price: "KES 160",
        rating: 4.9,
        stockStatus: "low-stock" as const,
        category: "Vegetable",
        tags: ["Premium", "Pest Resistant"],
      },
      {
        id: 7,
        imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Managu",
        description: "Nutritious leafy green seedling for sustainable diets.",
        price: "KES 100",
        rating: 4.2,
        stockStatus: "in-stock" as const,
        category: "Leafy Green",
        tags: ["Nutritious"],
        showLearnMore: true,
      },
      {
        id: 8,
        imageSrc: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Sukumawiki Tausi F1",
        description: "Durable kale seedling for sustained production.",
        price: "KES 130",
        rating: 4.5,
        stockStatus: "out-of-stock" as const,
        category: "Leafy Green",
        tags: ["Durable", "Popular"],
      },
      {
        id: 9,
        imageSrc: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Sukumawiki Spiner F1",
        description: "Premium kale variety with robust nutritional value.",
        price: "KES 140",
        rating: 4.4,
        stockStatus: "in-stock" as const,
        category: "Leafy Green",
        tags: ["Nutrient Rich"],
      },
    ];
    
    setProducts(productData);
    setFilteredProducts(productData);

    // Scroll event for Back to Top button
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter products based on search, category, and filters
  useEffect(() => {
    let result = [...products];
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.title.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Apply category filter
    if (activeCategory !== "all") {
      result = result.filter(product => 
        product.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }
    
    // Apply advanced filters
    if (activeFilters.categories.length > 0) {
      result = result.filter(product => 
        activeFilters.categories.some(c => 
          product.category.toLowerCase() === c.toLowerCase()
        )
      );
    }
    
    if (activeFilters.tags.length > 0) {
      result = result.filter(product => 
        product.tags.some(tag => 
          activeFilters.tags.includes(tag.toLowerCase())
        )
      );
    }
    
    if (activeFilters.stockStatus.length > 0) {
      result = result.filter(product => 
        activeFilters.stockStatus.includes(product.stockStatus)
      );
    }
    
    if (activeFilters.ratings.length > 0) {
      result = result.filter(product => 
        activeFilters.ratings.some(r => 
          Math.floor(product.rating) === r
        )
      );
    }
    
    const priceMin = activeFilters.priceRange[0];
    const priceMax = activeFilters.priceRange[1];
    
    result = result.filter(product => {
      const price = parseInt(product.price.replace(/\D/g, ''));
      return price >= priceMin && price <= priceMax;
    });
    
    // Apply sorting
    switch (sortOption) {
      case "price-low-high":
        result.sort((a, b) => parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, '')));
        break;
      case "price-high-low":
        result.sort((a, b) => parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, '')));
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Default is "featured", no sorting needed
        break;
    }
    
    setFilteredProducts(result);
  }, [products, searchQuery, activeCategory, activeFilters, sortOption]);

  const handleFilterApply = (filters: FilterState) => {
    setActiveFilters(filters);
    setShowFilters(false);
  };

  const clearAllFilters = () => {
    setActiveFilters(defaultFilters);
    setActiveCategory("all");
    setSearchQuery("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getFilterCount = () => {
    let count = 0;
    count += activeFilters.categories.length;
    count += activeFilters.tags.length;
    count += activeFilters.stockStatus.length;
    count += activeFilters.ratings.length;
    if (activeFilters.priceRange[0] !== 50 || activeFilters.priceRange[1] !== 200) count += 1;
    if (activeCategory !== "all") count += 1;
    if (searchQuery) count += 1;
    return count;
  };

  // Get unique categories from products
  const categories = ["all", ...new Set(products.map(product => product.category.toLowerCase()))];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/50">
      <FilterSidebar 
        isOpen={showFilters} 
        onClose={() => setShowFilters(false)}
        onFilter={handleFilterApply}
      />
      
      <div className="container mx-auto">
        <div className="text-center mb-10 space-y-2">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
          >
            Seedling Catalog
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Browse our selection of premium seedlings, all grown with care for maximum yield and quality
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-3 mt-4"
          >
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search seedlings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card shadow-sm"
              />
            </div>
            <Button
              onClick={() => setShowFilters(true)}
              variant="outline"
              className="flex items-center justify-center gap-2"
            >
              <Filter className="h-5 w-5" />
              Filters
              {getFilterCount() > 0 && (
                <Badge className="ml-1 bg-primary">{getFilterCount()}</Badge>
              )}
            </Button>
          </motion.div>
        </div>
        
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-1 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((category, index) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  className={`rounded-full capitalize ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  } whitespace-nowrap animate-fade-in`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setActiveCategory(category)}
                >
                  {category === "all" ? (
                    <>
                      <Grid3X3 className="h-4 w-4 mr-1" />
                      All
                    </>
                  ) : category}
                </Button>
              ))}
            </div>
            
            <div className="flex items-center space-x-2">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="bg-transparent border border-input rounded-md text-sm p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="featured">Featured</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full"
                onClick={clearAllFilters}
                disabled={getFilterCount() === 0}
              >
                <ListFilter className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {getFilterCount() > 0 && (
            <div className="flex items-center justify-between mb-4 p-3 bg-muted rounded-lg animate-fade-in">
              <div className="flex items-center text-muted-foreground">
                <Leaf className="h-5 w-5 mr-2 text-primary" />
                <span>
                  Showing {filteredProducts.length} of {products.length} seedlings
                </span>
              </div>
              <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                Clear all filters
              </Button>
            </div>
          )}
        </div>

        <AnimatePresence mode="wait">
          {filteredProducts.length > 0 ? (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  custom={index}
                  variants={productVariants}
                  transition={{ duration: 0.4 }}
                  className="h-full"
                >
                  <ProductCard
                    imageSrc={product.imageSrc}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    showLearnMore={product.showLearnMore}
                    rating={product.rating}
                    stockStatus={product.stockStatus}
                    category={product.category}
                    tags={product.tags}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <div className="w-20 h-20 mb-6 rounded-full bg-muted flex items-center justify-center">
                <Leaf className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-2">No seedlings found</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                We couldn't find any seedlings matching your search criteria. Try adjusting your filters or search terms.
              </p>
              <Button onClick={clearAllFilters}>Clear all filters</Button>
            </motion.div>
          )}
        </AnimatePresence>
        
        {showBackToTop && (
          <Button
            className="fixed bottom-6 right-6 rounded-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 animate-bounce-in z-40"
            size="icon"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        )}
      </div>
    </section>
  );
};
