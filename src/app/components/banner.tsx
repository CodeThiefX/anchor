import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WalletCards, Building2, Home } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const LoanCard = ({
  type,
  amount,
  image,
  icon,
  isCenter = false,
}: {
  type: string;
  amount: string;
  image: string;
  icon: string;
  isCenter?: boolean;
}) => (
  <div
    className={`relative group w-full md:w-[300px] transform md:hover:-translate-y-2 transition-transform ${
      isCenter ? "md:w-[340px]" : ""
    }`}
  >
    <div
      className={`relative h-[400px] ${
        isCenter ? "md:h-[440px]" : ""
      } rounded-3xl overflow-hidden`}
    >
      <Image src={image} alt={`${type} loan`} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/50" />
      <div className="absolute inset-0 p-3 flex flex-col justify-between">
        <div className="flex flex-col justify-center items-center h-full">
          <span className="text-sm font-medium">{type}</span>
          <h3 className="text-4xl font-bold mt-2">{amount}</h3>
          <Button
            variant="outline"
            className="mt-4 bg-white text-black rounded-full hover:bg-white/20 hover:text-white"
          >
            Accounts
          </Button>
        </div>
        <div className="flex items-center gap-3 bg-white backdrop-blur-sm p-3 rounded-xl">
          <div className="p-2 bg-[#FF0000] rounded-full">
            <Image src={icon} width={25} height={25} alt={type.toLowerCase()} />
          </div>
          <div className="flex-1">
            <p className="font-sm text-black font-semibold">Personal Loan</p>
            <p className="text-sm text-black">Yesterday, 09:02</p>
          </div>
          <div className="h-full">
            <span className="text-black text-sm font-semibold">+₦120,000</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Banner = () => {
  const loanCards = [
    {
      type: "Personal",
      amount: "₦120,000",
      image: "/images/avatar-1.png",
      icon: "/images/wallet-icon-white.png",
    },
    {
      type: "Business",
      amount: "₦500,000",
      image: "/images/avatar-2.png",
      icon: "/images/briefcase-icon-white.png",
    },
    {
      type: "Home",
      amount: "₦2,000,000",
      image: "/images/avatar-3.png",
      icon: "/images/house-icon-white.png",
    },
  ];

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

      <div className="md:hidden max-w-sm mx-auto">
        <Carousel>
          <CarouselContent>
            {loanCards.map((card, index) => (
              <CarouselItem key={index}>
                <LoanCard {...card} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>

      <div className="md:flex hidden flex-row items-center justify-center gap-6 max-w-7xl mx-auto">
        {loanCards.map((card, index) => (
          <LoanCard key={index} {...card} isCenter={index === 1} />
        ))}
      </div>
    </section>
  );
};
