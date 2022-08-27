import React, { useState } from 'react'
import './Blog.css' 
import NavBar2 from '../../Components/NavBar2/HeadingOne' 
import Column from '../../blogComponents/Columns/Column'
import Footer from '../../Components/Footer/Footer' 
// import  { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';

function Blog() { 

  let {BID} = useParams();

  const [bid, setBid] = useState(BID !=undefined?BID:1);

 
  return (
    <div> 
        <NavBar2/>
        <Column bIDProp={bid}/>
        <Footer/>

    </div>
  )
}

export default Blog