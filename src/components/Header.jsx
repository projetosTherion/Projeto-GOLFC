import React from 'react';
import Logo from '../imagens/Logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="shadow-2xl  relative  bg-opacity-90  bg-white text-black pr-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className='bg-Azul-Gol md:size-[4%] p-[0.5%] flex items-center justify-center'>
          <img src={Logo} alt="Logo Gol" />
        </div>
        {/* Menu de navegação */}
        <nav className="flex items-center gap-x-2">
          <Link to={"/Login"}>
            <button className="bg-Azul-Gol ease-in-out duration-300 transition-colors hover:bg-transparent border-[1px] border-solid hover:border-[#0a1835] hover:text-Azul-Gol border-transparent text-white font-bold p-1  rounded-[8px] text-[110%]">
              Login
            </button>
          </Link>
          <Link to={"/Registro"}>
          <button className="bg-Azul-GolClaro ease-in-out duration-300 transition-colors hover:bg-transparent border-[1px] border-solid hover:border-[#1a3469] hover:text-Azul-GolClaro border-transparent text-white font-bold p-1  rounded-[8px] text-[110%]">
              Sign Up
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
