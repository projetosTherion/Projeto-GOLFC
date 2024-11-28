import React, { useState, useEffect } from 'react';
import Logo from '../imagens/Logo.png'
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <div className=' w-[100%] bg-Azul-Gol'>
      <div className='flex justify-between md:flex-row flex-col items-center px-[4%]'>
        <img src={Logo} alt="" className='w-[20%] md:self-auto self-center h-[20%] my-4 md:w-[5%] md:mt-[2%] ' />
        <div className='w-[70%] self-center md:self-auto flex md:flex-row flex-col text-center justify-center md:justify-between text-nowrap md:w-[40%]'>
          {/*trocar as rotas para as suas repectivas paginas*/}

          <Link to={"/Registro"}>
            <button className='relative group'>
              <span className='text-white text-[90%] text-center'>Ajuda</span>
              <div className='absolute bottom-0 w-0 group-hover:w-full ease-in-out duration-300 transition-all bg-white h-[1px]'/>
            </button>
          </Link>
          <Link to={"/Registro"}>
            <button className='relative group'>
              <span className='text-white text-[90%]'>Indicar Amigos</span>
              <div className='absolute bottom-0 w-0 group-hover:w-full ease-in-out duration-300 transition-all bg-white h-[1px]'/>
            </button>
          </Link>
          <Link to={"/Registro"}>
            <button className='relative group'>
              <span className='text-white text-[90%]'>Compra Golcoins</span>
              <div className='absolute bottom-0 w-0 group-hover:w-full ease-in-out duration-300 transition-all bg-white h-[1px]'/>
            </button>
          </Link>
          <Link to={"/Registro"}>
            <button className='relative group'>
              <span className='text-white text-[90%]'>Códigos Promocionais</span>
              <div className='absolute bottom-0 w-0 group-hover:w-full ease-in-out duration-300 transition-all bg-white h-[1px]'/>
            </button>
          </Link>

        </div>
        <div className='text-white w-[45%] md:w-[15%] text-center self-center md:self-auto text-[90%] md:my-0 my-2'>
          Redes Sociais
          <div className='flex pt-1 mb-3 md:my-0 justify-around w-[100%] md:justify-between md:w-[100%]'>
            <Link to={"/Registro"}>
              <FaFacebook 
              className='ease-in-out duration-300 transition-colors hover:fill-blue-700 fill-white'
              size={20} />
            </Link>
            <Link to={"/Registro"}>
              <FaInstagram 
              className='ease-in-out duration-300 transition-colors hover:fill-pink-500 fill-white'
              size={20} />
            </Link>
            <Link to={"/Registro"}>
              <FaTiktok 
              className='ease-in-out duration-300 transition-colors hover:fill-black fill-white'
              size={20} />
            </Link>
            <Link to={"/Registro"}>
              <FaYoutube 
              className='ease-in-out duration-300 transition-colors hover:fill-red-600 fill-white'
              size={20} />
            </Link>
            <Link to={"/Registro"}>
              <FaLinkedin 
              className='ease-in-out duration-300 transition-colors hover:fill-blue-900 fill-white'
              size={20} />
            </Link>
          </div>
        </div>

      </div>
      <div className="border h-px w-screen md:w-[90%] md:ml-[5%]  justify-center bg-white"></div>
      <div className='bg-Azul-Gol  flex w-full flex-col items-center pb-3 pt-2 md:flexr-row  justify-center'>
        <div className='flex w-[90%] text-gray-500 justify-between md:my-1 md:w-[30%]'>
          <Link to={"/Registro"}>
            <button className='group relative'>
              <span className='text-customResponsiveFooter '>Politica de Privacidade</span>
              <div className='absolute bottom-0 w-0 group-hover:w-full ease-in-out duration-300 transition-all bg-gray-500 h-[1px]'/>
            </button>
          </Link>  <Link to={"/Registro"}>
            <button className='group relative'>
              <span className='text-customResponsiveFooter'>Temos de Uso</span>
              <div className='absolute bottom-0 w-0 group-hover:w-full ease-in-out duration-300 transition-all bg-gray-500 h-[1px]'/>
            </button>
          </Link>  <Link to={"/Registro"}>
            <button className='group relative'>
              <span className='text-customResponsiveFooter'>Configurações de Cookies </span>
              <div className='absolute bottom-0 w-0 group-hover:w-full ease-in-out duration-300 transition-all bg-gray-500 h-[1px]'/>
            </button>
          </Link>
        </div>
        <div className='flex text-white text-customResponsiveFooter justify-center'>2024 GOLFCLTDA. Todos o direitos reservados.</div>
      </div>
    </div>
  );
};

export default Footer;
