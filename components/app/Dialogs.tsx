import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import React, { type ReactNode } from 'react'
import { Button } from "../ui/button"
import Accordions from "./Accordions"
import Alerts from "./Alerts"

export type DialogProps = {
  button: string
  title: string
  content: ReactNode
  cancel: string
  action: string
}

function Dialogs(
  { action = 'Continue',
    button = 'Open',
    cancel = 'Cancel',
    content = 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    title = 'Are you absolutely sure?' }:
    DialogProps

) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">{button}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            {content}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancel}</AlertDialogCancel>
          <AlertDialogAction   > {action} </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

  )
}

Dialogs.Apply = () => <Dialogs
  button='Open to show'
  action='Continue'
  cancel='Cancel'
  content='This action cannot be undone. This will permanently delete your account and remove your data from our servers.'
  title='Are you absolutely sure?'
/>

Dialogs.Accordion = () => <Dialogs
  button='Open to Accordion'
  action='Continue'
  cancel='Cancel'
  content={<Accordions.Apply />}
  title='Are you absolutely sure?'

/>
Dialogs.Alert = () => <Dialogs
  button='Open to Alert'
  action='Continue'
  cancel='Cancel'
  content={<Alerts.Apply />}
  title='Are you absolutely sure?'

/>


export default Dialogs