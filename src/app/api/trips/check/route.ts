import { prisma } from "@/lib/prisma";
import { endOfDay } from "date-fns";
import { NextResponse } from "next/server";


export async function POST(request:Request){
    const req = await request.json();

    const reservation = await prisma.tripReservation.findMany({
       where: {
         trip: req.tripId,
         // VERIFICA SE EXISTE RESERVA ENTRE AS DATAS
         startDate: {
          lte: new Date(req.endDate)
         },
         endDate:{
          gte: new Date(req.startDate)
         }
       }
    })

    if (reservation.length > 0){
        return new NextResponse(JSON.stringify({
          error:{
            Code: 'TRIP_ALREADY_RESERVED'
          }
        }))
    }

    return new NextResponse(JSON.stringify({
        success:true,
    }))
}
