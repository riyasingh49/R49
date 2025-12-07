import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2'>
      <Link className='text-[6vw] leading-[5.5vw] uppercase border-5 border-white rounded-full px-10 pt-3'>Explore</Link>
      <Link className='text-[6vw] leading-[5.5vw] uppercase border-5 border-white rounded-full px-10 pt-3'>Experience</Link>
    </div>
  )
}

export default HomeBottomText
