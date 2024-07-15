import { HoverEffect } from "@/components/ui/card-hover-effect";
import { GiSatelliteCommunication } from "react-icons/gi";
import {
  PiAppStoreLogo,
  PiCalendarStarLight,
  PiHeadsetFill,
  PiLock,
  PiMegaphone,
  PiMonitor,
  PiStorefront,
} from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        {/* <PiMonitor className="w-8 h-8 text-blue-600" /> */}
        <PiCalendarStarLight className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Rating Up",
    description:
      "We guarantee to improve your Google ratings & reviews. Using our custom software, we filter out bad reviews before they reach Google. So you don't have to worry about bad reviews no more! If we don't deliver results, 100% money-back guarantee",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        {/* <PiCalendarStarLight className="w-8 h-8 text-blue-600" /> */}
        <PiMegaphone className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Boost your clinic with Google Ads + Website",
    description:
      "Make your clinic appear as #1 on Google & be seen by more patients! We then create a website with a focus on driving patients to contact you. Stop wasting time and effort on Facebook or Instagram. We've done our research - Google Ads gives the best ROI for your clinic.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        {/* <PiCalendarStarLight className="w-8 h-8 text-blue-600" /> */}
        <PiHeadsetFill className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Clinic Care",
    description:
      "This is our premium package. We will work with your clinic for 2 months, and fix everything from interior design to training your nurses on social media to monitoring nurses customer service to patient's experience whilst waiting for you to online ads to promoting your clinic in your area and many many more  ",
  },
  // {
  //   icon: (
  //     <div className="bg-blue-100 p-4 rounded-full">
  //       {/* <GiSatelliteCommunication className="w-8 h-8 text-blue-600" /> */}
  //        <PiMonitor className="w-8 h-8 text-blue-600" />
  //     </div>
  //   ),
  //   title: "Website",
  //   description:
  //     "Improve patient communication and save time with our easy-to-use software.",
  // },
  // {
  //   icon: (
  //     <div className="bg-blue-100 p-4 rounded-full">
  //       <PiMegaphone className="w-8 h-8 text-blue-600" />
  //     </div>
  //   ),
  //   title: "Social Media",
  //   description:
  //     "We will kickstart your clinic's journey to go on social media.",
  // },
  // {
  //   icon: (
  //     <div className="bg-blue-100 p-4 rounded-full">
  //       <PiAppStoreLogo className="w-8 h-8 text-blue-600" />
  //     </div>
  //   ),
  //   title: "App Development",
  //   description:
  //     "We build custom mobile apps for iOS and Android. Our apps are designed to be user-friendly and performant.",
  // },
  // {
  //   icon: (
  //     <div className="bg-blue-100 p-4 rounded-full">
  //       <PiHeadsetFill className="w-8 h-8 text-blue-600" />
  //     </div>
  //   ),
  //   title: "Support",
  //   description: "We offer support for all our clients 24/7.",
  // },
];
