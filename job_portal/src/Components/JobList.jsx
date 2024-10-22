import React, { useState } from 'react'
import JobCard from './JobCard';

function JobList() {
    const [activeTab,setactiveTab] = useState('tab1');
    const handleClick = (tab)=>{
        setactiveTab(tab)
    }
  return (
    <div>
      <div className="job-city flex justify-around my-3 ">
        <button className='text-xl
         font-bold p-3
         hover:bg-slate-900
           hover:text-white 
           hover:rounded-md 
           ease-in 
           duration-300'
           onClick={()=>handleClick("tab1")}
           >
            Web Developer
           </button>
        <button className='text-xl
         font-bold p-3
         hover:bg-slate-900
           hover:text-white 
           hover:rounded-md 
           ease-in 
           duration-300'
           onClick={()=>handleClick("tab2")}

           >
            App Developer
           </button>
        <button className='text-xl
         font-bold p-3
         hover:bg-slate-900
           hover:text-white 
           hover:rounded-md 
           ease-in 
           duration-300'
           onClick={()=>handleClick("tab3")}
           >
            Frontend Developer
           </button>
        <button className='text-xl
         font-bold p-3
         hover:bg-slate-900
           hover:text-white 
           hover:rounded-md 
           ease-in 
           duration-300'
           onClick={()=>handleClick("tab4")}
           >
            Backend Developer
           </button>
        
      </div>
      <div className="card">
        {activeTab === "tab1" && (
            <div>
                <JobCard/>
            </div>
        )}
        {activeTab === "tab2" && (
            <div>
                <JobCard/>
                <JobCard/>
            </div>
        )}
        {activeTab === "tab3" && (
            <div>
                <h1>Frontend devloper</h1>
            </div>
        )}
        {activeTab === "tab4" && (
            <div>
                <h1>Backend devloper</h1>
            </div>
        )}
      </div>
    </div>
  )
}

export default JobList
