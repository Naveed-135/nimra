import { portfolioProjects } from '@/db/data'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
  return (
    <div className="bg-WhiteSecondary dark:bg-BlackSecondary py-20 max-sm:py-10">
      <div className='container'>
      <div className="md:max-w-[90%] mx-auto">
        <h1 className="text-4xl font-bold Gradient mx-auto mb-8 text-center">MY Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project) => (
            <Link 
              href={`/projects/${project.id}`}
              key={project.id}
              className="block"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 dark:bg-WhiteSecondary bg-WhitePrimary">
                  <span className="text-sm font-semibold Gradient uppercase tracking-wider">
                    {project.technology}
                  </span>
                  <h2 className="mt-2 text-xl font-bold text-BlackPrimary">
                    {project.title}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Page