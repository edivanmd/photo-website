import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
        <h2 className='text-2xl font-bold text-center p-4'>Let's work together</h2>
        <form className='max-w-[600px] m-auto'>
            <div className='grid grid-cols-2 gap-2'>
                <input className='border shadow-lg p-3' type="text" placeholder='Name*' required />
                <input className='border shadow-lg p-3' type="email" placeholder='Email*' required />
            </div>
            <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Subject*' required />
            <textarea className='border shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Message*'required ></textarea>
            <button className='border shadow-lg p-3 w-full mt-2'>Submit</button>
            <p className='mt-[15px]'>* Required fields</p>
        </form>
    </div>
  )
}

export default Contact