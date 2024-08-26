import React from 'react';

import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
const Registro = () => {
 
    const texts = {
        0: {
        title: "CEP:",
       
        content: "00000-0",
      },  
      1: {
          title: "País:",
         
          content: "País em que o usuário reside",
        },
        2: {
          title: "Estado:",
         
          content: "Estado aonde você reside",
        },
        3: {
          title: "Cidade:",
          
          content: "exemplo@golfc.com",
        },
        4: {
          title: "Rua:",
         
          content: "Nome da rua onde o usuário mora",
        },
        5: {
            title: "Número:",
           
            content: "N 123",
          },
        6: {
            title: "Complemento:",
           
            content: "Informações adicionais sobre o endereço",
          },
      };
  return (
    <div className=' bg-Registro bg-cover h-screen  flex justify-center  '>
 
  <div className="w-[386px]    justify-center h-[93%] mt-[2%] bg-blue-950 bg-opacity-20 rounded-lg border border-gray-300 p-4 flex flex-col  ">
   <div className='flex justify-center mt-[3%] ml-[5%]' >
     <div className='rounded-full flex justify-center text-black  hover:bg-white hover:text-black border mt-2 w-[9%] mr-[10%] h-[90%]	 '>
    1
    </div>
    
    <div className='rounded-full flex text-white  hover:bg-white hover:text-black justify-center border mt-2 mr-[10%] w-[9%] h-[90%]	 '>
    2
    </div> <div className='rounded-full flex justify-center border  mr-[10%] mt-2 w-[9%] h-[90%]	 '>
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
           className="w-[97%]  text-white mb-[2%] bg-Azul-Gol border border-white rounded-2xl px-2 "
         /> 
         
         
         </div>
      
        ))}
        <div className='flex  justify-end'>
        <Link to={"/Registro3"}>
        <div className='p-2'>
          <button
        className="  justify-center text-white p-1 text-align: center h-[90%] flex bg-Verde-Gol  font-Carbona rounded-2xl hover:bg-verde-gol-escuro  focus:ring-2  "
      >
        <span className='mt-[2%] text-white '>Próximo </span><span className='mt-[9%]  text-white ml-[3%] '><IoIosArrowDroprightCircle /></span>
      </button></div> </Link>
      
      </div>
      
      </div>
        
        </div>
  );
};

export default Registro;

