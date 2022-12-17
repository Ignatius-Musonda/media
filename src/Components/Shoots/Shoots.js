import React from 'react';
import './Shoots.css'

// import img1 from '../Images/slide-1.jpg' 
// import img2 from '../Images/slide-2.jpg'  
// import img3 from '../Images/slide-3.jpg' 
// import img9 from '../Images/slide-4.jpg' 
import img1 from '../Images/Latest/Latest_1.jpg'
import img2 from '../Images/Latest/Latest_2.jpg'
import img3 from '../Images/Latest/Latest_3.jpg'
import img4 from '../Images/Latest/Latest_7.jpg'
import img5 from '../Images/Latest/Latest_5.jpg'
import img6 from '../Images/Latest/Latest_6.jpg'

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
        ImgUrl : img4, 
        Names : "SOFT & BAE3"
    } ,
    { 
        ImgUrl : img5, 
        Names : "SOFT & BAE4"
    } ,
    { 
        ImgUrl : img6, 
        Names : "SOFT & BAE5"
    } ,
     


]



function Shoots() {
  return <div className='Shoots'>  
  <div className='HeaderStory'>  
       
        <div>
              <h3>NEW STORIES</h3> 
        </div>
        <div>
            <h1>LATEST PHOTOSHOOTS</h1>
        </div>
          
          

  </div> 

  <div className='CardGallery'> 
         
         {  
            shootss.map((item,index)=>{ 
                return( 
                    <div className='Card' key={index}>  

                            <div className='Holder'>  
                                <img src={item.ImgUrl}  className='CardImage' />
                            </div>  

                            {/* <div className='clientName'> <h3>{item.Names}</h3></div>  */}

                  </div> 
                )

            }) 
         }
   
           


           

 </div>
   
  </div>;
}

export default Shoots;
