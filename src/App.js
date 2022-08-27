
// import {Route,BrowserRouter as Router, Switch} from 'react-router-dom'; 
import {Routes,Route,Navigate} from 'react-router-dom'
import { HashRouter as Router } from 'react-router-dom';
// import img from 'media/src/Assets/Guat-10.jpeg'
// import img9 from '../Images/Guat-10.jpeg'

import img9 from '../src/Components/Images/Guat-10.jpeg' 
import Landing from '../src/Pages/Landing'
import Pricing from './Pages/Pricing/Pricing';
import Portfolio from './Pages/Portfolio/Portfolio'
import Blog from './Pages/Blog/Blog';
import ContactP from '../src/Pages/ContactP/ContactP'


function App() {
  return ( 
    
        <Router>

          <Routes>  

              <Route path='/'  element={<Landing/>} /> 
              <Route path='/Pricing' element={<Pricing/>} /> 
              <Route path='/Portfolio' element={<Portfolio/>} /> 
              <Route path='/Blog/:BID'  element={<Blog/>} /> 
              <Route path='/ContactP' element={<ContactP/>} />              

          </Routes> 

        </Router>
  
  );
}

export default App;
