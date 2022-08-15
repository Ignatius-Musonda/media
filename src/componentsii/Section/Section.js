import React from 'react';
import './Section.css'

import img1 from '../../Components/Images/slide-1.jpg' 
import img2 from '../../Components/Images/slide-2.jpg'  
import img3 from '../../Components/Images/slide-3.jpg' 
import img9 from '../../Components/Images/slide-4.jpg' 


function Section() {
   
 
   const sessions = [ 

    { 
       "backContent" : <p>Save the <br/> date <br/>  Shoot</p>,
       "Heading" : "PRE - WEDDING SESSION", 
       "subHeading" : "Pre - Wedding Session", 
       "pTag" : <p> Session takes up to an hour Images delivered on USB <br/> 25 to 30 High Res Images <br/> Online Gallery of Images on our website <br/> Up to 48 Hours delivery  PHOTOS ONLY </p>,
       "priceTag" : "PHOTOS ONLY",
       "Price" :"k2,000",
       "imgUrl" : img1

      

    } ,
    { 
      "backContent" : <p>All Photo <br/>Shoots</p>,
      "Heading" : "BIRTHDAY / FAMILY / PHOTO SESSION", 
      "subHeading" : "SESSIONS", 
      "pTag" : <p>25 - 30 Images <br/> Images Delivered on USB <br/> Online Gallery of Images <br/>  48 Hour Delivery</p>,
      "priceTag" : "PHOTOS ONLY",
      "Price" :"k2,000",
      "imgUrl" : img2

     

   } ,   


 { 
  "backContent" : <p> Baby on <br/> Board</p>,
  "Heading" : "Maternity Sessions", 
  "subHeading" : "Maternity Shoots", 
  "pTag" : <p>25 - 30 Images <br/> Images Delivered on USB <br/> Online Gallery of Images <br/>  48 Hour Delivery</p>,
  "priceTag" : "PHOTOS ONLY",
  "Price" :"k2,000",
  "imgUrl" : img3

 

} ,




   ]
  

   


  return   (
 
        <> 
            {   
    sessions.map( (item,index)=>{ 

      return (   

         

        <div className='section'> 
     

         <div className='backContent'> 

           <h2> {item.backContent}</h2>
       

        </div> 

       <div className='Heading11'> <h3> {item.Heading} </h3></div> 

       <div className='SectionCards'>  

          <div className='writeUp'> 
               
               
             
                <h3>  {item.subHeading}</h3>

                <p> {item.pTag}</p>

                <h3> {item.Price}</h3>
          
          
          </div>

          <div className='SectionImg'> 
              <img src={img1} />
          </div>

       </div>


  </div>
        
      )
    }
      
    )
} 



        </>

        );
  
}

export default Section;


 