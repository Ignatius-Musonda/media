import React from 'react'
import './Work.css'

// import img1 from '../../Components/Images/slide-1.jpg' 
// import img2 from '../../Components/Images/slide-2.jpg'  
// import img3 from '../../Components/Images/slide-3.jpg' 
import img1 from '../../Components/Images/Portfolio/Wedding/Wed1.jpg' 
import img2 from '../../Components/Images/Portfolio/Wedding/Wed2.jpg' 
import img3 from '../../Components/Images/Portfolio/Wedding/Wed3.jpg' 
import img4 from '../../Components/Images/Portfolio/Wedding/Wed4.jpg' 
import img5 from '../../Components/Images/Portfolio/Wedding/Wed5.jpg' 
import img6 from '../../Components/Images/Portfolio/Wedding/Wed6.jpg' 
import img7 from '../../Components/Images/Portfolio/Wedding/Wed7.jpg' 
import img8 from '../../Components/Images/Portfolio/Wedding/Wed8.jpg' 
import img9 from '../../Components/Images/Portfolio/Wedding/Wed9.jpg' 
import img10 from '../../Components/Images/Portfolio/Wedding/Wed10.jpg' 
import img11 from '../../Components/Images/Portfolio/Other/Other1.jpg' 
import img12 from '../../Components/Images/Portfolio/Other/Other2.jpg' 
import img13 from '../../Components/Images/Portfolio/Other/Other3.jpg' 
import img14 from '../../Components/Images/Portfolio/Other/Other4.jpg' 
import img15 from '../../Components/Images/Portfolio/Other/Other5.jpg' 
import img16 from '../../Components/Images/Portfolio/Other/Other6.jpg' 
import img17 from '../../Components/Images/Portfolio/Other/Other7.jpg' 
import img18 from '../../Components/Images/Portfolio/Other/Other8.jpg' 
import img19 from '../../Components/Images/Portfolio/Other/Other9.jpg' 
import img20 from '../../Components/Images/Portfolio/Other/Other10.jpg' 
import img21 from '../../Components/Images/Portfolio/Other/Other11.jpg' 

 

const Images = [ 

        //     {   "Bride":"TEMA",
        //         "Category": "Bridal Showers",
        //         "imgUrl": img1
        //     }, 
        //     {
        //         "Bride":"CHALWE",
        //         "Category": "Bridal Showers",
        //         "imgUrl": img2
        //     },
        //     {
        //         "Bride":"DOREEN",
        //         "Category": "Bridal Showers",
        //         "imgUrl": img3
        //     },
        //     {   "Bride":"MABOSHE",
        //     "Category": "Bridal Showers",
        //     "imgUrl": img1
        // }, 
        // {
        //     "Bride":"SARAH",
        //     "Category": "Bridal Showers",
        //     "imgUrl": img2
        // },
        // {
        //     "Bride":"MBOLOLWA",
        //     "Category": "Bridal Showers",
        //     "imgUrl": img3
        // }, 
        // {
        //     "Bride":"MBOLOLWA",
        //     "Category": "Bridal Showers",
        //     "imgUrl": img3
        // }, 
        {
            "imgUrl": img1
        }, 
        {
            "imgUrl": img2
        }, 
        {
            "imgUrl": img3
        }, 
        {
            "imgUrl": img4
        }, 
        {
            "imgUrl": img5
        }, 
        {
            "imgUrl": img6
        }, 
        {
            "imgUrl": img7
        }, 
        {
            "imgUrl": img8
        }, 
        {
            "imgUrl": img9
        }, 
        {
            "imgUrl": img10
        }, 
        {
            "imgUrl": img11
        }, 
        {
            "imgUrl": img12
        }, 
        {
            "imgUrl": img13
        }, 
        {
            "imgUrl": img14
        }, 
        {
            "imgUrl": img15
        }, 
        {
            "imgUrl": img16
        }, 
        {
            "imgUrl": img17
        }, 
        {
            "imgUrl": img18
        }, 
        {
            "imgUrl": img19
        }, 
        {
            "imgUrl": img20
        }, 
        {
            "imgUrl": img21
        }, 

]

function Work() {
  return ( 
      <>  

    <div className='Work'>   
     
     <div className='SubHeading'> 
             <h1>Portfolio</h1>
         </div> 

    <div className='WGallery'>   

        { Images.map(
            (item,index) =>{ 
            
                return( 
                    
                    <div className='Cover'>  
                            <div className='coupleWrap'> 
                                                
                                                {/* <div className='VertText'> 
                                                    <h3>{item.Category}</h3>
                                                </div>   */}
                            
                                                <div className='WImages'>  
                            
                                                        <img src={item.imgUrl} />
                                                    
                                                
                                                </div>      
                            
                                    </div>  
                            
                                    
                                    {/* <div className='GBride'> 
                                        <h3>{item.Bride}</h3>
                                    </div>   */}
            

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



    