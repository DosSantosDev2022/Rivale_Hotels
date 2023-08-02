'use client';

import React from "react";
import Input from "@/components/input";
import DatePicker from "@/components/DatePicker";
import CurrencyInput from "@/components/CurrencyInput";
import Button from "@/components/Button";

const TripSearch = () => {
  return(
    <div className="container mx-auto p-5 bg-search-background bg-cover bg-center bg-no-repeat ">
        <h1 className="font-semibold text-xl text-center text-color02">Encontre sua próxima <span className="text-color01">viagem !</span></h1>

        <div className="flex flex-col gap-4 mt-5">
          <Input placeholder="Onde você quer ir ?"/>

          <div className="flex gap-4">
          <DatePicker placeholderText="Data de Ida" className="w-full" onChange={() =>{}}/>
          <CurrencyInput placeholder="Orçamento" className="w-full" />
          </div>
          <Button>Pesquisar</Button>
        </div>
    </div>
  )
}

export default TripSearch