import React from 'react'
import { GoSearch } from "react-icons/go";


const Hero = () => {
  return (
    <div className=' px-5 xl:px-10 md:w-1/2 mb-10'>
        <h1 className='mt-6 mb-10 text-5xl xl:text-6xl text-center font-bold text-[#2A3342] leading-normal xl:leading-relaxed'>Your dream recipe world!</h1>
        <form action="/search" className='bg-white p-4 rounded relative flex items-center'>
            <GoSearch className=' w-5 h-5 mr-2 text-neutral-300' />
            <input className='outline-none w-full placeholder:text-[#1b2629]' placeholder='Search for a recipe' name='query' type="search" id='search' required=""/>
        </form>
    </div>
  )
}

export default Hero
