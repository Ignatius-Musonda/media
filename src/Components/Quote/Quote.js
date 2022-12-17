import React, { useState } from 'react';
import './Quote.css'


const Quotes = [ 

    {   id: 1, 

        text : <p>1In publishing and graphic design, Lorem ipsum is a placeholder <br/>
        text commonly used to demonstrate the visual form of <br/>
        a document or a typeface without relying on meaningful content. <br/>
        Lorem ipsum may be used as a placeholder before the final copy is<br/> 
   </p> , 

      Author: <h3>IGGY & SOFT</h3>

    },

    {   id: 2, 

        text: <p>2In publishing and graphic design, Lorem ipsum is a placeholder <br/>
        text commonly used to demonstrate the visual form of <br/>
        a document or a typeface without relying on meaningful content. <br/>
        Lorem ipsum may be used as a placeholder before the final copy is<br/> 
   </p> ,

       Author: <h3>IGGY & SOFT1</h3>
   
    }, 

    {   id: 3, 

        text: <p>3In publishing and graphic design, Lorem ipsum is a placeholder <br/>
        text commonly used to demonstrate the visual form of <br/>
        a document or a typeface without relying on meaningful content. <br/>
        Lorem ipsum may be used as a placeholder before the final copy is<br/> 
   </p> ,

       Author: <h3>IGGY & SOFT2</h3>
   
    }, 

    {   id: 4, 

        text: <p>4In publishing and graphic design, Lorem ipsum is a placeholder <br/>
        text commonly used to demonstrate the visual form of <br/>
        a document or a typeface without relying on meaningful content. <br/>
        Lorem ipsum may be used as a placeholder before the final copy is<br/> 
   </p> ,

       Author: <h3>IGGY & SOFT2</h3>
   
    }, 


] 

const length = Quotes.length;

function Quote() {  

    const [current, setCurrent] = useState(1);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      };
    
      const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
      };

  
  return (
   


    <>   

          <div className='QuoteOver'> 
             
          

            <div> 

            { 
              Quotes.map((item,index)=>{ 

                return(
                    <div>
                        { current=== index &&( <div className='Quote'>

                        
                                {item.text} ,
                              {item.Author} 
                        </div>
                            
                            
                            
                            )

                        }

                    </div> 
                )

              }
              
            
            )}  

            </div>
            

                 <div className='left-arrow' onClick={prevSlide} ><h3>PREV</h3> </div>
                 <div className='right-arrow' onClick={nextSlide} ><h3>NEXT</h3></div> 


    
    </div>   
    </>
  

  )}

export default Quote;
