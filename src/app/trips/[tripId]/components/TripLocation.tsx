import  React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';

interface TripLocationProps{
  location: string
  locationDescription: string
}

const TripLocations = ({location, locationDescription}: TripLocationProps) => {
  return ( 
    <div className="flex flex-col p-5">
        <h2 className="font-semibold text-base text-color02 text-center mb-5">Localização </h2>
        <div className="relative w-full h-[280px] mb-3">
        <Image src="/Map_mobile.png" alt={location} 
        fill style={{objectFit:"cover"}}
        className='rounded-md shadow-md'
          />
        </div>
        <h3 className='font-semibold text-color02 text-lg'>{location}</h3>
        <p className='text-xs text-color02 mt-3 leading-5'>{locationDescription}</p>
        <Button variant='outlined' className='w-full mt-5'>Ver no Google maps</Button>
    </div>
  );
}

export default TripLocations;