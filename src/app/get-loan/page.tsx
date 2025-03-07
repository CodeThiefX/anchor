"use client";

import { useState } from "react";
import { ArrowLeft, Upload, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Step = 1 | 2 | 3 | 4;

interface FormData {
  propertyType: string;
  streetAddress: string;
  cityState: string;
  estimatedValue: string;
  yearBuilt: string;
  loanAmount: string;
  loanPurpose: string;
  loanTerm: string;
  documents: {
    propertyProof: File | null;
    idVerification: File | null;
    incomeProof: File | null;
  };
}

export default function GetLoanPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({
    propertyType: "",
    streetAddress: "",
    cityState: "",
    estimatedValue: "",
    yearBuilt: "",
    loanAmount: "",
    loanPurpose: "",
    loanTerm: "",
    documents: {
      propertyProof: null,
      idVerification: null,
      incomeProof: null,
    },
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (documentType: keyof FormData["documents"]) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".pdf";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file && file.size <= 5 * 1024 * 1024) {
        // 5MB limit
        setFormData((prev) => ({
          ...prev,
          documents: {
            ...prev.documents,
            [documentType]: file,
          },
        }));
      }
    };
    input.click();
  };

  const handleContinue = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => (prev + 1) as Step);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 min-h-full">
            <div>
              <label className="text-gray-600 block mb-2 text-sm">
                Loan Amount Requested
              </label>
              <Input
                value={formData.loanAmount}
                onChange={(e) =>
                  handleInputChange("loanAmount", e.target.value)
                }
                placeholder="₦"
              />
            </div>
            <div>
              <label className="text-gray-600 block mb-2 text-sm">
                Loan Purpose
              </label>
              <Input
                value={formData.loanPurpose}
                onChange={(e) =>
                  handleInputChange("loanPurpose", e.target.value)
                }
                placeholder="Property"
              />
            </div>
            <div>
              <label className="text-gray-600 block mb-2 text-sm">
                Loan Term
              </label>
              <Input
                value={formData.loanTerm}
                onChange={(e) => handleInputChange("loanTerm", e.target.value)}
                placeholder="5 Years"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 text-sm">
            <div>
              <label className="text-gray-600 block mb-2">Property Type</label>
              <Input
                value={formData.propertyType}
                onChange={(e) =>
                  handleInputChange("propertyType", e.target.value)
                }
                placeholder="Single Family House"
              />
            </div>
            <div>
              <label className="text-gray-600 block mb-2">
                Property Address
              </label>
              <Input
                value={formData.streetAddress}
                onChange={(e) =>
                  handleInputChange("streetAddress", e.target.value)
                }
                placeholder="Street Address"
                className="mb-2"
              />
              <Input
                value={formData.cityState}
                onChange={(e) => handleInputChange("cityState", e.target.value)}
                placeholder="City, State"
              />
            </div>
            <div>
              <label className="text-gray-600 block mb-2">
                Estimated Value
              </label>
              <Input
                value={formData.estimatedValue}
                onChange={(e) =>
                  handleInputChange("estimatedValue", e.target.value)
                }
                placeholder="₦"
              />
            </div>
            <div>
              <label className="text-gray-600 block mb-2">Year Built</label>
              <Input
                value={formData.yearBuilt}
                onChange={(e) => handleInputChange("yearBuilt", e.target.value)}
                placeholder="2005"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6 text-sm">
            {[
              {
                type: "propertyProof" as const,
                label: "Property Ownership Proof",
              },
              { type: "idVerification" as const, label: "ID Verification" },
              { type: "incomeProof" as const, label: "Income Proof" },
            ].map((doc) => (
              <div key={doc.type} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Upload className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <p className="font-medium">{doc.label}</p>
                    <p className="text-sm text-gray-400">
                      PDF format • Max. 5MB
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="text-[#F24E1E] border-[#F24E1E]"
                  onClick={() => handleFileUpload(doc.type)}
                >
                  Upload
                </Button>
              </div>
            ))}
          </div>
        );

      case 4:
        return (
          <div className="text-center">
            <div className="mb-8">
              <Image
                src="/images/approved.png"
                alt="Success"
                width={200}
                height={200}
                className="mx-auto"
              />
            </div>
            <h2 className="text-2xl font-bold mb-8">Application Submitted</h2>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <Button
        onClick={() => router.push("/dashboard")}
        className="flex items-center gap-2 text-lg px-0 text-black"
        variant="link"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </Button>

      <div className="max-w-md py-4 mx-auto">
        <h1
          className={`text-xl font-bold mb-8 ${
            currentStep == 4 ? "hidden" : "block"
          }`}
        >
          Secure your loan
        </h1>

        {/* Progress Bar */}
        <div className={`mb-12 ${currentStep == 4 ? "hidden" : "block"}`}>
          <div className="relative">
            <div className="h-1 bg-gray-200 rounded mx-2">
              <div
                className="h-1 bg-[#F24E1E] rounded transition-all duration-300"
                style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
              />
            </div>
            <div className="flex justify-between absolute -top-3 w-full px-1">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                    step <= currentStep
                      ? "border-[#F24E1E] bg-[#F24E1E]"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  {step < currentStep && (
                    <Check className="w-4 h-4 text-white m-auto" />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between absolute -bottom-8 w-full">
              {[1, 2, 3].map((step) => (
                <span
                  key={step}
                  className={`text-xs ${
                    step <= currentStep ? "text-[#F24E1E]" : "text-gray-400"
                  }`}
                >
                  Step {step}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="mb-12">{renderStep()}</div>

        {/* Action Button */}
        {currentStep < 4 ? (
          <Button
            className="w-[87%] bg-[#F24E1E] hover:bg-[#F24E1E]/90 text-white absolute bottom-6"
            onClick={handleContinue}
          >
            Continue
          </Button>
        ) : (
          <Button
            className="w-[87%] bg-[#F24E1E] hover:bg-[#F24E1E]/90 text-white absolute bottom-6"
            onClick={() => router.push("/dashboard")}
          >
            Track Loan
          </Button>
        )}
      </div>
    </div>
  );
}
