import React from 'react';
import Logo from '../imagens/Logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="  bg-white text-black h-[81px]">
      <div className="  flex justify-between container mx-auto py-4">
        {/* Logo */}
        <a href="/">
        <div className='bg-Azul-Gol absolute top-0 left-0 p-4 w-28 '> 
            
            <img src={Logo} alt="Logo GOL" className='  w-19 h-12  '  />
        
        </div>
         
        </a>
          
      
        {/* Menu de navegação */}
        <nav className="  flex flex-row justify-between  mt-3 gap-7">
          <a href="/" className="hover:text-gray-300">
            Início
          </a>
          <a href="/sobre" className="hover:text-gray-300">
            Sobre
          </a>
      <Link to={"/Login"}>
        <button className="bg-Azul-Gol hover:bg-Azul-GolClaro -mt-2 text-white font-bold py-2 px-4 rounded-md mx-auto">
          Login
        </button>
        </Link>
       
       
  

        </nav>
      </div>
    </header>
  );
};

export default Header;
