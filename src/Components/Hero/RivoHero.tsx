import { HEROOBJ } from "@/Constants/data";  // Importing hero object data
import Image from "next/image";  // Importing Image component from Next.js
import React from "react";  // Importing React library
import RivoButton from "../RivoButtons/RivoButton";  // Importing RivoButton component

// RivoHero Component
// This functional component represents the hero section of the Rivo application.
// It includes a title, description, button, and image.

const RivoHero = () => {
  const heroObj: THero = HEROOBJ;  // Assigning the hero object to a constant variable
  
  return (
    // Main container for the hero section with padding and background color
    <div className="py-10 lg:py-32 bg-rivo-400">
      <div className="rivContainer flex flex-col-reverse md:flex-row justify-between items-center">
        
        {/* Text and button container */}
        <div className="m-auto mt-5 text-center max-w-sm lg:max-w-2xl">
          
          {/* Hero title */}
          <h1 className="font-rufina text-3xl sm:text-5xl lg:text-7xl xl:text-[86px] leading-tight text-">
            {heroObj.title}
          </h1>
          
          {/* Hero description */}
          <div className="max-w-xl py-8 lg:py-16">
            <p className="text-rivo-600 md:text-2xl leading-tight md:leading-loose">
              {heroObj.description}
            </p>
          </div>
          
          {/* Hero button */}
          <RivoButton label={heroObj.buttonObj.label} link={heroObj.buttonObj.href} />
        </div>
        
        {/* Hero image container */}
        <div className="relative max-w-sm lg:max-w-full">
          <Image
            src={heroObj.imageObj.url}
            width={570}
            height={717}
            priority
            alt={heroObj.imageObj.alt}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default RivoHero;
