import { ShieldAlert, Terminal } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import React from 'react'
import { AccordionsProps } from "@/types/AccordionsProps";
export default function Alerts({ text, title }: AccordionsProps) {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        {text}
      </AlertDescription>
    </Alert>

  )
}

Alerts.Warning = ({ text, title }: AccordionsProps) => {
  return (
    <Alert variant={'destructive'}>
      <ShieldAlert className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        {text}
      </AlertDescription>
    </Alert>

  )
}

Alerts.Apply = () => {
  return <>
    <Alerts
      title="CLI"
      text="You can add components and dependencies to your app using the cli."
    />
    <Alerts.Warning

      title="CLI"
      text="You can add components and dependencies to your app using the cli."
    />
  </>

}