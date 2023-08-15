import { prisma } from "@/lib/prisma";
import React from "react";
import TripHeader from "./components/TripHeader";
import TripReservation from "./components/TripReservation";
import TripDescription from "./components/TripDescription";
import TripHighLights from "./components/TripHighlights";
import TripLocations from "./components/TripLocation";
import TripLocation from "./components/TripLocation";
import TripHighlights from "./components/TripHighlights";

const getTripDedails = async (tripId: string) => {
  const trip = await prisma.trip.findUnique({
    where: {
      id: tripId,
    },
  });
  return trip;
};

const TripDetails = async ({ params }: { params: { tripId: string } }) => {
  const trip = await getTripDedails(params.tripId);

  if (!trip) return null;

  return (
    <div className="container mx-auto lg:px-40 lg:pt-10">
      <TripHeader trip={trip} />
      <div className="flex flex-col lg:flex-row lg:mt-12 lg:gap-20">
        <div className="lg:order-2">
          <TripReservation
            tripId={trip.id}
            pricePerDay={trip.pricePerDay as any}
            tripStartDate={trip.startDate}
            tripEndDate={trip.endDate}
            maxGuest={trip.maxGuests}
          />
        </div>

        <div className="lg:order-1">
          <TripDescription description={trip.description} />
          <TripHighlights highlights={trip.highlights} />
        </div>
      </div>
      <TripLocation
        locationDescription={trip.locationDescription}
        location={trip.location}
      />
    </div>
  );
};

export default TripDetails;
