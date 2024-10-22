import React from 'react'
import { useLocation } from 'react-router-dom'

function JobDetails() {
  const location  = useLocation();
  const callout = location.state || {};
  console.log(callout);
  if(!callout){
    return <div>No data available</div>
  }
  return (
    <div>
      <div className="relative h-64 w-full overflow-hidden rounded-lg cursor-pointer bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-36">
                  <div className="right-4 top-5 absolute text-left">
                  <p className="  font-serif font-bold text-center">{callout.description}</p>
                  {callout.company}
                  <p className="text-gray-500">{callout.city}</p>
                  </div>
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="h-full w-40 object-cover object-center"
                  />
                </div>
    </div>
  )
}

export default JobDetails
