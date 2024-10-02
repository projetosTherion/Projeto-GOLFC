import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../imagens/Duvidas.png'; // Ajuste o caminho da imagem conforme necessário
import Footer from '../components/Footer';

function Duvidas() {
  useEffect(() => {
    document.title = "Dúvidas Frequentes - GolFC";
  }, []);

  return (
    <div className='min-h-screen bg-blue-950 flex flex-col items-center'>
      {/* Container para a imagem e o botão */}
      <div className="relative w-full">
        {/* Botão Voltar */}
        <Link
          to="/"
          className="absolute top-80 left-20 ml-40 mt-20 text-black bg-white px-4 py-3 rounded-md font-bold shadow-md z-10"
        >
          &lt; Voltar
        </Link>

        {/* Imagem do logo */}
        <div className="absolute top-0 left-0 bg-black w-full h-32 opacity-35"></div>
        <img src={Logo} alt="Logo GolFC" className="mt-2 -ml-4 w-full mb-10" />
      </div>

      {/* Container para o título e retângulos */}
      <div className="flex flex-col items-center mt-4 mb-40">
        {/* Título */}
        <h1 className="text-white text-3xl font-tuskerGrotesk mb-4">
          DUVIDAS FREQUENTES
        </h1>

        {/* Perguntas e respostas expandidas */}
        {[...Array(5)].map((_, index) => (
          <ExpandingText key={index} />
        ))}

        <h2 className="text-white text-3xl font-tuskerGrotesk mt-40">
          Precisa de ajuda?
        </h2>
        <h2 className="text-white text-lg font-semibold mt-2">
          Preencha o formulário
        </h2>

        {/* Div separada para o formulário */}
        <div className="border-2 border-green-500 rounded-lg w-[200%] h-[500px] bg-transparent mt-4 flex flex-col items-center justify-center">
          <input
            type="text"
            placeholder="Nome"
            className="border border-green-500 rounded-md w-[80%] h-[40px] p-2 text-black mb-4"
          />
          <input
            type="text"
            placeholder="Sobrenome"
            className="border border-green-500 rounded-md w-[80%] h-[40px] p-2 text-black mb-4"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-green-500 rounded-md w-[80%] h-[40px] p-2 text-black mb-4"
          />
          <textarea
            placeholder="Dúvida"
            className="border border-green-500 rounded-md w-[80%] h-[100px] p-2 text-black mb-4"
          />
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md w-[80%]">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

const ExpandingText = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mt-6 mb-6 flex flex-col items-center w-full">
      <div className="w-full text-left flex items-center">
        <p className="text-white font-Carbona">Lorem Ipsum</p>
        <button onClick={toggleExpand} className="ml-2 text-white">
          {isExpanded ? '▲' : '▼'}
        </button>
      </div>
      <div className="border-t border-white w-full h-[0.5px] mt-2"></div>
      {isExpanded && (
        <div className="mt-2 p-4 rounded-lg border border-white bg-gray-800 w-full">
          {Array(5).fill('Lorem Ipsum').join(' ')}
        </div>
      )}
    </div>
  );
};

export default Duvidas;