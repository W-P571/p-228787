
import React from "react";
import { PageLayout } from "../components/layout/PageLayout";
import { Hero } from "../components/sections/Hero";
import { ProductCatalog } from "../components/sections/ProductCatalog";
import { ReservationForm } from "../components/sections/ReservationForm";
import { FarmShowcase } from "../components/sections/FarmShowcase";
import { Footer } from "../components/layout/Footer";

const Index: React.FC = () => {
  return (
    <PageLayout>
      <div className="animate-fade-in">
        <Hero />
      </div>
      
      <div className="bg-gradient-to-b from-mbegu-dark to-mbegu-gray/50 animate-fade-in" style={{ animationDelay: "200ms" }}>
        <ProductCatalog />
      </div>
      
      <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
        <FarmShowcase />
      </div>
      
      <div className="py-12 animate-fade-in" style={{ animationDelay: "600ms" }}>
        <ReservationForm />
      </div>
      
      <Footer />
    </PageLayout>
  );
};

export default Index;
