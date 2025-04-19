
import React from "react";
import { Header } from "./Header";

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="bg-mbegu-dark min-h-screen overflow-x-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </div>
    </div>
  );
};
