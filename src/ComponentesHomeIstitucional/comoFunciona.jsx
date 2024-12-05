import React from 'react';
import LogoBranca from '../imagens/logo 05 6.svg'
import Ficha from '../imagens/Frame 4797 (1).png'
import cartao from '../imagens/Frame 4795 (1).png'
import bola from '../imagens/Frame 4796.png'
const ComoFunciona = () => {
  const nome = {
    0: {
      title: "COMPRE creditos",
      img: Ficha,
      content: "Adquira Golcoins, moeda oficial da nossa plataforma, para ter acesso aos nossos sorteios."
    },
    1: {
      title: "Adquira seus GolCards",
      img: cartao,
      content: "Utilize seus coins para comprar GolCards, que são suas chaves para concorrer aos sorteios. Cada GolCard é único e representa uma chance de ganhar a bola do gol que você quer."
    },
    2: {
      title: "Concorra a Bola do Gol",
      img: bola,
      content: "Depois de adquirir seus GolCards, você está pronto para entrar nos sorteios. Cada sorteio é uma chance de ganhar prêmios exclusivos, incluindo bolas de futebol autografadas e outros itens colecionáveis."
    }
  }
 
 

  return (
    <div className='flex h-[80vh] md:h-[120vh] bg-Estadio bg-cover'>
      <div className="flex flex-col h-full md:h-screen items-center justify-center text-white">
        <div className='justify-center md:flex hidden'>
          <img src={LogoBranca} alt="Logo GOL" className='size-[5%] md:size-[100%]' />
        </div>
        <div className='font-tuskerGrotesk justify-center text-responsive md:flex hidden mt-[1%]'>
          COMO FUNCIONA?
        </div>
        <div className=' pb-0 mb-[2%] md:mb-0'>
          <div className="flex flex-col md:w-auto w-screen items-center justify-center">
            {Object.values(nome).map((item, index) => (
              <div key={index}  className=" border flex items-center w-[90%] md:w-[65%] mt-[2%] md:mt-[1%] h-[20vh] border-white rounded-[24px] p-2 md:p-6">
                <div className="max-md:min-w-[25%] max-md:max-w-[25%] md:min-w-auto md:w-[13%]">
                  <img src={item.img} alt="" className="w-full h-auto md:min-w-[50px]" />
                </div>
                <div className="flex flex-col md:w-full ml-[3%] max-md:max-h-[80%]">
                  <span className=" font-CarbonaBold italic font-extrabold uppercase text-[95%] md:text-[150%]">
                    {item.title}
                  </span>
                  <span className=" mt-2 font-Carbona overflow-y-auto text-[90%] md:text-[100%]">
                    {item.content}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComoFunciona;
