import React from 'react';
// import { IgImg1, IgImg2, IgImg3, IgImg4, IgImg5 } from './imports';
import igData from './igData';
import InstagramImg from './InstagramImg';

import style from '../../public/styles';

const Instagram = () => {
  return (
    <div className={style.instagramWrap}>
      <h3 className={style.titleH3}>Follow me on Instagram</h3>
      <p className={style.instagramWrapAddress}>@côncavo</p>
      <ul className={style.instagramWrapGrid}>
        {igData.map((igInfo, index) => (
          <InstagramImg key={index} igInfo={igInfo} />
        ))}
      </ul>
    </div>
  )
}

export default Instagram