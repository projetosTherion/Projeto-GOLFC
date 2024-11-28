import React from 'react';
import Logo from '../imagens/Logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="shadow-2xl  relative  bg-opacity-90  bg-white text-black pr-2">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className='bg-Azul-Gol w-[16%] md:w-[10%]  '>
          <img src={Logo} alt="Logo Gol" className='ml-[10%] w-[75%] mt-[10%] md:mt-[5%] md:w-[60%] md:h-[87%] ' />
        </div>
        {/* Menu de navegação */}
        <nav className="flex items-center gap-x-2">
          <Link to={"/Login"}>
            <button className="bg-Azul-Gol ease-in-out duration-300 transition-colors hover:bg-Azul-GolClaro  text-white font-bold p-1  rounded-[8px]">
              <span className='text-[100%]'>Login</span>
            </button>
          </Link>
          <Link to={"/Registro"}>
            <button className="bg-Azul-GolClaro ease-in-out duration-300 transition-colors hover:bg-Azul-Gol text-white font-bold p-1 text-nowrap rounded-[8px]">
              <span className='text-[100%]'>Sign Up</span>
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
