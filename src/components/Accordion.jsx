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
    {
      question: "What skills do you have in AI and data?",
      answer: "I have hands-on experience with Python, SQL, and PySpark, and I’m currently expanding myknowledge through an MS in Artificial Intelligence."
    },
    {
      question: "Are you open to internships?",
      answer: "Yes! I’m actively seeking internship opportunities to apply my skills in real-world projects and gain industry experience."
    },
    {
      question: "Do you work on machine learning projects?",
      answer: "I have a foundational understanding of ML and AI concepts, and I’m eager to work on projects where I can learn and contribute."
    },
    {
      question: "Can you collaborate with teams?",
      answer: "Absolutely — I enjoy working in collaborative environments and believe teamwork is essential for building effective AI solutions."
    },
    {
      question: "What are your career goals?",
      answer: "My goal is to grow as an AI Engineer, starting with internships and entry-level roles that allow me to apply data and AI to solve meaningful problems."
    }
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
            {item.question}
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
              {item.answer}
            </motion.p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
