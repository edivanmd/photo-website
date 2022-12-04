import Link from 'next/link'
import React from 'react'

const Banner = ({ heading, message }) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem] text-center'>
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='py-5 text-xl'>{message}</p>
        <Link href='/contact'><a className='py-2 border w-1/4 block text-center m-auto hover:bg-white hover:text-black ease-in duration-300'>Book</a></Link>
      </div>
    </div>
  )
}

export default Banner