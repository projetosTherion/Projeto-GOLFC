import React from 'react';
import { Link } from 'react-router-dom';

function Senha() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-Registro">
      
      {/* Botão no canto superior esquerdo com margem ajustada */}
      <Link
        to={"/Login"}
        className="absolute flex items-center justify-center w-[20%] md:w-[7%] h-[46px] bg-green-50 text-black px-4 py-2 rounded-md shadow-md font-bold"
        style={{ top: '10%', left: '10%' }}
      >
        Voltar
      </Link>

      {/* Contêiner para ajustar a posição do conteúdo */}
      <div className="flex flex-col items-center justify-center transform ">
        
        <h1 className="text-4xl font-Carbona text-white mb-[4%]">
          Esqueceu sua senha?
        </h1>

        {/* Campos de entrada */}
        <div className="flex flex-col w-[100%] gap-4">
          <input
            type="text"
            placeholder="Número de celular/Email"
            className="w-[100%] h-[50%] bg-transparent border-2 border-white rounded-xl px-4 py-3 text-white placeholder-white"
          />
          <input
            type="text"
            placeholder="Confirmar"
            className="w-[100%] h-[50%] bg-transparent border-2 border-white rounded-xl px-4 py-3 text-white placeholder-white"
          />
        </div>

        {/* Texto e botão para cadastro */}
        <div className="flex items-center mt-6">
          <p className="text-white mr-2">Não tem uma conta?</p>
          <Link
            to="/Registro"
            className="bg-transparent text-white border-transparent px-4 py-2 rounded-md hover:text-white hover:underline transition"
          >
            Cadastre-se
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Senha;