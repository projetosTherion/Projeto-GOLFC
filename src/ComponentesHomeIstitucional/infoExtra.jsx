import React from 'react';
import qrCode from '../imagens/Frame (1).png';
import LogoRedonda from '../imagens/logoRedonda.png';
import pc from '../imagens/Component 4.png';
import verificado from '../imagens/Frame.png';

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
    <div  className='bg-FundoComFita'>
    
      <div className='flex '>
           <img src={pc} className='w-[30%] h-[30%] mt-48 mx-10'  />
      <div classname='flex '>
        
        {Object.values(texts).map((item, index) => (
          <div key={index} className=' border flex  flex-col mt-14 bg-Azul-Gol  ml-[18%] w-[100%] h-[17%]  border-Verde-Gol rounded-md '>
            <div className='flex justify-start font-tuskerGrotesk text-Verde-Gol text-4xl  '>
            <img src={item.img} className='mt-2 h-[98%] mx-2' alt='verificado'/>
              <div>{item.title}</div>
            </div>
            <div className='flex justify-start font-Carbona mt-2 mx-3 text-white  text-xl  '>
             
            {item.content}
             
            </div>
            
          </div>
        ))}
       
      </div >
      
 
       
     
       </div >
      
    </div>
  );
};

export default infoExtra;
