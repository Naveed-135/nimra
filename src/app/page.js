import CustomCursor from "@/components/CustomCursor";
import Design from "@/components/Design";

import Hero from "@/components/Hero";
import ProjectCardSection from "@/components/ProjectCardSection";


import { Tape } from "@/components/Tape";
import UpperFooter from "@/components/UpperFooter";



export default function Home() {
  return (
   <>
   {/* <CustomCursor/> */}
   <Hero/>
   <Tape/>
   <ProjectCardSection/>
   <Design/>

   <UpperFooter/>
   
   </>
  );
}
