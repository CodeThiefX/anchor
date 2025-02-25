"use client";

import { Hero } from "./components/hero";
import { Banner } from "./components/banner";
import HowItWorks from "./components/how-it-works";

export default function Page() {
  return (
    <>
      <Hero />
      <Banner />
      <HowItWorks />
    </>
  );
}
