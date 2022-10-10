import React from 'react';
import Banner from '../components/Banner';
import Contact from '../components/Contact';

const contact = () => {
  return (
    <div>
        <Banner heading='Contact me' message='Submit the form below for more work and quotes.' />
        <Contact />
    </div>
  )
}

export default contact