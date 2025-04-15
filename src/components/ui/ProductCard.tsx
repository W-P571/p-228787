import React from "react";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  description: string;
  showLearnMore?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  title,
  description,
  showLearnMore = false,
}) => {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] border flex grow flex-col text-black w-full pt-[25px] pb-[63px] px-[25px] rounded-lg border-[rgba(255,255,255,0.2)] border-solid max-md:mt-6 max-md:px-5">
      <img
        src={imageSrc}
        alt={title}
        className="aspect-[1.24] object-contain w-full self-stretch rounded-[6px_6px_0px_0px]"
      />
      <div className="text-xl font-medium leading-[1.4] ml-4 mt-4 max-md:ml-2.5">
        {title}
      </div>
      <div className="text-base font-normal leading-6 ml-4 max-md:ml-2.5">
        {description}
      </div>

      {showLearnMore && (
        <button className="bg-[rgba(0,255,136,1)] ml-4 mt-[5px] px-4 py-2 rounded-md max-md:ml-2.5">
          Learn More
        </button>
      )}
    </div>
  );
};
