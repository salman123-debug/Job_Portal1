import React from 'react'
import Slider from './Slider'
import Header from './Header'
import JobList from './JobList'
import Footer from './Footer'

function Home() {
  return (
    <div>
      <Header/>
      <Slider/>
      <div className='mt-60'>
      <JobList/>
      </div>
      <Footer/>
      
    </div>
  )
}

export default Home
