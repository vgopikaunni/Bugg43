import React from "react"
import {Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import './index.css';





const App = () => {
  return (
    <div className= 'px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]' >
        <Navbar/>
        
    </div>
  )
}

export default App