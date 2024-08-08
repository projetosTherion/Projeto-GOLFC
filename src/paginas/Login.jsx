import React from 'react';
import Logo from '../imagens/Logo.png'; // Importa a imagem da logo
import { FaGoogle, FaApple } from 'react-icons/fa'; // Importa os ícones do Google e da Apple

const Login = () => {
  return (
    <div className=' bg-Login bg-cover h-screen '>
  
  
    <div className="h-screen  flex flex-col items-center justify-center  relative">
      {/* Imagem acima do quadrado */}
       <img
        src={Logo}
        alt="Logo GOL"
        className="h-[17%] w-[10%]"
      />
      
      <div className="w-[386px] mt-4 h-[452px] bg-blue-950 bg-opacity-0 rounded-lg border border-gray-300 p-4 flex flex-col items-center backdrop-md">
        
        <p className="text-4xl text-white mb-6">Login</p>

        <p className="text-white text-base mb-1 text-left w-full">Email</p>

        <input
          type="text"
          placeholder="exemplo@golfc.com"
          className="w-[339px] h-[36px] bg-transparent border border-white rounded-md px-2 mb-4"
        />

        <p className="text-white text-base mb-1 text-left w-full">Senha</p>
    
        <input
          type="password"
          placeholder="seugol"
          className="w-[339px] h-[36px] bg-transparent border border-white rounded-md px-2 mb-4"
        />
        
        {/* Checkbox "Lembre-se de mim" */}
        <div className="flex items-center justify-end w-full mb-4">
          <input
            type="checkbox"
            id="remember-me"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="remember-me" className="ml-2 text-white text-base">
            Lembre-se de mim
          </label>
        </div>
    
        <button
          className="w-[339px] h-[36px] bg-lime-600 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 mb-4"
        >
          Entrar
        </button>

        <a
          href="/esqueci-senha"
          className="text-white text-base mb-4 text-center w-full hover:underline"
        >
          Esqueceu sua senha?
        </a>
    
        <button
          className="w-[339px] h-[36px] bg-transparent border border-white text-white rounded-md mb-2 flex items-center justify-center hover:bg-white hover:text-blue-950 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
        >
          <FaGoogle className="mr-2" />
          Login com Google
        </button>
   
        <button
          className="w-[339px] h-[36px] bg-transparent border border-white text-white rounded-md mb-2 flex items-center justify-center hover:bg-white hover:text-blue-950 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
        >
          <FaApple className="mr-2" />
          Login com iOS
        </button>
      </div>
    </div></div>
  );
};

export default Login;