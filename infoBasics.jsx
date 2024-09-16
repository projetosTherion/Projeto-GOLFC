import React,{useState, useEffect } from 'react';
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
      <div className='font-tuskerGrotesk text-blue-950 text-customResponsiveTitulo mt-[5%] text-center mr-[20%]'>
        O MOMENTO <span className='text-Verde-Gol font-NorthZone'>MÁGICO</span> DO FUTEBOL <br />
        TRANSFORMADO EM <span className='text-Verde-Gol font-NorthZone'>MEMÓRIAS!</span>
        <br />
      </div>
      <div className='flex relative '>
      <div >
        {Object.values(texts).map((item, index) => (
          <div key={index}>
            <div className='flex justify-start font-tuskerGrotesk text-blue-950 ml-[7%] text-customResponsiveTitulo mt-[2%] '>
              <img src={item.img} className='  w-[10%]  h-[18%]' alt='verificado'/>
              <div className='mt-[1%]'>{item.title}</div>
            </div>
            <div className='flex justify-start font-Carbona text-blue-950  text-customResponsiveConteudo ml-[10%]'>
             
            {item.content}
             
            </div>
          </div>
        ))}
       
      </div >
      
       <img src={fundoColorido} className='w-[35%] h-[5%]  mt-[5%]'/>
       
     
       </div >
       <div className="md:flex   ml-[10%] mt-[15%] mr-[22%] p-4 bg-gray-300 rounded-lg w-[80%] h-[10%] ">
     <img src={qrCode} className=' md:w-[45%] xl:w-[20%] md:h-[45%] xl:h-[50%] ml-[2%] xl:mt-[1%] hidden md:block'/>
      
       <div className='flex flex-col h-[10%] overflow-auto  mx-[3%]'> 
       <span className='text-Azul-Gol mt-5 font-tuskerGrotesk text-customResponsiveTitulo'>O Processo Exclusivo do golfc</span>
       <span className='text-black text-customResponsiveConteudo font-Carbona'>Um código QR exclusivo é atribuído a cada bola, contendo todos os detalhes do gol e certificação Golfc. Este código só pode ser escaneado com a bola física, ou seja, a própria bola carrega sua certificação para visualizar uma versão digital que comprova sua autenticidade. </span>
       
       </div>
       <img src={plaquinha} className='md:h-[10%] flex justify-center h-[80%] md:ml-[0%] w-[50%] ml-[20%]  md:w-[20%] md:mt-[2%]  md:block'/>
        </div>
        <div>
       
        </div>
    </div>
  );
};

export default InfoBasics;
