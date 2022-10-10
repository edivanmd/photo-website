import Image from 'next/image'
import React from 'react'

const Project = ({ dataProject }) => {
  return (
    <li className='relative w-full h-full first:col-span-2 first:md:col-span-3 first:row-span-2'>
      { dataProject.main === 'true'
        ? <Image
            src={dataProject.image}
            alt='/'
            layout='responsive'
            width='677'
            height='451'
          /> 
        : <Image
            src={dataProject.image}
            alt='/'
            layout='responsive'
            width='215'
            height='217'
            objectFit='cover'
          />
      }
      <p className='absolute z-10 bottom-0 rounded-t p-1 w-full bg-gradient-to-t from-sky-500 to-indigo-500'>{dataProject.title}</p>
    </li>
  )
}

export default Project