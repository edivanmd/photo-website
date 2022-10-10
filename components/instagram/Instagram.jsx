import React from 'react';
// import { IgImg1, IgImg2, IgImg3, IgImg4, IgImg5 } from './imports';
import igData from './igData';
import InstagramImg from './InstagramImg';

const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
      <h3 className='text-2xl font-bold text-center p-4'>Follow me on Instagram</h3>
      <p className='pb-4'>@côncavo</p>
      <ul className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 p-4'>
        {igData.map((igInfo, index) => (
          <InstagramImg key={index} igInfo={igInfo} />
        ))}
      </ul>
    </div>
  )
}

export default Instagram