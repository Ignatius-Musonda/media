import React from 'react' 
import Form from '../../Components/Form/Form'
import NavBar2 from "../../Components/NavBar2/HeadingOne"
import './ContactP.css'

function ContactP() {
  return (
    <> 
        <div className='wholeNav'>
              <div className='responseNav'> 
               <NavBar2/>  

               </div>
          
         
             <div className='Map'> 
                    
                     <h1>Heading</h1>

             </div> 

             <div className='contDetails'>   

                  <item>
                        <h1> 
                            IF YOU NEED TO MESSAGE US, PLEASE FILL OUT THE FORM BELOW
                        </h1>
                  </item>

                   <item>
                       
                       <h2>LOCATION</h2> <br/>
                       <p>House No. 01/41 Linda, Lusaka, Zambia</p><br/> 
                       <p>Ph: +260971000000</p>
                  </item> 

                   <item> 

                       <h2>ALTERNATIVE DETAILS</h2> <br/>
                       <p>hello@nerdarr.com</p><br/> 
                       <p>Ph: +260971000900</p>
                      
                  </item>

             </div> 

             <Form/>

             </div>

    </>
  )
}

export default ContactP