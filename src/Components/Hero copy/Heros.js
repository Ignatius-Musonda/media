import React , { useState, useEffect } from 'react'
// import './Heros.css'  
// import Slider from "react-slick";
import img1 from '../Images/slide-1.jpg' 
import img2 from '../Images/slide-2.jpg'  
import img3 from '../Images/slide-3.jpg' 
import img9 from '../Images/slide-4.jpg' 





function Heros() {   
 
  // const images = [img1, img2, img3, img9];
 
 
  // const NextArrow = ({ onClick }) => {
  //   return (
  //     <div className="arrow next" onClick={onClick}>
  //       <i class="fas fa-chevron-right" ></i>
      
  //     </div>
  //   );
  // };

  // const PrevArrow = ({ onClick }) => {
  //   return (
  //     <div className="arrow prev" onClick={onClick}>
  //         <i class="fas fa-chevron-left" ></i> 
       
  //     </div>
  //   );
  // }; 


 
 



 

  // const settings = {
  //   infinite: true,
  //   lazyLoad: true,
  //   speed: 300,
  //   slidesToShow: 3,
  //   centerMode: true,
  //   centerPadding: 0,
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  //   beforeChange: (current, next) => setImageIndex(next),
  // };
  


  
  



  // const [imageIndex, setImageIndex] = useState(0);
  // const length = images.length; 

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent(current === length - 1 ? 0 : current + 1);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }); 
  

  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // };
  

  // if (!Array.isArray(slides) || slides.length <= 0) {
  //   return null;
  // }


  return (
    <div className="App">
      {/* <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider> */}
    </div>
  );
}

export default Heros 

