export type IFaq = {
  id: number;
  header: string;
  text: string;
};

export type IAccordionItem = {
  active: number | null | undefined;
  handleToggle: (index: number) => void;
  faq: IFaq;
};
