import image1 from "../components/accordion/1.jpg";
import image2 from "../components/accordion/2.jpg";
import image3 from "../components/accordion/3.jpg";
import image4 from "../components/accordion/4.jpg";
import image5 from "../components/accordion/5.jpg";
import { ICards, IFaq } from "../types";

export const faqs: IFaq[] = [
  {
    id: 1,
    header: "What is Lorem Ipsum?",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  },
  {
    id: 2,
    header: "Where does it come from?",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  },
  {
    id: 3,
    header: "Why do we use it?",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  },
  {
    id: 4,
    header: "Where can I get some?",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  },
];

export const cards: ICards[] = [
  {
    header: "Canada",
    image: image2,
    text: `Image description here`,
  },
  {
    header: "Bali",
    image: image1,
    text: `Image description here`,
  },
  {
    header: "Spain",
    image: image3,
    text: `Image description here`,
  },
  {
    header: "Indonesia",
    image: image4,
    text: `Image description here`,
  },
  {
    header: "South Africa",
    image: image5,
    text: `Image description here`,
  },
];
