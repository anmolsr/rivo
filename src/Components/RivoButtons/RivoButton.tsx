import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";
type Props = {
  label: string;
  link: string;
  variant?: string;
};
const RivoButton = ({ label, link, variant }: Props) => {
  if (variant === "outLine") {
    return (
      <Link
        href={link}
        className="text-rivo-700 border border-rivo-700 text-xl py-2 px-10 uppercase rounded-sm"
      >
        {label}
      </Link>
    );
  }else if(variant === "iconArrow") {
    // /<MoveRight color="#f5d426" strokeWidth={1.5} />
    return (
      <Link
        href={link}
        className="text-rivo-700 border border-rivo-700 text-xl py-2 px-10 inline-flex items-center rounded-sm"
      >
        {label}
        <MoveRight strokeWidth={1.5} className="ml-4" />
      </Link>
    );
  }
  
  else {
    return (
      <Link
        href={link}
        className="bg-rivo-700 text-white text-lg px-10 md:text-xl py-4 md:px-16 uppercase rounded-sm shadow-2xl"

      >
        {label}
      </Link>
    );
  }
};

export default RivoButton;
