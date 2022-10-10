import React, { useState } from 'react';
import Image from 'next/image';
import { sliderData } from './sliderData';
import {GoArrowLeft, GoArrowRight} from 'react-icons/go';


const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id='gallery' className='max-w-[1240px] mx-auto'>
      <h2 className='text-4xl font-bold text-center p-4'>Gallery</h2>
      <div className='relative flex justify-content p-4'>
        {sliderData.map((slide, index) => (
          <div key={index} className={index === current ? 'opacity-[1] easy-in duration-1000': 'opacity-0'}>
              <GoArrowLeft onClick={prevSlide} size={50} className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]'/>
              {index === current && (
                <Image src={slide.image} alt='/' width='1440' height='600' objectFit='cover'/>
              )}
              <GoArrowRight onClick={nextSlide} size={50} className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]'/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider