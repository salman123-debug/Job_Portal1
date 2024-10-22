import React from 'react'

function Footer() {
  return (
    <div>
      <div className='bg-gray-900 flex justify-around'>
        <div className='py-24'>
            <img src="./logo.jpeg"  alt="" className='h-20 w-32 mix-blend-color-burn'/>
            <p className='text-gray-300 py-4 text-lg'>Making the world a better place through constructing<br/> elegant hierarchies.</p>
        </div>
        <div className='py-24'> 
            <h1 className='text-white font-bold text-lg'>Solution</h1>
            <h1 className='text-gray-300 py-8 text-lg'>Marketing</h1>
            <h1 className='text-gray-300 text-lg'>Analytics</h1>
            <h1 className='text-gray-300 pt-8 text-lg'>Commerce</h1>
            <h1 className='text-gray-300 pt-8 text-lg'>Insights</h1>
            
        </div>
        <div className='py-24'>
            <h1 className='text-white font-bold text-lg'>Support</h1>
            <h1 className='text-gray-300 py-8 text-lg'>Pricing</h1>
            <h1 className='text-gray-300 text-lg'>Documetation</h1>
            <h1 className='text-gray-300 pt-8 text-lg'>Guides</h1>
            <h1 className='text-gray-300 pt-8 text-lg'>API Status</h1>
        </div>
        <div className='py-24'>
            <h1 className='text-white font-bold text-lg'>Company</h1>
            <h1 className='text-gray-300 py-8 text-lg'>About</h1>
            <h1 className='text-gray-300 text-lg'>Blog</h1>
            <h1 className='text-gray-300 pt-8 text-lg'>Jobs</h1>
            <h1 className='text-gray-300 pt-8 text-lg'>Press</h1>
            {/* <h1 className='text-gray-300 pt-8 text-lg'>Partners</h1> */}
        </div>
        <div className='py-24'>
            <h1 className='text-white font-bold text-lg'>Legel</h1>
            <h1 className='text-gray-300 py-8 text-lg'>Claim</h1>
            <h1 className='text-gray-300 text-lg'>Privacy</h1>
            <h1 className='text-gray-300 pt-8 text-lg'>Terms</h1>
            <h1 className='text-gray-300 pt-8 text-lg'>Insights</h1>
        </div>
        
      </div>
    </div>
  )
}

export default Footer
