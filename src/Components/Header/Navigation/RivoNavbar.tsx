import { MENUITEMS } from "@/Constants/data";
import Link from "next/link";
import React from "react";

const RivoNavbar = () => {
  const navItems = MENUITEMS;
  return (
    <ul className="flex min-w-[490px] justify-between items-center">
      {navItems.map((items: TMenu) => (
        <li key={items.id} className="text-rivo-700 font-medium uppercase">
          <Link href={items.href}>{items.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default RivoNavbar;
