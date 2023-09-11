import React from 'react'
import AppButton from './AppButton'
import Toolsimage from '../assets/tools.png'

const Tools = () => {
  return (
    <div className='text-center pt-20 px-4 md:px-10'>
      <h1 className='text-white font-bold text-[32px] 2xl:px-36 md:text-[40px] md:px-20 lg:px-32 xl:px-72 leading-none'>
        Game Boundless with Our Universal Toolkit
      </h1>
      <p className='text-[18px] font-semibold text-[#FFFFFFCC] 2xl:px-20 pt-5 xl:px-52 lg:px-40'>Craft seamlessly using your choice of programming languages across leading blockchains. Experience the efficiency of one integrated infrastructure suite.</p>
      <div className='w-60 mx-auto pt-6'>
        <AppButton>View Developer SDKs</AppButton>
      </div>
      <div className='flex justify-center items-center overflow-x-hidden px-0'>
        <img src={Toolsimage} alt='' className='max-w-2xl lg:max-w-6xl pb-3' /></div>
    </div>
  )
}

export default Tools