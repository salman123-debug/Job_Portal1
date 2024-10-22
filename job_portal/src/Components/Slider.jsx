import React from 'react'

function Slider() {
  return (
    <div>
      <div className="image relative">
        <img src="./s1.jpg" alt="" />
      </div>
      <div className='slider-text h-64 w-full  bg-gradient-to-b from-transparent  to-gray-500 top-2/3 absolute'>
        <div className="text absolute left-64">
        <h1 className='text-7xl font-serif font-bold text-gray-900'>Find Your Dream Job</h1>
        <input type="text" className='py-3 rounded-s-md w-2/3 ml-20 shrink-0' placeholder='Search Your Job'/>
        <button className='bg-blue-700 py-3 w-32 rounded-r-md text-white font-bold'>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Slider
