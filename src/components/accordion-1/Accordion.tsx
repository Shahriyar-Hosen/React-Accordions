import { useState } from "react";
import { faqs } from "../../data";
import AccordionItem from "./AccordionItem";
import "./styles.css";

export const Accordion1 = () => {
  const [active, setActive] = useState<number | null>();

  const handleToggle = (index: number) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <article>
      {faqs.map((faq, index) => {
        return (
          <AccordionItem
            key={index}
            active={active}
            handleToggle={handleToggle}
            faq={faq}
          />
        );
      })}
    </article>
  );
};
