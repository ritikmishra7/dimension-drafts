import React from 'react'
import arrow from '../assets/right-removebg-preview.png'

const AppButton = ({children}) => {
  return (
    
        <>
          <div className='w-full'>
            <button className='p-[1px] text-white bg-btn rounded-lg w-full'>
              <div className='bg-gray-900 px-5 py-[6px] rounded-lg flex flex-row-reverse items-center justify-center gap-3'>
                <img src={arrow} className='w-1/12' alt=''/>
                <p className='font-bold text-base'>{children}</p>
              </div>
            </button>
          </div>
        </>
      );
    };
    

export default AppButton