import React from 'react';

import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
const Registro = () => {
 
    const texts = {
        0: {
          title: "Selecionar:",
         
          content: "Encontre o time do seu coração!",
        },
    
      };
  return (
    <div className=' bg-Registro bg-cover h-screen  flex justify-center  '>
 
  <div className="w-[386px]    justify-center h-[40%] mt-[5%] bg-blue-950 bg-opacity-20 rounded-lg border border-gray-300 p-4 flex flex-col  ">
   <div className='flex justify-center ml-[5%]' >
     <div className='rounded-full flex justify-center text-black  hover:bg-white hover:text-black border mt-2 w-[9%] mr-[10%] h-[90%]	 '>
    1
    </div>
    
    <div className='rounded-full flex  text-black  hover:bg-white hover:text-black justify-center border mt-2 mr-[10%] w-[9%] h-[90%]	 '>
    2
    </div> <div className='rounded-full flex justify-center border   text-white  hover:bg-white hover:text-black mr-[10%] mt-2 w-[9%] h-[90%]	 '>
    3
    </div>
    </div>
  



    <p className=" font-Carbona text-xl text-center text-white mt-4 mb-2">Qual o time do seu coração?</p> 
   {Object.values(texts).map((item, index) => (
       
        <div key={index}>
       
 
         <p className="text-gray-300 font-Carbona text-base mb-[1%] text-left w-full"> {item.title}</p>
 
         <input
           type="text"
           placeholder={item.content}
           className="w-[97%]  text-white mb-[4%] bg-Azul-Gol border border-white rounded-2xl px-2 "
         /> 
         
         
         </div>
      
        ))}
        <div className='flex  justify-end'>
        <Link to={"/"}>
        <div className='p-2'>
          <button
        className="  justify-center p-1 text-align: center h-[90%] flex bg-Verde-Gol text-white font-Carbona rounded-2xl hover:bg-verde-gol-escuro  focus:ring-2  "
      >
        <span className='mt-[6%] '>Próximo </span><span className='mt-[10%] text-white  ml-[3%] '><IoIosArrowDroprightCircle /></span>
      </button></div> </Link>
      
      </div>
      
      </div>
        
        </div>
  );
};

export default Registro;

