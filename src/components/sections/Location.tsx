import React from "react";

export const Location: React.FC = () => {
  return (
    <section className="mt-24 max-md:mt-10">
      <h2 className="text-black text-3xl font-semibold leading-[1.2] text-center">
        Our Location
      </h2>

      <div className="text-black text-base font-normal text-center mt-[31px]">
        Farm Coordinates: <span className="font-medium">-0.3667, 35.2833</span>
      </div>

      <div className="bg-[rgba(217,217,217,1)] w-full max-w-[672px] h-[300px] mx-auto mt-6 rounded-lg">
        {/* Map would be implemented here with a proper mapping library */}
        <div className="flex items-center justify-center h-full text-black">
          Interactive Map - Kabianga, 20-Acres Farm
        </div>
      </div>

      <div className="text-center mt-4 text-black">
        <p className="text-base">📍 Kabianga, 20-Acres Farm</p>
        <p className="text-base mt-2">
          Open for visits: Monday - Saturday, 8AM - 5PM
        </p>
      </div>
    </section>
  );
};
