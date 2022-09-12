import React from 'react';
import './Team.css'

// import img1 from '../Images/slide-1.jpg' 
// import img2 from '../Images/slide-2.jpg'  
// import img3 from '../Images/slide-3.jpg' 
// import img9 from '../Images/slide-4.jpg' 
import img1 from '../Images/Team/Team_2.jpg' 
import img2 from '../Images/Team/Team_1.jpg' 
import img3 from '../Images/Team/Team_3.jpg' 

function Team() { 


  const cardData = [ 
   { 
      ImgUrl: img1,
      Name: "Gabriel Mwanza", 
      Title: "Lead Photographer"

   },
   { 
      ImgUrl: img2,
      Name: "Ignatius Musonda", 
      Title: "Assnt. Photographer"

   }, 
    { 
      ImgUrl: img3,
      Name: "Taonga Sakala", 
      Title: "Content Manager"

   }, 


  ]




  return  <div className="MeetUs"> 
       

              <div className="TContainer">  

                    <div className="Headingz"><h3> MEET US</h3> </div>
                    <div  className="subHeadingz"><h1> MOSH MEDIA PHOTOGRAPHY TEAM</h1> </div>

                 </div> 

   
    
           <div className="Cardsss">
           
            {  
            cardData.map((item,index)=>{ 
                return( 

                    <div className="CardHolderSec" key={index}> 
                    
                                    <div className="ImageHolder">
                                    <img src={item.ImgUrl}/> 
                                         <div className="overlays"> 

                                        
                                                <div className="ImageTextz"> 
                                                
                                                      <i className="fab fa-facebook"></i>
                                                      <i className="fab fa-twitter"></i>
                                                      <i className="far fa-envelope"></i>
                                                      <i className="fab fa-whatsapp"></i>
                                                      <i className="fab fa-linkedin"></i>
                                                      

                                                </div>  
                                           
                                    
                                    </div>
                                    </div>

                                    <div className="ImageText"> 
                                     
                                     <h3>{item.Name} </h3> 
                                     <p> {item.Title}</p>

                                    </div>  

                                  
                    
                    
                    </div>

          
                )

            }) 
         }
           
            </div>
        
   

     
     
     
    
            
             

  </div>;
}

export default Team;


    