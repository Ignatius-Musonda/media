import React from 'react';
import './Shoots.css'

import img1 from '../Images/slide-1.jpg' 
import img2 from '../Images/slide-2.jpg'  
import img3 from '../Images/slide-3.jpg' 
import img9 from '../Images/slide-4.jpg' 

const shootss = [ 
   
     { 
         ImgUrl : img1, 
         Names : "SOFT & BAE"
     } ,
     { 
        ImgUrl : img2, 
        Names : "SOFT & BAE1"
    } ,
    { 
        ImgUrl : img3, 
        Names : "SOFT & BAE2"
    } ,
    { 
        ImgUrl : img9, 
        Names : "SOFT & BAE3"
    } ,
    { 
        ImgUrl : img1, 
        Names : "SOFT & BAE4"
    } ,
    { 
        ImgUrl : img2, 
        Names : "SOFT & BAE5"
    } ,
     


]



function Shoots() {
  return <div className='Shoots'>  
  <div className='Head'>  
          <h3>NEW STORIES</h3> 
          <h1>LATEST PHOTOSHOOTS</h1>

  </div> 

  <div className='CardGallery'> 
         
         {  
            shootss.map((item,index)=>{ 
                return( 
                    <div className='Card' key={index}>  

                            <div className='Holder'>  
                                <img src={item.ImgUrl}  className='CardImage' />
                            </div>  

                            <div className='clientName'> <h3>{item.Names}</h3></div> 

                  </div> 
                )

            }) 
         }
   
           


           

 </div>
   
  </div>;
}

export default Shoots;
