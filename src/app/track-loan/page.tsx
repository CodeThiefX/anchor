"use client";

import { ArrowLeft, Check, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

type LoanStatus = "pending" | "approved" | "rejected";

interface LoanTrackerProps {
  status?: LoanStatus;
  loanId?: string;
  rejectionReason?: string;
  paymentAmount?: number;
  paymentDueDate?: string;
}

export default function LoanTracker({
  status = "pending",
  loanId = "0001",
  rejectionReason = "Insufficient income documentation for the requested loan amount.",
  paymentAmount = 873000,
  paymentDueDate = "March 12th, 2025",
}: LoanTrackerProps) {
  const router = useRouter();

  // State to control the progress bar animation
  const [progress, setProgress] = useState(0);

  // Calculate the current step based on status
  const getCurrentStep = (status: LoanStatus) => {
    switch (status) {
      case "approved":
        return 5;
      case "rejected":
        return 4;
      default:
        return 2;
    }
  };

  const currentStep = getCurrentStep(status);

  // Calculate progress percentage based on current step (0%, 25%, 50%, 75%, 100%)
  const calculateProgress = (step: number) => {
    return status === "rejected"
      ? Math.max(0, Math.min(100, step * 25))
      : Math.max(0, Math.min(100, (step - 1) * 25));
  };

  // Animate progress when component mounts or status changes
  useEffect(() => {
    setProgress(0);
    const timer = setTimeout(() => {
      setProgress(calculateProgress(currentStep));
    }, 50);
    return () => clearTimeout(timer);
  }, [currentStep]);

  // Get step status based on current state
  const getStepStatus = (stepNumber: number) => {
    if (status === "rejected" && stepNumber === 4) return "rejected";
    if (status === "approved" && stepNumber === 5) return "approved";
    if (stepNumber < currentStep) return "completed";
    if (stepNumber === currentStep) return "current";
    return "upcoming";
  };

  // Loan application steps
  const steps = [
    {
      number: 1,
      title: "Application Submitted",
      date: "Feb. 22, 2025",
    },
    {
      number: 2,
      title: "Pending Review",
      date: status === "pending" ? "Feb. 23, 2025 - Current" : "Feb. 22, 2025",
    },
    {
      number: 3,
      title: "Under Appraisal",
      date: "Feb. 22, 2025",
    },
    {
      number: 4,
      title: status === "rejected" ? "Rejected" : "Approved",
      date: status === "rejected" ? "Feb. 23, 2025 - Current" : "Feb. 22, 2025",
    },
    ...(status !== "rejected"
      ? [
          {
            number: 5,
            title: "Disbursed",
            date: status === "approved" ? "Feb. 22, 2025" : "Feb. 22, 2025",
          },
        ]
      : []),
  ];

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Back button */}
      <Button
        onClick={() => router.push("/dashboard")}
        className="flex items-center gap-2 text-lg px-0 text-black"
        variant="link"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </Button>

      {/* Main heading */}
      <h1 className="text-xl font-bold mb-8 pt-4">Track your loan</h1>

      {/* Payment Card or Rejection Message */}
      {status === "approved" && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-8">
          <div className="flex justify-between items-start p-5">
            <div className="flex flex-col items-start gap-3">
              <h3 className="text-gray-500 mb-1">Upcoming Payment</h3>
              <p className="text-3xl font-bold">
                ₦{paymentAmount.toLocaleString()}
              </p>
            </div>
            <div className="flex flex-col items-end gap-3">
              <h3 className="text-gray-500 mb-1 text-sm">{paymentDueDate}</h3>
              <span className="inline-block px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                Amount Due
              </span>
            </div>
          </div>
          <div>
            <Button
              onClick={() => router.push("/payment")}
              className="flex w-full justify-between items-center bg-[#F0F2F5] rounded-t-none rounded-b-lg p-5 hover:bg-red-50 text-red-500 hover:text-red-600"
              variant="ghost"
            >
              Make Payment
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      )}

      {status === "rejected" && (
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div>
              <h2 className="text-xl font-bold mb-2">Loan Rejected</h2>
              <p className="text-gray-600 mb-4">{rejectionReason}</p>
            </div>
            <span className="text-2xl bg-[#E3EFFC] border border-[#C6DDF7] rounded-lg w-14 aspect-square flex items-center justify-center">
              ☹️
            </span>
          </div>
          <Button
            onClick={() => router.push("/apply")}
            className="bg-red-500 hover:bg-red-600 text-white"
          >
            Re-Apply
          </Button>
        </div>
      )}

      {/* Loan ID */}
      <h2 className="text-xl font-bold mb-8">Loan #{loanId}</h2>

      {/* Timeline */}
      <div className="mb-12 relative">
        {/* Vertical progress bar container */}
        <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-200 transform -translate-x-1/2 z-0 mb-4">
          {/* Animated progress fill */}
          <div
            className={cn(
              "absolute top-0 left-0 w-full transition-all ease-out duration-1000",
              status === "rejected"
                ? "bg-red-500"
                : status === "approved"
                ? "bg-green-500"
                : "bg-amber-500"
            )}
            style={{
              height: `${progress}%`,
            }}
          />
        </div>

        {steps.map((step, index) => (
          <div key={step.number} className="flex h-16 relative z-10">
            {/* Step indicator and vertical line */}
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium aspect-square",
                  getStepStatus(step.number) === "completed"
                    ? "bg-[#FFF3F3]"
                    : getStepStatus(step.number) === "rejected"
                    ? "bg-red-500 text-white"
                    : getStepStatus(step.number) === "approved"
                    ? "bg-green-500 text-white"
                    : getStepStatus(step.number) === "current"
                    ? "bg-amber-500 text-white"
                    : "bg-[#FFF3F3]"
                )}
              >
                {getStepStatus(step.number) === "completed" ? (
                  <Check className="w-4 h-4" />
                ) : (
                  step.number
                )}
              </div>
              {index < steps.length - 1 && (
                <div className="w-0.5 h-16 bg-transparent my-1"></div>
              )}
            </div>

            {/* Step details */}
            <div className="ml-4 pb-16 text-sm">
              <div
                className={cn(
                  "text-lg font-medium",
                  getStepStatus(step.number) === "rejected"
                    ? "text-red-500"
                    : getStepStatus(step.number) === "approved"
                    ? "text-green-500"
                    : getStepStatus(step.number) === "current"
                    ? "text-black"
                    : getStepStatus(step.number) === "completed"
                    ? "text-black"
                    : "text-gray-500"
                )}
              >
                {step.title}
              </div>
              <div className="text-gray-400">{step.date}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Loan details form */}
      <div className="space-y-6">
        <div>
          <label htmlFor="amount" className="block text-lg text-gray-500 mb-2">
            Loan Amount Requested
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <span className="text-gray-400">₦</span>
            </div>
            <Input id="amount" className="pl-8 h-14 text-lg" readOnly />
          </div>
        </div>

        <div>
          <label
            htmlFor="property"
            className="block text-lg text-gray-500 mb-2"
          >
            Property
          </label>
          <Input
            id="property"
            className="h-14 text-lg text-gray-400"
            placeholder="Property"
            readOnly
          />
        </div>

        <div>
          <label htmlFor="term" className="block text-lg text-gray-500 mb-2">
            Loan Term
          </label>
          <Input
            id="term"
            className="h-14 text-lg text-gray-400"
            value="5 Years"
            readOnly
          />
        </div>
      </div>
    </div>
  );
}
