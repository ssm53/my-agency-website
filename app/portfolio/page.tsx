/* eslint-disable react/no-unescaped-entities */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KglPc38kIQn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { JSX, SVGProps } from "react";
import Navbar from "@/components/ui/navbar";

export default function Portfolio() {
  return (
    <div>
      <div className="bg-black">
        <Navbar />
      </div>

      <div className="bg-black text-white min-h-screen flex flex-col" id="ezla">
        <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24 flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="flex-1">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <video
                controls
                className="max-w-full h-auto"
                src="/images/clinitOsDemo.mp4"
              >
                Your browser does not support the video tag.
              </video>
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center">
                <Button
                  variant="ghost"
                  size="lg"
                  className="bg-primary/20 hover:bg-primary/30 text-primary-foreground"
                >
                  <PlayIcon className="w-8 h-8" />
                  <span className="sr-only">Watch Demo</span>
                </Button>
              </div> */}
            </div>
          </div>
          <div className="flex-1 grid gap-6">
            <div>
              <h1 className="text-4xl md:text-4xl font-bold text-pink-500 mb-6">
                EZLA AI
              </h1>
              <p className="text-white text-lg md:text-xl">
                Generate a personalised job specific cover letter in under 20
                seconds using AI.
                <br />
                You dont need to spend 45 mins writing one now!
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2 mb-4">
                <h2 className="text-2xl font-semibold text-pink-500">
                  Key Features
                </h2>
                <ul className="grid gap-2 text-lg text-white">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary text-white" />
                    Create cover letter in less than 20 seconds
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary text-white" />
                    Edit cover letters until you are satisfied
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary text-white" />A
                    Database collection of 500 jobs a week
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary text-white" />A
                    Create a personalised resume
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary text-white" />
                    If your job is not found, just copy and paste the job
                    description, and get your cover letter in less than 1
                    minute.
                  </li>
                </ul>
              </div>
              <div className="grid gap-2">
                <h2 className="text-2xl font-semibold text-pink-500">
                  Benefits
                </h2>
                <ul className="grid gap-2 text-lg text-white">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary text-white" />
                    Increased productivity and efficiency
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary text-white" />
                    Getting hired is a number's game. Apply to more companies
                    easily!
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary text-white" />
                    No more procastination to apply for jobs! With our software,
                    you dont need to use your brain. Just click a few buttons!
                  </li>
                </ul>
              </div>
              <div className="flex gap-4">
                <p className="text-white text-lg md:text-xl">
                  * Launching Q4 2024. This is currently in beta mode.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-background text-foreground min-h-screen flex flex-col"
        id="clinitOS"
      >
        <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24 flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="flex-1 grid gap-6">
            <div>
              <h1 className="text-4xl md:text-4xl font-bold text-foreground text-pink-500">
                ClinitOS
              </h1>
              <p className="text-foreground text-lg md:text-xl">
                All-in-one clinic management software.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2 mb-2">
                <h2 className="text-2xl font-semibold text-foreground text-pink-500">
                  Summary
                </h2>
                <p className="text-foreground text-lg">
                  Alot of doctors manage their clinic manually, and alot of
                  softwares are legacy softwares which have not updated with the
                  times, especially the 'ease-of-use' aspect of it.. ClinicOS
                  solves this.
                </p>
              </div>
              <div className="grid gap-2">
                <h2 className="text-2xl font-semibold text-foreground text-pink-500">
                  Key Features
                </h2>
                <ul className="grid gap-2 text-lg text-foreground">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    Easy to use. All patient information in one page.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    Segment your cash/credit card/panel patients
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    Get reminders when your medicine inventory is running low
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    Get data on your monthly performances
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    Wite medical certificates and referral letters easily in one
                    place
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    Able to store patient documents e.g. scan results
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    Able to view patient history in the same tab as
                    consulattions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    Blocks sensitive information from everyone, even nurses
                  </li>
                </ul>
              </div>
              <div className="grid gap-2">
                <h2 className="text-2xl font-semibold text-foreground text-pink-500">
                  Benefits
                </h2>
                <ul className="grid gap-2 text-lg text-foreground">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    Store all information online. No need to look at case notes.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    Edit information with a click of a button.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    Track clinic performance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    Focus more on your core services... being a doctor!
                  </li>
                </ul>
              </div>
              {/* <div className="flex gap-4">
                <Button size="lg">Get Started</Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div> */}
            </div>
          </div>
          <div className="flex-1 grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/clinit1.png"
                alt="Project Image 1"
                width={600}
                height={400}
                className="rounded-lg object-contain"
                style={{ aspectRatio: "600/400", objectFit: "contain" }}
              />
              <img
                src="/images/clinit2.png"
                alt="Project Image 2"
                width={600}
                height={400}
                className="rounded-lg object-contain"
                style={{ aspectRatio: "600/400", objectFit: "contain" }}
              />
              <img
                src="/images/clinit3.png"
                alt="Project Image 3"
                width={600}
                height={400}
                className="rounded-lg object-contain"
                style={{ aspectRatio: "600/400", objectFit: "contain" }}
              />
              <img
                src="/images/clinit4.png"
                alt="Project Image 4"
                width={600}
                height={400}
                className="rounded-lg object-contain"
                style={{ aspectRatio: "600/400", objectFit: "contain" }}
              />
              <img
                src="/images/clinit5.png"
                alt="Project Image 4"
                width={600}
                height={400}
                className="rounded-lg object-contain"
                style={{ aspectRatio: "600/400", objectFit: "contain" }}
              />
              <img
                src="/images/clinit6.png"
                alt="Project Image 4"
                width={600}
                height={400}
                className="rounded-lg object-contain"
                style={{ aspectRatio: "600/400", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-black text-white min-h-screen flex items-center"
        id="rating-up"
      >
        <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24 flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="flex-1 grid gap-6 text-center lg:text-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold  mb-6 text-pink-500">
                Rating Up
              </h1>
              <p className="text-white text-lg md:text-xl mb-6">
                Improve your business's online reputation
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2 text-center">
                <h2 className="text-2xl font-semibold text-pink-500">
                  Key Features
                </h2>
                <ul className="grid gap-2 text-lg text-white">
                  <li className="flex items-center justify-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    Filters out any reviews below 4-stars before it reaches
                    Google.
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    Monitor business performance, even if you are not there. No
                    more guessing what can be improved with your business.
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    Private internal link for your bad reviews to be analysed
                    for improvement
                  </li>
                </ul>
              </div>
              <div className="grid gap-2 text-lg text-white text-center">
                <h2 className="text-2xl font-semibold text-pink-500">
                  Benefits
                </h2>
                <ul className="grid gap-2">
                  <li className="flex items-center justify-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    Guaranteed improvement to Google reviews & ratings
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    Real-time data on weaknesses of the business
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    Monitor business even if you are away
                  </li>
                </ul>
              </div>
              {/* <div className="flex gap-4 justify-center lg:justify-center">
                <Button size="lg">Get Started</Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-background text-foreground min-h-screen flex flex-col"
        id="general"
      >
        <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24 flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="flex-1 grid gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-pink-500">
                General Products
              </h1>
              <p className="text-foreground text-lg md:text-xl">
                Built websites and an AI chatbot(NDA signed) for businesses.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <h2 className="text-2xl font-semibold text-foreground text-pink-500">
                  Summary
                </h2>
                <p className="text-foreground text-lg">
                  On an adhoc basis, I accept custom software from clients, but
                  I predominantly focus on building specific products as I am
                  focused on my coding bootcamp. Here are some websites I built:
                </p>
              </div>
              <div className="grid gap-2">
                <h2 className="text-2xl font-semibold text-foreground text-pink-500">
                  Websites
                </h2>
                <ul className="grid gap-2 text-lg text-foreground">
                  <li className="flex items-center gap-2">
                    <Link
                      href="https://www.poliklinikutamapd.com/"
                      className="hover:underline"
                    >
                      Poliklinik Utama PD
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <Link
                      href="https://www.klinikkeluargadesa.com/"
                      className="hover:underline"
                    >
                      Klinik Keluarga Desa
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <Link
                      href="https://www.klinikmenggatal.com/"
                      className="hover:underline"
                    >
                      Klinik Menggatal
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <Link
                      href="https://revivesmiledentalclinic-v0-dentist-website1.vercel.app/"
                      className="hover:underline"
                    >
                      Revive Smile Dental Clinic
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <Link
                      href="https://www.clinicidealcare.com/"
                      className="hover:underline"
                    >
                      Clinic Ideal Care
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <Link
                      href="https://poliklinikvijay-v0-clinic-website2.vercel.app/"
                      className="hover:underline"
                    >
                      Poliklinik Vijay
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <div className="grid gap-2">
                <h2 className="text-2xl font-semibold text-foreground">
                  Benefits
                </h2>
                <ul className="grid gap-2 text-lg text-foreground">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    Store all information online. No need to look at case notes.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    Edit information with a click of a button.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    Track clinic performance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    Focus more on your core services... being a doctor!
                  </li>
                </ul>
              </div> */}
              {/* <div className="flex gap-4">
                <Button size="lg">Get Started</Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div> */}
            </div>
          </div>
          <div className="flex-1 grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/clinic1.png"
                alt="Project Image 1"
                width={600}
                height={400}
                className="rounded-lg object-contain"
                style={{ aspectRatio: "600/400", objectFit: "contain" }}
              />
              <img
                src="/images/clinic2.png"
                alt="Project Image 2"
                width={600}
                height={400}
                className="rounded-lg object-contain"
                style={{ aspectRatio: "600/400", objectFit: "contain" }}
              />
              <img
                src="/images/clinic3.png"
                alt="Project Image 3"
                width={600}
                height={400}
                className="rounded-lg object-contain"
                style={{ aspectRatio: "600/400", objectFit: "contain" }}
              />
              <img
                src="/images/clinic4.png"
                alt="Project Image 4"
                width={600}
                height={400}
                className="rounded-lg object-contain"
                style={{ aspectRatio: "600/400", objectFit: "contain" }}
              />
              <img
                src="/images/clinic5.png"
                alt="Project Image 4"
                width={600}
                height={400}
                className="rounded-lg object-contain"
                style={{ aspectRatio: "600/400", objectFit: "contain" }}
              />
              <img
                src="/images/clinic6.png"
                alt="Project Image 4"
                width={600}
                height={400}
                className="rounded-lg object-contain"
                style={{ aspectRatio: "600/400", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CheckIcon2(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
