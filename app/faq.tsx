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
            <AccordionTrigger>What is RaveWave Digital?</AccordionTrigger>
            <AccordionContent>
              RaveWave Digital is a tech and marketing agency fully focusing on
              clinics.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How to start ?</AccordionTrigger>
            <AccordionContent>
              You can start by contacting us at +60123397028. We will get back
              to you within 24 hours.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              100% money-back guarantee? Really?
            </AccordionTrigger>
            <AccordionContent>
              Yes, for our Google Services, if we do not improve your clinic's
              Google Ratings and Reviews, that means we failed and will return
              all your money back.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Support ?</AccordionTrigger>
            <AccordionContent>
              We offer 24 hours Monday-Sunday support for all our clients.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQS;
