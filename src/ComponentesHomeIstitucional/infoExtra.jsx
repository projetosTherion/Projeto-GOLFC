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
      img:  LogoRedonda,
      content: "Adquira seus GolCoins em nossa plataforma de forma rápida e segura.",
    },
    2: {
      title: "Compre GolCards",
      img:  LogoRedonda,
      content: "Utilize seus créditos para comprar GolBalls e aumentar suas chances de ganhar.",
    },
    3: {
      title: "Aguarde o Sorteio",
      img:  LogoRedonda,
      content: "Fique de olho nos sorteios e torça para ser o próximo vencedor!",
    },
  };

  return (
  
    <div  className='bg-FundoComFita mt-[10%]  bg-cover'>
    
      <div className='flex '>
           <img src={pc} className='w-[30%] mt-[5%] md:mt-[0%] h-[30%] md:w-[50%] md:-ml-[5%]   '  />
      <div classname='flex '>
        
        {Object.values(texts).map((item, index) => (
          <div key={index} className=' border flex  flex-col mt-[3%] bg-gradient-to-b from-Azul-GolClaro-50 via-Azul-GolClaro to-Azul-Gol w-[90%]  md:w-[96%] md:h-[17%]  border-Verde-Gol rounded-xl'>
            <div className='flex justify-start font-tuskerGrotesk  text-Verde-Gol text-customResponsiveTitulo  '>
            <img src={item.img} className='mt-[1%] ml-[3%] w-[7%] h-[5%] md:h-[98%] ' alt='verificado'/>
              <div className='ml-[2%] mt-[2%]'>{item.title}</div>
            </div>
            <div className='flex justify-center font-Carbona  ml-[12%] text-white  text-customResponsiveConteudo  '>
             
            {item.content}
             
            </div>
            
          </div>
        ))}

       <Link to={"/Login"}>
        <button className="bg-gradient-to-b mb-[3%] text-customResponsiveConteudo w-[60%] from-Verde-Gol to-verde-gol-escuro font-Carbona ml-[20%] p-1 text-white mt-[3%]  md:ml-[32%] md:justify-end md:w-[30%] rounded-md">
         REGISTRE-SE
        </button>
        </Link>
      </div >
      
 
    
     
       
    </div>
     
        </div>
  );
};

export default infoExtra;
