import React from "react";
import RivoTitleContent from "../RivoTitleContent";
import RivoCard from "../RivoCard";
import RivoButton from "../RivoButtons/RivoButton";
type Props = {
  contentObj: TContent;
  bestProducts:TProduct[];
};

const BestSelling = ({ contentObj, bestProducts }: Props) => {
  return (
    <div>
      <RivoTitleContent contentObj={contentObj} />
      <div className="grid grid-cols-3">
        {bestProducts.map((product:TProduct)=>(
            <div key={product.id}><RivoCard size="big" cardProduct={product}/></div>
        ))}
      </div>
      <div className="pb-4 text-center"><RivoButton label="See all" link="/" variant="iconArrow"/></div>
    </div>
  );
};

export default BestSelling;
