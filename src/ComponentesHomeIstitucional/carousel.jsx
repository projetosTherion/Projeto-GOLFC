import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Frame1 from'../imagens/Frame 4808 (2).svg'
import Frame2 from'../imagens/Frame 4827 (5).jpg'
import Frame3 from'../imagens/Frame 4828 (1).svg'

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
          className=' md:w-[100%]  '
          partialVisible={true}
          draggable={true}
     
           removeArrowOnDeviceType={["tablet", "mobile"]}
           responsive={responsive}
           showDots={true}
       >
          
          <img src={Frame2} alt="" className='' />
          <img src={Frame1} alt="" className='' />
          <img src={Frame3} alt=""  className='' />
          
    </Carousel>
    
      </div>
      </div>

);
};

export default CarouselHome;
