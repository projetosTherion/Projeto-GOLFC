import React from 'react';
import Cards from '../componentesHomeLogado/Card.jsx';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarouselJogadores = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const cardData = Array.from({ length: 16 }, (_, index) => ({ id: index + 1 }));

  return (
    <div>
      <div className='flex justify-center'>
        <Carousel
          className='md:w-[80%] w-[90%]    h-[85%] md:h-[0%] mt-[3%]'
          centerMode={true}
          draggable={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          responsive={responsive}
        >
          {cardData.map((card) => (
            <Cards key={card.id} className='mr-[1%] md:ml-[0%]' />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselJogadores;
