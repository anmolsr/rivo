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
        className="text-rivo-700 border border-rivo-700 text-xl py-2 px-10 uppercase"
      >
        {label}
      </Link>
    );
  } else {
    return (
      <Link
        href={link}
        className="bg-rivo-700 text-white text-xl py-4 px-16 uppercase"
      >
        {label}
      </Link>
    );
  }
};

export default RivoButton;
