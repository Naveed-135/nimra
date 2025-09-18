"use client";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import Link from "next/link";
import { Button, NavbarItem, Tooltip } from "@nextui-org/react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const navLinks = [
    { key: "home", label: "Home", href: "/" },
    { key: "services", label: "Services", href: "/services" },
    { key: "projects", label: "Projects", href: "/projects" },
    { key: "about", label: "About", href: "/about" },
    { key: "contact", label: "Contact", href: "/contact" },
  ];

  const pathname = usePathname();
  return (
    <div className="bg-WhitePrimary dark:bg-BlackPrimary">
      <div className="container max-sm:px-4 py-10 md:py-20">
        <footer className="lg:max-w-[90%] lg:mx-auto ">
          <hr className="bg-BlackPrimary dark:bg-WhitePrimary  mb-10 md:mb-20 " />
          <div className="flex flex-col gap-6 md:gap-10">
            <div className="flex justify-between items-center flex-col md:flex-row gap-6">
              <h4 className="text-4xl font-baiJamjuree font-bold uppercase Gradient">
              nimra nayyar
              </h4>
              <div className="flex max-sm:justify-between max-sm:w-full md:gap-6 max-sm:flex-col gap-5 max-sm:items-center">
                {navLinks.map(({ label, href }, index) => {
                  const isActive = pathname === href;

                  return (
                    <div key={index}>
                      <Link
                        href={href}
                        className={`text-base font-normal dark:text-WhitePrimary text-BlackPrimary ${
                          isActive
                            ? "Gradient"
                            : "text-BlackPrimary dark:text-WhitePrimary"
                        }`}
                      >
                        {label}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-between items-center flex-col-reverse md:flex-row gap-6">
              <h4>© Designed by Muhammad Naveed</h4>
              <div className="flex  gap-5 items-center">
                <Tooltip content="Visit my LinkedIn profile">
                  <Button
                    className="min-w-10 h-10  rounded-full gradient-border  gradient-border-dark  px-0"
                    variant="bordered"
                    as={Link}
                    href="https://www.linkedin.com/in/muhammad-naveed135/"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </Button>
                </Tooltip>
                <Tooltip content="Follow me on Facebook">
                  <Button
                    className="min-w-10 h-10  rounded-full gradient-border gradient-border-dark  px-0"
                    variant="bordered"
                    as={Link}
                    href="https://www.facebook.com/muhammadnaveed135"
                    target="_blank"
                  >
                    <FaFacebookF />
                  </Button>
                </Tooltip>
                <Tooltip content="Check out my GitHub">
                  <Button
                    className="min-w-10 h-10  rounded-full gradient-border gradient-border-dark  px-0"
                    variant="bordered"
                    as={Link}
                    href="https://github.com/Naveed-135"
                    target="_blank"
                  >
                    <TbBrandGithubFilled />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
