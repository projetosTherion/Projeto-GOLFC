import React, { useEffect } from 'react';
import HeaderLogado from '../components/HeaderHomeLogado'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import FundoLogo from '../imagens/Frame 4515 (1).jpg'
import LogoRedondaFundo from '../imagens/Frame 4751.jpg'
import Jogador from'../imagens/Frame-5111-_3_.webp'
import Footer from'../components/Footer'
import { FaRegHeart } from "react-icons/fa";
import Cards from '../componentesHomeLogado/Card.jsx';
const Favoritos = () => {
   useEffect(() => {
      document.title = "Favoritos - GolFC"
   }, [])
   
   const cardData = Array.from({ length: 16 }, (_, index) => ({ id: index + 1 }));
 return(

    <div className='   overflow-hidden bg-gradient-to-b from-Azul-Gol to-Azul-GolClaro100 '>


<div 
      className="md:absolute top-0 left-0 w-screen h-auto z-50">
      <HeaderLogado/>
      </div>
      <div className="relative">
      <img 
      className="w-screen max-w-screen h-auto"
      src={Jogador}/> 

 </div>
 <Link
      to="/Home">
      <button
      className="bg-white text-[#0A1835] absolute center-0 left-[5%] md:left-[10%] md:-translate-x-[80%]
      translate-y-2 py-1 px-2 font-CarbonaBold rounded-2xl flex items-center">
        <IoIosArrowBack
        className="mb-0.5 hover:animate-pulse"
        size={20}/>
        Voltar
      </button>
      </Link>

<div className=' flex justify-center mt-[6%] font-tuskerGrotesk text-white  '>

    FAVORITOS   < FaRegHeart size={20} className='ml-[0.5%]' />
</div>
<div className='grid md:grid-cols-4  grid-cols-2  ml-[10%]  mt-[3%] gap-4 w-[85%]'>
  {cardData.map((card) => (
    <Cards key={card.id} className='mr-[1%] md:ml-[0%]' />
  ))}
</div>



    <div className='flex justify-center mt-[5%]   h-[90%] '>
      <div className='bg-white w-[80%]  h-[100%] border rounded-xl border-gray-300'>
<span>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
</span>

      </div>
    </div>
   
    <div className='ml-[10%] mr-[10%] mt-[5%] mb-[10%] '>
    <div className='md:flex ml-[15%] md:ml-[0%] md:justify-between'>
      <img src={FundoLogo} alt="" className='   w-[80%] md:w-[45%] rounded-xl ' />
      <img src={LogoRedondaFundo} alt="" className='mt-[5%] md:mt-[0%] w-[80%] md:w-[45%] rounded-xl ' />
    </div>
    </div>
   

  <div><Footer/></div>
    </div>

 );
};

export default Favoritos ;