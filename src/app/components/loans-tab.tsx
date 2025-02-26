"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus, Shuffle, MoreHorizontal, Landmark } from "lucide-react";

type TabType = "personal" | "business" | "home";

interface TabData {
  type: TabType;
  amount: number;
  image: string;
}

export default function LoanTabsSection() {
  const [activeTab, setActiveTab] = useState<TabType>("personal");

  const tabData: Record<TabType, TabData> = {
    personal: {
      type: "personal",
      amount: 11000,
      image: "/images/bg2.png",
    },
    business: {
      type: "business",
      amount: 730000,
      image: "/images/bg3.png",
    },
    home: {
      type: "home",
      amount: 730000,
      image: "/images/bg4.png",
    },
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
      .format(amount)
      .replace("NGN", "₦");
  };

  return (
    <section className="relative h-fit p-3 min-h-[800px] w-full overflow-hidden">
      {/* Background Images */}
      {Object.entries(tabData).map(([key, data]) => (
        <div
          key={key}
          className={`absolute inset-0 transition-opacity duration-700 ${
            activeTab === key ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={data.image || "/placeholder.svg"}
            alt={`${key} loan background`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6 py-16">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Loans, made effortless
          </h2>
          <p className="text-lg md:text-xl">
            Secure real estate-backed loans with a seamless application process,
            flexible repayment options, and real-time tracking—giving you full
            control over your finances.
          </p>
        </div>

        <Button className="bg-gradient-to-b from-[#FF4400] to-[#FF0000] hover:bg-[#F24E1E]/90 mb-12 px-10 py-6">
          Get Started
        </Button>

        {/* Loan Card */}
        <div className="relative w-full max-w-sm mx-auto mb-12">
          <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 text-white border">
            <div className="space-y-4 flex flex-col items-center py-10">
              <p className="text-sm">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </p>
              <h3 className="text-4xl font-bold">
                {formatCurrency(tabData[activeTab].amount)}
              </h3>
              <Button
                variant="outline"
                className="w-32 bg-white text-black rounded-full hover:bg-white/20 hover:text-white transition-colors"
              >
                Accounts
              </Button>
            </div>
            <div className="flex gap-3 mt-8 mx-auto max-w-fit">
              <button className="p-3 hover:bg-white bg-white/30 rounded-full transition-colors group">
                <Plus className="w-6 h-6 text-white group-hover:text-black" />
              </button>
              <button className="p-3 hover:bg-white bg-white/30 rounded-full transition-colors group">
                <Shuffle className="w-6 h-6 text-white group-hover:text-black" />
              </button>
              <button className="p-3 hover:bg-white bg-white/30 rounded-full transition-colors group">
                <Landmark className="w-6 h-6 text-white group-hover:text-black" />
              </button>
              <button className="p-3 hover:bg-white bg-white/30 rounded-full transition-colors group">
                <MoreHorizontal className="w-6 h-6 text-white group-hover:text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-4">
          {Object.keys(tabData).map((tab) => (
            <Button
              key={tab}
              onClick={() => setActiveTab(tab as TabType)}
              variant="outline"
              className={`md:min-w-[120px] border-white rounded-full backdrop-blur-sm transition-colors
                ${
                  activeTab === tab
                    ? "bg-white text-black hover:bg-white/90"
                    : "bg-white/20 text-white hover:bg-black/40 hover:text-white"
                }
              `}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
