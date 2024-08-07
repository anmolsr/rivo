import React from "react";
import RivoLogo from "./RivoLogo";
import RivoNavbar from "./Navigation/RivoNavbar";
import RivoShopNav from "./Navigation/RivoShopNav";

const RivoHeader = () => {
  return (
    <header className="pb-10 bg-rivo-400">
      <div className="rivContainer pt-14">
        <div className="flex items-center justify-between">
          <RivoLogo />
          <RivoNavbar />
          <RivoShopNav/>
        </div>
      </div>
    </header>
  );
};

export default RivoHeader;
