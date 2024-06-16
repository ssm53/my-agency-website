/* eslint-disable react/no-unescaped-entities */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = () => {
  return (
    <div
      className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
      rounded-3xl
      
      "
    >
      <div className=" p-10 md:p-4 md:px-20">
        <div className="text-3xl md:text-7xl font-bold text-black">
          Have questions ?
        </div>
        <div className="  font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
          Get answers.
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Do I pay first?</AccordionTrigger>
            <AccordionContent>
              Nope, we will make one for you. If you don't like it, you don't
              have to pay me anything.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              In how long can I get my website?
            </AccordionTrigger>
            <AccordionContent>Max of 7 days. Average 3 days.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do I have anything to lose?</AccordionTrigger>
            <AccordionContent>
              Nope, you don't. As mentioned above, if you don't like it, you
              don't pay anything. 0% risk for you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>How do I contact you?</AccordionTrigger>
            <AccordionContent>Whatsapp me on +6012 - 339 7028</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQS;
