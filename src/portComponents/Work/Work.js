import React from 'react'
import './Work.css'

import img1 from '../../Components/Images/slide-1.jpg' 
import img2 from '../../Components/Images/slide-2.jpg'  
import img3 from '../../Components/Images/slide-3.jpg' 
 

const Images = [ 

            {   "Bride":"TEMA",
                "Category": "Bridal Showers",
                "imgUrl": img1
            }, 
            {
                "Bride":"CHALWE",
                "Category": "Bridal Showers",
                "imgUrl": img2
            },
            {
                "Bride":"DOREEN",
                "Category": "Bridal Showers",
                "imgUrl": img3
            },
            {   "Bride":"MABOSHE",
            "Category": "Bridal Showers",
            "imgUrl": img1
        }, 
        {
            "Bride":"SARAH",
            "Category": "Bridal Showers",
            "imgUrl": img2
        },
        {
            "Bride":"MBOLOLWA",
            "Category": "Bridal Showers",
            "imgUrl": img3
        }, 

]

function Work() {
  return ( 
      <>  

    <div className='Work'>   
     
     <div className='SubHeading'> 
             <h1>Bridal Showers</h1>
         </div> 

    <div className='WGallery'>   

        { Images.map(
            (item,index) =>{ 
            
                return( 
                    
                    <div className='Cover'>  
                            <div className='coupleWrap'> 
                                                
                                                <div className='VertText'> 
                                                    <h3>{item.Category}</h3>
                                                </div>  
                            
                                                <div className='WImages'>  
                            
                                                        <img src={item.imgUrl} />
                                                    
                                                
                                                </div>      
                            
                                    </div>  
                            
                                    
                                    <div className='GBride'> 
                                        <h3>{item.Bride}</h3>
                                    </div>  
            

                </div>  
                )

            }       

        )}




    
      
    </div> 
        
  </div>   


  <div className='Work'>   
     
     <div className='SubHeading'> 
             <h1>Other Sessions</h1>
         </div> 

    <div className='WGallery'>   

        { Images.map(
            (item,index) =>{ 
            
                return( 
                    
                    <div className='Cover'>  
                            <div className='coupleWrap'> 
                                                
                                                <div className='VertText'> 
                                                    <h3>{item.Category}</h3>
                                                </div>  
                            
                                                <div className='WImages'>  
                            
                                                        <img src={item.imgUrl} />
                                                    
                                                
                                                </div>      
                            
                                    </div>  
                            
                                    
                                    <div className='GBride'> 
                                        <h3>{item.Bride}</h3>
                                    </div>  
            

                </div>  
                )

            }       

        )}




    
      
    </div> 
        
  </div>  
    




</>

  )
}

export default Work 



    