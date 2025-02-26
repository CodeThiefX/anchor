"use client";

import { Hero } from "./components/hero";
import { Banner } from "./components/banner";
import HowItWorks from "./components/how-it-works";
import FeaturesSection from "./components/features";
import LoanTabsSection from "./components/loans-tab";
import ReviewsSection from "./components/reviews";
import FAQSection from "./components/faq";
import Footer from "./components/footer";

export default function Page() {
  return (
    <>
      <Hero />
      <Banner />
      <HowItWorks />
      <FeaturesSection />
      <LoanTabsSection />
      <ReviewsSection />
      <FAQSection />
      <Footer />
    </>
  );
}
