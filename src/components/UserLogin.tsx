"use client";
import { FaCircleUser } from "react-icons/fa6";
import { signIn, signOut, useSession } from "next-auth/react";

const UserLogin = () => {
  const handleLoginClick = () => signIn();
  const handleLogoutClick = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { status, data } = useSession();
    setMenuIsOpen(false);
    signOut();
  };

  const handleMenuClick = () => setMenuIsOpen(!setMenuIsOpen);
  const handleMyTripsClick = () => {};

  return (
    <div>
      <button
        className=" flex gap-2 items-center text-color01 text-xl font-semibold"
        onClick={handleLoginClick}
      >
        Login <FaCircleUser />
      </button>
    </div>
  );
};

export default UserLogin;
function setMenuIsOpen(arg0: boolean) {
  throw new Error("Function not implemented.");
}
