import React from 'react';
import qrCode from '../imagens/Frame (1).png';
import fundoColorido from '../imagens/Component 2.png';
import plaquinha from '../imagens/Group 39751.png';
import { FaCheckCircle } from "react-icons/fa";
import FaixasGolFC from "../imagens/faixasGolFC.png";

const InfoBasics = () => {
  const texts = {
    0: {
      title: "Autenticidade",
      content: (
        <span>
          Cada bola de gol é cuidadosamente identificada e autenticada por<br />
          comissários responsáveis, garantindo sua originalidade. Uma certificação de autenticidade única é fornecida, incluindo detalhes exclusivos sobre o gol.
        </span>
      ),
    },
    1: {
      title: "Assinatura da bola",
      content: "As bolas são assinadas pelo autor do gol, tornando cada peça um item de colecionável e verdadeiramente único. A bola assinada é autenticada e acompanhada do certificado, validando sua exclusividade.",
    },
    2: {
      title: "Receba em Casa",
      content: "Os usuários premiados recebem as bolas autografadas diretamente em casa, com toda a segurança e comodidade.",
    },
    3: {
      title: "GolCard",
      content: "Os GolCards, além de permitir concorrer as bolas assinadas, são armazenados em sua conta, acessíveis a qualquer momento. Colecionáveis que podem garantir prêmios exclusivos.",
    },
  };

  const GradientIcon = () => (
    <svg width="0" height="0">
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#44D62D", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#247018", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <div className=''>
      <GradientIcon /> {/* Esse componente insere o gradiente no documento */}
      <div className='font-CarbonaBold text-blue-950 text-customResponsiveTitulo1 mt-[5%] text-center md:mr-[20%]'>
        O MOMENTO <span className='text-Verde-Gol font-NorthZone'>MÁGICO</span> DO FUTEBOL <br />
        TRANSFORMADO EM <span className='text-Verde-Gol font-NorthZone'>MEMÓRIAS!</span>
        <br />
      </div>
      <div className='flex relative'>
        <div>
          {Object.values(texts).map((item, index) => (
            <div key={index}>
              <div className='flex justify-start items-center font-tuskerGrotesk text-blue-950 px-[5%] text-customResponsiveTitulo mt-[2%]'>
                <FaCheckCircle style={{ fill: "url(#gradient1)", width: "5%", height: "auto", marginRight: "2%" }} />
                <div className='font-CarbonaBold uppercase italic font-extrabold bg-gradient-to-b text-transparent bg-clip-text from-Azul-GolClaro100 to-Azul-Gol from-30% text-[130%]'>
                  {item.title}
                </div>
              </div>
              <div className='flex justify-start font-Carbona px-[5%] text-blue-950 text-customResponsiveConteudo'>
                {item.content}
              </div>
            </div>
          ))}
        </div>

        <img src={fundoColorido} className='w-[35%] h-[5%] mt-[5%] md:inline hidden' />
      </div>
      
      <div className="w-screen flex justify-center relative mt-[2%]">
        <img src={FaixasGolFC} className='w-screen absolute left-0'/>
        <div className="md:flex items-center px-4 md:px-8 py-4 bg-[#CACED3] bg-opacity-50 
        w-[90%] md:w-[70%] h-[10%] border-[5px] border-solid border-[#0A1835] border-opacity-20 rounded-[16px]
        relative backdrop-filter backdrop-blur-sm mt-[5%] text-center">
          <img src={qrCode} className='md:w-[45%] md:h-[45%] xl:h-[50%] hidden md:block' />
          
          <div className='flex flex-col-reverse h-[10%] overflow-auto md:mx-[3%]'>
            <span className='text-Azul-Gol font-CarbonaBold font-extrabold bg-clip-text from-azul bg-gradient-to-b text-transparent from-40% from-[#3C2290] to-[#120A2A] text-customResponsiveTitulo uppercase italic '>O Processo Exclusivo do golfc</span>
            <span className='text-black text-customResponsiveConteudo font-Carbona mb-[5%]'>
              Um código QR exclusivo é atribuído a cada bola, contendo todos os detalhes do gol e certificação Golfc. Este código só pode ser escaneado com a bola física, ou seja, a própria bola carrega sua certificação para visualizar uma versão digital que comprova sua autenticidade.
            </span>
          </div>
          
          <img src={plaquinha} className='md:h-auto md:inline-flex hidden justify-center h-[80%] w-[50%] md:w-[50%]' />
        </div>
      </div>
    </div>
  );
};

export default InfoBasics;
