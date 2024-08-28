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
import Router from "next/navigation";
import Link from "next/link";

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
    title: "EZLA",
    description:
      "Generate a personalised, job specific cover resume and letter in under 20 seconds. On average, it takes an hour to do it manually! This is still in beta mode. Launching Q3 2024.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        {/* <PiMonitor className="w-8 h-8 text-blue-600" /> */}
        <PiCalendarStarLight className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Rating Up",
    description:
      "I innovated this myself. It is my one-of-a-kind Rating Up software. RatingUp filters out bad reviews before they reach Google. So you don't have to worry about bad reviews for your business no more! Guaranteed results, and if not, a 100% money-back guarantee",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        {/* <PiCalendarStarLight className="w-8 h-8 text-blue-600" /> */}
        <PiMegaphone className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "ClinitOS",
    description:
      "All-in-one clinic management software. Manage your appointments, billing, inventory, and references all in one place. Unlike other softwares, most information can be done in one page. No more difficult-to-use tech systems. I know you doctors dont like that",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        {/* <PiCalendarStarLight className="w-8 h-8 text-blue-600" /> */}
        <PiHeadsetFill className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "General",
    description: "Websites and all that other good stuff",
  },
];
