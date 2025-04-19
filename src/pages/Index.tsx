
import React from "react";
import { PageLayout } from "../components/layout/PageLayout";
import { Hero } from "../components/sections/Hero";
import { ProductCatalog } from "../components/sections/ProductCatalog";
import { ReservationForm } from "../components/sections/ReservationForm";
import { Dashboard } from "../components/sections/Dashboard";
import { WalletSection } from "../components/sections/WalletSection";
import { Location } from "../components/sections/Location";
import { FAQ } from "../components/sections/FAQ";
import { Footer } from "../components/layout/Footer";

const Index: React.FC = () => {
  return (
    <PageLayout>
      <Hero />
      <div className="bg-gradient-to-b from-mbegu-dark to-mbegu-gray/50">
        <ProductCatalog />
      </div>
      <div className="py-12">
        <ReservationForm />
      </div>
      <WalletSection />
      <div className="py-12 bg-mbegu-gray/30">
        <Dashboard />
      </div>
      <Location />
      <div className="bg-mbegu-dark">
        <FAQ />
      </div>
      <Footer />
    </PageLayout>
  );
};

export default Index;
