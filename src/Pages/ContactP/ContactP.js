import React,{useState,useMemo} from 'react' 
import Form from '../../Components/Form/Form'
import NavBar2 from "../../Components/NavBar2/HeadingOne"
import './ContactP.css' 
// import {GoogleMap,withScriptjs, withGoogleMap,Marker,InfoWindow} from "react-google-maps"; 
import { GoogleMap, useJsApiLoader, Marker, useLoadScript } from '@react-google-maps/api';



function ContactP() {  


const [selectAddres, setselectAddres] = useState(null);  
const Features = [
  { "coodinates": [12,12],
     "AreaID" : "Iggy",
     "province" : "Town", 
     "Descrip" : "01/41" 
  }
]; 

function Map(){  

  // return (
  // <Form 
  //  defaultZoom={10} 
  //  defaultCenter ={{lat:12, lng: 12}}
  //  >  
    {/* {Features.map((area,index) => (  
       <Marker  key={index} 
         position ={{lat: area.coodinates[1],
         lng: area.coodinates[0]}}
         onClick ={()=>{
           
          setselectAddres(area)
         }}

         icon = {{
             
            url: '/iggy.svg',
            scaledSize : new window.google.maps.Size(25,25)

         }}

         />
    )

    )}  */}
    {/* { selectAddres && (
      <InfoWindow  

      position ={{lat: selectAddres.coodinates[1],
      lng: selectAddres.coodinates[0]}} 
      onCloseClick = {()=>{setselectAddres(null)}}
      >
          <div> 
            <h3>{selectAddres.province}</h3>
            <p>{selectAddres.Descrip}</p>
          </div>
      </InfoWindow>

    )} */}
    
   {/* </Form>) */}

} 

const {isLoaded} = useLoadScript(
  // {googleMapsApiKey :"*"}
  {googleMapsApiKey :"AIzaSyDx17VVSaHPNyYBF6Cb9MkXbYa3SZdfVr0"}
)

const  centered = useMemo(()=>({lat:12, lng: 12}),[])

// const WrappedMap = withScriptjs(withGoogleMap(Map));

if(!isLoaded) return <div> Map Loading.. </div>

  return (   
    <> 
        <div className='wholeNav'>
              <div className='responseNav'> 
               <NavBar2/>  

               </div>
          
         
             <div className='Map'> 
                    
                     {/* <h1>Heading</h1> */}
                     {/* <WrappedMap
                      withGoogleMapURL ="" 
                      loadingElement ={<div style={{height : "100%"}}/>}
                      containerElement ={<div style={{height : "100%"}}/>}
                      mapElement ={<div style={{height : "100%"}}/>}

                      /> */} 

                      <GoogleMap  

                          zoom={10}
                          center ={centered}
                          mapContainerClassName ="mapConatainer"
                      
                      > 

                      <Marker position={{lat:12, lng: 12}} />

                      </GoogleMap>

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