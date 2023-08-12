import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className=" hidden lg:block">
      <ul className="w-full">
        <li className="flex gap-10">
          <Link href={"/"}>Home</Link>
          <Link href={""}>Hoteis</Link>
          <Link href={""}>Promoções</Link>
          <Link href={""}>Contato</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
