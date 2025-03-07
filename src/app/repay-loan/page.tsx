"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Payment {
  date: string;
  amount: number;
  status: "paid" | "due" | "upcoming";
}

export default function RepaymentPage() {
  const router = useRouter();

  const payments: Payment[] = [
    { date: "Feb. 15, 2025", amount: 200000.0, status: "paid" },
    { date: "Mar. 15, 2025", amount: 200000.0, status: "due" },
    { date: "Apr. 15, 2025", amount: 200000.0, status: "upcoming" },
    { date: "May. 15, 2025", amount: 200000.0, status: "upcoming" },
    { date: "Jun. 15, 2025", amount: 200000.0, status: "upcoming" },
    { date: "Jul. 15, 2025", amount: 200000.0, status: "upcoming" },
    { date: "Aug. 15, 2025", amount: 200000.0, status: "upcoming" },
    { date: "Sep. 15, 2025", amount: 200000.0, status: "upcoming" },
  ];

  const getStatusStyle = (status: Payment["status"]) => {
    switch (status) {
      case "paid":
        return "bg-green-50 text-green-700 rounded-full px-3 py-1 text-sm font-medium";
      case "due":
        return "bg-amber-50 text-amber-700 rounded-full px-3 py-1 text-sm font-medium";
      case "upcoming":
        return "text-gray-400 text-sm font-medium";
    }
  };

  const formatAmount = (amount: number) => {
    return `₦${amount.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Back button */}
      <Button
        onClick={() => router.push("/dashboard")}
        className="flex items-center gap-2 text-lg px-0 text-black"
        variant="link"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </Button>

      {/* Main heading */}
      <h1 className="text-xl font-bold mt-8 mb-4">Repay your loan</h1>

      {/* Payment schedule table */}
      <div className="rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <Table className="[&_tr]:border-b-0 ">
            <TableHeader className="bg-gray-50 border-b border-black">
              <TableRow>
                <TableHead className="w-[200px] pl-6 text-semibold">
                  Date
                </TableHead>
                <TableHead className="text-semibold">Amount</TableHead>
                <TableHead className="text-semibold">Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium pl-6">
                    {payment.date}
                  </TableCell>
                  <TableCell>{formatAmount(payment.amount)}</TableCell>
                  <TableCell>
                    <span className={getStatusStyle(payment.status)}>
                      {payment.status.charAt(0).toUpperCase() +
                        payment.status.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    <Button
                      variant="ghost"
                      className="text-blue-500 hover:text-blue-700 hover:bg-blue-50"
                      disabled={payment.status === "paid"}
                      onClick={() => router.push(`/payment/${index}`)}
                    >
                      Pay
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
