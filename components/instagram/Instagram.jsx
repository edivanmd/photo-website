import React from 'react';
import { IgImg1, IgImg2, IgImg3, IgImg4, IgImg5 } from './imports';
import InstagramImg from './InstagramImg';

import style from '../styles';

const Instagram = () => {
  return (
    <div className={style.instagramWrap}>
      <h3 className={style.titleH3}>Follow me on Instagram</h3>
      <p className={style.instagramWrapAddress}>@côncavo</p>
      
        <InstagramImg socialImg={IgImg1} />
    
    </div>
  )
}

export default Instagram