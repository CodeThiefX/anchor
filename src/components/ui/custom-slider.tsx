"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";
import Image from "next/image";

const CustomSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-3 md:h-5 w-full grow overflow-hidden rounded-full bg-slate-200">
      <SliderPrimitive.Range className="absolute h-full bg-[#FF0000]" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="flex justify-center items-center md:h-10 md:w-10 h-5 w-5 rounded-full border-2 border-[#FF0000] bg-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
      <Image
        src="/images/ver-bars.png"
        className="w-[8px] h-[8px] md:w-[16px] md:h-[16px]"
        width={16}
        height={16}
        alt="wallet"
      />
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
));
CustomSlider.displayName = SliderPrimitive.Root.displayName;

export { CustomSlider };
