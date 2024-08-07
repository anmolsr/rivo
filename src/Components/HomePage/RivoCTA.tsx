import { CTAOBJ } from "@/Constants/data";
import Image from "next/image";
import React from "react";
import RivoButton from "../RivoButtons/RivoButton";

const RivoCTA = () => {
  const ctaObj = CTAOBJ;
  return (
    <div className="bg-rivo-400 my-28 px-9 flex items-center">
      <div className="relative max-w-xl">
        <Image
          src={ctaObj.imgObj.src}
          width={570}
          height={717}
          priority
          alt={ctaObj.imgObj.alt}
          quality={100}
        />
      </div>
      <div>
        <div className="max-w-[589px] ml-14">
          <h2 className="font-robotoSlab text-5xl">{ctaObj.title}</h2>
          <p className="text-rivo-700 leading-relaxed my-6">
            {ctaObj.description}
          </p>
          <div className="text-rivo-700 max-w-sm grid grid-cols-3 gap-x-8">
            <div className="bg-white text-[16px] text-center space-y-2 rounded-md w-[100px] h-[100px] flex flex-col justify-center items-center">
              <div className="font-semibold text-[32px]">
                {ctaObj.validPeriodObj.days}
              </div>
              <div>Days</div>
            </div>
            <div className="bg-white text-[16px] text-center space-y-2 rounded-md w-[100px] h-[100px] flex flex-col justify-center items-center">
              <div className="font-semibold text-[32px]">
                {ctaObj.validPeriodObj.hours}
              </div>
              <div>Hours</div>
            </div>
            <div className="bg-white text-[16px] text-center space-y-2 rounded-md w-[100px] h-[100px] flex flex-col justify-center items-center">
              <div className="font-semibold text-[32px]">
                {ctaObj.validPeriodObj.min}
              </div>
              <div>Min</div>
            </div>
          </div>
          <div className="mt-12">
            <RivoButton label="buy now" link="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RivoCTA;
