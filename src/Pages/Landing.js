import React from 'react' 
import Heros from '../Components/Hero copy/Heros'
// import './Landing.css' 
import Hero from '../Components/Hero/Hero'
import Heading from '../Components/NavBar/Heading'
import Quote from '../Components/Quote/Quote'
import Services from '../Components/Services/Services'
import Shoots from '../Components/Shoots/Shoots'
import Virtue from '../Components/Virtues/Virtue'
import Team from '../Components/ourTeam/Team' 
import SAdvice from '../Components/StoryAdvice/SAdvice'  
import Footer from '../Components/Footer/Footer'
// import Heros from '../Components/Hero copy/Heros'

function Landing() {
    return (
       <>  

       
       <Heading/>
       <Hero/>
       <Quote/> 
      
       
       <Shoots/> 
       <Services/>
       <Virtue/>
      
       <Team/>
       <SAdvice/> 
       <Footer/>
       {/* <Heros/> */}
       
       </>
    )
}

export default Landing
