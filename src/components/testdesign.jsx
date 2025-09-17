"use client"
import Image from "next/image";
import grainImage from "../../public/grain.jpg";
import project1 from "../../public/project1.webp";
import project2 from "../../public/project2.webp";
import project3 from "../../public/project3.webp";

import { Button, Divider } from "@nextui-org/react";
const portfolioProjects = [
  {
    id:"01",
    technology:"APP DESIGN",
    title: "NENO APP",
   image: project1,
  },
  {
    id:"02",
    technology:"branding",
    title: "CORPORATE BrandING",
   image: project2,
  },{
    id:"03",
    technology:"branding",
    title: "BrANDING SOLUTION",
   image: project3,
  }
];
const TestDesign = () => {
  return (
    <section className="lg:py-24 bg-BlackPrimary">
      <div className="container ">
        <div className="flex flex-col gap-20 ">
          {portfolioProjects.map((project, projectIndex) => (
            <div
              key={projectIndex}
              className="sticky top-0"
              style={{
                top: `${projectIndex * 70}px`,
              }}
            >
              <div className="bg-BlackSecondary rounded-3xl relative z-0 overflow-hidden after:-z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:pointer-events-none after:-outline-offset-2 after:rounded-3xl after:outline-white/20 p-8">
                <div
                  className="absolute inset-0 -z-10 opacity-40"
                  style={{
                    backgroundImage: `url(${grainImage.src})`,
                  }}
                ></div>

                <div className="flex gap-10 min-h-[28rem]">
                  <div className="w-[65%]">
                 <div className="flex flex-col justify-between h-full">
                  <div className="flex flex-col gap-6">
                    <div>
                    <span className="border border-red-600 p-1 px-1.5 rounded-full">({project.id})</span>
                    <p className="text-2xl font-semibold text-WhitePrimary mt-3 uppercase">{project.technology}</p>
                    </div>
                   <h3 className="text-5xl font-baiJamjuree font-bold text-WhitePrimary uppercase">{project.title}</h3>
                  </div>
                  <div className="flex flex-col gap-6">
                    <Divider orientation="horizontal" className="w-full bg-BlackPrimary  dark:bg-WhitePrimary" />
                    <Button className="w-fit">Click me</Button>
                  </div>
                 </div>
                   
                   
                  </div>
                  <div className="relative w-[35%]">
                  <Image
  src={project.image}
  alt={project.title}
  className="object-cover w-full h-full cursor-pointer"
  style={{ borderRadius: "16px", transition: "border-radius 0.5s ease-in-out" }}
  onMouseEnter={(e) => e.currentTarget.style.borderRadius = "50%"}
  onMouseLeave={(e) => e.currentTarget.style.borderRadius = "16px"}
/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestDesign;
