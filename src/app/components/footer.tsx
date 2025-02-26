import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white px-6 pb-8">
      <div className="max-w-[1500px] mx-auto">
        {/* CTA Card */}
        <div className="relative rounded-3xl p-8 md:p-12 mb-24 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <Image
              src="/images/footer-bg.png"
              alt="background pattern"
              layout="fill"
            />
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-2xl">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-[#F24E1E] hover:bg-white/90 mb-6"
              >
                Apply today
              </Button>
              <h2 className="text-xl md:text-5xl font-bold">
                and enjoy flexible repayment plans with zero processing fees!
              </h2>
            </div>

            {/* Circular Text */}
            <div className="relative w-[200px] h-[200px] mt-28 mb-10">
              <div className="absolute inset-0 animate-spin-slow">
                <Image
                  src="/images/get-started.png"
                  alt="circle text"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          <div className="flex items-center">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <Image
                src="/images/text-logo.png"
                className="w-28"
                alt="logo"
                width={100}
                height={100}
              />
            </div>
          </div>

          <nav className="flex md:justify-center gap-8">
            <a href="#" className="hover:text-[#F24E1E] transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-[#F24E1E] transition-colors">
              Features
            </a>
            <a href="#" className="hover:text-[#F24E1E] transition-colors">
              About
            </a>
            <a href="#" className="hover:text-[#F24E1E] transition-colors">
              FAQs
            </a>
          </nav>

          <div className="flex md:justify-end gap-8">
            <a href="#" className="hover:text-[#F24E1E] transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-[#F24E1E] transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-[#F24E1E] transition-colors">
              Twitter
            </a>
          </div>
        </div>

        <div className="h-px bg-white/20 my-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row gap-4 justify-between text-sm text-zinc-400">
          <p>Copyright 2025 - Anchor. All Rights Reserved</p>
          <a href="#" className="hover:text-white transition-colors">
            Policy & Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
