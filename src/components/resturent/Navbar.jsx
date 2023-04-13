import React from 'react'


// lg: large screen
// sm: small screen
// md: medium screen

export default function Navbar() {
  return (
    <div className='px-4 py-4 max-w-[1300px] mx-auto   '>
      <div className='flex justify-between items-center font-bold bg-blue-400 sm:bg-gray-400 md:bg-red-300 lg:bg-orange-500'>
        <div className='flex justify-between items-center border-2 sm:w-full sm:max-w-[290px]'>
          <img src='../svg/Navlogo.svg'  />
          <div className='flex justify-between items-center'>
            <p className='mr-6 hidden sm:block'> Bolg</p>
            <p className='hidden sm:block'> FAQ</p>
          </div>
        </div>

        <div className='flex justify-between items-center'>
          <p className='mr-6 hidden sm:block'> Sign in</p>
          <p>
            <button className='px-2 py-1 rounded-lg gap-8px bg-amber-400 border-none'>Learn more</button>
          </p>
        </div>

      </div>
    </div>
  )
}
