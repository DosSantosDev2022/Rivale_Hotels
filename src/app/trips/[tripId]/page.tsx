import { prisma } from "@/lib/prisma";
import React from "react";
import TripHeader from "./components/TripHeader"
import TripReservation from "./components/TripReservation";
import TripDescription from "./components/TripDescription";
import TripHighLights from "./components/TripHighlights";
import TripLocations from "./components/TripLocation";


const getTripDedails = async (tripId: string) => {
  const trip = await prisma.trip.findUnique({
    where: {
      id: tripId
    }
  })
  return trip;
}

const TripDetails = async ({params}:{params: {tripId:string}}) => {
  const trip = await getTripDedails (params.tripId);

  if (!trip) return null;

  return (
    <div className="container mx-auto">
      <TripHeader trip={trip}/>
      {/* reservas  */}
      <TripReservation trip={trip} />
      <TripDescription description={trip.description} />
      <TripHighLights highlights={trip.highlights}/>
      <TripLocations location={trip.location} />
    </div>
  )
}

export default TripDetails