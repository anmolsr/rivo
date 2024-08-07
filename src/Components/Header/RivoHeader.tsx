import React from "react";
import RivoLogo from "./RivoLogo";
import RivoNavbar from "./Navigation/RivoNavbar";
import RivoShopNav from "./Navigation/RivoShopNav";
import { AlignJustify } from "lucide-react";

// RivoHeader Component
// This functional component represents the header section of the Rivo application.
// It includes the logo, the main navigation bar, and the shop navigation bar.

const RivoHeader = () => {
  return (
    // Header element with padding-bottom and background color class
    <header className="pb-10 bg-rivo-400">
      <div className="rivContainer pt-14">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          {/* Logo component */}
          <div className="flex items-center mb-4">
            <RivoLogo />
            <div className="ml-8 border border-rivo-700 text-rivo-700 rounded p-1 sm:hidden">
              <AlignJustify />
            </div>
          </div>
          {/* Main navigation bar component */}
          <RivoNavbar />
          {/* Shop navigation bar component */}
          <RivoShopNav />
        </div>
      </div>
    </header>
  );
};

export default RivoHeader;
