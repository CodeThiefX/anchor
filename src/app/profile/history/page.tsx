"use client";

import { ArrowLeft, ArrowDown, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: "repayment" | "disbursement";
}

export default function TransactionHistoryPage() {
  const router = useRouter();

  // Loan transactions data
  const loanTransactions: Transaction[] = [
    {
      id: "1",
      date: "01 Mar 2025 12:57PM",
      description: "March 15, Loan Disbursement",
      amount: 10000000.0,
      type: "disbursement",
    },
    {
      id: "2",
      date: "15 Feb 2025 10:23AM",
      description: "February 15, Loan Disbursement",
      amount: 5000000.0,
      type: "disbursement",
    },
    {
      id: "3",
      date: "01 Jan 2025 09:15AM",
      description: "January 1, Loan Disbursement",
      amount: 3000000.0,
      type: "disbursement",
    },
  ];

  // Repayment transactions data
  const repaymentTransactions: Transaction[] = [
    {
      id: "1",
      date: "01 Mar 2025 12:57PM",
      description: "March 15, Loan Repayment",
      amount: 1000000.0,
      type: "repayment",
    },
    {
      id: "2",
      date: "01 Mar 2025 12:57PM",
      description: "March 15, Loan Repayment",
      amount: 1000000.0,
      type: "repayment",
    },
    {
      id: "3",
      date: "15 Feb 2025 11:30AM",
      description: "February 15, Loan Repayment",
      amount: 500000.0,
      type: "repayment",
    },
    {
      id: "4",
      date: "15 Jan 2025 10:45AM",
      description: "January 15, Loan Repayment",
      amount: 500000.0,
      type: "repayment",
    },
  ];

  const formatAmount = (amount: number) => {
    return `₦${amount.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  // Transaction list component to avoid duplication
  const TransactionList = ({
    transactions,
  }: {
    transactions: Transaction[];
  }) => (
    <div className="space-y-6">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center gap-4">
          <div
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center",
              transaction.type === "repayment" ? "bg-green-50" : "bg-red-50"
            )}
          >
            {transaction.type === "repayment" ? (
              <ArrowDown className="w-6 h-6 text-green-500" />
            ) : (
              <ArrowUp className="w-6 h-6 text-red-500" />
            )}
          </div>
          <div className="flex-1">
            <div className="font-medium">{transaction.date}</div>
            <div className="text-gray-500">{transaction.description}</div>
          </div>
          <div
            className={cn(
              "text-right font-medium",
              transaction.type === "repayment" ? "text-black" : "text-black"
            )}
          >
            {transaction.type === "repayment" ? "+" : "+"}{" "}
            {formatAmount(transaction.amount)}
          </div>
        </div>
      ))}
    </div>
  );

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
      <h1 className="text-2xl font-bold my-8">Transaction History</h1>

      {/* Tabs */}
      <Tabs defaultValue="loans" className="mb-8">
        <TabsList className="w-full bg-white border border-[#E7C7A6] text-[#BD8247] rounded-full p-1">
          <TabsTrigger
            value="loans"
            className="rounded-full flex-1 data-[state=active]:bg-[#B38B59] data-[state=active]:text-white"
          >
            Loans
          </TabsTrigger>
          <TabsTrigger
            value="repayments"
            className="rounded-full flex-1 data-[state=active]:bg-[#B38B59] data-[state=active]:text-white"
          >
            Repayments
          </TabsTrigger>
        </TabsList>

        <TabsContent value="loans" className="mt-6">
          <TransactionList transactions={loanTransactions} />
        </TabsContent>

        <TabsContent value="repayments" className="mt-6">
          <TransactionList transactions={repaymentTransactions} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
