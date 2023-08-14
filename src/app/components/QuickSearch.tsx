import Link from "next/link";
import React from "react";
import { FaHotel } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

const QuickSearch = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex items-center p-5">
        <div className="w-full h-[1px] bg-color03"></div>
        <h2 className=" px-5 text-base font-medium text-color03 whitespace-nowrap">
          Tente pesquisar por
        </h2>
        <div className="w-full h-[1px] bg-color03"></div>
      </div>

      <div className="flex w-full items-center justify-around">
        <div className="flex flex-col gap-1 items-center">
          <Link className="flex flex-col gap-1 items-center" href={`/trips/search?text=hotel`}>
            <FaHotel className="text-color02 w-[25px]" />
            <p className="text-color03 text-sm">Hotel</p>
          </Link>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <Link className="flex flex-col gap-1 items-center" href={`/trips/search?text=chalés`}>
            <FaHome className="text-color02 w-[25px]" />
            <p className="text-color03 text-sm">Chalés</p>
          </Link>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <Link className="flex flex-col gap-1 items-center" href={`/trips/search?text=Pousadas`}>
            <FaHotel className="text-color02 w-[25px]" />
            <p className="text-color03 text-sm">Pousada</p>
          </Link>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <Link className="flex flex-col gap-1 items-center" href={`/trips/search?text=Fazenda`}>
            <FaHotel className="text-color02 w-[25px]" />
            <p className="text-color03 text-sm">Fazenda</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
