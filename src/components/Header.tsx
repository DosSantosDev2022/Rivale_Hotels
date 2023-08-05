'use client'

import Image from "next/image"
import React from "react";
import {signIn,signOut, useSession} from "next-auth/react";
import {AiOutlineMenu} from "react-icons/ai"

const Header = () =>{
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const {status, data} = useSession()
  const handleLoginClick = () => signIn()
  const handleLogoutClick = () => {
    setMenuIsOpen(false);
    signOut();
  }

    const handleMenuClick = () => setMenuIsOpen(!menuIsOpen)

  return(
    <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center">
      <div className="relative h-[32px] w-[182px]">
        <Image src ="/logo.png" alt ="logo rivale hotels" fill/>
      </div>
      
      {status === "unauthenticated" && (
        <button className="text-color01 text-sm font-semibold"
          onClick={handleLoginClick}>Login</button>
      )}

      {status === "authenticated" && data.user && (
          <div className="flex items-center p-3 gap-5 border rounded-full border-color03 relative">
            <AiOutlineMenu  size ={20} onClick={handleMenuClick} className="cursor-pointer" />
            <Image width={28} height={28} src={data.user.image!} alt={data.user.name!} className="rounded-full shadow-md"/>

            {menuIsOpen && (
              <div className=" z-50 absolute top-12 left-0 w-full h-full bg-white rounded-xl shadow-md flex flex-col justify-center items-center">
                  <button className="text-color02 text-sm font-semibold" onClick={handleLogoutClick}>
                    Logout
                  </button>
              </div>
            )}
          </div>
      )}
    </div>
  )
}

export default Header;