import React from 'react';
import Cards from './Card.jsx';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaArrowLeft } from "react-icons/fa"; 
const CarouselJogadores = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 10,
      slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      partialVisibilityGutter: 30,
      slidesToSlide: 2 // optional, default to 1.
    }
  };

  const cardData = Array.from({ length: 16 }, (_, index) => ({ id: index + 1 }));

  return (
    <div>
       <span className='ml-[10%]  text-white  font-tuskerGrotesk'>GOLCARDS MAIS RECENTE</span>
       <div className="border h-px ml-[10%]  w-[80%] justify-center bg-white"></div>
    <div className='flex justify-center'>
        <Carousel
          className='md: w-[80%]   h-[95%] md:h-[0%] mt-[3%]'
          partialVisible={true}
      draggable={true}
     
      removeArrowOnDeviceType={["tablet", "mobile"]}
      responsive={responsive}
       
       
       >
          {cardData.map((card) => (
            <Cards key={card.id} className='mr-[1%]  md:ml-[0%]' />
          ))}
    </Carousel>
    
      </div>
      <div className=' mt-[5%] '>
    
      <div className="border h-px ml-[10%] w-[80%] justify-center bg-white"></div>
      <div className='flex justify-center'>
        <Carousel
          className='md: w-[80%]   h-[95%] md:h-[0%] mt-[3%]'
          partialVisible={true}
      draggable={true}
     
      removeArrowOnDeviceType={["tablet", "mobile"]}
      responsive={responsive}
       
       
       >
          {cardData.map((card) => (
            <Cards key={card.id} className='mr-[1%]  md:ml-[0%]' />
          ))}
    </Carousel>
    
      </div>
      </div>
      <div className='mt-[5%] '>
      <span className='ml-[10%]  text-white font-tuskerGrotesk'>GOLCARDS MAIS POPULARES</span>
      <div className="border h-px ml-[10%] w-[80%] justify-center bg-white"></div>
      <div className='flex justify-center'>
        <Carousel
          className='md: w-[80%]   h-[95%] md:h-[0%] mt-[3%]'
          partialVisible={true}
      draggable={true}
     
      removeArrowOnDeviceType={["tablet", "mobile"]}
      responsive={responsive}
       
       
       >
          {cardData.map((card) => (
            <Cards key={card.id} className='mr-[1%]  md:ml-[0%]' />
          ))}
    </Carousel>
    
      </div>
      </div>
      <div className=' mt-[5%] '>
      <span className=' ml-[10%] text-white font-tuskerGrotesk'>GOLCARDS MAIS POPULARES</span>
      <div className="border h-px ml-[10%] w-[80%] justify-center bg-white"></div>
      <div className='flex justify-center'>
        <Carousel
          className='md: w-[80%]   h-[95%] md:h-[0%] mt-[3%]'
          partialVisible={true}
      draggable={true}
     
      removeArrowOnDeviceType={["tablet", "mobile"]}
      responsive={responsive}
       
       
       >
          {cardData.map((card) => (
            <Cards key={card.id} className='mr-[1%]  md:ml-[0%]' />
          ))}
    </Carousel>
    
      </div>
      </div>
  </div>
);
};

export default CarouselJogadores;
