
import React from "react";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import { Trip } from "@prisma/client";

interface TripDetailsProps{
  trip: Trip
}

const TripHeader = ({trip}: TripDetailsProps) => {
    return (
      <div className="flex flex-col">
        <div className="relative h-[300px] w-full">
        <Image src={trip?.coverImage} fill style={{objectFit:"cover"}} alt={trip.name} />
      </div>
        {/* textos e informações */}
      <div className="flex flex-col p-5">
        <h1 className="font-semibold text-xl text-color01">{trip.name}</h1>
        <div className="flex items-center gap-1 my-1">
          <ReactCountryFlag countryCode={trip.countryCode} svg />
          <p className="text-xs text-color03 underline">{trip.location}</p>
        </div>

        <p className="text-xs text-color03">
          <span className="text-color01 font-semibold">R$:{trip.pricePerDay.toString()}</span>
          {" "}por dia
        </p>
      </div>
      </div>
    )
}

export default TripHeader