'use client'

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/input";
import { Trip } from "@prisma/client";
import { differenceInDays } from "date-fns";
import React from "react";
import { Controller, useForm } from "react-hook-form";

interface TripReservationProps{
  tripStarteDate: Date;
  tripEndDate: Date;
  maxGuest: number;
  pricePerDay: number;
}
interface TripReservationForm{
  guests: number;
  starteDate: Date | null
  endDate: Date | null
}

const TripReservation = ({maxGuest,tripStarteDate,tripEndDate, pricePerDay} : TripReservationProps) => {
  const  {register, handleSubmit, formState:{errors},control,watch} = useForm <TripReservationForm>();
  const onsubmit = (data:any) =>{

  }

  const startDate = watch ("starteDate");
  const endDate = watch ("endDate");
  return ( 
        <div className="flex flex-col px-5 ">
          <div className="flex gap-3">
            <Controller
              name="starteDate"
              rules={{
                required:{
                  value:true,
                  message:"Data inicial é obrigatória.",
                },  
              }}
              control={control}
              render={({field}) => <DatePicker error={!!errors?.starteDate} errorMessage={errors?.starteDate?.message} placeholderText="Data inicio" onChange={field.onChange} selected={field.value} className="w-full" minDate={tripStarteDate} /> }
              />
            
            <Controller
              name="endDate"
              rules={{
                required:{
                  value:true,
                  message:"Data final é obrigatória.",
                },  
              }}
              control={control}
              render={({field}) => <DatePicker error={!!errors?.endDate} errorMessage={errors?.endDate?.message} placeholderText="Data final" onChange={field.onChange} selected={field.value} className="w-full" maxDate={tripEndDate} minDate={startDate ?? tripStarteDate} /> }
              />
          </div>

          <Input {... register("guests",{
            required:{
              value:true,
              message:'Número de hóspedes é obrigatório!',
            }
          })} placeholder={`Número de hóspedes(max: ${maxGuest})`} className="w-full mt-4"
          error = {!!errors?.guests} errorMessage ={errors?.guests?.message} />

          <div className="flex justify-between mt-3">
            <p className="font-medium text-sm text-color02">Total</p>
            <p className="font-semibold text-sm text-color02">{
              (startDate && endDate)  ? 
                `R$: ${differenceInDays(endDate,startDate) * pricePerDay ?? 1}`
              : "R$:0"
            }</p>
          </div> 

            <div className="pb-10 border-b border-color03 w-full">
            <Button onClick={() => handleSubmit(onsubmit)()} className="mt-3 w-full">Reservar Agora</Button>
            </div>
        </div>  
   );
}

export default TripReservation;