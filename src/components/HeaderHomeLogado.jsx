import React, {useState} from 'react';
import Logo from '../imagens/Logo.png'
import LogoRedonda from "../imagens/logo 17 2.svg"
import { Link } from 'react-router-dom';
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FaFacebook, FaInstagram, FaYoutube,FaLinkedin } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const HeaderHomeLogado = () => {
    const [nav, setNav]= useState(true)
    const handleNav=()=>{
        setNav(!nav)
    }
  return (
    <div className='bg-transparent bg-opacity-55 flex justify-between '>
   <div className='flex w-[50%]'>   
     <img src={Logo} alt="Logo Gol" className='md:ml-[2%] ml-[2%] md:mt-[2%] mt-[1%] mr-[1%] w-[26%] h-[25 %] md:md:w-[10%] md:h-[75%] ' />
   
        <div className=' md:flex hidden  justify-between md:w-[10%] md:mr-[4%] md:mt-[4.4%] md:ml-[8%]  text-white'> 
         <FaFacebook size={14} />
         <FaInstagram size={14}/>
         <FaLinkedin size={14}/>
         </div> 
        
   </div>
    
       
    <div className='text-Verde-Gol md:flex font-Carbona w-[40%] justify-between mr-[3%] mt-[1.5%] hidden '>

    <Link to="/">
        <div className='flex  hover:underline  '> <HiMiniMagnifyingGlass size={20} />
          <div className='text-white  text-customResponsiveHeader  ml-[3%] -mt-[2.3%]'>
             pesquisar
          </div>    
        </div>
        </Link>

        <Link to="/">
        <div className='flex  hover:underline  justify-between '>  <IoCartOutline  size={20}/>
        <div className='text-white   text-customResponsiveHeader ml-[3%] -mt-[2%]'>carrinho</div>
        </div> </Link>

        <Link to="/">
        <div className='flex   hover:underline   justify-between'>< FaRegHeart size={20}/>
        <div className='text-white  text-customResponsiveHeader ml-[4%] -mt-[2%]'>favorito</div>
        </div> </Link>

        <Link to="/">
        <div className='flex  hover:underline  justify-between'> <AiOutlineQuestionCircle size={20}/>
        <div className='text-white   text-customResponsiveHeader ml-[3%] -mt-[2%] '>suporte</div></div>
      </Link>
         <div className='w-[10%]    md:w-[20%] md:h-[55%] flex -mt-[0.5%]  rounded-full border border-Verde-Gol  '>
         <img src={LogoRedonda} alt="Logo Gol" className=' md:w-[45%] md:mt-[1%] md:h-[85%] ' />
          <div className='mt-[4.5%]  text-customResponsiveHeader '> 100 </div>
</div>
<Link to="/" >
<div className=' rounded-full  flex justify-center border h-[65%]    '>     
  icon      
</div>
</Link>
    </div>

    <div className='mt-[2%] ml-[40%] md:ml-[0%]  md:hidden text-white' >
    <div onClick={handleNav} className='block md:items-center  '>
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
    </div>
    
 
</div>
<div>
<div className={!nav ? 'z-50 text-Verde-Gol h-full pt-[5%] uppercase bg-Azul-Gol fixed left-0 top-0 w-[60%] border-r-white ease-in-out duration-500  ':  'fixed left-[-15000%]'}>

<div className='flex justify-between ml-[5%] h-[6%] '><img src={Logo} alt="Logo Gol" className='w-[20%] h-[80%] ' />
<div className=' rounded-full  mr-[10%]  border  w-[15%] h-[70%]  '>
         
  icon
         </div></div>
        <div className='flex mt-[5%] ml-[5%]  mb-[5%] '> <HiMiniMagnifyingGlass size={20} />
          <div className='text-white  text-customResponsiveHeader  ml-[3%] '>
             pesquisar
          </div> 
        </div>
        <div className='flex mb-[5%]  border-b-white ml-[5%] '>  <IoCartOutline  size={20}/>
        <div className='text-white  text-customResponsiveHeader ml-[3%] '>carrinho</div>
        </div>
        <div className='flex mb-[5%] border-b-white  ml-[5%]  '>< FaRegHeart size={20}/>
        <div className='text-white   text-customResponsiveHeader ml-[4%] '>favorito</div>
        </div>
        <div className='flex mb-[5%] border-b-white ml-[5%] '> <AiOutlineQuestionCircle size={20}/>
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
