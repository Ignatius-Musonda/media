import React from 'react'
import './Blog.css' 
import NavBar2 from '../../Components/NavBar2/HeadingOne' 
import Column from '../../blogComponents/Columns/Column'
import Footer from '../../Components/Footer/Footer'

function Blog() {
  return (
    <div> 
        <NavBar2/>
        <Column/>
        <Footer/>

    </div>
  )
}

export default Blog