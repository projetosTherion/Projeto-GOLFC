import React, {useState, useEffect } from 'react';
import Logo from '../imagens/Logo.png'
import { FaFacebook, FaInstagram, FaYoutube,FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

import { Link } from 'react-router-dom';
const Footer = () => {

  return (
   <div className=' w-[100%]    bg-Azul-Gol'> 
    <div className='flex justify-between'>
     
     <img src={Logo} alt=""  className=' w-[10%] ml-[5%] h-[20%] mb-[1%] md:w-[5%] md:ml-[4%] md:mt-[2%] '/>
    
    
    <div className='  md:mb-4 w-[70%] flex justify-between ml-[10%] md:w-[50%] md:mt-[3%] md:mr-[20%] '>
      {/*trocar as rotas para as suas repectivas paginas*/}
      
        <Link to={"/Registro"}>
        <button >
        <span className='text-white  text-center  md:ml-[0%]  text-customResponsiveFooter '>Ajuda</span>
     
        </button>
        </Link> 
        <Link to={"/Registro"}>
        <button >
        <span className='text-white ml-[5%]  md:ml-[0%] text-customResponsiveFooter'>Indicar Amigos</span>
     
        </button>
        </Link> 
        <Link to={"/Registro"}>
        <button >
        <span className='text-white ml-[5%] md:ml-[0%] text-customResponsiveFooter'>Compra Golcoins</span>
     
        </button>
        </Link> 
        <Link to={"/Registro"}>
        <button >
        <span className='text-white ml-[5%] md:ml-[0%] text-customResponsiveFooter'>Códigos Promocionais</span>
     
        </button>
        </Link> 

        </div>
        <div className='text-white w-[30%] md:w-[10%] text-center mt-[1%] text-customResponsiveFooter md:mr-[5%] md:mt-[3%]'>
        Redes Sociais
      <div className='flex ml-[28%] md:ml-[0%]  w-[20%]  md:mr-[0%] md:justify-between md:w-[100%]'>
      <Link to={"/Registro"}>
        <FaFacebook size={20}/>
        </Link>
        <Link to={"/Registro"}>
        <FaInstagram size={20} />
        </Link>
        <Link to={"/Registro"}>
        <FaTiktok size={20} />
        </Link>
        <Link to={"/Registro"}>
        <FaYoutube  size={20} /></Link>
        <Link to={"/Registro"}>
        <FaLinkedin  size={20} /></Link>
        </div>
       </div>

        </div>
              <div className="border h-px w-screen md:w-[90%] md:ml-[5%]  justify-center bg-white"></div>
              <div className='bg-Azul-Gol  justify-center'>
                <div className='flex w-[90%] ml-[3%] text-gray-500 justify-between md:ml-[30%] md:mt-[1%] md:w-[35%]'>
                <Link to={"/Registro"}>
        <button >
        <span className='text-customResponsiveFooter '>Politica de Privacidade</span>
     
        </button>
        </Link>  <Link to={"/Registro"}>
        <button >
        <span className='text-customResponsiveFooter'>Temos de Uso</span>
     
        </button>
        </Link>  <Link to={"/Registro"}>
        <button >
        <span className='text-customResponsiveFooter'>Configurações de Cookies </span>
     
        </button>
        </Link> 
       
                </div> 
                <div className='flex text-white text-customResponsiveFooter md:mr-[5%] justify-center'>2024 GOLFCLTDA. Todos o direitos reservados.</div>
                </div>
     </div>
  );
};

export default Footer;
