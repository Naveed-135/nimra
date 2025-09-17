"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Divider } from "@nextui-org/react";
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from "next/link";
const Design = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const menuItems = [
        { title: "Shopify Developer", image: "/hover.png" },
        { title: "Frontend Developer", image: "/hover.png" },
        { title: "Storefront Developer", image: "/hover.png" },
        { title: "Liquid Template Developer", image: "/hover.png" },
    ];
    const handleMouseMove = (e, field) => {
        const rect = field.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        console.log("Cursor Position:", { x, y });
        setCursorPosition({ x, y });
    };

    const menuMinLeft = 600; // Minimum left position for the image to not overlap menu

    return (
        <div className='bg-WhiteSecondary dark:bg-BlackSecondary'>
            <div className='container max-sm:px-4'>
                <div className='lg:max-w-[90%] xl:max-w-[90%] lg:mx-auto md:py-20 py-10'>
                    <div className='flex xl:items-end xl:flex-row flex-col max-xl:gap-8 justify-between '>
                        <div>
                            <h3 className='md:text-6xl dark:text-WhitePrimary text-3xl text-BlackPrimary font-bold font-baiJamjuree'>Creating impactful </h3>
                            <div className='flex items-center pl-12 md:pl-20'>          <Divider orientation="horizontal" className='md:w-20 w-16 bg-BlackPrimary dark:bg-WhitePrimary' />  <h3 className='md:text-6xl text-3xl text-BlackPrimary dark:text-WhitePrimary font-bold font-baiJamjuree'>solutions, one</h3></div>

                            <h3 className='md:text-6xl text-3xl Gradient font-bold font-baiJamjuree'>product at a time.</h3>
                        </div>
                        {/* Buttons */}
                        <div className="flex flex-col md:flex-row max-sm:items-center gap-4">
                            <Button as={Link} className="px-6 py-4 h-full rounded-full dark:text-WhitePrimary bg-Gradient  text-BlackPrimary  text-lg font-semibold uppercase" href="/contact" variant="bordered">
                                Get in Touch
                            </Button>
                            <Button as={Link} className="px-6 py-4 h-full rounded-full dark:text-WhitePrimary text-BlackPrimary  text-lg font-semibold uppercase" href="/projects" variant="bordered">
                                View All Works
                            </Button>
                        </div>
                    </div>
                    <div className="w-full xl:mt-20 md:mt-14 mt-10">
                        <Divider orientation="horizontal" className='w-full h-0.5 dark:bg-WhitePrimary   bg-BlackPrimary' />
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative "
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                            >
                                {/* Menu Item */}
                                <motion.div
                                    initial={{ background: "transparent" }}
                                    animate={{
                                        background:
                                            hoveredIndex === index
                                                ? "linear-gradient(90deg, #B16CEA, #FF5E69, #FF8A56, #FFA84B)"
                                                : "transparent",
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="relative flex items-center justify-between px-4 py-8 group cursor-pointer rounded-lg"
                                >
                                    <span
                                        className={`md:text-5xl text-3xl xl:text-6xl font-bold font-baiJamjuree transition-colors ${hoveredIndex === index ? "text-WhitePrimary dark:to-BlackPrimary" : "text-BlackPrimary dark:text-WhitePrimary"
                                            }`}
                                    >
                                        {item.title}
                                    </span>
                                    <motion.div
                                        animate={{ scale: hoveredIndex === index ? 1.2 : 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <FiArrowUpRight
                                            size={54}
                                            className={`transition-transform ${hoveredIndex === index ? "text-WhitePrimary dark: rotate-45" : "text-BlackPrimary  dark:text-WhitePrimary"
                                                }`}
                                        />
                                    </motion.div>
                                </motion.div>
                                <Divider orientation="horizontal" className='w-full h-0.5 dark:bg-WhitePrimary bg-BlackPrimary' />
                                {item.image && hoveredIndex === index && (
                                    <div>
                                        <motion.img
                                            src={item.image}
                                            alt={item.title}
                                            className="absolute xl:w-56 xl:h-56 w-56 h-56 rounded-lg shadow-lg pointer-events-none z-50"
                                            style={{
                                                left: Math.max(cursorPosition.x - 112, menuMinLeft),
                                                top: `${cursorPosition.y - 112}px`,
                                                maxWidth: '224px',
                                                width: '224px',
                                                height: '224px',
                                            }}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Design
