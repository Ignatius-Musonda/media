import React from 'react'; 
import './Service.css'

function Services() {
  return <div className='services'>  

        <div className='Head'>  
                <h3>EASE AND SIMPLE</h3> 
                <h1>OUR GREAT SERVICES</h1>

        </div>    
        <div className='listing'>  

        <div className='Service'>  

                    <div className='ServiceIcon'>  
                        <i class="fas fa-camera"></i>
                    </div>  

                    <div className='serviceName'> <h3>WEDDING SHOOTING</h3></div> 
                    <div className='ServiceContext'> <p>Shooting a wedding is a demanding and high pressure task to undertake in which there’s no time for mistakes and retakes. It’s crucial that you get it right the first time.</p></div> 

        </div> 


        <div className='Service'>  

                    <div className='ServiceIcon'>  
                        <i class="far fa-heart"></i>
                        
                    </div>  

                    <div className='serviceName'> <h3>MEETING THE COUPLE</h3></div> 
                    <div className='ServiceContext'> <p>The first step before WE start planning anything is to meet up with the couple and talk about their requirements and any special requests, such as if you can use flash in the ceremony and if there’s particular areas they don’t want you shooting from.</p></div> 

        </div>  

        <div className='Service'>  

                    <div className='ServiceIcon'>  

                        <i class="fas fa-image"></i>
                    </div>  

                    <div className='serviceName'> <h3>PREPARATION</h3></div> 
                    <div className='ServiceContext'> <p>There’s nothing worse than not knowing where you need to be and when, so to avoid this make sure to keep a schedule of the day on hand and get this in advance if possible. This helps ease the tension and anxiety</p></div> 

        </div> 


        </div>

     

     

  </div>;
}

export default Services;
