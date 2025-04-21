
import React, { useState } from "react";
import { PageLayout } from "../components/layout/PageLayout";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Inventory: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const products = [
    {
      id: 1,
      title: "Victoria F1",
      description: "Premium celery seedling with crisp, fresh leaves.",
      price: "KES 120",
      status: "In Stock",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/64f952fd2a1707f38b17770dd866524a02bc9efd?placeholderIfAbsent=true",
      category: "Vegetable",
      tags: ["High Yield", "Resilient"]
    },
    {
      id: 2,
      title: "Gloria F1",
      description: "Robust cabbage seedling known for its healthy growth.",
      price: "KES 150",
      status: "In Stock",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f211ad1383b5467306f0a66d1bb9fb1f9725c9df?placeholderIfAbsent=true",
      category: "Vegetable",
      tags: ["Pest Resistant", "Popular"]
    },
    {
      id: 3,
      title: "Pretoria F1",
      description: "Reliable seedling for vibrant growth and high yield.",
      price: "KES 130",
      status: "Low Stock",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0208cdbfe13f900e3b591878f618612112f8c55?placeholderIfAbsent=true",
      category: "Vegetable",
      tags: ["High Yield"]
    },
    {
      id: 4,
      title: "Baraka F1",
      description: "Seedling with excellent flavor and texture.",
      price: "KES 140",
      status: "In Stock",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e5e113bf08861574496ba168f7f78d24f86df5fc?placeholderIfAbsent=true",
      category: "Vegetable",
      tags: ["Flavor Enhanced"]
    },
    {
      id: 5,
      title: "Ansal (Tomato)",
      description: "Vigorous tomato seedling ideal for organic farming.",
      price: "KES 110",
      status: "In Stock",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/be0e388bd237e6edc83336f9b84f60bb1030e6d7?placeholderIfAbsent=true",
      category: "Fruit",
      tags: ["Organic", "Vitamin Rich"]
    },
    {
      id: 6,
      title: "Terminator F1",
      description: "Robust seedling designed for high resistance and yield.",
      price: "KES 160",
      status: "Low Stock",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4bf87e01c4e1ba286db89d919d62b2ecf06ba013?placeholderIfAbsent=true",
      category: "Vegetable",
      tags: ["Premium", "Pest Resistant"]
    }
  ];
  
  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto px-4 py-8 animate-fade-in">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Seedling Inventory</h1>
          <Link to="/cart">
            <Button className="bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90">
              View Cart
            </Button>
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/50" />
            <Input
              placeholder="Search seedlings..."
              className="pl-10 bg-mbegu-dark/70 border-white/10 text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                stockStatus={product.status === "In Stock" ? "in-stock" : product.status === "Low Stock" ? "low-stock" : "out-of-stock"}
                imageSrc={product.image}
                category={product.category}
                tags={product.tags}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-white/70 text-lg">No seedlings found matching your search.</p>
              <Button 
                variant="link" 
                className="text-mbegu-primary mt-2"
                onClick={() => setSearchQuery("")}
              >
                Clear search
              </Button>
            </div>
          )}
        </div>
        
        <div className="bg-mbegu-card border-white/10 p-6 rounded-lg">
          <h2 className="text-xl font-medium text-white mb-4">Need Help Finding the Right Seedlings?</h2>
          <p className="text-white/70 mb-4">
            Our agricultural experts can help you select the best seedlings for your specific farming conditions and goals.
            Contact us directly or schedule a consultation.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-mbegu-primary text-mbegu-dark hover:bg-mbegu-primary/90">
              Contact an Expert
            </Button>
            <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
              Request Catalog
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Inventory;
