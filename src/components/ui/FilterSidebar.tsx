
import React, { useState } from "react";
import { Button } from "./button";
import { Label } from "./label";
import { Slider } from "./slider";
import { Badge } from "./badge";
import { Checkbox } from "./checkbox";
import { X, Filter, ChevronDown, ChevronUp } from "lucide-react";

interface FilterOption {
  id: string;
  label: string;
}

interface FilterProps {
  isOpen: boolean;
  onClose: () => void;
  onFilter: (filters: FilterState) => void;
}

interface FilterSection {
  isOpen: boolean;
  toggleOpen: () => void;
  title: string;
  children: React.ReactNode;
}

interface FilterState {
  categories: string[];
  priceRange: [number, number];
  ratings: number[];
  tags: string[];
  stockStatus: string[];
}

const categoryOptions: FilterOption[] = [
  { id: "vegetable", label: "Vegetable" },
  { id: "fruit", label: "Fruit" },
  { id: "leafy-green", label: "Leafy Green" },
  { id: "herb", label: "Herb" },
];

const tagOptions: FilterOption[] = [
  { id: "organic", label: "Organic" },
  { id: "high-yield", label: "High Yield" },
  { id: "pest-resistant", label: "Pest Resistant" },
  { id: "popular", label: "Popular" },
  { id: "nutritious", label: "Nutritious" },
  { id: "flavor-enhanced", label: "Flavor Enhanced" },
  { id: "durable", label: "Durable" },
  { id: "premium", label: "Premium" },
  { id: "vitamin-rich", label: "Vitamin Rich" },
];

const stockOptions: FilterOption[] = [
  { id: "in-stock", label: "In Stock" },
  { id: "low-stock", label: "Low Stock" },
  { id: "out-of-stock", label: "Out of Stock" },
];

const FilterSectionComponent: React.FC<FilterSection> = ({ 
  isOpen, 
  toggleOpen, 
  title, 
  children 
}) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-4">
      <button 
        onClick={toggleOpen} 
        className="flex w-full justify-between items-center text-left focus:outline-none"
      >
        <h3 className="text-lg font-medium">{title}</h3>
        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>
      
      {isOpen && (
        <div className="mt-3 space-y-3 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
};

export const FilterSidebar: React.FC<FilterProps> = ({ isOpen, onClose, onFilter }) => {
  const [sections, setSections] = useState({
    categories: true,
    price: true,
    ratings: true,
    tags: true,
    stock: true,
  });
  
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [50, 200],
    ratings: [],
    tags: [],
    stockStatus: [],
  });
  
  const toggleSection = (section: keyof typeof sections) => {
    setSections(prev => ({ ...prev, [section]: !prev[section] }));
  };
  
  const handleCategoryChange = (id: string) => {
    setFilters(prev => {
      const newCategories = prev.categories.includes(id)
        ? prev.categories.filter(c => c !== id)
        : [...prev.categories, id];
        
      return { ...prev, categories: newCategories };
    });
  };
  
  const handleTagChange = (id: string) => {
    setFilters(prev => {
      const newTags = prev.tags.includes(id)
        ? prev.tags.filter(t => t !== id)
        : [...prev.tags, id];
        
      return { ...prev, tags: newTags };
    });
  };
  
  const handleStockChange = (id: string) => {
    setFilters(prev => {
      const newStock = prev.stockStatus.includes(id)
        ? prev.stockStatus.filter(s => s !== id)
        : [...prev.stockStatus, id];
        
      return { ...prev, stockStatus: newStock };
    });
  };
  
  const handlePriceChange = (value: number[]) => {
    setFilters(prev => ({ 
      ...prev, 
      priceRange: [value[0], value[1]] as [number, number]
    }));
  };
  
  const handleRatingChange = (rating: number) => {
    setFilters(prev => {
      const newRatings = prev.ratings.includes(rating)
        ? prev.ratings.filter(r => r !== rating)
        : [...prev.ratings, rating];
        
      return { ...prev, ratings: newRatings };
    });
  };
  
  const clearFilters = () => {
    setFilters({
      categories: [],
      priceRange: [50, 200],
      ratings: [],
      tags: [],
      stockStatus: [],
    });
  };
  
  const applyFilters = () => {
    onFilter(filters);
  };
  
  const getActiveFilterCount = () => {
    let count = 0;
    count += filters.categories.length;
    count += filters.tags.length;
    count += filters.stockStatus.length;
    count += filters.ratings.length;
    if (filters.priceRange[0] !== 50 || filters.priceRange[1] !== 200) count += 1;
    return count;
  };
  
  return (
    <div 
      className={`fixed inset-y-0 left-0 z-50 w-80 bg-white dark:bg-mbegu-dark shadow-xl transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-display font-medium flex items-center">
          <Filter className="h-5 w-5 mr-2" />
          Filters
          {getActiveFilterCount() > 0 && (
            <Badge className="ml-2 bg-mbegu-primary text-white">
              {getActiveFilterCount()}
            </Badge>
          )}
        </h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="p-4 h-[calc(100vh-10rem)] overflow-y-auto custom-scrollbar">
        <FilterSectionComponent 
          isOpen={sections.categories} 
          toggleOpen={() => toggleSection('categories')}
          title="Categories"
        >
          <div className="space-y-2">
            {categoryOptions.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={`category-${category.id}`} 
                  checked={filters.categories.includes(category.id)}
                  onCheckedChange={() => handleCategoryChange(category.id)}
                />
                <Label htmlFor={`category-${category.id}`}>{category.label}</Label>
              </div>
            ))}
          </div>
        </FilterSectionComponent>
        
        <FilterSectionComponent 
          isOpen={sections.price} 
          toggleOpen={() => toggleSection('price')}
          title="Price Range"
        >
          <div className="space-y-3">
            <Slider 
              value={[filters.priceRange[0], filters.priceRange[1]]}
              min={50}
              max={200}
              step={10}
              onValueChange={handlePriceChange}
            />
            <div className="flex justify-between">
              <span>KES {filters.priceRange[0]}</span>
              <span>KES {filters.priceRange[1]}</span>
            </div>
          </div>
        </FilterSectionComponent>
        
        <FilterSectionComponent 
          isOpen={sections.ratings} 
          toggleOpen={() => toggleSection('ratings')}
          title="Rating"
        >
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center space-x-2">
                <Checkbox 
                  id={`rating-${rating}`} 
                  checked={filters.ratings.includes(rating)}
                  onCheckedChange={() => handleRatingChange(rating)}
                />
                <Label htmlFor={`rating-${rating}`} className="flex items-center">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                  {Array.from({ length: 5 - rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gray-300" />
                  ))}
                </Label>
              </div>
            ))}
          </div>
        </FilterSectionComponent>
        
        <FilterSectionComponent 
          isOpen={sections.tags} 
          toggleOpen={() => toggleSection('tags')}
          title="Features"
        >
          <div className="flex flex-wrap gap-2">
            {tagOptions.map((tag) => (
              <Badge 
                key={tag.id}
                variant="outline"
                className={`cursor-pointer py-1 px-3 ${
                  filters.tags.includes(tag.id) 
                    ? 'bg-mbegu-primary/20 text-mbegu-primary border-mbegu-primary' 
                    : ''
                }`}
                onClick={() => handleTagChange(tag.id)}
              >
                {tag.label}
              </Badge>
            ))}
          </div>
        </FilterSectionComponent>
        
        <FilterSectionComponent 
          isOpen={sections.stock} 
          toggleOpen={() => toggleSection('stock')}
          title="Stock Status"
        >
          <div className="space-y-2">
            {stockOptions.map((stock) => (
              <div key={stock.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={`stock-${stock.id}`} 
                  checked={filters.stockStatus.includes(stock.id)}
                  onCheckedChange={() => handleStockChange(stock.id)}
                />
                <Label htmlFor={`stock-${stock.id}`}>{stock.label}</Label>
              </div>
            ))}
          </div>
        </FilterSectionComponent>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-mbegu-dark flex space-x-2">
        <Button 
          variant="outline" 
          className="flex-1"
          onClick={clearFilters}
        >
          Clear All
        </Button>
        <Button 
          className="flex-1 bg-mbegu-primary hover:bg-mbegu-primary/90"
          onClick={applyFilters}
        >
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

function Star(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
