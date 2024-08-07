import React from "react";  // Importing React library
import RivoTitleContent from "../RivoTitleContent";  // Importing RivoTitleContent component
import RivoCard from "../RivoCard";  // Importing RivoCard component

type Props = {
  contentObj: TContent;  // Defining the type for contentObj
  bestProducts: TProduct[];  // Defining the type for bestProducts
};

// OurProducts Component
// This functional component displays a list of best products.
// It includes a title and a grid of product cards.

const OurProducts = ({ contentObj, bestProducts }: Props) => {
    return (
        <div>
          {/* Title content component */}
          <RivoTitleContent contentObj={contentObj} />
          
          {/* Grid container for product cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 md:gap-x-5 lg:gap-x-10 lg:gap-y-5">
            {/* Mapping over the bestProducts array to create a card for each product */}
            {bestProducts.map((product: TProduct) => (
                <div key={product.id} className="mx-auto">
                  <RivoCard size="big" cardProduct={product} />
                </div>
            ))}
          </div>
        </div>
    );
};

export default OurProducts;
