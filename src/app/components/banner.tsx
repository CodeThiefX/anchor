import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WalletCards, Building2, Home } from "lucide-react";

export const Banner = () => {
  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Your loan, simplified
        </h2>
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
          Apply seamlessly, track effortlessly, manage repayments with ease, and
          secure your financial future—all with Anchor.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-7xl mx-auto">
        {/* Personal Loan Card */}
        <div className="relative group w-full md:w-[300px] transform md:hover:-translate-y-2 transition-transform">
          <div className="relative h-[400px] rounded-3xl overflow-hidden">
            <Image
              src="/images/avatar-1.png"
              alt="Personal loan"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/50" />
            <div className="absolute inset-0 p-3 flex flex-col">
              <div className="flex flex-col justify-center items-center h-full">
                <span className="text-sm font-medium">Personal</span>
                <h3 className="text-4xl font-bold mt-2">₦120,000</h3>
                <Button
                  variant="outline"
                  className="mt-4 bg-white text-black rounded-full hover:bg-white/20 hover:text-white"
                >
                  Accounts
                </Button>
              </div>
              <div className="flex items-center gap-3 bg-white backdrop-blur-sm p-3 rounded-xl">
                <div className="p-2 bg-[#FF0000] rounded-full flex items-center justify-center">
                  <Image
                    src="/images/wallet-icon-white.png"
                    width={25}
                    height={25}
                    alt="wallet"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-sm text-black font-semibold">
                    Personal Loan
                  </p>
                  <p className="text-sm text-black">Yesterday, 09:02</p>
                </div>
                <div className="h-full">
                  <span className="text-black text-sm font-semibold">
                    +₦120,000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Loan Card */}
        <div className="relative group w-full md:w-[360px] md:h-[480px] z-10 transform md:hover:-translate-y-2 transition-transform">
          <div className="relative h-[480px] rounded-3xl overflow-hidden">
            <Image
              src="/images/avatar-2.png"
              alt="Business loan"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/50" />
            <div className="absolute inset-0 p-3 flex flex-col justify-between">
              <div className="flex flex-col justify-center items-center h-full">
                <span className="text-sm font-medium">Business</span>
                <h3 className="text-5xl font-bold mt-2">₦500,000</h3>
                <Button
                  variant="outline"
                  className="mt-4 bg-white text-black rounded-full hover:bg-white/20 hover:text-white"
                >
                  Accounts
                </Button>
              </div>
              <div className="flex items-center gap-3 bg-white backdrop-blur-sm p-3 rounded-xl">
                <div className="p-2 bg-[#FF0000] rounded-full">
                  <Image
                    src="/images/briefcase-icon-white.png"
                    width={25}
                    height={25}
                    alt="briefcase"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-sm text-black font-semibold">
                    Personal Loan
                  </p>
                  <p className="text-sm text-black">Yesterday, 09:02</p>
                </div>
                <div className="h-full">
                  <span className="text-black text-sm font-semibold">
                    +₦120,000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Home Loan Card */}
        <div className="relative group w-full md:w-[300px] transform md:hover:-translate-y-2 transition-transform">
          <div className="relative h-[400px] rounded-3xl overflow-hidden">
            <Image
              src="/images/avatar-3.png"
              alt="Home loan"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/50" />
            <div className="absolute inset-0 p-3 flex flex-col justify-between">
              <div className="flex flex-col justify-center items-center h-full">
                <span className="text-sm font-medium">Home</span>
                <h3 className="text-4xl font-bold mt-2">₦2,000,000</h3>
                <Button
                  variant="outline"
                  className="mt-4 bg-white text-black rounded-full hover:bg-white/20 hover:text-white"
                >
                  Accounts
                </Button>
              </div>
              <div className="flex items-center gap-3 bg-white backdrop-blur-sm p-3 rounded-xl">
                <div className="p-2 bg-[#FF0000] rounded-full">
                  <Image
                    src="/images/house-icon-white.png"
                    width={25}
                    height={25}
                    alt="house"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-sm text-black font-semibold">
                    Personal Loan
                  </p>
                  <p className="text-sm text-black">Yesterday, 09:02</p>
                </div>
                <div className="h-full">
                  <span className="text-black text-sm font-semibold">
                    +₦120,000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
