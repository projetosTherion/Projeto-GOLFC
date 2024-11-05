import React from 'react';

import LogoRedonda from '../imagens/logoRedonda.png';
import pc from '../imagens/Component 4 (1).png';
import { Link } from 'react-router-dom';

const infoExtra = () => {
  const texts = {
    0: {
      title: "Cadastre-se",
      img: LogoRedonda,
      content: <span>Crie sua conta gratuitamente e faça parte da nossa comunidade de torcedores</span>,
    },
    1: {
      title: "Compre Golcoins",
      img: LogoRedonda,
      content: "Adquira seus GolCoins em nossa plataforma de forma rápida e segura.",
    },
    2: {
      title: "Compre GolCards",
      img: LogoRedonda,
      content: "Utilize seus créditos para comprar GolBalls e aumentar suas chances de ganhar.",
    },
    3: {
      title: "Aguarde o Sorteio",
      img: LogoRedonda,
      content: "Fique de olho nos sorteios e torça para ser o próximo vencedor!",
    },
  };

  return (
    <div className='bg-FundoComFita mt-[10%]  bg-cover'>
      <div className='flex'>
        <img src={pc} className='  w-[30%] mt-[5%] md:mt-[0%] h-[30%] md:w-[50%]   hidden md:block' />
        <div classname='flex md:flex-row flex-col'>
          {Object.values(texts).map((item, index) => (
            <div key={index} className='border-[3px] md:ml-[15%] flex justify-between mt-[3%] bg-gradient-to-b from-Azul-GolClaro-50 via-Azul-GolClaro to-Azul-Gol w-[90%] md:w-[70%] py-3 px-5  border-Verde-Gol rounded-xl'>
              <div className="flex justify-start w-[20%]">
                <img src={LogoRedonda} className='w-16 h-16' alt='verificado' />
              </div>
              <div className='flex flex-col justify-start font-CarbonaBold font-extrabold italic  text-Verde-Gol text-customResponsiveTitulo  '>
                <div>{item.title}</div>
                <div className='font-Carbona text-white  text-customResponsiveConteudo'>
                  {item.content}
                </div>
              </div>
            </div>
          ))}
          <Link to={"/Login"}>
            <button className="bg-gradient-to-b group md:ml-[35%] mb-[3%] relative text-customResponsiveConteudo w-[60%] from-Verde-Gol to-verde-gol-escuro p-1 text-white mt-[3%] md:justify-end font-CarbonaBold italic tracking-widest  md:w-[30%] rounded-[16px]">
              REGISTRE-SE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default infoExtra;
