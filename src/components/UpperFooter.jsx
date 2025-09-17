import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const UpperFooter = () => {
  return (
    <div className='relative h-[300px] md:h-[550px] xl:h-[600px] '>
      <div className='h-1/2 bg-white w-full dark:bg-BlackSecondary'></div>
      <div className='absolute top-[15%] left-1/2 -translate-x-1/2 w-full container h-3/4'>
      <div className='bg-Gradient h-full w-full lg:w-[90%] lg:mx-auto md:rounded-br-[92px] md:rounded-bl-[92px]  rounded-br-[32px] rounded-bl-[32px]  xl:rounded-br-[128px] xl:rounded-bl-[128px] flex justify-center items-center'>
        <div className='max-w-[700px] text-center flex md:gap-7 gap-4  flex-col items-center'>
          <h3 className='md:text-7xl text-3xl  text-BlackPrimary font-bold font-baiJamjuree'>Interested in working with me?</h3>
          <Button className='bg-BlackPrimary px-6  py-3 md:py-4 h-full text-WhitePrimary rounded-full text-[12px]  md:text-lg md:font-semibold uppercase'
          as={Link}
           href="/contact"
          >
          Get in touch
          </Button>
        </div>
      </div>
      </div>
      <div className='h-1/2 w-full bg-WhitePrimary dark:bg-BlackPrimary'></div>
    </div>
  )
}

export default UpperFooter