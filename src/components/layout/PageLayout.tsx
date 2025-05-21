
import React from "react";
import { Header } from "./Header";

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Decorative elements */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -right-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8 animate-fade-in">
          {children}
        </main>
      </div>
    </div>
  );
};
