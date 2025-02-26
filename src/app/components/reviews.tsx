"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Review {
  id: number;
  text: string;
  author: string;
  location: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    id: 1,
    text: "Anchor made the loan application process so smooth and stress-free. I was able to submit my documents online, track my application in real time, and receive updates at every stage.",
    author: "David Okonkwo",
    location: "Lagos, Nigeria",
    avatar: "/images/placeholder.png",
  },
  {
    id: 2,
    text: "Getting a real estate-backed loan used to be a long and complicated process, but Anchor changed that for me.",
    author: "Tunde Adeyemi",
    location: "Abuja, Nigeria",
    avatar: "/images/placeholder.png",
  },
  {
    id: 3,
    text: "I was initially skeptical about applying for a loan online, but Anchor exceeded my expectations. The entire process was transparent, and I felt secure submitting my information.",
    author: "Chibuzor Nwosu",
    location: "Port Harcourt, Nigeria",
    avatar: "/images/placeholder.png",
  },
  {
    id: 4,
    text: "I was able to secure a loan for my business in less than 48 hours. The process was seamless, and the customer service was top-notch.",
    author: "Chinwe Okafor",
    location: "Enugu, Nigeria",
    avatar: "/images/placeholder.png",
  },
];

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % reviews.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (current) => (current - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <section className="relative bg-black text-white py-24 px-6">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex justify-between items-start mb-12">
          <div>
            <span className="inline-block px-4 py-1 text-xs border border-white rounded-sm mb-6">
              REVIEWS
            </span>
            <h2 className="text-2xl md:text-6xl font-bold">
              300+ Users Reviews
            </h2>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="bg-zinc-900 border-white/20 hover:bg-zinc-800"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="bg-[#F24E1E] border-[#F24E1E] hover:bg-[#F24E1E]/90"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className="w-full md:w-1/3 flex-shrink-0 pr-6"
              >
                <div
                  className={`h-full rounded-3xl p-8 ${
                    index === 0 ? "bg-[#F24E1E]" : "bg-zinc-900/60"
                  }`}
                >
                  <p className="text-sm md:text-xl mb-12 min-h-[120px]">
                    {review.text}
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={review.avatar || "/placeholder.svg"}
                      alt={review.author}
                      width={48}
                      height={48}
                      className="rounded-sm"
                    />
                    <div>
                      <h3 className="font-semibold">{review.author}</h3>
                      <p className="text-sm text-white/70">{review.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
