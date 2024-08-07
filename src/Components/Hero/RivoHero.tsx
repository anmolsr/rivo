import { HEROOBJ } from "@/Constants/data";
import Image from "next/image";
import React from "react";
import RivoButton from "../RivoButtons/RivoButton";

const RivoHero = () => {
  const heroObj: THero = HEROOBJ;
  return (
    <div className="py-32 bg-rivo-400"><div className="rivContainer flex justify-between items-center">
    <div className="max-w-2xl">
      <h1 className="font-rufina text-[86px] leading-tight text-">
        {heroObj.title}
      </h1>
      <div className="max-w-xl py-16">
        <p className="text-rivo-600 text-2xl leading-loose">{heroObj.description}</p>
      </div>
      <RivoButton label={heroObj.buttonObj.label} link={heroObj.buttonObj.href}/>
    </div>
    <div className="relative max-w-xl">
      <Image
        src={heroObj.imageObj.url}
        width={570}
        height={717}
        priority
        alt={heroObj.imageObj.alt}
        quality={100}
      />
    </div>
  </div></div>
    
  );
};

export default RivoHero;
