import React, {useState} from 'react';
import './Virtue.css' 

import img1 from '../Images/Advice/Phylosophy.jpg' 

 


function Virtue() { 


  const [PhylState,setPhlState] = useState(true) 
  const [consist,setConsist] = useState(false) 
  const [creative,setCreative] = useState(false) 

  const phylHandler = ()=>{ 
            
       setPhlState(!PhylState); 
       if(consist || creative){ 
        setConsist(false); 
        setCreative(false)

       }
       
      console.log("phyl",PhylState)
      console.log("consist",consist) 
      console.log("creat",creative)
  } 

  const creativeHandler = ()=>{ 
            
    setCreative(!creative); 
    if(consist || PhylState){ 
     setPhlState(false); 
     setConsist(false)

    }
    
   console.log("phyl",PhylState)
   console.log("consist",consist) 
   console.log("creat",creative)
}

const consistHandler = ()=>{ 
            
  setConsist(!consist); 
  if(PhylState || creative){ 
   setPhlState(false); 
   setCreative(false)

  }
  
 console.log("phyl",PhylState)
 console.log("consist",consist) 
 console.log("creat",creative)
}


  



  return <div className='Virtue'>  

        <div className='Virtues'>  


        <div className={PhylState ? "PhylState Active": "PhylState"} onClick={phylHandler}>  

                    <div className='subHeading'> 
                              <div className='headTitle'> 
                                        <h3>OUR PHYLOSOPHY</h3> 
                              </div> 

                              <div className='plusSign'> 
                                        <h3>+</h3>
                              </div>

                              <div className='minusSign'> 
                                        <h3>-</h3>
                              </div>
                                        
                    </div>
        <div className='VText'>  

        <p>You can make photos on your iPad, your point and shoot, or any device with a lens. To me, photography is about making sense of the world. Photography is about finding appreciation in the small things in life. Photography is about walking slower, looking at things, and finding beauty in the ordinary and mundane.</p>

        </div>
       
        </div> 

        <div className={consist? "Consist Active": "Consist"} onClick={consistHandler}> 
        <div className='subHeading'>  
                  <div className='headTitle'> 
                            <h3>CONSISTENCY</h3> 
                  </div> 

                  <div className='plusSign'> 
                            <h3>+</h3>
                  </div>

                  <div className='minusSign'> 
                            <h3>-</h3>
                  </div>
                                    
                                    
        </div>
        
        <div className='VText' > 
           <p>You can make photos on your iPad, your point and shoot, or any device with a lens. To me, photography is about making sense of the world. Photography is about finding appreciation in the small things in life. Photography is about walking slower, looking at things, and finding beauty in the ordinary and mundane.</p>
        </div>

        
        </div>  

          <div className={creative? "Creative Active": "Creative"} onClick={creativeHandler}>  

                <div className='subHeading'> 
                            <div className='headTitle'> 
                                      <h3>CREATIVITY</h3> 
                            </div> 

                            <div className='plusSign'> 
                                    <h3>+</h3>
                            </div>

                            <div className='minusSign'> 
                                    <h3>-</h3>
                            </div>
                              
              </div>
                        
        <div className='VText' >  

           <p>You can make photos on your iPad, your point and shoot, or any device with a lens. To me, photography is about making sense of the world. Photography is about finding appreciation in the small things in life. Photography is about walking slower, looking at things, and finding beauty in the ordinary and mundane.</p>
        
        </div>


          </div> 

        </div>

      

         <div className='vitueImage'> 
                     <img src={img1} />

         </div>
      

  </div>;
}

export default Virtue;
