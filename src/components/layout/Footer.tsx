import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(17,17,17,1)] flex flex-col items-center text-base text-black font-normal text-center mt-12 pt-[23px] pb-[57px] px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="flex w-[352px] max-w-full flex-col items-stretch">
        <div>📞 0721 867 944 | 📍 Kabianga, 20-Acres Farm</div>
        <div className="self-center mt-2">Partnered with</div>
        <div className="flex justify-center space-x-4 mt-4">
          <div className="bg-[rgba(217,217,217,1)] w-16 h-8"></div>
          <div className="bg-[rgba(217,217,217,1)] w-16 h-8"></div>
          <div className="bg-[rgba(217,217,217,1)] w-16 h-8"></div>
        </div>
        <div className="mt-6 text-sm">
          © 2023 Mbegu Traders. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
