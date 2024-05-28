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
        <PiMonitor className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Website Development",
    description:
      "Get a beautiful looking website for your clinic and stand out from the crowd",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiCalendarStarLight className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Guaranteed Google Rating Enhancement",
    description:
      "Worried about negative reviews? Our software ensures only the best ratings make it to Google, protecting your clinic’s reputation.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiCalendarStarLight className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Guaranteed Google Reviews Enhancement",
    description:
      "Worried about negative reviews? Our software ensures only the best reviews make it to Google, protecting your clinic’s reputation. ",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <GiSatelliteCommunication className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Streamline Patient Communication with Automated SMS",
    description:
      "Improve patient communication and save time with our easy-to-use software.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiMegaphone className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Social Media",
    description:
      "We will kickstart your clinic's journey to go on social media.",
  },
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
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiHeadsetFill className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Support",
    description: "We offer support for all our clients 24/7.",
  },
];
