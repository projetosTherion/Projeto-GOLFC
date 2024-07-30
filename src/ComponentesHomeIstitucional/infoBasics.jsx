import React from 'react';
import qrCode from '../imagens/Frame (1).png';
import fundoColorido from '../imagens/Component 2.png';
import plaquinha from '../imagens/Group 39751.png';
import verificado from '../imagens/Frame.png';

const InfoBasics = () => {
  const texts = {
    0: {
      title: "AUTENCIDADE",
      img: verificado,
      content: <span>Cada bola de gol é cuidadosamente identificada e autenticada por<br/> comissários responsáveis, garantindo sua originalidade. Uma certificação de autenticidade única é fornecida, incluindo detalhes exclusivos sobre o gol.</span>,
    },
    1: {
      title: "Assinatura da bola",
      img: verificado,
      content: "As bolas são assinadas pelo autor do gol, tornando cada peça um item de colecionável e verdadeiramente único. A bola assinada é autenticada e acompanhada do certificado, validando sua exclusividade.",
    },
    2: {
      title: "Receba em Casa",
      img: verificado,
      content: "Os usuários premiados recebem as bolas autografadas diretamente em casa, com toda a segurança e comodidade.",
    },
    3: {
      title: "GolCard",
      img: verificado,
      content: "Os GolCards, além de permitir concorrer as bolas assinadas, são armazenados em sua conta, acessíveis a qualquer momento. Colecionáveis que podem garantir prêmios exclusivos.",
    },
  };

  return (
    <div  className=''>
      <div className='font-tuskerGrotesk text-blue-950 text-4xl mt-9 text-center mr-[40%]'>
        O MOMENTO <span className='text-Verde-Gol'>MÁGICO</span> DO FUTEBOL <br />
        TRANSFORMADO EM <span className='text-Verde-Gol'>MEMÓRIAS!</span>
        <br />
      </div>
      <div className='flex relative '>
      <div >
        {Object.values(texts).map((item, index) => (
          <div key={index}>
            <div className='flex justify-start font-tuskerGrotesk text-blue-950 ml-[7%] text-4xl mt-20 '>
              <img src={item.img} className='-mt-2 h-[98%]' alt='verificado'/>
              <div>{item.title}</div>
            </div>
            <div className='flex justify-start font-Carbona text-blue-950  text-xl  ml-[10%]'>
             
            {item.content}
             
            </div>
          </div>
        ))}
       
      </div >
      
       <img src={fundoColorido} className='w-[40%] h-[45%]  mt-64'/>
       
     
       </div >
       <div className="flex  ml-[15%]  mr-[22%] bg-gray-300 rounded-md w-fit h-fit ">
       <img src={qrCode} className='w-[50%] h-[50%] mt-[3vw]'/>
       <div className='flex flex-col mx-[3%]'> 
        <span className='text-Azul-Gol mt-5 font-tuskerGrotesk text-Tamanho24'>O Processo Exclusivo do golfc</span>
       <span className='text-black text-xl font-Carbona '>Um código QR exclusivo é atribuído a cada bola, contendo todos os detalhes do gol e certificação Golfc. Este código só pode ser escaneado com a bola física, ou seja, a própria bola carrega sua certificação para visualizar uma versão digital que comprova sua autenticidade. </span>
       
       </div>
      <img src={plaquinha} className='mt-[1vw]'/>
        </div>
    </div>
  );
};

export default InfoBasics;
