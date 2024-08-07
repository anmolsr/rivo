import star from "../../public/fi-ss-star.svg"
import line from "../../public/line.svg"
import Image from "next/image";
import React from "react";
type Props = {
  cardProduct?: TProduct;
  size: string;
};
const RivoCard = ({ cardProduct, size }: Props) => {
  return (
    <div>
      {cardProduct && (
        <div>
          <div>
            <Image
              src={cardProduct.imgObj.url}
              alt={cardProduct?.imgObj.alt}
              width={size === "big" ? 430 : 566}
              height={size === "big" ? 430 : 378}
              priority
              quality={100}
            />
          </div>

          <div className="text-center max-w-xs m-auto py-10">
            <h3 className="font-semibold mb-4 text-rivoText-100">{cardProduct.title}</h3>
            <div className="text-rivoText-200 flex justify-between max-w-56 m-auto">
                <span>${cardProduct.price.toFixed(2)}</span>
                <span><Image priority src={line} alt="line" /></span>
                <span className="flex items-center"><span className="mr-4">{cardProduct.rating.toFixed(1)} </span><Image priority src={star} alt="Ratings" /></span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RivoCard;
