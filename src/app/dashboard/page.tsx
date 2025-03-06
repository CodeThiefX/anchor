"use client";

import {
  Menu,
  ChevronRight,
  ShoppingCart,
  ArrowUp,
  ArrowDown,
  ChartLine,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UserIcon } from "./components/icons/user";
import { CartIcon } from "./components/icons/cart";

interface Transaction {
  id: number;
  type: string;
  amount: number;
  transferType: string;
  direction: "up" | "down";
}

const recentTransactions: Transaction[] = [
  {
    id: 1,
    type: "Property Loan",
    amount: -11000.0,
    transferType: "Transfer",
    direction: "up",
  },
  {
    id: 2,
    type: "Loan Payment",
    amount: 499.0,
    transferType: "Transfer",
    direction: "down",
  },
  {
    id: 3,
    type: "Loan Payment",
    amount: 499.0,
    transferType: "Transfer",
    direction: "down",
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white px-6 py-4 flex justify-between items-center">
        <Button variant="ghost" size="icon">
          <UserIcon strokeWidth={2.5} />
        </Button>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" strokeWidth={2.5} />
        </Button>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-8 space-y-6">
        <h1 className="text-2xl font-bold">Welcome Back, Genius</h1>

        {/* Active Loan Card */}
        <Card className="p-6 bg-red-50">
          <div className="flex justify-between items-start mb-4">
            <span className="text-gray-600 text-sm">Active Loan</span>
            <span className="text-[#AD3307] text-sm flex items-center bg-red-100 px-2 py-1 rounded-full">
              <ChartLine className="h-3 w-3" />
              10%
            </span>
          </div>
          <div className="mb-4">
            <h2 className="text-4xl font-bold">₦45,823</h2>
          </div>
          <div className="space-y-2">
            <p className="text-gray-600 text-sm">
              Outstanding Balance:{" "}
              <span className="text-black font-semibold">₦1,873</span>
            </p>
            <p className="text-gray-600 text-sm">
              Property:{" "}
              <span className="text-black">
                5, Finrik International Estate, Abuja
              </span>
            </p>
          </div>
        </Card>

        {/* Upcoming Payment Card */}
        <Card>
          <div className="flex justify-between items-start p-6">
            <div className="flex flex-col gap-4">
              <p className="text-gray-600 mb-1 text-sm">Upcoming Payment</p>
              <h3 className="text-3xl font-bold">₦1,873</h3>
            </div>
            <div className="text-right flex flex-col gap-4">
              <p className="text-gray-600 mb-1 text-sm">March 12th, 2025</p>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                Amount Due
              </span>
            </div>
          </div>
          <Button
            variant="ghost"
            className="w-full justify-between text-[#F24E1E] hover:text-[#F24E1E] hover:bg-red-50 pl-0 p-6 bg-[#F0F2F5] rounded-t-none"
          >
            Make Payment
            <ChevronRight className="h-5 w-5" />
          </Button>
        </Card>

        {/* Quick Actions */}
        <section>
          <h2 className="font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-4 gap-4">
            <Button
              variant="ghost"
              className="flex flex-col items-center p-2 bg-red-50 hover:bg-red-100 rounded-xl h-auto gap-0"
              onClick={() => (window.location.href = "/get-loan")}
            >
              <div className="w-10 h-10 bg-[#FFE9E1] rounded-full flex items-center justify-center">
                <CartIcon color="#F56630" className="h-4 w-4 text-[#F24E1E]" />
              </div>
              <span className="text-xs">Get Loan</span>
            </Button>
            <Button
              variant="ghost"
              className="flex flex-col items-center p-2 bg-red-50 hover:bg-red-100 rounded-xl h-auto gap-0"
            >
              <div className="w-10 h-10 bg-[#FFE9E1] rounded-full flex items-center justify-center">
                <CartIcon color="#F56630" className="h-4 w-4 text-[#F24E1E]" />
              </div>
              <span className="text-xs">Track Loan</span>
            </Button>
          </div>
        </section>

        {/* Recent Activity */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold">Recent Activity</h2>
            <Button
              variant="ghost"
              className="text-[#F24E1E] hover:text-[#F24E1E] hover:bg-red-50 font-semibold text-xs"
            >
              See all
              <ChevronRight className="h-5 w-5 ml-1" />
            </Button>
          </div>
          <div className="space-y-4 border border-[#F0F2F5] p-6 rounded-xl">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center
                    ${
                      transaction.direction === "up"
                        ? "bg-red-100"
                        : "bg-green-100"
                    }`}
                  >
                    {transaction.direction === "up" ? (
                      <ArrowUp className={`h-5 w-5 text-red-500`} />
                    ) : (
                      <ArrowDown className={`h-5 w-5 text-green-500`} />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{transaction.type}</p>
                    <p className="text-sm text-gray-500">
                      {transaction.transferType}
                    </p>
                  </div>
                </div>
                <span
                  //   className={`font-medium ${
                  //     transaction.amount < 0 ? "text-red-500" : "text-green-500"
                  //   }`}
                  className="font-semibold"
                >
                  {transaction.amount < 0 ? "- " : "+ "}$
                  {Math.abs(transaction.amount).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
