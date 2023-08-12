import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <h1 className="text-color01 font-bold text-2xl">Rivale Hotels</h1>
      </Link>
    </div>
  );
};

export default Logo;
