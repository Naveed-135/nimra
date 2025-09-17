"use client"
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  
  Button,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SwitchMode from "./SwitchMode";


export default function Navbar1() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    {key:"home", label: "Home", href: "/"},
    {key:"services", label: "Services", href: "/services"},
    {key:"projects", label: "Projects", href: "/projects"},
    {key:"about", label: "About", href: "/about"},
    {key:"contact", label: "Contact", href: "/contact"},
    
    
  ];

  const pathname = usePathname();
  return (
    <div className="dark:bg-BlackPrimary">
      <div className="container max-sm:px-4 ">
    <Navbar  shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}  className="bg-transparent    lg:max-w-[90%] lg:mx-auto">
      {/* Brand Section */}
      <div className="flex gap-16 items-center">
    

      {/* Desktop Navigation */}
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
      {navLinks.map(({ label, href }, index) => {
          const isActive = pathname === href || pathname.startsWith(`${href}/`);

          return (
            <NavbarItem key={index}>
              <Link 
              
                href={href}
                className={`text-base font-normal dark:text-WhitePrimary text-BlackPrimary ${isActive ? "Gradient" :  "text-BlackPrimary dark:text-WhitePrimary"}`}

              >
                {label}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      </div>
      {/* Right Side Content */}
      <NavbarContent className="max-sm:hidden" justify="end">
        
        <NavbarItem className="flex items-center gap-3">
        <Button
  as={Link}
  className="w-[136px] h-11 rounded-full text-WhitePrimary bg-BlackPrimary dark:text-BlackPrimary dark:bg-WhitePrimary text-base font-semibold uppercase"
  href="https://wa.me/923275142661"
  target="_blank"
  variant="flat"
>
  Let&apos;s talk
</Button>
          <SwitchMode/>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu Toggle */}
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />

      {/* Mobile Navigation Menu */}
      <NavbarMenu className=" ">
      {navLinks.map(({ label, href }, index) => {
           const isActive = pathname === href || pathname.startsWith(`${href}/`);

          return (
            <NavbarItem className="max-sm:flex justify-center items-center" key={index}>
              <Link 
              
                href={href}
                className={`text-4xl  font-bold  ${isActive ? "Gradient" : "dark:text-WhitePrimary text-BlackPrimary"}`}

              >
                {label}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
    </div>
    </div>
  );
}
