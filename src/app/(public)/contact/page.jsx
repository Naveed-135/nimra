import ContactForm from '@/components/ContactForm'
import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import Image from 'next/image';
import FaqSection from '@/components/FaqSection';
const page = () => {
  return (
    <div className=' dark:bg-BlackPrimary max-sm:px-4'>
      <div className='container'>
    <div className='lg:max-w-[90%] lg:mx-auto md:py-20 py-10 flex flex-col md:gap-20 gap-12'>
    <div className='  flex justify-between flex-col xl:flex-row max-xl:gap-12'>
    
      <div className='max-w-[450px] flex flex-col gap-4 md:gap-8 max-xl:mx-auto max-xl:items-center'> 
        <h3 className='md:text-7xl text-5xl font-baiJamjuree font-bold Gradient'>Get in touch</h3>
        <span className='md:text-lg text-base text-BlackPrimary font-normal max-xl:!text-center dark:text-WhitePrimary'>Have a project in mind? Looking to partner or work together? Reach out through the form and I&apos;ll get back to you in the next 48 hours.</span>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center gap-3'>
            <Image  src="/mail.svg" alt='mail-svg' width={1000} height={1000} className='md:w-7 md:h-7 w-6 h-6'/>
            <p className='text-BlackPrimary text-base md:text-lg font-medium md:font-bold dark:text-WhitePrimary'>NIMRANAYYAR70@gmail.com</p>
          </div>
          <div className='flex items-center gap-3 '>
          <Image  src="/phone.svg" alt='mail.svg' width={1000} height={1000} className='md:w-7 md:h-7 w-6 h-6'/>
            <p className='text-BlackPrimary md:text-lg text-base font-medium md:font-bold dark:text-WhitePrimary'>07352655070</p>
          </div>
        </div>
      </div>
      <ContactForm/>
   
    </div>
    <FaqSection/>
    </div>
    </div>
    </div>
  )
}

export default page