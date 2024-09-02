import React from 'react';
import Logo from '../imagens/Logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="  relative  bg-opacity-90  bg-white text-black ">
      <div className="  flex justify-between   ">
        {/* Logo */}
        <div className='bg-Azul-Gol w-[16%] md:w-[10%]  '>
          <img src={Logo} alt="Logo Gol" className='ml-[10%] w-[75%] mt-[10%] md:mt-[5%] md:w-[60%] md:h-[87%] ' />
        </div>
         
      
      
          
      
        {/* Menu de navegação */}
        <nav className="  flex flex-row justify-between md:ml-[20%] gap-7 mt-[2%] ">
          <a href="/" className="hover:text-gray-300">
            Início
          </a>
          <a href="/sobre" className="hover:text-gray-300">
            Sobre
          </a>
      <Link to={"/Login"}>
        <button className="bg-Azul-Gol   hover:bg-Azul-GolClaro -mt-2  text-white font-bold py-2 px-4 rounded-md mx-auto">
          <span className='md:text-xl'>Login</span>
        </button>
        </Link>
       
       
  

        </nav>
      </div>
    </header>
  );
};

export default Header;
