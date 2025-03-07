"use client";

import { ArrowLeft, ChevronRight, CreditCard, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { UserIcon } from "../dashboard/components/icons/user";

export default function ProfilePage() {
  const router = useRouter();

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
      <h1 className="text-2xl font-bold my-8">Profile</h1>

      {/* Navigation items */}
      <div className="space-y-6 px-6">
        {/* Edit Profile */}
        <Button
          //   onClick={() => router.push("/profile/edit")}
          variant="ghost"
          className="w-full flex items-center justify-between p-0 h-auto hover:bg-transparent"
        >
          <div className="flex items-center gap-4 [&_svg]:size-8">
            <UserIcon
              className="h-10 w-10 text-[#0F4D73] size-10"
              strokeWidth={2}
            />
            <span className="text-lg text-[#0F4D73]">Edit Profile</span>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </Button>

        {/* Transaction History */}
        <Button
          onClick={() => router.push("/profile/history")}
          variant="ghost"
          className="w-full flex items-center justify-between p-0 h-auto hover:bg-transparent"
        >
          <div className="flex items-center gap-4 [&_svg]:size-8">
            <CreditCard className=" text-[#0F4D73]" />
            <span className="text-lg text-[#0F4D73]">Transaction History</span>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </Button>
      </div>
    </div>
  );
}
