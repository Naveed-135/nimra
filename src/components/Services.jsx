// components/Services.js
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const services = [
    {
        title: "Web Design",
        description:
            "Lorem ipsum dolor sit amet consectetur. Lucas consectetur nulla in mauris id. Amet odio ullamcorper ac in consectetur id ut laoreet fermentum. Blandit tellus.",
        image: "/service img1.png", // Replace with the correct image path
    },
    {
        title: "Graphic Design",
        description:
            "Lorem ipsum dolor sit amet consectetur. Lucas consectetur nulla in mauris id. Amet odio ullamcorper ac in consectetur id ut laoreet fermentum. Blandit tellus.",
        image: "/service img2.png", // Replace with the correct image path
    },
    {
        title: "UI/UX Design",
        description:
            "Lorem ipsum dolor sit amet consectetur. Lucas consectetur nulla in mauris id. Amet odio ullamcorper ac in consectetur id ut laoreet fermentum. Blandit tellus.",
        image: "/service img3.png", // Replace with the correct image path
    },
];

const Services = () => {
    return (
        <section className="bg-WhitePrimary dark:bg-BlackPrimary">
            <div className="container max-sm:px-4 pt-20">
                <div className="xl:max-w-[90%] mx-auto flex flex-col gap-12">
                    <h2 className="font-baiJamjuree text-7xl font-bold text-BlackPrimary ">
                        Our <span className="Gradient">Services</span>
                    </h2>
                    <div className="flex flex-col gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`flex flex-col justify-between items-center md:flex-row ${
                                    index === 1 ? "md:flex-row-reverse" : ""
                                } bg-transparent`}
                            >
                                <div className="max-w-[500px] flex flex-col gap-8">
                                    <h3 className="font-baiJamjuree text-6xl font-bold text-BlackPrimary">
                                        {service.title}
                                    </h3>
                                    <p className="text-lg text-BlackPrimary">
                                        {service.description}
                                    </p>
                                    <Button
                                        as={Link}
                                        className=" px-5 py-3 h-full w-fit rounded-full dark:text-WhitePrimary bg-Gradient text-BlackPrimary text-lg font-semibold uppercase"
                                        href="#"
                                        variant="flat"
                                    >
                                        hire me
                                    </Button>
                                </div>
                                <div className="max-w-[500px]">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={500}
                                        height={500}
                                        className="w-full object-cover aspect-square"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
