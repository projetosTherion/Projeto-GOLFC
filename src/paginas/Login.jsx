import React, { useState } from 'react';
import Logo from '../imagens/Logo.png'; // Importa a imagem da logo
import { FaGoogle, FaApple } from 'react-icons/fa'; // Importa os ícones do Google e da Apple
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Link } from 'react-router-dom';
const Login = () => {
 
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className=' bg-Login bg-cover h-screen '>
  
  
    <div className="h-screen  flex flex-col items-center justify-center  relative">
      {/* Imagem acima do quadrado */}
      <div className=' ml-[22%] md:ml-[10%] justify-center'>
        <Link to={"/"}>
        <button className='ml-[25%]'>
          <img
        src={Logo}
        alt="Logo GOL"
        className="h-[25%] w-[30%]"
      />
        </button>
        </Link></div>
      
       
      
      <div className="w-[80%] md:w-[29%] mt-4 h-[452px] bg-blue-950 bg-opacity-20 rounded-lg border border-gray-300 p-4 flex flex-col  ">
        
        <p className=" font-Carbona text-xl justify-start text-white mb-6">Login</p>

        <p className="text-white font-Carbona text-base mb-1 text-left w-full">Email</p>

        <input
          type="text"
          placeholder="exemplo@golfc.com"
          className="w-[98%] h-[8%] text-white bg-transparent border border-white rounded-2xl px-2 "
        />

<div className="mb-4 mt-2 ">
      <p className="text-white text-base mb-1  font-Carbona text-left w-full">Senha</p>
      <div className="relative ">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="seugol"
          className="w-[98%]   text-white  bg-transparent border border-white rounded-2xl px-2 pr-10"
        />
        <button
          onClick={togglePasswordVisibility}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white"
        >
          {showPassword ? <VscEye className="h-7 w-5" /> : <VscEyeClosed className="h-5 w-5" />}
        </button>
      </div>
    </div>
        










        {/* Checkbox "Lembre-se de mim" */}
        <div className="flex items-center justify-start w-full mb-4">
          <input
        type="checkbox"
        id="remember-me"
        className="w-4 h-4 text-Azul-Gol mr-3 bg-Azul-Gol border-Azul-Gol rounded focus:ring-Azul-Gol"
      />
           <label htmlFor="remember-me" className="font-Carbona mr-2 text-white text-base">
           Mantenha-me conectado
          </label> 
          
        
        </div>
        <Link to={"/HomeLogada"}>
        <button
          className="w-[98%] h-[80%] bg-Verde-Gol text-white font-Carbona rounded-2xl hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 mb-4"
        >
          Entrar
        </button> 
        </Link>
        <Link to={"/RecuperaçãoSenha"}>
        <div className="text-white text-base mb-2 text-center w-full hover:underline">  Esqueceu sua senha? </div>
        </Link>
      
       
         <div className='text-Verde-Gol text-base mb-4 text-center w-full '>
        <Link to={"/Registro"}>
        <button >
        <span className='text-white'>Não possui uma conta? </span>
        <span className='hover:underline'>crie uma</span>
        </button>
        </Link>
</div>

        <button
          className="w-[98%] h-[36px] bg-transparent border border-white text-white rounded-2xl mb-2 flex items-center justify-center hover:bg-white hover:text-blue-950 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
        >
          <FaGoogle className="mr-2 font-Carbona" />
          Login com Google
        </button>
   
        <button
          className="w-[98%] font-Carbona h-[36px] bg-transparent border border-white text-white rounded-2xl mb-2 flex items-center justify-center hover:bg-white hover:text-blue-950 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
        >
          <FaApple className="mr-2" />
          Login com iOS
        </button>
      </div>
    </div></div>
  );
};

export default Login;