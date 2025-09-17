
import Image from "next/image";
import { Fragment } from "react";
const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const Tape = () => {
  return (
    <div className="bg-Gradient  py-2 md:py-4 xl:py-6 overflow-x-clip">
      <div className="bg-BlackPrimary dark:bg-WhitePrimary  -rotate-3 -mx-1 ">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 md:gap-6 py-3 md:py-7 pr-4 animate-move-left [animation-duration:40s]">
            {[...new Array(2)].fill(0).map((_, ind) => (
              <Fragment key={ind}>
                {words.map((word, index) => (
                  <div key={index} className="inline-flex items-center gap-4 ">
                    <span className="text-WhitePrimary dark:text-BlackPrimary font-baiJamjuree font-bold text-sm md:text-3xl">
                      {word}
                    </span>
                    
                    <Image src={'/star-icon.svg'} alt="star-icon" width={1000} height={1000} className="md:w-8  md:h-8 w-4 h-4"/>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
