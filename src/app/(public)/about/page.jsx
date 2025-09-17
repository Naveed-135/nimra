import StatsCounter from '@/components/Counter';
import ProfileCard from '@/components/ProfileCard';
import { Tape } from '@/components/Tape';
import { Button } from '@nextui-org/react'
import Image from 'next/image';
import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
const page = () => {
  return (
    <div className="bg-WhitePrimary dark:bg-BlackPrimary">
    <div className='container max-sm:px-4'>
      <div className='xl:max-w-[90%] mx-auto'>
        {/* about text */}
        <div className='flex xl:pt-32 xl:mb-20 md:pt-24 md:mb-12 pt-14 mb-10  max-xl:flex-col max-xl:items-center max-xl:text-center max-sm:gap-4 max-xl:gap-8'>
          {/* text */}
        <div className='xl:w-1/2 w-full '>
            <h2 className='md:text-7xl text-4xl max-w-[465px] max-xl:mx-auto  font-baiJamjuree font-bold text-BlackPrimary dark:text-WhitePrimary'>Hi, I am <span className='Gradient'> Naveed</span>
            </h2>
            </div>
          {/* para icon */}
          <div className='xl:w-1/2 w-full md:w-[75%] mx-auto flex max-xl:items-center flex-col gap-4 md:gap-6'>
            <p className='md:text-lg text-base text-BlackPrimary dark:text-WhitePrimary'>

            Over the past year, I&apos;ve been with Developios, collaborating with clients to create interfaces that engage users and drive business growth.
            </p>
            <div className='flex items-center gap-3'>
              <Button className='bg-Gradient  min-w-10 h-10 rounded-full px-0'> <FaLinkedinIn /></Button>
              <Button className='bg-Gradient  min-w-10 h-10 rounded-full px-0'> <FaFacebookF /></Button>
              <Button className='bg-Gradient  min-w-10 h-10 rounded-full px-0'> <TbBrandGithubFilled /></Button>
            </div>
          </div>
        </div>
        {/* grid image */}
        <div className='flex  max-h-[620px] xl:gap-4 md:gap-3 gap-2 md:mb-4'>
         <div className='max-w-[320px]'>
          <Image src='/aboutimg1.png' alt='about-image' width={1000} height={1000} className='object-cover '/>
         </div>
         <div className=' max-w-[532px]'>
          <Image src='/aboutimg2.png' alt='about-image'  width={1000} height={1000} className='object-cover h-full'/>
         </div>
         <div className='max-w-[320px] '>
          <div className='flex flex-col xl:gap-4 md:gap-3 gap-2'>
            <div className=''>
              <Image src='/aboutimg3.png' alt='about-image'  width={1000} height={1000} className='object-cover '/>
            </div>
            <div>
              <Image src='/aboutimg4.png' alt='about-image'  width={1000} height={1000} className='object-cover '/>
            </div>
          </div>
         </div>
        </div>
        <StatsCounter />
      </div>
    </div>
    <Tape/>
    <ProfileCard/>
    </div>
  )
}
export default page