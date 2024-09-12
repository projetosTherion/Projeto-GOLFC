import React from 'react';
import Logo from '../imagens/Logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="shadow-2xl  relative  bg-opacity-90  bg-white text-black ">
      <div className="  flex justify-between   ">
        {/* Logo */}
        <div className='bg-Azul-Gol w-[16%] md:w-[10%]  '>
          <img src={Logo} alt="Logo Gol" className='ml-[10%] w-[75%] mt-[10%] md:mt-[5%] md:w-[60%] md:h-[87%] ' />
        </div>
        {/* Menu de navegação */}
        <nav className="  flex flex-row justify-between items-center gap-7">
          <a href="/" className="relative group">
            Início
            <div className="absolute bottom-0 bg-Azul-Gol group-hover:w-full w-0 ease-in-out duration-300 transition-all h-[1px]  "/>
          </a>
          <a href="/sobre" className="relative group">
            Sobre
            <div className="absolute bottom-0 bg-Azul-Gol group-hover:w-full w-0 ease-in-out duration-300 transition-all h-[1px]  "/>
          </a>
      <Link to={"/Login"}>
        <button className="bg-Azul-Gol ease-in-out duration-300 transition-colors hover:bg-Azul-GolClaro  text-white font-bold p-2 mr-7 rounded-md mx-auto">
          <span className='md:text-xl'>Login</span>
        </button>
        </Link>
       
       
  

        </nav>
      </div>
    </header>
  );
};

export default Header;
