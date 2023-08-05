import  React from 'react';
import Image from 'next/image';

interface TripLocationProps{
  location: string
}

const TripLocations = ({location}: TripLocationProps) => {
  return ( 
    <div className="flex flex-col p-5">
        <h2 className="font-semibold text-base text-color02 text-center mb-3">Localização </h2>
        <div className="relative w-full h-[280px] mb-3">
        <Image src="/Map_mobile.png" alt={location} fill style={{objectFit:"cover"}} />
        </div>
        <p className='font-semibold text-color02 text-lg'>{location}</p>
    </div>
  );
}

export default TripLocations;