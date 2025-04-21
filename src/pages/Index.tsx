import React from "react";
import { Sidebar } from "../components/layout/Sidebar";
import { MainContent } from "../components/layout/MainContent";

const Index: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="bg-[rgba(17,17,17,1)] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-1/5 max-md:w-full max-md:ml-0">
            <Sidebar />
          </div>
          <div className="w-4/5 ml-5 max-md:w-full max-md:ml-0">
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
