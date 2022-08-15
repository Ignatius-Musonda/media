import React,{useState} from 'react'
import './Form.css'

function Form() { 

const [value, setValue] = useState(
    { 

        fullName : '',
        Email : "",
        Message : ""

    }
)


  return (
    <> 
    
       <div className='formContainer'> 

          <form className='contactForm'> 
                <div className='topEntry'> 

                        <input 
                  
                   className='formField'
                   placeholder='Full Name'
                   name='fullName' 
                   value={value.fullName}
                   
                
                /> 

                  <input 
                  
                   className='formField'
                   placeholder='Email'
                   name='Email'
                   value={value.Email}
                /> 

                </div>
                

            <div className='formMesssage'> 


                 <textarea 
                   className='formField'
                   placeholder='Message'
                   name='Message'
                   value={value.Message}
                   type="text"
                   rows={5}
                 > </textarea>
                  
            </div> 
          
          <div className='conButton'> 

          </div>
            <button 
               className='contBtn' 
               type='Submit'
            >
               SUBMIT
            </button>
               
              
         </form> 

       </div>
    
    </>
  )
}

export default Form