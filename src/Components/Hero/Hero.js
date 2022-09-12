import React , { useState, useEffect } from 'react'
import './Hero.css' 
// import img1 from '../Images/slide-1.jpg' 
// import img2 from '../Images/slide-2.jpg'  
// import img3 from '../Images/slide-3.jpg' 
// import img9 from '../Images/slide-4.jpg' 
import img1 from '../Images/Landing/BabyWelcome.jpg' 
import img2 from '../Images/Landing/LandChilanga.jpg' 
import img3 from '../Images/Landing/LandWed.jpg' 
import img4 from '../Images/Landing/MoshFaceUp.jpg' 
import img5 from '../Images/Landing/MoshWed2.jpg' 
import img6 from '../Images/Landing/ZitWed.jpg' 
import img7 from '../Images/Landing/MoshGrad.jpg' 





function Hero() {   
 

 
 
  const SliderData = [
    {
      image:
        img1
    },
    {
      image:
        img2
    },
    {
      image:
        img3
    },
    {
      image:
        img4
    },
    {
      image:
        img5
    },
    {
      image:
        img6
    },
    {
      image:
        img7
    },
    
  ];
  


  
  


  const length = SliderData.length;  

  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(1);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 9000);
    return () => clearInterval(interval);
  }); 

  useEffect(() => { 

      //  setPrev(prev+1)
       

       setPrev(current === 0 ? length - 1 : current - 1);
       console.log(prev);
       setNext(current === length - 1 ? 0 : current + 1);
    
  },[current]); 
  

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  

  // if (!Array.isArray(slides) || slides.length <= 0) {
  //   return null;
  // }


    return (
        <>    

        <div className='slider'>
              <div className='left-arrow' onClick={prevSlide} ><i class="fas fa-chevron-left" ></i> </div>
              <div className='right-arrow' onClick={nextSlide} ><i class="fas fa-chevron-right" ></i></div> 

             <div className='SldImg'>  


             <div className='scrolImgs'> 


                  {SliderData.map((slide, index) => {
                      return (
                       
                          // className={index === current ? 'slide active' : 'slide'}
                          // key={index}

                        <div className='slid' key={index}>  

                                {(index === prev) && (
                                    <img src={slide.image} alt='travel image' className='image' />

                                   
                                  )} 
                                
                        </div>
                      );
                    })
                    //end of Map2
                    } 

             </div> 

              <div className='scrolImgz'> 

                    {SliderData.map((slide, index) => {
                      return (
                     
                        <div className='slid' key={index}>  

                                {(index === current) && (
                                    <img src={slide.image} alt='travel image' className='image active' />

                               
                                  )} 
                                  

                        </div> 
                       
                      );
                    })
                    //end of Map2
                    } 
               
             </div> 

              <div className='scrolImgs'> 

                    {SliderData.map((slide, index) => {
                      return (
                            
                        <div className='slid' key={index}>  

                                {(index === next) && (
                                    <img src={slide.image} alt='travel image' className='image' />

                                 
                                  )} 
                                  

                        </div> 

                      );
                    })
                    //end of Map3
                    }
               
             </div>
                   
                  

                    


             </div>

         </div>
         

        
        
       
      
   


            
        </>
    )
}

export default Hero 

// const slideContainer = document.querySelector('.container');
// const slide = document.querySelector('.slides');
// const nextBtn = document.getElementById('next-btn');
// const prevBtn = document.getElementById('prev-btn');
// const interval = 9000;

// let slides = document.querySelectorAll('.slide');
// let index = 1;
// let slideId;

// const firstClone = slides[0].cloneNode(true);
// const lastClone = slides[slides.length - 1].cloneNode(true);

// firstClone.id = 'first-clone';
// lastClone.id = 'last-clone';

// slide.append(firstClone);
// slide.prepend(lastClone);

// const slideWidth = slides[index].clientWidth;

// slide.style.transform = `translateX(${-slideWidth * index}px)`;

// console.log(slides);

// const startSlide = () => {
//   slideId = setInterval(() => {
//     moveToNextSlide();
//   }, interval);
// };

// const getSlides = () => document.querySelectorAll('.slide');

// slide.addEventListener('transitionend', () => {
//   slides = getSlides();
//   if (slides[index].id === firstClone.id) {
//     slide.style.transition = 'none';
//     index = 1;
//     slide.style.transform = `translateX(${-slideWidth * index}px)`;
//   }

//   if (slides[index].id === lastClone.id) {
//     slide.style.transition = 'none';
//     index = slides.length - 2;
//     slide.style.transform = `translateX(${-slideWidth * index}px)`;
//   }
// });

// const moveToNextSlide = () => {
//   slides = getSlides();
//   if (index >= slides.length - 1) return;
//   index++;
//   slide.style.transition = '.7s ease-out';
//   slide.style.transform = `translateX(${-slideWidth * index}px)`;
// };

// const moveToPreviousSlide = () => {
//   if (index <= 0) return;
//   index--;
//   slide.style.transition = '.7s ease-out';
//   slide.style.transform = `translateX(${-slideWidth * index}px)`;
// };

// slideContainer.addEventListener('mouseenter', () => {
//   clearInterval(slideId);
// });

// slideContainer.addEventListener('mouseleave', startSlide);
// nextBtn.addEventListener('click', moveToNextSlide);
// prevBtn.addEventListener('click', moveToPreviousSlide);

// startSlide();


