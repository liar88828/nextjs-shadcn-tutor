'use client'
import React, { useState, createContext, useContext, ReactNode, FC } from 'react';


interface AccordionProps {
  children: ReactNode;
}



function Accordion({ children }: AccordionProps) {
  return (
    <div onClick={() => alert('Accordion')}>
      {children}
    </div>
  );
};


const AccordionTitle: FC<AccordionProps> = ({ children }) => {
  return (
    <div onClick={() => alert('AccordionTitle')}>
      {children}
    </div>
  );
};



const AccordionBody: FC<AccordionProps> = ({ children }) => {
  return (
    <div onClick={() => alert('AccordionBody')}>
      {children}
    </div>
  );
};

Accordion.Title = AccordionTitle;
Accordion.Body = AccordionBody;
export default Accordion;


export const AccordionApp: React.FC = () => (
  <div>
    <Accordion>
      <Accordion.Title>Title 1</Accordion.Title>
      <Accordion.Body>test</Accordion.Body>
    </Accordion>
  </div>
);
