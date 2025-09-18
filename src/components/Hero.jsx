// pages/index.js
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="dark:bg-BlackPrimary">
      <div className=" container max-sm:px-4 ">
        <div className="max-w-[975px] py-16 h-full mx-auto flex flex-col gap-8 items-center justify-center text-center">
          {/* Profile Image */}
          <div className="w-[260px] h-[260px] rounded-full overflow-hidden ">
            <Image
              src="/hero-img.jpeg"
              width={500}
              height={500}
              className="object-cover aspect-square "
              alt="hero-image"
            />
          </div>

          {/* Heading */}
          <h1 className="xl:text-7xl md:text-6xl dark:text-WhitePrimary text-4xl font-baiJamjuree font-bold  text-BlackPrimary">
            <span className="Gradient">Hello, I&apos;m Nimra Nayyar</span>  

          </h1>

          {/* Description */}
          <p className=" max-w-2xl text-BlackPrimary dark:text-WhitePrimary text-base md:text-lg">
          an AI enthusiast with a background in Computer Science. Skilled in Python,
          SQL, and PySpark, I’m passionate about turning data into meaningful solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row max-sm:items-center gap-4">
            <Button
              as={Link}
              className="px-6 py-4 h-full rounded-full dark:text-WhitePrimary bg-Gradient  text-BlackPrimary  text-lg font-semibold uppercase"
              href="/contact"
              variant="bordered"
            >
              Get in Touch
            </Button>
            <Button
              as={Link}
              className="px-6 py-4 h-full rounded-full dark:text-WhitePrimary text-BlackPrimary  text-lg font-semibold uppercase"
              href="/projects"
              variant="bordered"
            >
              View All Works
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
