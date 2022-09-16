import React from 'react'
import style from './styles';

const Banner = ({ heading, message }) => {
  return (
    <div className={style.bannerWrap}>
      {/* Overlay */}
      <div className={style.bannerOverlay} />
      <div className={style.bannerTextBox}>
        <h2 className={style.bannerTitle}>{heading}</h2>
        <p className={style.bannerText}>{message}</p>
        <button className={style.bannerButton}>Book</button>
      </div>
    </div>
  )
}

export default Banner