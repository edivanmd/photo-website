import React, { useState } from 'react';
import Image from 'next/image';
import { SliderData } from './SliderData';
import {GoArrowLeft, GoArrowRight} from 'react-icons/go';

import style from './styles';

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
    <div id='gallery' className={style.galleryWrap}>
      <h2 className={style.titleH2}>Gallery</h2>
      <div className={style.galleryImagesWrap}>
        {SliderData.map((slide, index) => (
          <div key={index} className={index === current ? 'opacity-[1] easy-in duration-1000': 'opacity-0'}>
              <GoArrowLeft onClick={prevSlide} size={50} className={style.galleryLeftArrow} />
              {index === current && (
                <Image src={slide.image} alt='/' width='1440' height='600' objectFit='cover'/>
              )}
              <GoArrowRight onClick={nextSlide} size={50} className={style.galleryRightArrow} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider