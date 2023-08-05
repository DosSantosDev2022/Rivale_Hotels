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
      <TripReservation pricePerDay={trip.pricePerDay as any} maxGuest={trip.maxGuests} tripStarteDate={trip.startDate} tripEndDate={trip.endDate} />
      <TripDescription description={trip.description} />
      <TripHighLights highlights={trip.highlights}/>
      <TripLocations locationDescription={trip.locationDescription} location={trip.location} />
    </div>
  )
}

export default TripDetails