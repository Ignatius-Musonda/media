import React from 'react'
import './About.css'
import img1 from '../Images/Guat-10.jpeg'

function About() {
  return ( 

    <>  

        <div className='aboutUs'> 
            <div className='firstAbout'> 

                <div className='aboutImage'>  

                            <img src={img1} />
                </div> 

                <div className='aboutSideColumn'>  

                        <div className='aboutIcons'>  

                                {/* <div className='consIcons'>  */}
{/* 
                                    <i class="fa-solid fa-envelope"></i>
                                    <i class="fa-light fa-envelope"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                    <i class="fa-brands fa-square-youtube"></i> */}
                                   
                                    
                                {/* </div> */}
                                  {/* <div className='consIcons'>  */}

                                    <i className="fab fa-facebook"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="far fa-envelope"></i>
                                    <i className="fab fa-whatsapp"></i>
                                    <i className="fab fa-linkedin"></i>
                                
                                    
                                {/* </div> */}
                            
                        </div> 

                        <div className='aboutWriteUp'>  

                            <p> <b>A little bit about me:</b> Over the past 7 years, I have been working creatively with brands and commercial clients as a freelance Photographer/Creator. I have worked on both campaigns and commissions in order to help clients push the boundaries of their creativity.</p>
                            <br/>
                            <p>As a photographer, I prioritise authenticity. I strive on story-telling and love capturing those images that represent those special moments. The majority of my time is spent with commercial photography and film-making, with the other part being weddings and more significant events. I love combining locations with human interaction, always striving to bring the best out of each commission.</p>

                            <br/> 

                            <p>If you are looking to move on any projects or briefs, no matter how big or small, then don’t hesitate to reach out and we can create something special.</p>
                            <p>Anyway…enough of the self importance - I’m just a Scottish guy ready to help you create magic 365 days!</p>
                            <br/>
                            <p>Drop me a message,</p>
                            <br/>
                            <p>Dr. Mosh</p>
                           
                        </div>


                </div>
        

        </div>  

         <div className='secondAbout'> 

                <div className='aboutImage'>  

                            <img src={img1} />
                </div> 

                <div className='aboutSideColumn'>  

                        {/* <div className='aboutIcons'>  

                           
                        </div>  */}

                 <div className='aboutWriteUp'>  
                        <div>
                            <p>Weddings| Matebeto | Kitchen Parties | <br/> Baby Showers | Chilanga Mulilo (Show fire) | <br/>
                            Cooperate Events | RoadShows | <br/> Musics Videos | Gradutations etc
                             </p> 

                         </div>
                           

                           
                    </div>


                </div> 
                <div className='disappearScroll'>

                </div>
        

        </div> 
            
        </div>

           



    </>
 
  )
}

export default About