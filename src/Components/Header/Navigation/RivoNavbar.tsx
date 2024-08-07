import { MENUITEMS } from "@/Constants/data";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import React from "react";

const RivoNavbar = () => {
  const navItems = MENUITEMS;
  return (
    <div>
      <ul className="hidden sm:flex sm:my-4 min-w-[490px] justify-between items-center">
        {navItems.map((items: TMenu) => (
          <li key={items.id} className="text-rivo-700 font-medium uppercase">
            <Link href={items.href}>{items.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RivoNavbar;
