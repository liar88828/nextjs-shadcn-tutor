import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionsProps } from "../../types/AccordionsProps";

export default function Accordions({ title, text }: AccordionsProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>
          {text}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

Accordions.Apply = () => {
  return <section className="min-w-52">
    <Accordions text={'Togo'} title={'Amy Campbell'} />
    <Accordions text={'Seychelles'} title={'Max Hubbard'} />
    <Accordions text={'Greenland'} title={'Shawn Walker'} />
  </section>
}

