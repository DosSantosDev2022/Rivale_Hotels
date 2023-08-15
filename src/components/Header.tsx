"use client";

import Image from "next/image";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import Logo from "./logo";
import UserLogin from "./UserLogin";

function Header(): React.JSX.Element {
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
      {status === "unauthenticated" && <UserLogin />}
      {status === "authenticated" && data.user && (
        <div className="flex items-center p-3 gap-5  relative">
          <Image
            width={28}
            height={28}
            src={data.user.image!}
            alt={data.user.name!}
            className="rounded-full shadow-md cursor-pointer"
            onClick={handleMenuClick}
          />
          <p className="hidden lg:block">{data.user.name}</p>
          {menuIsOpen && (
            
            <div className=" z-50 absolute top-11 right-1 w-[110px] h-[100px] bg-white rounded-xl shadow-md flex flex-col justify-center items-center">
              <Link href="/my-trips">
                <button
                  className="text-color02 text-sm font-semibold mb-2 hover:text-color01 ease-in duration-300"
                  onClick={() => setMenuIsOpen(false)}
                >
                  Minhas viagens
                </button>
              </Link>
              <div className="w-1/2 bg-color02 h-[1px]"></div>
              <button
                className="text-color02 text-sm font-semibold mt-2 hover:text-color01 ease-in duration-300"
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
}

export default Header;
