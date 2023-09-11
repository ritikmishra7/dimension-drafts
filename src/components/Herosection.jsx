import React from 'react'
import AppButton from './AppButton'
import Hero from '../assets/hero.png'
import { useNavigate } from 'react-router-dom'

const Herosection = () => {

  const navigate = useNavigate()

  return (
    <div className=''>
      <div className='flex flex-col justify-center items-center text-center pt-36 gap-8 px-3 md:px-6 xl:px-80 2xl:px-96 lg:px-36'>
        <h1 className='text-white text-5xl md:text-[55px] xl:text-6xl font-bold'>Where Gaming Meets Seamless Blockchain</h1>
        <p className='text-gray-300 text-xl lg:text-[22px] font-semibold'>Introducing a comprehensive, self-service solution for games and gamified applications: Seamlessly integrate robust blockchain infrastructure in mere minutes, eliminating the need for months of development.</p>
      </div>
      <div className='flex justify-center items-center flex-col md:flex-row gap-5 mt-5 mb-12'>
        <div className='text-lg font-semibold w-60' onClick={() => navigate('/signup')}>
          <AppButton>Get Started</AppButton>
        </div>
      </div>
      <div className='flex justify-center items-center pt-3'>
        <img src={Hero} alt='' className='xl:w-1/2 lg:w-3/4 ' /></div>
    </div>
  )
}

export default Herosection