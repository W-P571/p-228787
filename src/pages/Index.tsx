
import React from "react";
import { Sidebar } from "../components/layout/Sidebar";
import { MainContent } from "../components/layout/MainContent";
import { Header } from "../components/layout/Header";

const Index: React.FC = () => {
  return (
    <div className="bg-mbegu-dark min-h-screen overflow-x-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/5 md:min-h-screen">
            <Sidebar />
          </div>
          <div className="w-full md:w-4/5">
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
