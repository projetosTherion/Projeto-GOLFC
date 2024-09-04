import React from 'react';
import LogoBranca from '../imagens/logo 05 6.svg'
import Ficha from '../imagens/Frame 4797 (1).png'
import cartao from '../imagens/Frame 4795 (1).png'
import bola from '../imagens/Frame 4796.png'
const ComoFunciona = () => {
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
        <img src={LogoBranca} alt="Logo GOL" className='md:mr-[3%] h-[10%] w-[10%] mt-[5%]' />
      </div>

      <div className='flex font-tuskerGrotesk justify-center  mt-[2%] mr-[3%]  text-responsive'>
        COMO FUNCIONA?
      </div>
      <div className='pb-[20%]'>
        <div className="flex flex-col   items-center justify-center">
          {Object.values(nome).map((item, index) => (
            <div key={index}  className=" border flex md:h-[15%]   w-[90%] md:w-[60%] mt-[2%]  border-white rounded-md p-4">
             <img src={item.img} alt="" className="w-[20%] md:w-[10%] md:h-[10%] h-[30%]" />
              
              
              <div className="flex flex-col  ml-[3%]">
                <span className=" font-tuskerGrotesk uppercase text-responsive">
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
