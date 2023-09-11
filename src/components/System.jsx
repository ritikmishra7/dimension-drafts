import React from 'react'
import AppButton from './AppButton'

const System = () => {
  return (
    <div className=' xl:px-52 pt-24 text-center px-4 '>
      <h1 className='text-white md:text-[42px] text-[32px] lg:px-44 font-bold leading-none'>Your Game. Our Grind. Zero Hassles.</h1>
      <p className='text-[#FFFFFFCC] md:text-xl text-lg lg:px-40 font-semibold py-6'>Robust and Ready for Action: Our systems are engineered for reliability, scalability, and security. Confidently manage hundreds of thousands of active players while supporting 10,000+ transactions per second, per game.</p>
      <div className='w-40 mx-auto flex mb-10'>
        <AppButton>Learn More</AppButton>
      </div>
      <div className='gap-7 flex flex-col lg:flex-row justify-center items-center text-left mx-2 lg:py-5 md:mx-36 lg:mx-10 xl:mx-10 2xl:mx-20'>
        <div className=' p-7 rounded-lg bg-card'>
          <h1 className='text-base pb-2 font-bold text-white'>Speed to Success: Launch Ahead</h1>
          <p className='text-[15px] pb-1 font-semibold text-[#FFFFFF99]'>
            Bypass months of foundational smart contract work using our streamlined REST APIs and SDKs. Achieve 95% of game-centric blockchain implementations with just a few code lines.
          </p>
        </div>

        <div className=' p-7 rounded-lg bg-card'>
          <h1 className='text-base pb-2 font-bold text-white'>Craft Your Masterpiece, We Handle the Rest</h1>
          <p className='text-[15px] pb-1 font-semibold text-[#FFFFFF99]'>
            Redirect the significant savings from blockchain R&D to expand your team with more developers and designers. Focus on scaling and innovation rather than the repetitive cycle of drafting and refining contracts and systems.
          </p>
        </div>

      </div>
    </div>
  )
}

export default System