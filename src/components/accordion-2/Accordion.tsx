import { useState } from "react";
import { cards } from "../../data";
import "./styles.css";

export const Accordion = () => {
  const [active, setActive] = useState(0);
  const handleToggle = (index: number) => setActive(index);

  return (
    <section>
      {cards.map((card, index) => {
        const isActive = active === index ? "active" : "";
        return (
          <article
            key={card.image}
            className={isActive}
            onClick={() => handleToggle(index)}
          >
            <img src={card.image} />
            <div className="content">
              <span className="material-symbols-outlined">photo_camera</span>
              <div>
                <h2>{card.header}</h2>
                <p>{card.text}</p>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};
