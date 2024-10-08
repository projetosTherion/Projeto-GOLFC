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
           <img src={pc} className='w-[50%] h-[40%]  '  />
      <div classname='flex '>
        
        {Object.values(texts).map((item, index) => (
          <div key={index} className=' border flex  flex-col mt-[2%] bg-gradient-to-b from-Azul-GolClaro-50 via-Azul-GolClaro to-Azul-Gol   w-[96%] h-[17%]  border-Verde-Gol rounded-xl'>
            <div className='flex justify-start font-tuskerGrotesk text-Verde-Gol text-2xl  '>
            <img src={item.img} className='mt-2 text-xl h-[98%] mx-2' alt='verificado'/>
              <div>{item.title}</div>
            </div>
            <div className='flex justify-start font-Carbona mt-2  mx-3 text-white  text-xl  '>
             
            {item.content}
             
            </div>
            
          </div>
        ))}

       <Link to={"/Login"}>
        <button className="bg-gradient-to-b from-Verde-Gol to-verde-gol-escuro font-Carbona p-1 text-white mt-[3%] ml-[32%] justify-end w-[30%] rounded-md">
         REGISTRE-SE
        </button>
        </Link>
      </div >
      
 
    
     
       
    </div>
     
        </div>
  );
};

export default infoExtra;
