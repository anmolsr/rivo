import React from "react";  // Importing React library
import RivoTitleContent from "../RivoTitleContent";  // Importing RivoTitleContent component
import RivoCard from "../RivoCard";  // Importing RivoCard component
import RivoButton from "../RivoButtons/RivoButton";  // Importing RivoButton component

type Props = {
  contentObj: TContent;  // Defining the type for contentObj
  bestProducts: TProduct[];  // Defining the type for bestProducts
};

// BestSelling Component
// This functional component displays a list of best-selling products.
// It includes a title, a grid of product cards, and a button to see all products.

const BestSelling = ({ contentObj, bestProducts }: Props) => {
  return (
    <div>
      {/* Title content component */}
      <RivoTitleContent contentObj={contentObj} />
      
      {/* Grid container for product cards */}
      <div className="grid md:grid-cols-3 lg:gap-x-10">
        {/* Mapping over the bestProducts array to create a card for each product */}
        {bestProducts.map((product: TProduct) => (
          <div key={product.id} className="mx-auto">
            <RivoCard size="big" cardProduct={product} />
          </div>
        ))}
      </div>
      
      {/* Button to see all products */}
      <div className="pb-4 text-center">
        <RivoButton label="See all" link="/" variant="iconArrow" />
      </div>
    </div>
  );
};

export default BestSelling;
