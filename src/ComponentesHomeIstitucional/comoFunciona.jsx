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
    <div className=' flex flex-col items-center justify-center bg-Estadio text-white bg-cover'>
      <div className='flex justify-center pt-[6%]'>
        <img src={LogoBranca} alt="Logo GOL" className='size-[20%] md:size-[100%] mb-2' />
      </div>
      <div className='flex font-tuskerGrotesk justify-center text-responsive'>
        COMO FUNCIONA?
      </div>
      <div className='pb-[15%]'>
        <div className="flex flex-col   items-center justify-center">
          {Object.values(nome).map((item, index) => (
            <div key={index}  className=" border flex items-center md:h-[15%] w-[90%] md:w-[60%] mt-[2%]  border-white rounded-[24px] p-4">
              <div className="w-[15%]">
                <img src={item.img} alt="" className="w-full h-auto min-w-[120px]" />
              </div>
              <div className="flex flex-col  ml-[3%]">
                <span className=" font-CarbonaBold italic font-extrabold uppercase text-responsive">
                  {item.title}
                </span>
                <span className=" mt-2 font-Carbona  text-customResponsive mr-8">
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

export default ComoFunciona;
