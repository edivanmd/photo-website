import Image from 'next/image';
import React from 'react';
import {TiSocialInstagram} from 'react-icons/ti';

import style from '../../public/styles';

const InstagramImg = ({ igInfo }) => {
  return (
    <li className={style.instagramImgWrap}>
        <Image src={igInfo.image} alt='Images' layout='responsive' />
        <div className={style.instagramImgWrapOverlay}>
          <p className={style.instagramImgWrapIgTag}>
            <TiSocialInstagram size={30} className={style.instagramImgWrapIgIcon} />
            <span>{igInfo.title}</span>
          </p>
        </div>
    </li>
  )
}

export default InstagramImg