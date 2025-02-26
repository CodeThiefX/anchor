import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="relative bg-black text-white py-24 px-6 pb-44">
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <div className="flex justify-between">
          <div className="w-1/3"></div>
          <div className="w-2/3 text-left mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Key Features & <span className="text-[#FF0000]">Benefits</span>
            </h2>
            <p className="text-white text-lg md:text-xl max-w-4xl">
              Effortless lending at your fingertips—fast approvals, real-time
              tracking, flexible repayments, and secure transactions for a
              stress-free borrowing experience.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="md:col-span-4 space-y-8">
            <div className="flex -space-x-4">
              <div
                className="relative w-16 h-16 rounded-full overflow-hidden"
                style={{ zIndex: 4 - 0 }}
              >
                <div className={`absolute inset-0 bg-[#FF4400]`}>
                  <Image
                    src="/images/av-1.png"
                    alt="Feature"
                    width={64}
                    height={64}
                    layout="responsive"
                  />
                </div>
              </div>
              <div
                className="relative w-16 h-16 rounded-full overflow-hidden"
                style={{ zIndex: 4 - 1 }}
              >
                <div className={`absolute inset-0 bg-[#FF0000]`}>
                  <Image
                    src="/images/av-2.png"
                    alt="Feature"
                    width={64}
                    height={64}
                    layout="responsive"
                  />
                </div>
              </div>
              <div
                className="relative w-16 h-16 rounded-full overflow-hidden"
                style={{ zIndex: 4 - 2 }}
              >
                <div className={`absolute inset-0 bg-[#A40034]`}>
                  <Image
                    src="/images/av-3.png"
                    alt="Feature"
                    width={64}
                    height={64}
                    layout="responsive"
                  />
                </div>
              </div>
              <div
                className="relative w-16 h-16 rounded-full overflow-hidden"
                style={{ zIndex: 4 - 3 }}
              >
                <div className={`absolute inset-0 bg-[#8D007F]`}>
                  <Image
                    src="/images/av-4.png"
                    alt="Feature"
                    width={64}
                    height={64}
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
            <p className="text-2xl font-light leading-relaxed">
              Thousands of borrowers trust Anchor to secure real estate-backed
              loans quickly and effortlessly.
            </p>
            {/* Circular Badge */}
            <div className="relative top-32 w-32 h-32">
              <Image
                src="/images/learn-more.png"
                alt="Badge"
                layout="responsive"
                width={128}
                height={128}
              />
            </div>
          </div>

          {/* Right Column - Features Grid */}
          <div className="md:col-span-8 grid md:grid-cols-2 gap-6">
            {/* Fast & Secure Application */}
            <div className="bg-black backdrop-blur rounded-3xl p-8 border border-[#656565]">
              <h3 className="text-xl font-bold mb-4">
                Fast & Secure Application
              </h3>
              <p className="text-white">
                Apply for a loan in minutes with a simple, user-friendly online
                process. Our secure platform ensures that your personal and
                financial information is protected at every step.
              </p>
            </div>

            {/* Real-Time Loan Tracking */}
            <div className="bg-[#FF0000] rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-4">
                Real-Time Loan Tracking
              </h3>
              <p className="text-white">
                Stay informed about your loan application status with real-time
                updates. From submission to approval and disbursement, you'll
                always know where you stand without the need for constant
                follow-ups.
              </p>
            </div>

            {/* Flexible Repayment Options */}
            <div className="bg-black backdrop-blur rounded-3xl p-8 border border-[#656565]">
              <h3 className="text-xl font-bold mb-4">
                Flexible Repayment Options
              </h3>
              <p className="text-white">
                Manage your loan repayments effortlessly with multiple payment
                methods, including bank transfers, debit/credit cards, and
                automated payments.
              </p>
            </div>

            {/* Automated Notifications */}
            <div className="bg-black backdrop-blur rounded-3xl p-8 border border-[#656565]">
              <h3 className="text-xl font-bold mb-4">
                Automated Notifications
              </h3>
              <p className="text-white">
                Never miss an important update with email and SMS alerts for
                loan approvals, repayment reminders, and due dates. Our
                automated system keeps you informed and in control of your
                borrowing journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
