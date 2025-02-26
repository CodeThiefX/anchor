import { Button } from "@/components/ui/button";
import { CustomSlider } from "@/components/ui/custom-slider";
import Image from "next/image";
import React, { useState } from "react";
import { Menu } from "lucide-react";

export const Hero = () => {
  const [loanAmount, setLoanAmount] = useState(55000);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount);
  };
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/bg1.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between py-12 max-w-[1500px] mx-auto px-3 md:px-6">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <Image
            src="/images/text-logo.png"
            className="w-28"
            alt="Logo"
            width={100}
            height={100}
            priority
          />
        </div>
        <nav className="hidden md:flex items-center gap-12">
          <a
            href="#"
            className="hover:text-[#FF0000] text-lg transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-[#FF0000] text-lg transition-colors"
          >
            Features
          </a>
          <a
            href="#"
            className="hover:text-[#FF0000] text-lg transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-[#FF0000] text-lg transition-colors"
          >
            FAQs
          </a>
        </nav>
        <Button className="bg-gradient-to-b from-[#FF4400] to-[#FF0000] hover:bg-[#F24E1E]/90 w-48 h-12 rounded-[10px] hidden md:block">
          Get Started
        </Button>
        <Menu className="md:hidden" />
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-3 md:px-6 py-12 md:py-24">
        <div className="max-w-[1500px] mx-auto">
          <h1 className="text-4xl md:text-[65px] font-semibold leading-tight mb-24 max-w-3xl">
            Secured Real <br /> Estate-Backed <br /> Loans, Simplified.
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Loan Types */}
            <div className="bg-[#2F2F2F]/40 rounded-[30px] overflow-hidden p-5 md:p-10 h-fit">
              <div className="grid grid-cols-2 divide-x divide-white/30">
                <div className="grid grid-rows-2 divide-y divide-white/30">
                  {/* Personal Loan */}
                  <div className="py-3 md:py-6 space-y-2 flex justify-center items-center gap-2 md:gap-4 pr-3 md:pr-6">
                    <div className="rounded-lg">
                      <Image
                        src="/images/wallet-icon.png"
                        className="w-[70px] md:w-[100px]"
                        width={100}
                        height={100}
                        alt="wallet"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm md:text-xl">
                        Personal Loan
                      </h3>
                      <p className="text-white text-xs md:text-sm leading-relaxed">
                        Flexible funds for your needs, from emergencies to big
                        purchases.
                      </p>
                    </div>
                  </div>

                  {/* Business Loan */}
                  <div className="py-3 md:py-6 space-y-2 flex justify-center items-center gap-2 md:gap-4 pr-3 md:pr-6">
                    <div className="rounded-lg">
                      <Image
                        src="/images/bag-icon.png"
                        className="w-[70px] md:w-[100px]"
                        width={100}
                        height={100}
                        alt="wallet"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm md:text-xl">
                        Business Loan
                      </h3>
                      <p className="text-white text-xs md:text-sm leading-relaxed">
                        Empower your business with funding tailored to your
                        growth plans.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-rows-2 divide-y divide-white/30">
                  {/* Home Loan */}
                  <div className="py-3 md:py-6 space-y-2 flex justify-center items-center gap-2 md:gap-4 pl-3 md:pl-6">
                    <div className="rounded-lg">
                      <Image
                        src="/images/house-icon.png"
                        className="w-[70px] md:w-[100px]"
                        width={100}
                        height={100}
                        alt="wallet"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm md:text-xl">
                        Home Loan
                      </h3>
                      <p className="text-white text-xs md:text-sm leading-relaxed">
                        Affordable financing to make your dream house a reality.
                      </p>
                    </div>
                  </div>

                  {/* Auto Loan */}
                  <div className="py-3 md:py-6 space-y-2 flex justify-center items-center gap-2 md:gap-4 pl-3 md:pl-6">
                    <div className="rounded-lg">
                      <Image
                        src="/images/car-icon.png"
                        className="w-[70px] md:w-[100px]"
                        width={100}
                        height={100}
                        alt="wallet"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm md:text-xl">
                        Auto Loan
                      </h3>
                      <p className="text-white text-xs md:text-sm leading-relaxed">
                        Drive your dream car with easy and low-interest auto
                        loans.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Loan Amount Selector */}
            <div className="bg-white text-black rounded-[30px] p-8 md:p-12">
              <h2 className="text-normal md:text-xl mb-8">
                Select Loan Amount
              </h2>
              <div className="space-y-4 md:space-y-8">
                <div className="text-xl md:text-5xl font-semibold">
                  NGN {formatCurrency(loanAmount)}
                </div>
                <CustomSlider
                  value={[loanAmount]}
                  onValueChange={(value: number[]) => setLoanAmount(value[0])}
                  max={5000000}
                  min={10000}
                  step={1000}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-zinc-600">
                  <span>NGN {formatCurrency(10000)}</span>
                  <span>NGN {formatCurrency(5000000)}</span>
                </div>
                <Button className="w-full bg-gradient-to-b from-[#FF4400] to-[#FF0000] hover:bg-[#F24E1E]/90 text-white py-6">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
