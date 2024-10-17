import HeaderHomeLogado from "../components/HeaderHomeLogado";
import imagemCarrinho from "../imagens/imagemCarrinho.png";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { IoMdAlarm } from "react-icons/io";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LogoGol from "../imagens/logo 17 2.png";
import { AiOutlineTrophy } from "react-icons/ai";
import TrofeuGolSVG from "../imagens/trofeuGolFC.svg";

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

  return (
    <div className="w-full overflow-x-hidden max-w-screen min-h-screen bg-Azul-Gol">
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
        <div className="flex items-center mt-6 mb-12 text-center">
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
              <div key={label} className="flex w-[15%] justify-center relative flex-col items-center">
                <h1
                  className="text-[#44D62D] tracking-widest flex flex-col items-center ease-in-out transition-all duration-300 relative font-tuskerGrotesk font-bold text-[350%] mb-2 from-0% to-100%"
                  key={label}
                >
                  {timeValue}
                  <h1
                    className="text-[#44D62D] tracking-normal font-Carbona font-light italic text-responsive"
                    key={`${label}-sub`}
                  >
                    {label}
                  </h1>
                </h1>
                  <div 
                  className="w-0.5 absolute left-0 h-full bg-gradient-to-b from-[#44D62D] to-Azul-Gol"/>
              </div>
            );
          })}
        </div>
        <div className="h-[1px] opacity-40 w-[80%] bg-white my-8"/>
        <div className="flex w-[80%] px-2">
          <div className="bg-white w-[full] h-[70vh]"/>
          <div className="flex flex-col w-[55%]">
            <div className="flex p-3 mb-4 bg-black items-center justify-between text-center bg-opacity-25 rounded-2xl border-solid border border-[#44D62D]">
              <div className="flex">
                <img src={LogoGol} className="size-8 mr-2"/>
                <h1 className="tracking-widest font-CarbonaBold text-white font-bold relative text-responsive">350
                  <p className="font-Carbona font-light text-white text-[45%] ml-2 absolute tracking-normal left-[100%] top-1/2 -translate-y-1/2">golcoins</p>
                </h1>
              </div>
              <p className="text-white opacity-40 text-[80%] font-Carbona font-light">GOLCARD #0123456789</p>
            </div>
            <div className="flex flex-col py-4 px-8 bg-black bg-opacity-25 rounded-2xl border-solid border border-[#44D62D]">
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
              <div className="flex justify-between my-8">
                <div className="flex flex-col">
                  <p className="font-Carbona text-white text-[90%]">Autor do gol</p>
                  <h1 className="font-CarbonaBold text-white text-customResponsiveTitulo italic">MASTRIANI</h1>
                </div>
                <div className="flex w-[45%] justify-end">
                  <div className="rounded-full border-solid border w-14 h-14 flex items-center text-center justify-center border-[#44D62D]">
                    <h1 className="font-CarbonaBold text-customResponsive text-[#44D62D] italic">56`</h1>
                  </div>
                  <div className="flex flex-col ml-4 py-2">
                    <div className="flex justify-between">
                      <p className="font-Carbona text-white text-[75%] w-full overflow-clip">Athletico</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
