import React, { useEffect, useState } from 'react'

import './Column.css'


import img1 from '../../Components/Images/slide-1.jpg' 
import img2 from '../../Components/Images/slide-2.jpg'  
import img3 from '../../Components/Images/slide-3.jpg' 

function Column(props) {   


 
 


  const nextPos = ()=>{ 

      // setCurrent(current === length - 1 ? 0 : current + 1);
  } 

  const prevPost = () =>{ 
       
    // setCurrent(current === 0 ? length - 1 : current - 1); 

  }

//   useEffect(()=>{

//  console.log(props.bIDProp,"Blog ID", nextState)

//   })


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent(current === length - 1 ? 0 : current + 1);
  //   }, 9000);
  //   return () => clearInterval(interval);
  // }); 


  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // };

  const handleRed = (e,postID) => { 
       console.log("post ID",postID);  
       setCurrent(+postID); 
       setPrevState(+postID == 1 ? Headings.length : +postID - 1); 
       
       setnextState(postID== Headings.length ? +1 : +postID+1);  

  }

  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };






  const Headings = [ 
    
      { 
        "BHeading" : "WHY IS WEDDING PHOTOGRAPHY SO EXPENSIVE?",
        "BID" : 1,
      },
      { 
        "BHeading" : "HOW I PREPARE FOR MY WEDDING DAY",
        
        "BID" : 2,
      },
      { 
        "BHeading" : "WHY YOU NEED A PRE-WEDDING SESSION",
        "BID" : 3,
      },
      { 
        "BHeading" : "TIPS FOR A BEAUTIFUL WEDDING",
        "BID" : 4,
      },
      { 
        "BHeading" : "FREE BRIDAL SHOWER PHOTO GIVEAWAY",
        "BID" : 5,
      },

  ]

  const Blog = [

    {
        "BID" : 1,
        "BHeading" : "WHY IS WEDDING PHOTOGRAPHY SO EXPENSIVE?",
        "BDate": <p>FEBRUARY 12, 2020</p>,
        "Image1" :img1,
        "BMiniHead" :<p>Considerations</p>, 
        "Image2" :img2,
        "BContent" :<p>I won’t bore with you the profit and loss details, but basically Wedding Photography Prices are high because its very expensive to operate as a Professional photographer. Cameras, Lenses, lighting, memory cards, computers, software, insurance, advertising, office space and lets not forget the good old Tax man (Zambia Revenue Authority). In reality I probably don’t actually earn any more than other skilled tradesman like a carpenters or electricians, its all very relative. I strive to keep my costs down as much as possible in order to keep competitive whilst still operating a full time professional photography practice. I may be a little more expensive that some other Zambian Photographers but I’d say that my work has a creative edge ( personal trumpet blow right there ).</p>,
        "BImage3": img3, 
        "BContent2" : <p>I appreciate that Wedding photography is a big chunk of your wedding budget, but look at the investment when compared to longevity of other wedding services. Your Rings and photographs are all that’s left after the cake has been eaten and the hire suits returned. Thanks for listening and good luck finding a photographer ( I hope its me ).</p>,
        "BCategory" :"Uncategorized",


    }, 
    
    {
       "BID" : 2,
      "BHeading" : "HOW I PREPARE FOR MY WEDDING DAY",
      "BDate": <p>FEBRUARY 12, 2020</p>,
      "Image1" :img1,
      "BMiniHead" :<p>Considerations</p>, 
      "Image2" :img2,
      "BContent" :<p>I won’t bore with you the profit and loss details, but basically Wedding Photography Prices are high because its very expensive to operate as a Professional photographer. Cameras, Lenses, lighting, memory cards, computers, software, insurance, advertising, office space and lets not forget the good old Tax man (Zambia Revenue Authority). In reality I probably don’t actually earn any more than other skilled tradesman like a carpenters or electricians, its all very relative. I strive to keep my costs down as much as possible in order to keep competitive whilst still operating a full time professional photography practice. I may be a little more expensive that some other Zambian Photographers but I’d say that my work has a creative edge ( personal trumpet blow right there ).</p>,
      "BImage3": img3, 
      "BContent2" : <p>I appreciate that Wedding photography is a big chunk of your wedding budget, but look at the investment when compared to longevity of other wedding services. Your Rings and photographs are all that’s left after the cake has been eaten and the hire suits returned. Thanks for listening and good luck finding a photographer ( I hope its me ).</p>,
      "BCategory" :"Uncategorized",


  },
  {
    "BID" : 3,
    "BHeading" : "WHY IS WEDDING PHOTOGRAPHY SO EXPENSIVE?",
    "BDate": <p>FEBRUARY 12, 2020</p>,
    "Image1" :img1,
    "BMiniHead" :<p>Considerations</p>, 
    "Image2" :img2,
    "BContent" :<p>I won’t bore with you the profit and loss details, but basically Wedding Photography Prices are high because its very expensive to operate as a Professional photographer. Cameras, Lenses, lighting, memory cards, computers, software, insurance, advertising, office space and lets not forget the good old Tax man (Zambia Revenue Authority). In reality I probably don’t actually earn any more than other skilled tradesman like a carpenters or electricians, its all very relative. I strive to keep my costs down as much as possible in order to keep competitive whilst still operating a full time professional photography practice. I may be a little more expensive that some other Zambian Photographers but I’d say that my work has a creative edge ( personal trumpet blow right there ).</p>,
    "BImage3": img3, 
    "BContent2" : <p>I appreciate that Wedding photography is a big chunk of your wedding budget, but look at the investment when compared to longevity of other wedding services. Your Rings and photographs are all that’s left after the cake has been eaten and the hire suits returned. Thanks for listening and good luck finding a photographer ( I hope its me ).</p>,
    "BCategory" :"Uncategorized",


}, 
{
  "BID" : 4,
  "BHeading" : "WHY YOU NEED A PRE-WEDDING SESSION",
  "BDate": <p>FEBRUARY 12, 2020</p>,
  "Image1" :img1,
  "BMiniHead" :<p>Considerations</p>, 
  "Image2" :img2,
  "BContent" :<p>I won’t bore with you the profit and loss details, but basically Wedding Photography Prices are high because its very expensive to operate as a Professional photographer. Cameras, Lenses, lighting, memory cards, computers, software, insurance, advertising, office space and lets not forget the good old Tax man (Zambia Revenue Authority). In reality I probably don’t actually earn any more than other skilled tradesman like a carpenters or electricians, its all very relative. I strive to keep my costs down as much as possible in order to keep competitive whilst still operating a full time professional photography practice. I may be a little more expensive that some other Zambian Photographers but I’d say that my work has a creative edge ( personal trumpet blow right there ).</p>,
  "BImage3": img3, 
  "BContent2" : <p>I appreciate that Wedding photography is a big chunk of your wedding budget, but look at the investment when compared to longevity of other wedding services. Your Rings and photographs are all that’s left after the cake has been eaten and the hire suits returned. Thanks for listening and good luck finding a photographer ( I hope its me ).</p>,
  "BCategory" :"Uncategorized",


}, 
{
   "BID" : 5,
  "BHeading" : "TIPS FOR A BEAUTIFUL WEDDING",
  "BDate": <p>FEBRUARY 12, 2020</p>,
  "Image1" :img1,
  "BMiniHead" :<p>Considerations</p>, 
  "Image2" :img2,
  "BContent" :<p>I won’t bore with you the profit and loss details, but basically Wedding Photography Prices are high because its very expensive to operate as a Professional photographer. Cameras, Lenses, lighting, memory cards, computers, software, insurance, advertising, office space and lets not forget the good old Tax man (Zambia Revenue Authority). In reality I probably don’t actually earn any more than other skilled tradesman like a carpenters or electricians, its all very relative. I strive to keep my costs down as much as possible in order to keep competitive whilst still operating a full time professional photography practice. I may be a little more expensive that some other Zambian Photographers but I’d say that my work has a creative edge ( personal trumpet blow right there ).</p>,
  "BImage3": img3, 
  "BContent2" : <p>I appreciate that Wedding photography is a big chunk of your wedding budget, but look at the investment when compared to longevity of other wedding services. Your Rings and photographs are all that’s left after the cake has been eaten and the hire suits returned. Thanks for listening and good luck finding a photographer ( I hope its me ).</p>,
  "BCategory" :"Uncategorized",


},
    
   
  ]

  const [current, setCurrent] = useState(+props.bIDProp);
  const [prevState,setPrevState] = useState(+props.bIDProp == 1 ? Headings.length : +props.bIDProp - 1); 

  const [nextState,setnextState] = useState(props.bIDProp == Headings.length ? 1 : +props.bIDProp + 1);  

  


  return (<>
    <div className='BColumns'>  
      
       {  Blog.map((item, index)=>{

         return( 
           
           <> 
          {item.BID == current &&
                    <div className='leftColumns' key={index}> 

                        <div className='columnHead'> 
                            <h1>{item.BHeading}</h1>
                        </div> 

                        <div className='columnHead'> 
                            <p>{item.BDate}</p>
                        </div> 

                        <div className='columnHead'> 
                            <img src={item.Image1} />
                        </div> 
                        <div className='columnHead'> 
                            <h3>{item.BMiniHead}</h3>
                        </div> 
                        <div className='columnHead'> 
                        <img src={item.Image2} />
                        </div>

                        <div className='columnHead'> 
                            <p>{item.BContent}</p>
                        </div> 

                        <div className='columnHead'> 
                        <img src={item.BImage3} />
                        </div> 

                        <div className='columnHead'> 
                            <p>{item.BContent2}</p>
                        </div> 
                    
                    </div> 
            

              }
           
              </>
            )


          })
                

           } 

    <div className='rightColumns' >   

         <div className='recentPost'>  

                    <h1>RECENT POSTS</h1> 
                    <br/>     

            

            


       {  Headings.map((items, index)=>{

         return( 
           
           <div key={index} className='BHeading' onClick={e =>handleRed(e,items.BID)}> 
                
                        <p> {items.BHeading}</p> 
                          
                        <br/>       
           
           </div>
         )


       })
            

           } 
    </div> 
 
             <div className='instaPost'>  

                <h3>INSTAGRAM</h3>
                <p>@GABRIELMWANZAPHOTO</p>

              </div>


           </div>
           

    </div> 

    <div className='NextPrev'>  
           
           <div className='prevPost'>  
             { Blog.map((item, index)=>{  
                return(
                  <>  
                    {(prevState==item.BID) && <div>
                      <div className='prevPImage' onClick={e =>handleRed(e,item.BID)}> 
                      <img src={item.Image2} />

                    </div>  

                    <div className='prevPText'  onClick={e =>handleRed(e,item.BID)}> 
                        <p>PREVIOUS POST</p>
                        <h3>{item.BHeading}</h3>

                    </div>  
                      
                      
                      </div>}
                  
                  
                  </>
                )

             }
                  
             )
            }
                  
 

           </div>
           <div className='nextPost'> 



                      { Blog.map((item, index)=>{  
                            return(
                              <>  
                                {(nextState==item.BID) && <div  onClick={e =>handleRed(e,item.BID)}>
                                  <div className='nextPText'> 
                                  <img src={item.Image2} />

                                </div>  

                                <div className='nextPImage'  onClick={e =>handleRed(e,item.BID)}> 
                                    <p>NEXT POST</p>
                                    <h3>{item.BHeading}</h3>

                                </div>  
                                  
                                  
                                  </div>}
                              
                              
                              </>
                            )

                        }
                              
                        )
                        } 
                            




                  {/* <div className='nextPText'> 

                       <p>NEXT POST</p>
                       <h3>FREE BRIDAL SHOWER PHOTOGRAPHY GIVEAWAY</h3>
                  

                  </div>  

                  <div className='nextPImage'> 
                        <img src={img2} />

                  </div>    */}


           </div>
    
    </div>

    </>
  )
}

export default Column
