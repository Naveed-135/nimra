"use client";
import React from "react";
import CountUp from "react-countup";
import { Divider } from "@nextui-org/react";
import { useInView } from "react-intersection-observer";

const StatsCounter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the component comes into view
    threshold: 0.5, // Percentage of the component that needs to be visible to trigger
  });

  return (
    <div ref={ref} className="bg-WhitePrimary dark:bg-BlackPrimary">
      <div className="flex max-sm:gap-8 flex-col md:flex-row items-center max-w-[960px] mx-auto justify-evenly py-10 md:py-20">
        {/* Box 1 */}
        <div className="text-center max-w-[200px] items-center flex flex-col gap-[3px]">
          <h2 className="text-5xl font-bold font-baiJamjuree Gradient">
            {inView ? <CountUp end={12} duration={10} /> : "0"}+
          </h2>
          <p className="text-lg text-BlackPrimary dark:text-WhitePrimary">
            Years of Experience in Design
          </p>
        </div>

        <Divider
          orientation="vertical"
          className="h-16 bg-BlackPrimary max-sm:hidden dark:bg-WhitePrimary"
        />
        <Divider
          orientation="horizontal"
          className="w-48 bg-BlackPrimary md:hidden dark:bg-WhitePrimary"
        />
        {/* Box 2 */}
        <div className="text-center max-w-[200px] items-center flex flex-col gap-[3px]">
          <h2 className="text-5xl font-bold font-baiJamjuree Gradient">
            {inView ? <CountUp end={100} duration={10} /> : "0"}+
          </h2>
          <p className="text-lg text-BlackPrimary dark:text-WhitePrimary">
            Successfully Projects Completed
          </p>
        </div>

        <Divider
          orientation="vertical"
          className="h-16 bg-BlackPrimary max-sm:hidden dark:bg-WhitePrimary"
        />
        <Divider
          orientation="horizontal"
          className="w-48 bg-BlackPrimary md:hidden dark:bg-WhitePrimary"
        />

        {/* Box 3 */}
        <div className="text-center max-w-[200px] items-center flex flex-col gap-[3px]">
          <h2 className="text-5xl font-bold font-baiJamjuree Gradient">
            {inView ? <CountUp end={50} duration={10} /> : "0"}+
          </h2>
          <p className="text-lg text-BlackPrimary dark:text-WhitePrimary">
            Global Clients
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;