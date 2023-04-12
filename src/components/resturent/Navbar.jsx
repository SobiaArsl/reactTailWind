import React from 'react'

export default function Navbar() {
  return (
    <div className='px-4 py-4 max-w-[1300px] mx-auto   '>
<div className='border-2 bg-gray-400 flex-items-center gap-8
grid gap-1 grid-cols-8 grid-rows-1 flex-items-center'
 >
    <p className='px-0 py-0'></p>
    <img src='../svg/Navlogo.svg'   />
  {/* <p className='font-inter '>   */}
  <p className='flex-none gap-[32px]'> Bolg</p>
  
    <p className='flex-none'> FAQ</p>
    <div></div>
    <p> Sign in</p>
<p>
    <button className='px-2 py-1 rounded-lg gap-8px bg-amber-400 border-none'>Learn more</button>
    </p>
    <div></div>
    
</div>
    </div>
  )
}
