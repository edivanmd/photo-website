import Link from 'next/link'
import React from 'react'
import {RiCloseCircleFill, RiMenu3Fill} from 'react-icons/ri';

const Menu = () => (
  <ul>
    <li><Link href='/'></Link>Home</li>
    <li><Link href='/#gallery'></Link>Gallery</li>
    <li><Link href='/#portfolio'></Link>Work</li>
    <li><Link href='/#contact'></Link>Contact</li>
  </ul>
)

const Navbar = () => {
  return (
    <nav>
      <Link href='/'><h1>Côncavo</h1></Link>
      <ul>
        <li><Link href='/'></Link>Home</li>
        <li><Link href='/#gallery'></Link>Gallery</li>
        <li><Link href='/#portfolio'></Link>Work</li>
        <li><Link href='/#contact'></Link>Contact</li>
      </ul>

      {/* Mobile Button */}
      <div>
        <RiMenu3Fill size={20} />
      </div>

      {/* Mobile Menu */}
      <div>
        <ul>
          <li><Link href='/'></Link>Home</li>
          <li><Link href='/#gallery'></Link>Gallery</li>
          <li><Link href='/#portfolio'></Link>Work</li>
          <li><Link href='/#contact'></Link>Contact</li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar