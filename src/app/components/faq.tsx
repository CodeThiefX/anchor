"use client";

import { ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Who can apply for a loan on Anchor?",
    answer:
      "Anyone with a valid real estate asset can apply, whether as an individual or a business.",
  },
  {
    question: "How long does it take to get loan approval?",
    answer:
      "The loan approval process typically takes 24-48 hours once all required documents are submitted. Our automated system ensures quick processing while maintaining thorough verification standards.",
  },
  {
    question: "What documents do I need to apply?",
    answer:
      "You'll need to provide proof of property ownership, valid identification, proof of income or business registration (for business loans), and recent bank statements. All documents can be easily uploaded through our secure online platform.",
  },
  {
    question: "How do I repay my loan?",
    answer:
      "We offer multiple repayment options including automatic bank transfers, debit/credit card payments, and manual bank deposits. You can choose the method that works best for you and manage all payments through your Anchor dashboard.",
  },
  {
    question: "Will I receive reminders for repayments?",
    answer:
      "Yes, we send automated reminders via email and SMS before each payment due date. You can customize your notification preferences in your account settings.",
  },
];

export default function FAQSection() {
  return (
    <section className="relative bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold">FAQs</h2>
          <Button
            variant="link"
            className="text-white gap-2 group hidden md:block"
          >
            Some frequently asked questions
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-none"
            >
              <AccordionTrigger className="bg-zinc-900/60 hover:bg-zinc-900 px-6 py-4 rounded-xl text-left text-sm md:text-lg font-medium data-[state=open]:rounded-b-none">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="bg-zinc-900/60 px-6 py-4 rounded-b-xl text-zinc-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
