import React, { useState } from 'react';

import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
const Registro = () => {
 
    const texts = {
        0: {
          title: "Nome:",
         
          content: "exemplo: João Gol da Silva",
        },
        1: {
          title: "Cpf, SSN ou NIF:",
         
          content: "00.000.000-00",
        },
        2: {
          title: "Email:",
          
          content: "exemplo@golfc.com",
        },
        3: {
          title: "Telefone:",
         
          content: "+55 (00) 0000-000",
        },
      };
  return (
    <div className=' bg-Registro bg-cover h-screen flex justify-center  '>
 
  <div className="w-[386px]    justify-center h-[65%] mt-[10%] bg-blue-950 bg-opacity-20 rounded-lg border border-gray-300 p-4 flex flex-col  ">
   <div className='flex justify-center ml-[5%]' >
     <div className='rounded-full flex justify-center text-white  hover:bg-white hover:text-black border mt-2 w-[9%] mr-[10%] h-[90%]	 '>
    1
    </div>
    
    <div className='rounded-full flex justify-center text-gray-400 border mt-2 mr-[10%] w-[9%] h-[90%]	 '>
    2
    </div> <div className='rounded-full flex justify-center text-gray-400 border  mr-[10%] mt-2 w-[9%] h-[90%]	 '>
    3
    </div>
    </div>
  



    <p className=" font-Carbona text-xl text-center text-white mt-4 mb-2">Crie sua conta</p> 
   {Object.values(texts).map((item, index) => (
       
        <div key={index}>
       
 
         <p className="text-gray-300 font-Carbona text-base mb-[1%] text-left w-full"> {item.title}</p>
 
         <input
           type="text"
           placeholder={item.content}
           className="w-[97%]  text-white mb-[4%] bg-transparent border border-white rounded-2xl px-2 "
         /> 
         
         
         </div>
      
        ))}
        <div className='flex  justify-end'>
        <Link to={"/Registro2"}>
        <div className='p-2'>
          <button
        className="  justify-center p-1 text-align: center h-[90%] flex bg-Verde-Gol text-gray-800 font-Carbona rounded-2xl hover:bg-verde-gol-escuro  focus:ring-2  hover:text-black"
      >
        <span className='mt-[6%] '>Próximo </span><span className='mt-[10%] text-black ml-[3%] '><IoIosArrowDroprightCircle /></span>
      </button></div> </Link>
      
      </div>
      
      </div>
        
        </div>
  );
};

export default Registro;

