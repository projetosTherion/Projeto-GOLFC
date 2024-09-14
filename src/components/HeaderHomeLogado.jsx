import React, { useState } from 'react';
import Logo from '../imagens/Logo.png'
import LogoRedonda from "../imagens/logo 17 2.svg"
import { Link } from 'react-router-dom';
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const HeaderHomeLogado = () => {
  const [nav, setNav] = useState(true)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div 
    className='bg-opacity-70 filter md:backdrop-blur-lg py-[0.6%] px-[3%] flex justify-between items-center'>
      <div className='flex w-[50%]'>
        <img src={Logo} alt="Logo Gol" className='mr-[7%] my-[1%] w-[26%] h-[25%] md:w-[10%] md:h-auto ' />

        <div className=' md:flex hidden  justify-between md:w-[15%] items-center  text-white'>
          <FaFacebook
            className='cursor-pointer hover:fill-black transition-colors ease-in-out duration-300'
            size={16} />
          <FaInstagram
            className='cursor-pointer hover:fill-black transition-colors ease-in-out duration-300'
            size={16} />
          <FaLinkedin
            className='cursor-pointer hover:fill-black transition-colors ease-in-out duration-300'
            size={16} />
        </div>

      </div>


      <div className='text-Verde-Gol md:flex font-Carbona w-[55%] lg:w-[50%] justify-between items-center hidden '>

        <Link to="/">
          <div className='flex  hover:underline items-center text-center'>
            <HiMiniMagnifyingGlass size={20} />
            <div className='text-white text-customResponsiveHeader font-Carbona ml-1'>
              Pesquisar
            </div>
          </div>
        </Link>

        <Link to="/Carrinho">
          <div className='flex  hover:underline  justify-between items-center'>  <IoCartOutline size={20} />
            <div className='text-white text-customResponsiveHeader ml-1'>Carrinho</div>
          </div>
        </Link>

        <Link to="/Favoritos">
          <div className='flex   hover:underline   justify-between items-center'>< FaRegHeart size={20} />
            <div className='text-white  text-customResponsiveHeader ml-1'>Favorito</div>
          </div> </Link>

        <Link to="/">
          <div className='flex  hover:underline  justify-between items-center'> 
            <AiOutlineQuestionCircle size={20} />
            <div className='text-white   text-customResponsiveHeader ml-1'>Suporte</div></div>
        </Link>
        <div className='w-[10%] md:w-[23%] md:h-[20%] flex items-center rounded-full border border-Verde-Gol p-[0.3%]'>
          <img src={LogoRedonda} alt="Logo Gol" className=' md:w-[20%] mx-2 md:h-[85%] ' />
          <div className='text-customResponsiveHeader font-CarbonaBold tracking-[0.3em]'> 100 </div>
        </div>
        <Link to="/" >
          <div className='w-12 h-12 rounded-full border-solid border-[1px] border-green-500'/>
        </Link>
      </div>

      <div className='mt-[2%] ml-[40%] md:ml-[0%]  md:hidden text-white' >
        <div onClick={handleNav} className='block md:items-center  '>
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>


      </div>
      <div>
        <div className={!nav ? 'z-50 text-Verde-Gol h-full pt-[5%] uppercase bg-Azul-Gol fixed left-0 top-0 w-[60%] border-r-white ease-in-out duration-500  ' : 'fixed left-[-15000%]'}>

          <div className='flex justify-between ml-[5%] h-[6%] '><img src={Logo} alt="Logo Gol" className='w-[20%] h-[80%] ' />
            <div className=' rounded-full  mr-[10%]  border  w-[15%] h-[70%]  '>

              icon
            </div></div>
          <div className='flex mt-[5%] ml-[5%]  mb-[5%] '> <HiMiniMagnifyingGlass size={20} />
            <div className='text-white  text-customResponsiveHeader  ml-[3%] '>
              pesquisar
            </div>
          </div>
          <Link to="/Carrinho"> 
          <div className='flex mb-[5%]  border-b-white ml-[5%] '>  <IoCartOutline size={20} />
            <div className='text-white  text-customResponsiveHeader ml-[3%] '>carrinho</div>
          </div></Link>
          <Link to="/Favoritos"> 
          <div className='flex mb-[5%] border-b-white  ml-[5%]  '>< FaRegHeart size={20} />
            <div className='text-white   text-customResponsiveHeader ml-[4%] '>favorito
              </div> 
              
             
          </div> </Link>
          <div className='flex mb-[5%] border-b-white ml-[5%] '> <AiOutlineQuestionCircle size={20} />
            <div className='text-white   text-customResponsiveHeader ml-[3%]  '>suporte</div></div>

          <div className='w-[40%] mb-[5%]   flex -mt-[1%] ml-[5%]   rounded-full border border-Verde-Gol  '>
            <img src={LogoRedonda} alt="Logo Gol" className='ml-[3%] ' />
            <div className=' items-center ml-[10%]'>100</div>



          </div>


        </div>
      </div>

    </div>




  );
};

export default HeaderHomeLogado;
