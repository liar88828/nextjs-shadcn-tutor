'use client'
import React, { ReactNode, } from 'react';
import { Button } from '../ui/button';

interface BodyProps {
  children: ReactNode;
}

function BodyButton({ children }: BodyProps) {
  return (
    <div> {children} </div>
  );
};


const NewButton = () => {
  return (
    <Button onClick={() => alert('BodyTitle')}>Click </Button>
  );
};


BodyButton.Click = NewButton;

// can call in server component
export const BodyApp: React.FC = () => (
  <div>
    <BodyButton>
      <BodyButton.Click />
    </BodyButton>
  </div>
);
// can't call in server component 
BodyButton.New = BodyApp;


export default BodyButton;
