import React from "react";
import RivoTitleContent from "../RivoTitleContent";
import RivoCard from "../RivoCard";

type Props = {
  contentObj: TContent;
  bestProducts: TProduct[];
};

const OurProducts = ({ contentObj, bestProducts }: Props) => {
    return (
        <div>
          <RivoTitleContent contentObj={contentObj} />
          <div className="grid grid-cols-4 gap-x-10 gap-y-5">
            {bestProducts.map((product:TProduct)=>(
                <div key={product.id}><RivoCard size="big" cardProduct={product}/></div>
            ))}
          </div>
        </div>
      );
};

export default OurProducts;
