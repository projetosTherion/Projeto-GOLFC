import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../imagens/Duvidas.png'; // Ajuste o caminho da imagem conforme necessário
import Footer from '../components/Footer';
import Accordion from '../componentesGenericos/Accordion';
import Header from '../components/Header';
import { IoIosArrowBack } from "react-icons/io";

function Duvidas() {
  useEffect(() => {
    document.title = "Dúvidas Frequentes - GolFC";
  }, []);

  const faqs = [
    {
      question: "O que é um GolCard?",
      answer: (
        <>
          O GolCard é um item digital exclusivo que celebra gols marcados em partidas de futebol.<br />
          Cada GolCard representa um gol específico ou um item a ser sorteado, permitindo que você <br />
          participe de sorteios e ganhe prêmios incríveis, como bolas autografadas e outros itens de <br />
          colecionador.
        </>
      )
    },
    {
      question: "O que são os GolCoins?",
      answer: (
        <>
          GolCoins são a moeda digital utilizada dentro da plataforma GolFC. Com elas, os usuários <br />
          podem adquirir seus GolCards e concorrer a prêmios exclusivos.
        </>
      )
    },
    {
      question: "Como eu posso adquirir GolCoins?",
      answer: (
        <>
          Você pode adquirir GolCoins diretamente na plataforma, selecionando o pacote desejado<br />
          e finalizando o pagamento da maneira que preferir. (Comprar GolCoins)
        </>
      )
    },
    {
      question: "Como faço para acompanhar meus GolCards?",
      answer: (
        <>
          Seus GolCards estarão disponíveis na sua página de perfil, onde você poderá visualizar<br />
          todos os itens que adquiriu, incluindo as chances de sorteio ativas.
        </>
      )
    },
    {
      question: "Como funcionam os sorteios na plataforma?",
      answer: (
        <>
          Cada vez que você compra um GolCard, você ganha uma chance de participar dos sorteios<br />
          de prêmios que ele representa. O sorteio ocorre automaticamente nas datas programadas,<br />
          e o vencedor é notificado na plataforma e por nossa equipe.       
        </>
      )
    },
    {
      question: "Como recebo meu prêmio após ganhar um sorteio?",
      answer: (
        <>
          Se você for o vencedor, nossa equipe entrará em contato para confirmar os dados e<br />
          organizar a entrega do prêmio, seja ele um item físico ou uma experiência.          
        </>
      )
    }
    
    
  ];

  return (
    <div className='min-h-screen bg-Azul-Gol flex flex-col items-center'>
      <div className='w-full max-w-screen'>
        <Header />
      </div>
      <div className="relative w-full">
        <div className='relative'>
          <Link to="/Home">
            <button className="bg-white text-[#0A1835] absolute bottom-0 left-[5%] md:left-[10%] md:-translate-x-[50%] translate-y-1/2 py-1 px-2 font-Carbona rounded-2xl flex items-center">
              <IoIosArrowBack className="mb-0.5 hover:animate-pulse" size={20} />
              Voltar
            </button>
          </Link>
          <img src={Logo} alt="Logo GolFC" className="w-full mb-10" />
        </div>
      </div>

      <div className="flex flex-col items-center mt-4 mb-40">
        <h1 className="text-white text-3xl font-tuskerGrotesk mb-4">
          DUVIDAS FREQUENTES
        </h1>

        {/* Perguntas e respostas expandidas */}
        {faqs.map((faq, index) => (
          <ExpandingText key={index} question={faq.question} answer={faq.answer} />
        ))}

        <h2 className="text-white text-3xl font-tuskerGrotesk mt-40">
          Precisa de ajuda?
        </h2>
        <h2 className="text-white text-lg font-semibold mt-2">
          Preencha o formulário
        </h2>

        <div className="border-2 border-green-500 rounded-lg w-[100%] h-[500px] bg-transparent mt-4 flex flex-col items-center justify-center">
          <input type="text" placeholder="Nome" className="border border-green-500 rounded-md w-[80%] h-[40px] p-2 text-black mb-4" />
          <input type="text" placeholder="Sobrenome" className="border border-green-500 rounded-md w-[80%] h-[40px] p-2 text-black mb-4" />
          <input type="email" placeholder="Email" className="border border-green-500 rounded-md w-[80%] h-[40px] p-2 text-black mb-4" />
          <textarea placeholder="Dúvida" className="border border-green-500 rounded-md w-[80%] h-[100px] p-2 text-black mb-4" />
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md w-[80%]">
            Enviar
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const ExpandingText = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mt-6 mb-6 flex flex-col items-stretch w-full"> {/* Modificado aqui */}
      <div onClick={toggleExpand} className="w-full cursor-pointer text-left flex items-center">
        <p className="text-white font-Carbona">{question}</p>
        <button className="ml-2 text-white">
          {isExpanded ? '▲' : '▼'}
        </button>
      </div>
      <div className="border-t border-white w-full h-[0.5px] mt-2"></div>
      <Accordion isOpen={isExpanded}>
        <div className="mt-2 p-4 text-white font-Carbona w-full">
          {answer}
        </div>
      </Accordion>
    </div>
  );
};


export default Duvidas;