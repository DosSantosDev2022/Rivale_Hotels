'use client';

import Button from '@/components/Button';
import { Trip } from '@prisma/client';
import { format } from 'date-fns';
import ptBR from "date-fns/locale/pt-BR";
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React , {useEffect, useState} from 'react';
import ReactCountryFlag from 'react-country-flag';


const TripConfirmation = ({params}: { params:{tripId:string}}) => {
  const [trip, setTrip] = useState< Trip | null >();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const searchParams = useSearchParams()

  useEffect(() => {

      const fetchTrip = async () => {
        const response = await fetch(`http://localhost:3000/api/trips/check`, {
          method: "POST",
          body: JSON.stringify({
            tripId: params.tripId,
            startDate: searchParams.get("startDate"),
            endDate: searchParams.get("endDate"),
        }),
      });

      const {trip, totalPrice} = await response.json();

      setTrip(trip);
      setTotalPrice(totalPrice);
    };

    fetchTrip();
  },[params.tripId, searchParams]);


  if(!trip)return null;

  const startDate = new Date(searchParams.get ("startDate") as string);
  const endDate = new Date(searchParams.get ("endDate") as string);
  const guests = searchParams.get ("guests");


  return ( 
    <div className='container mx-auto p-5'>
        <h1 className='font-semibold text-xl text-color02'>Sua viagem</h1>
        {/* CARD */}
        <div className="flex flex-col p-5 mt-5 border-color03 border-solid border shadow-lg rounded-lg">
          <div className='flex items-center gap-2 border-b border-color03 border-solid pb-5'>
            <div className='relative h-[106px] w-[124px]'>
              <Image src={trip.coverImage} alt={trip.name} style={{ objectFit: 'cover' }} className='rounded-lg' fill />
            </div>
            <div className="flex flex-col ">
                  <h2 className='text-xl text-color02 font-semibold'>{trip.name}</h2>
                  <div className="flex items-center gap-3 pb-5">
                    <ReactCountryFlag countryCode={trip.countryCode} svg />
                    <p className="text-xs text-grayPrimary">{trip.location}</p>
                  </div>
            </div>
          </div>
          <h3 className='font-semibold text-color02 text-sm mt-3'>Informações sobre o preço</h3>
            <div className="flex justify-between mt-1">
              <p className='text-color02'>Total</p>
              <p className=''>R$:{totalPrice}</p>
            </div>
        </div>
        {/* TEXTS */}
        <div className="flex flex-col mt-5 text-color02">
          <h3 className='font-semibold'>Data</h3>
          <div className='flex items-center gap-2 mt-1'>
            <p>{format(startDate,"dd 'de' MMM" ,{locale:ptBR})}</p>
            {" - "}
            <p>{format(endDate,"dd 'de' MMM" ,{locale:ptBR})}</p>
          </div>
          <h3 className='font-semibold mt-5'>Hóspedes</h3>
          <p>{guests} hóspedes</p>

          <Button className='mt-5'>Finalizar Compra</Button>
        </div>
    </div>
  );
}


export default TripConfirmation;