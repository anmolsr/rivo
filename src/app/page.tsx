import RivoHero from "@/Components/Hero/RivoHero";  // Importing RivoHero component
import BestSelling from "@/Components/HomePage/BestSelling";  // Importing BestSelling component
import DesignerClothes from "@/Components/HomePage/DesignerClothes";  // Importing DesignerClothes component
import OurProducts from "@/Components/HomePage/OurProducts";  // Importing OurProducts component
import RivoCTA from "@/Components/HomePage/RivoCTA";  // Importing RivoCTA component
import {
  RIVOCONTENT,
  RIVOPRODUCT,
  RIVOPRODUCTCATEGORY,
} from "@/Constants/data";  // Importing data constants

export default function Home() {
  // Page content
  const pageContent = RIVOCONTENT;
  
  // All products
  const products = RIVOPRODUCT;
  
  // Best seller products
  const bestProd = products.filter((item: TProduct) => item.isBest);
  
  // Normal products
  const normalProd = products.filter((item: TProduct) => !item.isBest);
  
  // Product category
  const productCategory = RIVOPRODUCTCATEGORY;

  return (
    <main>
      {/* Hero section */}
      <RivoHero />
      <div className="rivContainer">
        {/* Best selling products section */}
        <BestSelling
          contentObj={pageContent.sectionBest}
          bestProducts={bestProd}
        />
        {/* Normal products section */}
        <OurProducts
          contentObj={pageContent.sectionProdcut}
          bestProducts={normalProd}
        />
        {/* Call to action section */}
        <RivoCTA />
        {/* Designer clothes section */}
        <DesignerClothes
          contentObj={pageContent.sectionClothes}
          prodCategory={productCategory}
        />
      </div>
    </main>
  );
}
