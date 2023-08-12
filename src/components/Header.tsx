"use client";

import Image from "next/image";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import Logo from "./logo";
import NavBar from "./NavBar";
import UserLogin from "./UserLogin";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const { status, data } = useSession();
  const handleLoginClick = () => signIn();
  const handleLogoutClick = () => {
    setMenuIsOpen(false);
    signOut();
  };

  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);
  const handleMyTripsClick = () => {};

  return (
    <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center">
      <Logo />
      <NavBar />
      {status === "unauthenticated" && (
      <UserLogin  />
      )}

      {status === "authenticated" && data.user && (
        <div className="flex items-center p-3 gap-5 border rounded-full border-color03 relative">
          <AiOutlineMenu
            size={20}
            onClick={handleMenuClick}
            className="cursor-pointer"
          />
          <Image
            width={28}
            height={28}
            src={data.user.image!}
            alt={data.user.name!}
            className="rounded-full shadow-md"
          />

          {menuIsOpen && (
            <div className=" z-50 absolute top-12 left-0 w-full h-[100px] bg-white rounded-xl shadow-md flex flex-col justify-center items-center">
              <Link href="/my-trips">
                <button className="text-color02 text-sm font-semibold mb-2">
                  Minhas viagens
                </button>
              </Link>

              <div className="w-1/2 bg-color02 h-[1px]"></div>
              <button
                className="text-color02 text-sm font-semibold"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
