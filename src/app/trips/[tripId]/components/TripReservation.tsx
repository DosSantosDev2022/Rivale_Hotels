'use client'

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/input";
import { Trip } from "@prisma/client";
import React from "react";

interface TripReservationProps{
  trip: Trip
}

const TripReservation = ({trip} : TripReservationProps) => {
  return ( 
    <div>
        <div className="flex flex-col px-5">
          <div className="flex gap-3">
            <DatePicker placeholderText="Data inicio" onChange={() =>{}} className="w-full" />
            <DatePicker placeholderText="Data final" onChange={() =>{}} className="w-full" />
          </div>

          <Input placeholder={`Número de hóspedes(max: ${trip.maxGuests})`} className="w-full mt-4" />
          <div className="flex justify-between mt-3">
            <p className="font-medium text-sm text-color02">Total</p>
            <p className="font-semibold text-sm text-color02">R$: 2600,00</p>
          </div> 

          <Button className="mt-3">Reservar Agora</Button>
        </div>
    </div>
   );
}

export default TripReservation;