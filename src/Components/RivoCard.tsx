import star from "../../public/fi-ss-star.svg"; // Importing star icon
import line from "../../public/line.svg"; // Importing line image
import Image from "next/image"; // Importing Image component from Next.js
import React from "react"; // Importing React library

type Props = {
  cardProduct?: TProduct; // Defining optional type for cardProduct
  carCategory?: TClothes; // Defining optional type for carCategory
  size: string; // Defining type for size
};

// RivoCard Component
// This functional component displays either a product card or a category card based on the props provided.

const RivoCard = ({ cardProduct, size, carCategory }: Props) => {
  return (
    <>
      {/* If cardProduct prop is provided, render product card */}
      {cardProduct && (
        <>
          {/* Product image */}
          <div>
            <Image
              src={cardProduct.imgObj.url}
              alt={cardProduct?.imgObj.alt}
              width={size === "big" ? 430 : 566}
              height={size === "big" ? 430 : 378}
              sizes="(max-width: 768px) 420px, 820px"
              quality={100}
            />
          </div>

          {/* Product details */}
          <div className="text-center max-w-xs m-auto py-10">
            {/* Product title */}
            <h3 className="font-semibold mb-4 text-rivoText-100 text-lg lg:text-base">
              {cardProduct.title}
            </h3>
            {/* Product price and rating */}
            <div className="text-rivoText-200 flex justify-between max-w-56 m-auto text-lg lg:text-base">
              <span>${cardProduct.price.toFixed(2)}</span>
              <span>
                <Image priority src={line} alt="line" />
              </span>
              <span className="flex items-center">
                <span className="mr-4">{cardProduct.rating.toFixed(1)} </span>
                <Image priority src={star} alt="Ratings" />
              </span>
            </div>
          </div>
        </>
      )}

      {/* If carCategory prop is provided, render category card */}
      {carCategory && (
        <div>
          {/* Category image */}
          <div>
            <Image
              src={carCategory.imgObj.url}
              alt={carCategory.imgObj.alt}
              width={size === "big" ? 430 : 566}
              height={size === "big" ? 430 : 378}
              quality={100}
              sizes="(max-width: 768px) 420px, 820px"
            />
          </div>

          {/* Category details */}
          <div className="text-center max-w-[420px] m-auto py-6 lg:py-10">
            {/* Category title */}
            <h3 className="font-semibold mb-2 lg:mb-4 text-rivoText-100 text-xl md:text-2xl lg:text-3xl">
              {carCategory.title}
            </h3>
            {/* Category description */}
            <div className="text-rivoText-100">
              <p className="text-[16px] leading-snug lg:text-base">
                {carCategory.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RivoCard;
