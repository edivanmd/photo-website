import Image from 'next/image';
import React from 'react';
import {TiSocialInstagram} from 'react-icons/ti';

import style from '../styles';

const InstagramImg = ({ socialImg }) => {
  return (
    <div className={style.instagramImgWrap}>
        <Image className={style.instagramImgWrapImage} src={socialImg} alt='Images' layout='responsive' />
        {/* Overlay */}
        <div className={style.instagramImgWrapOverlay} />
        <p className={style.instagramImgWrapIgTag}><TiSocialInstagram size={30} /></p>
    </div>
  )
}

export default InstagramImg