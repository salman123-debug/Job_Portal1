
import './App.css'
// import Header from './Components/Header'
import Home from './Components/Home'
// import Slider from './Components/Slider'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import JobList from './Components/JobList'
import JobDetails from './Components/JobDetails'

function App() {
  

  return (
    <>
       <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='joblist' element={<JobList/>}/>
          <Route path='/jobdetails/:id' element={<JobDetails/>}/>
        </Routes>
       </Router>
    </>
  )
}

export default App
