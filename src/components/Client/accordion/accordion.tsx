"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import './Accordion.css'
type TFaq = {
  id: string;
  question: string;
  answer:string;

}[]

const AccordionComponent = () => {
  
  const [Faq, setFaq] = useState<TFaq>([])
  
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/dashboard/faq`)
      .then(res => res.json())
      .then(data => {
      setFaq(data)
    })
  })

  console.log(Faq);

  return (
    <>

      <Accordion allowZeroExpanded>
        {Faq.map((item,index) => (
          <AccordionItem key={item.id}>
            <AccordionItemHeading>
              <AccordionItemButton>
                {item.question}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {item.answer}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default AccordionComponent;
