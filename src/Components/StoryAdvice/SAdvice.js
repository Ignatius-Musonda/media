import React from 'react';
import './SAdvice.css' 

import img1 from '../Images/slide-1.jpg' 
import img2 from '../Images/slide-2.jpg'  
import img3 from '../Images/slide-3.jpg' 
import img9 from '../Images/slide-4.jpg' 
import {
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";


function SAdvice() { 

const shootss = [ 
   {   
      BID: 1,
      ImgUrl: img1,
      Name: "How i Prepare for my wedding day", 
      Title: "It’s been a while since i took some time off my busy work schedule and my parenting duties to write an article, thought this the best time to do so especially now that we are literally not shooting any weddings with everyone affected by COVID19. Some of the questions i get a lot are; How …"

   },
   {  
      BID: 2,
      ImgUrl: img2,
      Name: "FREE BRIDAL SHOWER PHOTOGRAPHY GIVEAWAY", 
      Title: "congratulations on your engagement Free bridal shower photography giveaway?! You read that correctly. This will be my second year giving away free bridal photography to another AWESOME couple. I’m so stoked to do this again. The response and support that I’ve gotten the past 4 years has been crazy and I’m so thankful for those …"

   }, 
    { 
      BID: 3,
      ImgUrl: img3,
      Name: "Why is wedding photography so expensive?", 
      Title: "Considerations I won’t bore with you the profit and loss details, but basically Wedding Photography Prices are high because its very expensive to operate as a Professional photographer. Cameras, Lenses, lighting, memory cards, computers, software, insurance, advertising, office space and lets not forget the good old Tax man (Zambia Revenue Authority). In reality I probably …"

      

   }, 
   { 
    BID: 4,
    ImgUrl: img9,
    Name: "why you need a pre-wedding session", 
    Title: "all your need to know Prewedding photo shoot is the photography service you get before your wedding. People who haven’t got the opportunity since then to be photographed by a professional photographer, this is considered to be best. Some of them consider this as golden opportunity to spend time with their future life partner, There …"

    

 }, 



  ]


  return <div className="advices"> 

        <div className='Head'>  
          <h3>LATEST NEWS</h3> 
          <h1>STORIES & ADVICES</h1> 

        </div>  

        <div className='Cardzz'>  
          {
              shootss.map((item,index)=>{

                  return(
                         <div className="CardHolder" key={index}> 
                    
                                    <div className="ImageHolder">
                                    <img src={item.ImgUrl}/> 
                                  
                                    </div>

                                    <div className="ImageText"> 
                                     
                                     <h3>{item.Name} </h3> 
                                     <p> {item.Title}</p>

                                    </div>  
                                    <div className="Icons"> 
                                     
                                     
                                     <i className="fab fa-facebook"></i>
                                     <i className="fab fa-twitter"></i>
                                     <i className="far fa-envelope"></i>
                                     <i className="fab fa-whatsapp"></i>
                                     <i className="fab fa-linkedin"></i>
                                     <i class="fas fa-plus-circle"></i>
                                   

                                    </div>  

                                     {/* <button className='moreButton'>Read More</button> */}
                                     <Link to={{pathname:"/Blog"+`/${item.BID}`}} className='moreButton' key={index}><button className='moreButton'>Read More</button></Link>

                                  
                    
                    
                    </div>

                  )
              })
          }

        </div>  



  </div>;
}

export default SAdvice;
