import React from "react";
import RivoLogoIcon from "../../../public/Rivo.svg";
import Image from "next/image";
const RivoLogo = () => {
  return (
    <div>
      <Image priority src={RivoLogoIcon} alt="Rivo Fashion" />
    </div>
  );
};

export default RivoLogo;
