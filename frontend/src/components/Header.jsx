import React from 'react';
import Logo from '../imagens/Logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="shadow-2xl relative bg-opacity-90 bg-white text-black">
      <div className="flex justify-between">
        {/* Logo */}
        <div className='bg-Azul-Gol w-[16%] md:w-[10%]'>
          <img src={Logo} alt="Logo Gol" className='ml-[10%] w-[75%] mt-[10%] md:mt-[5%] md:w-[60%] md:h-[87%]' />
        </div>
        {/* Menu de navegação */}
        <nav className="flex flex-row justify-between items-center gap-7">
          <Link to={"/Login"}>
            <button className="bg-Azul-Gol ease-in-out duration-300 transition-colors hover:bg-Azul-GolClaro text-white font-bold p-2 rounded-md mx-auto">
              <span className='md:text-lg'>Login</span>
            </button>
          </Link>
          <Link to={"/Registro"} className="bg-Azul-GolClaro ease-in-out duration-300 transition-colors hover:bg-Azul-Gol mr-7 text-white font-bold p-3 rounded-md mx-auto">
            <span className='md:text-lg'>Sign Up</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
