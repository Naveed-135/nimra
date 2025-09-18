import { Divider } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaDribbble, FaBehance } from "react-icons/fa";



const ProfileCard = () => {
  return (
    <div className="bg-WhitePrimary dark:bg-BlackPrimary">
    <div className="container max-sm:px-4">
      <div className="lg:max-w-[90%] mx-auto">
    <div className="relative pt-20 max-sm:pb-[260px]">
    <div className="xl:max-w-[720px] xl:max-h-[720px] md:max-w-[500px] md:max-h-[500px] relative">
        <Image src="/hero-img.jpeg" alt="profile-image" width={1000} height={1000} className="object-cover  aspect-square"/>
        <div className="md:max-w-[480px] xl:w-[480px] w-[290px]   bg-BlackPrimary absolute top-[30%] lg:-right-96 flex flex-col gap-7 md:right-[-214px] max-sm:p-12 max-lg:p-8 lg:p-12 max-sm:px-6 max-sm:-translate-x-1/2 max-sm:left-1/2 max-sm:top-[80%] dark:bg-WhiteSecondary">
      <h3 className="Gradient text-3xl font-baiJamjuree font-bold">Follow me</h3>
      <p className="text-WhitePrimary text-lg dark:text-BlackPrimary">
      I&apos;m Nimra Nayyar, a developer who partners with startups to create impactful storefronts.</p>
      <Divider className="bg-WhitePrimary dark:bg-BlackPrimary"/>
      <div className="flex items-center justify-between text-WhitePrimary dark:text-BlackPrimary">
        <FaFacebookF size={24}/>
        <FaLinkedinIn size={24}/>
        <FaTwitter size={24}/>
        <FaInstagram size={24}/>
        <FaDribbble size={24}/>
        <FaBehance size={24}/>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default ProfileCard
