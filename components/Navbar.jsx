import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {RiCloseCircleFill, RiMenu3Fill} from 'react-icons/ri';

import style from './styles';


const Navbar = () => {

  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const navLinks = [
    {name: 'Home', path: '/'},
    {name: 'Gallery', path: '/#gallery'},
    {name: 'Portfolio', path: '/#portfolio'},
    {name: 'Contact', path: '/#contact'}
  ]

  const handleNavbar = () => {
    setNav(!nav);
  }

  useEffect(() => {
    const changeColor = () => {
      if(window.scrollY >= 90) {
        setColor('#FFFFFF');
        setTextColor("#000000");
      } else {
        setColor('transparent');
        setTextColor("#FFFFFF");
      }
    }
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <nav style={{backgroundColor: `${color}`}} className={style.navbarWrap}>
      <div className={style.navbarInner}>
        <Link href='/'><h1 style={{color: `${textColor}`}} className={style.navbarLogo}>Côncavo</h1></Link>
        <div>
          <ul className='hidden sm:flex' style={{color: `${textColor}`}}>
            {navLinks.map((link, index) => (
              <li key={index} className='p-4 hover:text-gray-500'>
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Button */}
        <div onClick={handleNavbar} className={style.navbarBtnMenuMobile}>
          {nav ? <RiCloseCircleFill size={20} /> : <RiMenu3Fill size={20} style={{color: `${textColor}`}} />}
        </div>

        {/* Mobile Menu */}
        <div className={
          nav
            ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
            : 'sm:hidden absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
        }>
          <ul>
            {navLinks.map((link, index) => (
              <li onClick={handleNavbar} key={index} className='p-4 hover:text-gray-500 text-4xl'>
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar