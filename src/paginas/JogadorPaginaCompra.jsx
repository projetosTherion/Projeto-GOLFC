import HeaderHomeLogado from "../components/HeaderHomeLogado";
import imagemCarrinho from "../imagens/imagemCarrinho.png";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";
import { IoMdAlarm } from "react-icons/io";
import LogoGol from "../imagens/logo 17 2.png";
import { AiOutlineTrophy } from "react-icons/ai";
import TrofeuGolSVG from "../imagens/trofeuGolFC.svg";
import AthleticoImg from "../imagens/Athlético Paranaense.png";
import BahiaImg from "../imagens/Bahia.png";
import { MdStadium } from "react-icons/md";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { AiOutlineMenu } from 'react-icons/ai'
import { MdOutlineQrCode } from "react-icons/md";
import ProdutosRelacionados from "../componentesPaginaCompra/ProdutosRelacionados";
import GolFCBlackImg from "../imagens/Frame 4515 (1).jpg";
import GolBallImg from "../imagens/Frame 4751.jpg"

export default function JogadorPaginaCompra() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
     
      
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,

      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const CustomDot = ({ onClick, ...rest }) => {
    const {
      active,
    } = rest;
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <button
        className={`${active ? "bg-white" : "bg-transparent"}
        w-[5%] h-[4px] md:size-[1.6vw] border-[1px] border-solid border-gray-500 md:border-white ease-in-out duration-300
        transition-colors rounded-full mx-[0.5%] mb-[2%]  md:mx-2  md:mb-9`}
        onClick={() => onClick()}
      />
    );
  };

  // Estados para os valores de dias, horas, minutos e segundos
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 12,
    minutes: 12,
    seconds: 12,
  });

  useEffect(() => {
    // Função para calcular o tempo restante e atualizar os estados
    const updateTimer = () => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        // Atualiza os segundos
        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;

          // Atualiza os minutos
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;

            // Atualiza as horas
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;

              // Atualiza os dias
              if (days > 0) {
                days -= 1;
              } else {
                days = 0;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    };
    
    const timerInterval = setInterval(updateTimer, 1000);
    
    return () => clearInterval(timerInterval);
  }, []);

  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if(ref.current !== null) {
      setHeight(ref.current.clientHeight);
    }
  }, [ref])

  return (
    <div className="w-full overflow-x-hidden max-w-screen min-h-screen bg-gradient-to-b from-Azul-Gol to-Azul-GolClaro-50">
      <div className="md:absolute top-0 left-0 w-full max-w-[100vw] h-auto z-50">
        <HeaderHomeLogado />
      </div>
      <div className="relative">
        <img className="w-screen max-w-screen h-auto" src={imagemCarrinho} />
        <Link to="/Home">
          <button
            className="bg-white text-[#0A1835] absolute bottom-0 left-[5%] md:left-[10%] md:-translate-x-[50%]
            translate-y-1/2 py-1 px-2 font-Carbona rounded-2xl flex items-center"
          >
            <IoIosArrowBack className="mb-0.5 hover:animate-pulse" size={20} />
            Voltar
          </button>
        </Link>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center my-8 md:mt-6 md:mb-12 text-center">
          <IoMdAlarm size={35} color="white" />
          <h1 className="text-white font-tuskerGrotesk uppercase ml-4 text-responsive">
            Tempo restante para participar
          </h1>
        </div>
        <div className="flex w-screen justify-center">
          {["Dias", "Horas", "Minutos", "Segundos"].map((label, index) => {
            const timeValue =
              index === 0
                ? timeLeft.days
                : index === 1
                ? timeLeft.hours
                : index === 2
                ? timeLeft.minutes
                : timeLeft.seconds;

            return (
              <div key={label} className="flex w-[25%] md:w-[15%] justify-center relative flex-col items-center">
                <h1
                  id={label}
                  className="text-[#44D62D] animate-fade-in transition-all ease-in-out duration-300 tracking-widest flex flex-col items-center font-tuskerGrotesk font-bold text-[300%] md:text-[350%] mb-2"
                  key={label}
                >
                  {timeValue}
                  <h1
                    className={`text-[#44D62D] tracking-normal font-Carbona font-light italic text-responsive`}
                    key={`${label}-sub`}
                  >
                    {label}
                  </h1>
                </h1>
                  {label !== "Dias" ? 
                  <div 
                  className="w-0.5 animate-get-height absolute left-0 h-full bg-gradient-to-b from-[#44D62D] to-Azul-Gol bottom-0"/>
                  :
                  null}
              </div>
            );
          })}
        </div>
        <div className="h-[1px] opacity-40 w-[75%] bg-white my-8"/>
        <div 
        ref={ref}
        className="flex md:flex-row md:items-start items-center flex-col w-[72%] px-2 mb-2 md:mb-10 gap-x-12">
          <div className="bg-white mb-8 md:mb-0 rounded-2xl w-full md:w-[45%]"
          style={{
            height: window.innerWidth > 768 ? height - 12 : "50vh"
          }}/>
          <div className="flex flex-col md:w-[55%] w-[125%]">
            <div className="flex p-3 mb-4 bg-black items-center justify-between text-center bg-opacity-25 rounded-2xl border-solid border border-[#44D62D]">
              <div className="flex">
                <img src={LogoGol} className="size-8 mr-2"/>
                <h1 className="tracking-widest font-CarbonaBold text-white font-bold relative text-[135%] md:text-responsive">350
                  <p className="font-Carbona font-light text-white text-[65%] md:text-[45%] ml-2 absolute tracking-normal left-[100%] top-1/2 -translate-y-1/2">golcoins</p>
                </h1>
              </div>
              <p className="text-white opacity-40 text-[65%] md:text-[80%] font-Carbona font-light">GOLCARD #0123456789</p>
            </div>
            <div className="flex flex-col py-4 px-4 md:px-8 bg-black bg-opacity-25 rounded-2xl border-solid border border-[#44D62D]">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <AiOutlineTrophy
                  size={22}
                  color="#44D62D"
                  className="mr-3"/>
                  <h5 className="font-Carbona text-nowrap text-white tracking-widest text-[95%]">Brasileirao Betano</h5>
                </div>
                <img
                src={TrofeuGolSVG}
                className="size-6"/>
              </div>
              <div className="flex justify-between items-center my-8">
                <div className="flex flex-col">
                  <p className="font-Carbona text-white text-[95%] md:text-[90%]">Autor do gol</p>
                  <h1 className="font-CarbonaBold text-white text-[110%] md:text-customResponsiveTitulo italic">MASTRIANI</h1>
                </div>
                <div className="flex w-[45%] justify-end">
                  <div className="rounded-full border-solid border w-14 h-14 flex items-center text-center justify-center border-[#44D62D]">
                    <h1 className="font-CarbonaBold text-[115%] md:text-customResponsive text-[#44D62D] italic">56`</h1>
                  </div>
                  <div className="flex flex-col ml-2 md:ml-4 py-2 min-w-[55%] md:min-w-[35%]">
                    <div className="flex justify-between text-center items-center">
                      <p className="font-Carbona text-white text-[80%] overflow-clip">Athletico</p>
                      <p className="font-Carbona text-[#44D62D] font-bold text-[80%]">1</p>
                    </div>
                    <div className="flex justify-between text-center items-center">
                      <p className="font-Carbona text-white text-[80%] overflow-clip">Bahia</p>
                      <p className="font-Carbona text-[#E0E0E0] font-bold text-[80%]">1</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center px-[3%] md:px-[10%] items-center">
                <h2 className="text-white font-tuskerGrotesk text-[100%] tracking-wide">PLACAR FINAL</h2>
                <div className="h-[1px] bg-white w-[60%]"/>
                <div className="flex justify-between  w-full mb-6 mt-3 items-center">
                  <img 
                  src={BahiaImg}
                  className="bg-white rounded-lg size-16"/>
                  <div className="flex gap-x-2 italic mx-6 text-[250%]">
                    <h1 className="text-white font-CarbonaBold">
                      1
                    </h1>
                    <h1 className="text-white opacity-40 font-CarbonaBold">
                      vs
                    </h1>
                    <h1 className="text-[#44D62D] font-CarbonaBold">
                      2
                    </h1>
                  </div>
                  <img 
                  src={AthleticoImg}
                  className="bg-white rounded-lg size-16"/>
                </div>
                <div className="flex items-center">
                  <MdStadium
                  size={22}
                  color="white"/>
                  <p className="font-Carbona ml-1 md:ml-3 text-white opacity-50 text-[80%] text-nowrap md:text-[100%]">Estádio Cícero Pompeu de Toledo - Morumbis</p>
                </div>
                <div className="flex justify-between md:text-[100%] text-[90%] w-full my-2">
                  <div className="flex">
                    <p className="font-Carbona text-white opacity-50 mr-1 md:mr-2">Data</p>
                    <p className="font-Carbona text-white">20/10/23</p>
                  </div>
                  <div className="flex">
                    <p className="font-Carbona text-white opacity-50 mr-1 md:mr-2">Temporada</p>
                    <p className="font-Carbona text-white">2023</p>
                  </div>
                  <div className="flex">
                    <p className="font-Carbona text-white opacity-50 mr-1 md:mr-2">Rodada</p>
                    <p className="font-Carbona text-white">12ª</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-3 bg-black px-6 rounded-2xl mt-8 bg-opacity-25 flex justify-between">
              <div className="flex items-center mr-4">
                <img 
                src={LogoGol}
                className="size-[130%] mr-4"/>
                <p className="font-CarbonaBold text-white text-[105%]">350</p>
                <div className="h-[60%] w-[1px] mx-3 bg-white"/>
                <p className="font-CarbonaBold text-white text-[105%]">R$25,00</p>
              </div>
              <div className="flex gap-x-6 items-center">
                <FaCirclePlus
                size={22}
                color="white"
                className="cursor-pointer hover:animate-pulse"/>
                <p className="text-[100%] font-CarbonaBold text-white">1</p>
                <FaCircleMinus
                size={22}
                color="white"
                className="cursor-pointer hover:animate-pulse"/>
              </div>
            </div>
            <div className="flex justify-between my-3">
              <button className="rounded-2xl border border-solid border-white text-white font-Carbona text-[80%] md:text-[100%] w-[45%] md:w-[40%] py-1 ease-in-out transition-colors duration-300 hover:bg-white hover:text-black">Adicionar ao Carrinho</button>
              <button className="rounded-2xl text-white font-Carbona w-[45%] md:w-[40%] py-1 bg-gradient-to-b from-[#44D62D] to-[#247018]">Comprar</button>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between w-[80%] md:w-[72%] my-6">
          <div className="flex flex-col items-start w-full md:mb-0 mb-4 md:w-[45%]">
            <AiOutlineMenu
            size={32}
            color="#44D62D"/>
            <h1 className="font-tuskerGrotesk text-white text-[120%] md:text-[100%] my-2">DESCRIÇÃO</h1>
            <p className="font-Carbona text-white text-[90%]">
            Adquira este GolCard exclusivo que celebra este gol marcado. Compre já e garanta sua chance de concorrer à bola oficial usada no jogo, autografada!</p>
          </div>
          <div className="flex flex-col items-start w-full md:w-[45%]">
            <MdOutlineQrCode
            size={32}
            color="#44D62D"/>
            <h1 className="font-tuskerGrotesk text-white text-[120%] md:text-[100%] my-2">DESCRIÇÃO</h1>
            <p className="font-Carbona text-white text-[90%]">
              Um código QR exclusivo é atribuído a cada bola, contendo todos os detalhes do gol, como o jogador, a data e a partida. Este código só pode ser escaneado com a bola física para visualizar uma versão digital do gol e informações adicionais.
            </p>
          </div>
        </div>
        <div className="w-[80%] md:w-[72%] flex flex-col">
          <ProdutosRelacionados/>
          <div className=" w-full justify-between mb-32 md:inline-flex hidden">
            <img src={GolFCBlackImg}
            className="rounded-2xl md:inline hidden h-auto w-[48%]"/>
            <img src={GolBallImg}
            className="rounded-2xl h-auto w-[48%] md:inline hidden"/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
