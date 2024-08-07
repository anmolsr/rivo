import { CTAOBJ } from "@/Constants/data";  // Importing the CTA object from data constants
import Image from "next/image";  // Importing Image component from Next.js
import React from "react";  // Importing React library
import RivoButton from "../RivoButtons/RivoButton";  // Importing RivoButton component

// RivoCTA Component
// This functional component displays a call-to-action (CTA) section.
// It includes an image, title, description, a countdown timer, and a button.

const RivoCTA = () => {
  const ctaObj = CTAOBJ;  // Assigning the CTA object to a constant variable

  return (
    // Main container for the CTA section with background color
    <div className="bg-rivo-400">
      <div className="w-[96%] mx-auto flex flex-col items-center py-10 lg:flex-row lg:my-20 lg:px-9">
        
        {/* Image container */}
        <div className="relative max-w-72 md:max-w-md lg:max-w-xl">
          <Image
            src={ctaObj.imgObj.src}
            width={570}
            height={717}
            priority
            alt={ctaObj.imgObj.alt}
            quality={100}
            sizes="(max-width: 768px) 420px, 820px"
          />
        </div>
        
        {/* Text and button container */}
        <div>
          <div className="text-center lg:max-w-[589px] md:ml-14 mt-4">
            
            {/* CTA title */}
            <h2 className="font-robotoSlab lg:text-5xl">{ctaObj.title}</h2>
            
            {/* CTA description */}
            <p className="text-rivo-700 leading-relaxed my-6">
              {ctaObj.description}
            </p>
            
            {/* Countdown timer */}
            <div className="text-rivo-700 grid grid-cols-3 lg:gap-x-8 max-w-sm mx-auto">
              {/* Days */}
              <div className="bg-white mx-auto text-[16px] text-center space-y-2 rounded-md w-20 sm:w-[100px] h-20 sm:h-[100px] flex flex-col justify-center items-center">
                <div className="font-semibold text-[32px]">
                  {ctaObj.validPeriodObj.days}
                </div>
                <div>Days</div>
              </div>
              {/* Hours */}
              <div className="bg-white mx-auto text-[16px] text-center space-y-2 rounded-md w-20 sm:w-[100px] h-20 sm:h-[100px] flex flex-col justify-center items-center">
                <div className="font-semibold text-[32px]">
                  {ctaObj.validPeriodObj.hours}
                </div>
                <div>Hours</div>
              </div>
              {/* Minutes */}
              <div className="bg-white mx-auto text-[16px] text-center space-y-2 rounded-md w-20 sm:w-[100px] h-20 sm:h-[100px] flex flex-col justify-center items-center">
                <div className="font-semibold text-[32px]">
                  {ctaObj.validPeriodObj.min}
                </div>
                <div>Min</div>
              </div>
            </div>
            
            {/* CTA button */}
            <div className="mt-12">
              <RivoButton label="buy now" link="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RivoCTA;
