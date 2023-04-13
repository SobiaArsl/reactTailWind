import React from 'react'

export default function Searchbar() {
  return (
    <div class="flex items-center max-w-[450px] mx-auto justify-center gap-6 mt-6">
      <div class="relative flex w-full flex-wrap items-stretch border-2 px-2 py-1 rounded-lg bg-white">
        <img src='/svg/search.svg' className='w-[25px]' />

        <input
          type="search"
          class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 transition duration-200 ease-in-out focus:z-[3] focus:border-primary  placeholder-[#6C6C6C] focus:text-neutral-700 focus:outline-white"
          placeholder="Select restaurant/cuisine type"
          aria-label="Search"
          aria-describedby="button-addon1" />
      </div>

      <button
        className=" bg-[#E68359] rounded-md text-sm h-[45px] w-full max-w-[120px] px-4 font-medium uppercase  text-white h-full"
      >
        Show me
      </button>
    </div>
  )
}
