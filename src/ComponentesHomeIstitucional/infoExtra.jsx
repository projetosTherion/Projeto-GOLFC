import React from 'react';

import LogoRedonda from '../imagens/logoRedonda.png';
import pc from '../imagens/Component 4.png';
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
    <div>
    <div  className='bg-FundoComFita bg-cover'>
    
      <div className='flex '>
           <img src={pc} className='w-[30%] h-[30%] mt-48 mx-10'  />
      <div classname='flex '>
        
        {Object.values(texts).map((item, index) => (
          <div key={index} className=' border flex  flex-col mt-14 bg-Azul-Gol  ml-[15%] w-[96%] h-[20%]  border-Verde-Gol rounded-md '>
            <div className='flex justify-start font-tuskerGrotesk text-Verde-Gol text-4xl  '>
            <img src={item.img} className='mt-2 text-2xl h-[98%] mx-2' alt='verificado'/>
              <div>{item.title}</div>
            </div>
            <div className='flex justify-start font-Carbona mt-2  mx-3 text-white  text-xl  '>
             
            {item.content}
             
            </div>
            
          </div>
        ))}
       
      </div >
      
 
    
     
       </div >
      
    </div>
      <Link to={"/Login"}>
        <button className="bg-Azul-Gol hover:bg-Azul-GolClaro -mt-2 text-white font-bold py-2 px-4 rounded-md mx-auto">
          Login
        </button>
        </Link>
        </div>
  );
};

export default infoExtra;
