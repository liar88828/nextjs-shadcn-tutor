'use client'
import { Calendar } from "@/components/ui/calendar"

import React from 'react'

function Calendars() {

  const [date, setDate] = React.useState<Date | undefined>(new Date())
  console.log({ date })
  return (
    <div className="">
      <p>{date?.toLocaleDateString('id-ID', {
        calendar: 'gregory',
        dateStyle: 'full',
      })}</p>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  )

}

export default Calendars