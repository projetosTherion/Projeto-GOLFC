import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Frame1 from'../imagens/Frame 4808 (2).svg'
import Frame2 from'../imagens/Frame 4827 (5).jpg'
import Frame3 from'../imagens/Frame 4828 (2).jpg'

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

  const CustomDot = ({ onClick, ...rest }) => {
    const {
      active,
    } = rest;
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <button
        className={`${active ? "bg-white" : "bg-transparent"}
        w-[5%] h-[4px] md:size-[1.6vw] border-[1px] border-solid border-gray-500 md:border-white ease-in-out duration-300
        transition-colors rounded-full mx-[0.5%] mb-[2%]  md:mx-2  md:mb-9`}
        onClick={() => onClick()}
      />
    );
  };

  return (
    <div>
      <div className='flex justify-center w-screen h-screen'>
        <Carousel
         infinite={true}
         autoPlay={true}
        autoPlaySpeed={3000}
        renderDotsOutside={false}
        customDot={<CustomDot/>}
        className=' md:w-screen h-screen '
        partialVisible={true}
        draggable={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          responsive={responsive}
          showDots={true}
       >
          
          <img src={Frame2} alt="" className='w-screen h-auto' />
          <img src={Frame1} alt="" className='w-screen h-auto' />
          <img src={Frame3} alt=""  className='w-screen h-auto' />
          
    </Carousel>
    
      </div>
      </div>

);
};

export default CarouselHome;
