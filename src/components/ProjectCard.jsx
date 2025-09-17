import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";
export default function ProjectCard({ imageUrl }) {
  return (
  <div className='  bg-BlackSecondary  p-6 rounded-2xl'>
<div className=''>
  <Image src={imageUrl} alt='project-image' width={1000} height={1000} className='object-cover  w-full h-full rounded-2xl'/>
</div>
<div className='flex gap-4 pt-5'>
  <Button className='bg-black  text-WhitePrimary '>Branding</Button>
  <Button className='bg-black  text-WhitePrimary'>Design</Button>
  <Button className='bg-black  text-WhitePrimary'>marketing</Button>
  
</div>
<div className=' flex justify-between items-baseline'>
<h2 className=' text-4xl font-baiJamjuree font-bold text-WhitePrimary'>World project in market place</h2>

        <Button className='bg-WhitePrimary min-w-16 h-16 rounded-full px-0'>
        <GoArrowUpRight className='text-BlackPrimary' size={30} />
        </Button>
      
</div>
  </div>
  );
}
