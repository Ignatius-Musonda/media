import React from 'react'
import './Portfolio.css'
import NavBar2 from "../../Components/NavBar2/HeadingOne"
import Work from '../../portComponents/Work/Work'
import Footer from '../../Components/Footer/Footer'


function Portfolio() {
  return (
    <div className='ourWork'>
  
         <NavBar2/> 
         <Work/> 
         <Footer/>

    </div>
  )
}

export default Portfolio