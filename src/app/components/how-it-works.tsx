import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  return (
    <section className="relative bg-black text-white py-24 px-6">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">How It Works</h2>
          <Button variant="link" className="text-white gap-2 group">
            Step by step process
            <ArrowUpRight
              height={40}
              width={40}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Apply Online */}
          <div className="bg-zinc-900/60 backdrop-blur rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-3">Apply Online</h3>
            <p className="text-white mb-8">
              Fill out a simple loan application with property and financial
              details.
            </p>
            <div className="relative h-[320px] md:h-[320px] items-end flex justify-end w-full px-10">
              <Image
                src="/images/phone-1.png"
                alt="Apply Online Form"
                className="w-[500px] md:w-[400px]"
                width={1000}
                height={1000}
              />
            </div>
          </div>

          {/* Upload Documents */}
          <div className="bg-zinc-900/60 backdrop-blur rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-3">Upload Documents</h3>
            <p className="text-white mb-8">
              Submit property ownership proof, ID verification, and financial
              records.
            </p>
            <div className="relative h-[320px] md:h-[320px] items-end flex justify-end w-full px-10">
              <Image
                src="/images/phone-2.png"
                alt="Apply Online Form"
                className="w-[500px] md:w-[400px]"
                width={1000}
                height={1000}
              />
            </div>
          </div>

          {/* Get Appraised & Approved */}
          <div className="bg-zinc-900/60 backdrop-blur rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-3">
              Get Appraised & Approved
            </h3>
            <p className="text-white mb-8">
              Track your application as it moves through the appraisal and
              approval stages.
            </p>
            <div className="relative h-[320px] md:h-[320px] items-end flex justify-end w-full px-10">
              <Image
                src="/images/phone-3.png"
                alt="Apply Online Form"
                className="w-[500px] md:w-[400px]"
                width={1000}
                height={1000}
              />
            </div>
          </div>

          {/* Receive Funds & Manage Repayments */}
          <div className="bg-zinc-900/60 backdrop-blur rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-3">
              Receive Funds & Manage Repayments
            </h3>
            <p className="text-white mb-8">
              Once approved, access funds and track repayment schedules
              effortlessly.
            </p>
            <div className="relative h-[320px] md:h-[320px] items-end flex justify-end w-full px-10">
              <Image
                src="/images/phone-4.png"
                alt="Apply Online Form"
                className="w-[500px] md:w-[400px]"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>

        {/* Circular Badge */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 md:left-24 md:translate-x-0">
          <div className="relative w-32 h-32">
            <Image
              src="/images/how-it-works.png"
              alt="How it Works Badge"
              width={128}
              height={128}
              // className="animate-spin-slow"
            />
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <ArrowUpRight className="w-8 h-8" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
