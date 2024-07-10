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
            <AccordionTrigger>
              With RatingUp, do I really get my money-back?
            </AccordionTrigger>
            <AccordionContent>
              Yes, if we don't improve your ratings & reviews, you get 100% of
              your money-back.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Why isn't every clinic suitable for Google Ads?
            </AccordionTrigger>
            <AccordionContent>
              Google Ads will show your clinic, together with it's ratings &
              reviews to thousands of people. I don't think it's wise to spend
              on Google Ads, only to show your average ratings & reviews.
              Improve that first, then it's worth to spend on Google Ads.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              How can you increase my ratings & reviews?
            </AccordionTrigger>
            <AccordionContent>
              We've built a 'RatingUp' software. It filters out bad reviews.
              Only good reviews go to Google.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              How do you bring my clinic to the top of Google?
            </AccordionTrigger>
            <AccordionContent>
              We use Google Ads, together with a stunning website built to push
              customers to contact or book an appointment with you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>How do I contact you?</AccordionTrigger>
            <AccordionContent>Whatsapp me on +6012 - 339 7028</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQS;
