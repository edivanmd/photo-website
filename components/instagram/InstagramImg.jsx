import Image from 'next/image';
import React from 'react';
import {TiSocialInstagram} from 'react-icons/ti';

const InstagramImg = ({ igInfo }) => {
  return (
    <li className='relative'>
        <Image src={igInfo.image} alt='Images' layout='responsive' />
        <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group'>
          <p className='text-gray-300 hidden group-hover:block text-center'>
            <TiSocialInstagram size={30} className='m-auto' />
            <span>{igInfo.title}</span>
          </p>
        </div>
    </li>
  )
}

export default InstagramImg