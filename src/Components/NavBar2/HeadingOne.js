import React from 'react'  
import { BrowserRouter } from 'react-router-dom'
import {Routes,Route,Navigate,Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee,faBars } from '@fortawesome/free-solid-svg-icons'

// import './Heading.css'
import './HeadingOne.css'
// HeadingOne.css



function Heading1() {
    return ( <>
         
   <div  className='Heading1'>  

{/* Here */}
     <input type="checkbox" id="cancel-btn" /> 
   
      <div className="resTitle"> 
                  
                  <div className="barItem"> 
                      
                      <div className="NavItemi"><Link className='text-link' to="/">Mosh</Link> </div>  
                      {/* <h3 className="NavItemi">Mosh</h3> */}
                      <h3 className="NavItem">Photography |</h3> 
                      <h3 className="NavItem">Creative</h3>
          
                </div>
          
                <div className="barItem"> 
                    
                      {/* <label for="cancel-btn" className="btn cancel-btn"> <i class="fa-solid fa-bars">gg</i></label> */}
                      <label for="cancel-btn" className="btn cancel-btn"> <FontAwesomeIcon icon={faBars} /></label>
                  
                </div>
             
          
          </div>
   
         

  <div className="Wbarinit">    

      <div className="resBar" >  

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

      <div className='sideContainer'>

        <ul className="Sidelist">  

                                  <li className="ListItem"><Link className='text-link' to="/">HOME</Link> </li>
                                  <li className="ListItem"><Link className='text-link' to="/AboutUs">ABOUT</Link></li>                  
                                  <li className="ListItem"><Link className='text-link' to="/pricing">PRICING</Link></li>                                         
                                  <li className="ListItem"><Link className='text-link' to="/PortfolioTwo">PORTFORLIO</Link></li>  
                                  <li className="ListItem"><Link className='text-link' to="/Blog/1">BLOG</Link></li>                                                         
                                  <li className="ListItem"><Link className='text-link' to="/ContactP">CONTACT</Link></li>
                                  <li className="ListItem"><i class="fab fa-opencart"></i></li>
                      

              </ul> 

      </div>

        

    

</div> 
{/* Response Nav Bar ends here */}
        
              <div className="Wbar">  

                                

                <div className="WbarOne"> 

                <h3 className="NavItemi"><Link className='text-link' to="/">Mosh Media</Link></h3>


                </div> 

                <div className="WbarTwo"> 

                <ul className="TopList">  
                        
                            <li className="ListItem"><Link className='text-link' to="/">HOME</Link> </li>
                            <li className="ListItem"><Link className='text-link' to="/AboutUs">ABOUT</Link></li>
                            <li className="ListItem">PRICING 
                                          <ul className='Drop-down'> 
                                             <li><Link className='text-link' to="/pricing">WEDDING</Link></li>
                                             <li><Link className='text-link' to="/pricing">PHOTO SESSIONS</Link></li>

                                          </ul>
                            </li>
                            <li className="ListItem"> PORTFORLIO  

                                         <ul className='Drop-down'> 
                                             <li><Link className='text-link' to="/portfolio">WEDDING</Link></li>
                                             <li><Link className='text-link' to="/PortfolioTwo">OTHER</Link></li>

                                          </ul>
                            
                            </li>
                            <li className="ListItem"> <Link className='text-link' to="/Blog/1">BLOG</Link></li>
                            <li className="ListItem"> <Link className='text-link' to="/ContactP">CONTACT</Link></li>
                            <li className="ListItem"> <i class="fab fa-opencart"></i></li>
                            {/* component={Link} to={'/first'} */}
                     
                        

                </ul> 
                


                </div>  


                </div>  


                     


               



                </div>   


      
      </>   

    )
}

export default Heading1
