import   React from 'react';
import { FaRegCircleCheck  } from "react-icons/fa6";

interface TripHighLightsProps{
  highlights:string[]
}

const TripHighLights = ({highlights}: TripHighLightsProps) => {
  return ( 
    <div className="flex flex-col p-5">
        <h2 className="font-semibold text-base text-color02 text-center pb-3">Destaques </h2>
        <div className="flex flex-wrap gap-y-2">
        {highlights.map((highlight, index) => (
          <div key={highlight} className="flex items-center gap-2 lg:gap-3 w-1/2">
            <FaRegCircleCheck className='text-color01 text-lg' />

            <p className="text-color02 text-xs lg:text-base">{highlight}</p>
          </div>
        ))}
        </div>
    </div>
  );
}

export default TripHighLights;