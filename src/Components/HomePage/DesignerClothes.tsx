import React from 'react';  // Importing React library
import RivoTitleContent from '../RivoTitleContent';  // Importing RivoTitleContent component
import RivoCard from '../RivoCard';  // Importing RivoCard component

type Props = {
  contentObj: TContent;  // Defining the type for contentObj
  prodCategory: TClothes[];  // Defining the type for prodCategory
};

// DesignerClothes Component
// This functional component displays a list of designer clothes.
// It includes a title and a grid of category cards.

const DesignerClothes = ({ contentObj, prodCategory }: Props) => {
  return (
    <div>
      {/* Title content component */}
      <RivoTitleContent contentObj={contentObj} />
      
      {/* Grid container for category cards */}
      <div className="grid md:grid-cols-3 lg:gap-x-10">
        {/* Mapping over the prodCategory array to create a card for each category */}
        {prodCategory.map((product: TClothes) => (
          <div key={product.id} className="mx-auto">
            <RivoCard size="big" carCategory={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignerClothes;
