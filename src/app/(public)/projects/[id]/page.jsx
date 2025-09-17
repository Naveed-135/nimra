import { portfolioProjects } from '@/db/data'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaArrowLeftLong } from "react-icons/fa6";
export default function ProjectDetail({ params }) {
  const project = portfolioProjects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="bg-WhiteSecondary dark:bg-BlackSecondary">
      <div className='container'>
      <div className="max-w-[90%] max-sm:max-w-full mx-auto py-20 max-sm:py-10">
        <Button
          as={Link}
          href="/projects"
          className="px-6 py-4 h-full rounded-full dark:text-WhitePrimary bg-Gradient  text-BlackPrimary  text-lg font-semibold uppercase mb-10" 
        >
          <FaArrowLeftLong />
          Back to Projects
        </Button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-[400px] w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8 bg-WhitePrimary dark:bg-BlackPrimary">
            <span className="text-sm font-semibold dark:text-WhitePrimary uppercase tracking-wider">
              {project.technology}
            </span>
            <h1 className="mt-2 text-3xl font-bold  dark:text-WhitePrimary">
              {project.title}
            </h1>
            <div className="mt-6 prose prose-lg">
              <p className="dark:text-WhitePrimary">
                {project.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
} 