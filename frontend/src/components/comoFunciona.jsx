import React from 'react';
import LogoBranca from '../imagens/logo 05 6.svg'
import Ficha from '../imagens/icon.png'
import cartao from '../imagens/Frame 4795 (1).png'
import bola from '../imagens/Frame 4796.png'
const comoFunciona = () => {
  const nome = {
    0: {
      title: "COMPRE CRÉDITOS",
      img: Ficha,
      content: "Adquira Golcoins, moeda oficial da nossa plataforma, para ter acesso aos nossos sorteios."
    },
    1: {
      title: "Adquira seus GolCards",
      img: cartao,
      content: "Utilize seus coins para comprar GolCards, que são suas chaves para concorrer aos sorteios. Cada GolCard é único e representa uma chance de ganhar a bola do gol que você quer."
    },
    2: {
      title: "Concorra à Bola do Gol",
      img: bola,
      content: "Depois de adquirir seus GolCards, você está pronto para entrar nos sorteios. Cada sorteio é uma chance de ganhar prêmios exclusivos, incluindo bolas de futebol autografadas e outros itens colecionáveis."
    }
  }

  return (
    <div className=' flex flex-col  bg-Estadio text-white bg-cover '>
      <div className='flex justify-center'>
        <img src={LogoBranca} alt="Logo GOL" className=' h-15 w-17 mt-20' />
      </div>

      <div className='flex font-tuskerGrotesk justify-center  mt-5 mr-3  text-2xl'>
        COMO FUNCIONA?
      </div>
      <div className='pb-44'>
        <div className="flex flex-col   items-center justify-center">
          {Object.values(nome).map((item, index) => (
            <div key={index}  className=" border flex h-[15%]   w-[100vw] md:w-[60%] mt-10  border-white rounded-md p-4">
              <img src={item.img} alt="" className="h-24 mt-7  w-31" />
              <div className="flex flex-col  ml-20">
                <span className=" font-tuskerGrotesk uppercase text-responsive">
                  {item.title}
                </span>
                <span className=" mt-2 font-Carbona text-responsive mr-8">
                  {item.content}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default comoFunciona;
