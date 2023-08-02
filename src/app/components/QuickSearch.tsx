
import React from "react";
import { FaHotel } from'react-icons/fa';
import { FaHome } from'react-icons/fa';

const QuickSearch = () => {
    return(
      <div className="container mx-auto ">
          <div className="flex items-center p-5">
            <div className="w-full h-[1px] bg-color03"></div>
              <h2 className=" px-5 text-base font-medium text-color03 whitespace-nowrap">Tente pesquisar por</h2>
            <div className="w-full h-[1px] bg-color03"></div>
          </div>

          <div className="flex w-full items-center justify-around">
            <div className="flex flex-col gap-1 items-center">
              <FaHotel className="text-color02 w-[25px]"  />
              <p className="text-color03 text-sm">Hotel</p>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <FaHome className="text-color02 w-[25px]"  />
              <p className="text-color03 text-sm">Chalés</p>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <FaHotel className="text-color02 w-[25px]"  />
              <p className="text-color03 text-sm">Pousada</p>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <FaHotel className="text-color02 w-[25px]"  />
              <p className="text-color03 text-sm">Fazenda</p>
            </div>
          </div>
          <div className="flex items-center p-5">
            <div className="w-full h-[1px] bg-color03"></div>
              <h2 className=" px-5 text-base font-medium text-color03 whitespace-nowrap">Destinos recomendados</h2>
            <div className="w-full h-[1px] bg-color03"></div>
          </div>
      </div>
    )
}

export default QuickSearch