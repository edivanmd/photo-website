import Image from 'next/image'
import React from 'react'

import style from '../public/styles';

const Project = ({ dataProject }) => {
  return (
    <li className={style.projectList}>
      <Image
          src={dataProject.image}
          alt='/'
          layout='responsive'
          width='677'
          height='451'
        />
        <span>{dataProject.title}</span>
    </li>
  )
}

export default Project