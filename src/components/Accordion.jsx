"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const accordionData = [
    "How long does a website take to build?",
    "How much does a website cost?",
    "I don’t have a design, can you build it?",
    "Do you provide SEO as well?",
    "Will my website load quickly?",
  ];
  

  return (
    <div className="w-full space-y-2">
      {accordionData.map((item, index) => (
        <div
          key={index}
          className="bg-transparent text-BlackPrimary dark:text-WhitePrimary border-b-2 overflow-hidden"
        >
          {/* Accordion Header */}
          <button
            className="w-full flex justify-between items-center px-4 py-3 md:text-2xl font-baiJamjuree font-bold focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            {item}
            <motion.span
              className="flex items-center"
              animate={{
                rotate: activeIndex === index ? 180 : 0,
              }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            >
              {activeIndex === index ? (
                <AiOutlineMinus size={20} />
              ) : (
                <AiOutlinePlus size={20} />
              )}
            </motion.span>
          </button>

          {/* Accordion Content */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={
              activeIndex === index
                ? { height: "auto", opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="px-4  overflow-hidden"
          >
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={
                activeIndex === index
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: -10 }
              }
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
              className="py-3"
            >
              Placeholder content for &ldquo;{item}&ldquo;. Replace this with actual
              content.
            </motion.p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
