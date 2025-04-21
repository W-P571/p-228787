import React from "react";
import { Hero } from "../sections/Hero";
import { ProductCatalog } from "../sections/ProductCatalog";
import { ReservationForm } from "../sections/ReservationForm";
import { Dashboard } from "../sections/Dashboard";
import { Location } from "../sections/Location";
import { FAQ } from "../sections/FAQ";
import { Footer } from "./Footer";

export const MainContent: React.FC = () => {
  return (
    <main className="w-full">
      <div className="flex w-full flex-col items-stretch max-md:max-w-full">
        <Hero />
        <ProductCatalog />
        <ReservationForm />
        <Dashboard />
        <Location />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
};
