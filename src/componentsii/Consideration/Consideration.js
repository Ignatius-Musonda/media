import React from 'react'
import './Consideration.css'

function Consideration() {
  return (
    <div className='Consideration'> 

        <div  className='consHead'> 
        
        <h3>consideration points</h3>
         </div> 
            
        <div className='ConsidList'> 
        
                <ul className='ConsidListLi'> 
                        <li>- Above rates do not include venue charges, client is expected to pay any charges</li>
                        <li>- Sessions outside 20kms of Lusaka attract transport charge</li>
                        <li>- Payments can be made upon delivery of images</li>

                </ul>

         </div>

         <div className='consIcons'> 

            <i className="fab fa-facebook"></i>
             <i className="fab fa-twitter"></i>
            <i className="far fa-envelope"></i>
            <i className="fab fa-whatsapp"></i>
            <i className="fab fa-linkedin"></i>
             <i class="fas fa-plus-circle"></i>
               
         </div>

        

    </div>
  )
}

export default Consideration