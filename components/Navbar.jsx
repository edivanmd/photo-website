import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {RiCloseCircleFill, RiMenu3Fill} from 'react-icons/ri';

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const navLinks = [
    {name: 'Gallery', path: '/#gallery'},
    {name: 'Projects', path: '/projects'},
    {name: 'Contact', path: '/contact'}
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
    <nav style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link href='/'><h1 style={{color: `${textColor}`}} className='font-bold text-5xl cursor-pointer'>Côncavo</h1></Link>
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
        <div onClick={handleNavbar} className='block sm:hidden z-10'>
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