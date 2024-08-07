import RivoHero from "@/Components/Hero/RivoHero";
import BestSelling from "@/Components/HomePage/BestSelling";
import DesignerClothes from "@/Components/HomePage/DesignerClothes";
import OurProducts from "@/Components/HomePage/OurProducts";
import RivoCTA from "@/Components/HomePage/RivoCTA";
import {
  RIVOCONTENT,
  RIVOPRODUCT,
  RIVOPRODUCTCATEGORY,
} from "@/Constants/data";

export default function Home() {
  //page content
  const pageContent = RIVOCONTENT;
  //all products
  const products = RIVOPRODUCT;
  //best seller products
  const bestProd = products.filter((item: TProduct) => item.isBest);
  //normal products
  const normalProd = products.filter((item: TProduct) => !item.isBest);
  //product category
  const productCategory = RIVOPRODUCTCATEGORY;
  return (
    <main>
      <RivoHero />
      <div className="rivContainer">
        <BestSelling
          contentObj={pageContent.sectionBest}
          bestProducts={bestProd}
        />
        {/*
        <OurProducts
          contentObj={pageContent.sectionProdcut}
          bestProducts={normalProd}
        />
        <RivoCTA />
        <DesignerClothes
          contentObj={pageContent.sectionClothes}
          prodCategory={productCategory}
        />*/}
      </div>
    </main>
  );
}
