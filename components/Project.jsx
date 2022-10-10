import Image from 'next/image'
import React from 'react'

const Project = ({ dataProject }) => {
  return (
    <li className='w-full h-full first:col-span-2 first:md:col-span-3 first:row-span-2'>
      <Image
          src={dataProject.image}
          alt='/'
          layout='responsive'
          width='677'
          height='451'
        />
        {/* <span>{dataProject.title}</span> */}
    </li>
  )
}

export default Project