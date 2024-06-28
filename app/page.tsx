import type { ParamsProps, } from "../types/global";
import Accordions from "../components/app/Accordions";
import Alerts from "../components/app/Alerts";
import Dialogs from "../components/app/Dialogs";
import AspectRatios from "../components/app/AspectRatios";
import Avatars from "../components/app/Avatars";
import Badges from "../components/app/Badges";
import Breadcrumbs from "../components/app/Breadcrumbs";
import Buttons from "../components/app/Buttons";
import Calendars from "../components/app/Calendars";
import { AccordionApp } from "../components/app/test";
import { BodyApp } from "../components/app/testbutton";
import Cards from "../components/app/Cards";
import Images from "../components/app/Images";
import Checkboxs from "../components/app/CheckBox";
import Collapsibles from "../components/app/Collapsibles";


export default function Home({ searchParams }: ParamsProps<['name', 'age']>) {
  // console.log({ params, searchParams })
  const { age } = searchParams

  return <>
    <Collapsibles />
    <Checkboxs />
    <Images />
    <Cards />
    <BodyApp />
    <AccordionApp />
    <Calendars />
    <Buttons title='click ok' />


    <Buttons.Error title='Error' />
    <Breadcrumbs />
    <Badges />
    <Avatars />
    <Accordions.Apply />
    {age === '10' && <Alerts.Apply />}
    <Dialogs.Apply />
    <Dialogs.Accordion />
    <Dialogs.Alert />
    <AspectRatios />
  </>
} 