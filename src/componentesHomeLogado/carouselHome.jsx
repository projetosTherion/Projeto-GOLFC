import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Frame1 from '../imagens/pixlr-image-generator-a2aff873-1e5b-4f6f-98a4-06278459a98e 1.webp';
import Frame2 from '../imagens/pixlr-image-generator-47e9f9d9-3e2d-4242-9c49-084391873b20 1.jpg';
import Frame3 from '../imagens/pixlr-image-generator-8ec3e110-1192-453f-8360-e8cb6a496229 1 (1).webp';
const CarouselHome = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
   
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
     
      
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,

      slidesToSlide: 1 // optional, default to 1.
    }
  };

 

  return (
    <div>
      
      <div className='flex justify-center'>
        <Carousel
         infinite={true}
         autoPlay={true}
        autoPlaySpeed={3000}
          className=' md:w-[90%]  rounded-xl'
          partialVisible={true}
          draggable={true}
     
           removeArrowOnDeviceType={["tablet", "mobile"]}
           responsive={responsive}
           showDots={true}
       >
          <img src={Frame1} alt="" className='md:mt-[3%]' />
          <img src={Frame2} alt="" className='md:mt-[3%]' />
          <img src={Frame3} alt=""  className='md:mt-[3%]' />
          
    </Carousel>
    
      </div>
      </div>

);
};

export default CarouselHome;
