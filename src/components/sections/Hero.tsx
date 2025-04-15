import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="relative">
      <div className="bg-[rgba(0,255,136,1)] text-sm text-black font-normal text-center leading-none pl-[82px] pr-[70px] py-2 max-md:max-w-full max-md:px-5">
        Earn Loyalty Points! Refer a friend and get 10% off your next order.
      </div>

      <div className="z-10 flex w-full flex-col items-stretch text-black text-center -mt-5 pl-5 pr-[47px] max-md:max-w-full max-md:pr-5">
        <div className="bg-[rgba(0,255,136,1)] flex w-4 shrink-0 h-10 rounded-md" />

        <h1 className="text-5xl font-bold leading-none mt-[41px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
          Preorder Healthy HYBRID Seedlings
        </h1>

        <p className="text-xl font-normal leading-7 ml-[27px] mt-[21px] max-md:max-w-full">
          Plant Now, Harvest Big! Rains have started—don't wait! Preorder
          premium seedlings today and gift some to your neighbors.
        </p>

        <div className="self-center flex w-[300px] max-w-full items-stretch gap-[13px] text-lg font-medium leading-loose mt-[22px]">
          <button className="bg-[rgba(0,255,136,1)] px-4 py-2 rounded-md">
            Preorder Now
          </button>
          <button className="bg-[rgba(51,51,51,1)] px-4 py-2 rounded-md">
            Gift Seedlings
          </button>
        </div>
      </div>

      <div className="bg-[rgba(217,217,217,1)] flex w-[910px] shrink-0 max-w-full h-[910px] mt-20 mx-4 max-md:mr-2.5 max-md:mt-10" />

      <div className="text-black text-base font-normal text-center self-center mt-[7px]">
        Mbegu Traders
      </div>

      <div className="flex w-[549px] max-w-full flex-col text-base text-black font-normal text-center ml-4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e69915b7d7a3cb9fd944ad15c5f04272d822af5?placeholderIfAbsent=true"
          alt="Quality Guarantee"
          className="aspect-[1.08] object-contain w-[474px] max-w-full"
        />
        <div className="mt-[7px]">100% Quality Guarantee</div>
      </div>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb271ee2f2ee0f18b65b31b698cd26cef89f2d23?placeholderIfAbsent=true"
        alt="Nationwide Delivery"
        className="aspect-[1] object-contain w-full max-w-[910px] mx-4 max-md:max-w-full max-md:mr-2.5"
      />

      <div className="text-black text-base font-normal text-center self-center mt-[7px]">
        Nationwide Delivery
      </div>
    </section>
  );
};
