import React from 'react'
import Accordion from './Accordion'
import { Button } from '@nextui-org/react'
import Link from "next/link";
const FaqSection = () => {
  return (
    <div className='flex flex-col xl:flex-row md:gap-14 gap-8'>
      <div className='w-full flex flex-col max-lg:items-center max-lg:text-center gap-6 mt-4'>
        <h3 className='md:text-6xl text-4xl text-BlackPrimary dark:text-WhitePrimary font-bold font-baiJamjuree'>Frequently Asked <span className='Gradient'>Questions</span></h3>
        <p className='md:text-lg text-base text-BlackPrimary dark:text-WhitePrimary'>Answers to the burning questions in your mind.</p>
        <Button   as={Link} className="px-6 py-8 text-lg font-semibold text-BlackPrimary bg-Gradient rounded-full w-fit"  href="#" >
        contact me
        </Button>
      </div>
        <Accordion/>
    </div>
  )
}

export default FaqSection