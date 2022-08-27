import React from 'react'  
import {Routes,Route,Navigate,Link} from 'react-router-dom'
import './Heading.css'


function Heading() {
    return ( <>
         
   <div  className='Heading'>   


              <input type="checkbox" id="cancel-btn" /> 
   
      <div className="resTitle"> 
          
          <div className="barItem"> 
               
               <div className="NavItemi"><Link className='text-link' to="/">Mosh</Link> </div>  
               {/* <h3 className="NavItemi">Mosh</h3> */}
               <h3 className="NavItem">Photography |</h3> 
               <h3 className="NavItem">Creative</h3>
   
         </div>
   
         <div className="barItem"> 
            
              <label for="cancel-btn" className="btn cancel-btn"> <i className="fas fa-times"></i></label>
           
         </div>
   
          </div>
   
         

      <div className="Wbarinit">    

      <div className="resBar" >  

        <div className="barItem"> 
            
              <h3 className="NavItemi">Mosh</h3>
              <h3 className="NavItem">Photography |</h3> 
              <h3 className="NavItem">Creative</h3>

        </div>

        <div className="barItem"> 
           
             <label for="cancel-btn" className="btn cancel-btn"> <i className="fas fa-times"></i></label>
          
        </div>

      </div>

        <ul className="Sidelist">  
                
       
                 

                 

                                  <li className="ListItem"><Link className='text-link' to="/">HOME</Link> </li>
                                  <li className="ListItem"><Link className='text-link' to="/ContactP">ABOUT</Link></li>
                            
                                  <li><Link className='text-link' to="/pricing">Pricing</Link></li>
                                  {/* <li><Link className='text-link' to="pricing">PHOTO SESSIONS</Link></li> */}

                  
                                  <li><Link className='text-link' to="/portfolio">Portfolio</Link></li>
                                  {/* <li><Link className='text-link' to="portfolio">OTHER</Link></li> */}

                                  <li className="ListItem"> <Link className='text-link' to="/Blog/1">BLOG</Link></li>
                                  <li className="ListItem"> <Link className='text-link' to="/ContactP">CONTACT</Link></li>
                                  <li className="ListItem"> <i class="fab fa-opencart"></i></li>
                      

              </ul> 

        {/* <label for="" className="btn cancel-btn"> <i className="fas fa-times"></i></label>  HERE*/}

        </div> 


        
                    
                <div className="Wbar">  

                                

                <div className="WbarOne"> 

                <h3 className="NavItemi"><Link className='text-link' to="/">Mosh Media</Link></h3>


                </div> 

                <div className="WbarTwo"> 

                <ul className="TopList">  
                        
                        <li className="ListItem"><Link className='text-link' to="/">HOME</Link> </li>
                        <li className="ListItem"><Link className='text-link' to="/ContactP">ABOUT</Link></li>
                        <li className="ListItem">PRICING 
                                      <ul className='Drop-down'> 
                                         <li><Link className='text-link' to="/pricing">WEDDING</Link></li>
                                         <li><Link className='text-link' to="/pricing">PHOTO SESSIONS</Link></li>

                                      </ul>
                        </li>
                        <li className="ListItem"> PORTFORLIO  

                                     <ul className='Drop-down'> 
                                         <li><Link className='text-link' to="/portfolio">WEDDING</Link></li>
                                         <li><Link className='text-link' to="/portfolio">OTHER</Link></li>

                                      </ul>
                        
                        </li>
                        <li className="ListItem"> <Link className='text-link' to="/Blog/1">BLOG</Link></li>
                        <li className="ListItem"> <Link className='text-link' to="/ContactP">CONTACT</Link></li>
                        <li className="ListItem"> <i class="fab fa-opencart"></i></li>
                        {/* component={Link} to={'/first'} */}
                 
                    

            </ul> 
            
                


                </div>  

             

                </div>  
      

     
                

               <div className='Overhead'>  
                  
                          <h1> MOSH</h1>
                        <h1> PHOTOGRAPHY</h1>
                        {/* <Link className='text-link' to="/ContactP">CONTACT</Link> */}

               </div>

                     


               



                </div>   


      
      </>   

    )
}

export default Heading
