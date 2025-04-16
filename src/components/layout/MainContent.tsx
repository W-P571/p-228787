
import React from "react";
import { Hero } from "../sections/Hero";
import { ProductCatalog } from "../sections/ProductCatalog";
import { ReservationForm } from "../sections/ReservationForm";
import { Dashboard } from "../sections/Dashboard";
import { WalletSection } from "../sections/WalletSection";
import { Location } from "../sections/Location";
import { FAQ } from "../sections/FAQ";
import { Footer } from "./Footer";

export const MainContent: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="bg-gradient-to-b from-mbegu-dark to-mbegu-gray/50">
        <ProductCatalog />
      </div>
      <div className="py-12 px-4 bg-mbegu-dark">
        <div className="container mx-auto">
          <ReservationForm />
        </div>
      </div>
      <WalletSection />
      <div className="py-12 px-4 bg-mbegu-gray/30">
        <div className="container mx-auto">
          <Dashboard />
        </div>
      </div>
      <Location />
      <div className="bg-mbegu-dark">
        <FAQ />
      </div>
      <Footer />
    </main>
  );
};
