import { LuWallet } from "react-icons/lu";
import GolFCLogo from "../imagens/logo 17 2.svg";
import { useEffect, useState } from "react";
import { IoReloadSharp } from "react-icons/io5";
import { RiBarcodeFill } from "react-icons/ri";
import { MdPersonAdd } from "react-icons/md";
import EstadioImg from "../imagens/estadioMinhasComprasButton.png";
import { AiOutlineHistory } from "react-icons/ai";
import { BiSolidStopwatch } from "react-icons/bi";
import ProximosSorteiosImg from "../imagens/proximosSorteiosButton.png";

export default function Inicial() {
  const [saldo, setSaldo] = useState(0);
  const duracao = 1000;
  const maximo = 1800;

  useEffect(() => {
    const timer = setTimeout(() => {
      const incremento = maximo / (duracao / 10);
      let saldoAtual = 0;

      const intervalo = setInterval(() => {
        saldoAtual += incremento;

        setSaldo(Math.floor(saldoAtual));

        if (saldoAtual >= maximo) {
          clearInterval(intervalo);
          setSaldo(maximo);
        }
      }, 10);
      return () => clearInterval(intervalo);
    }, 300);
    return () => clearTimeout(timer);
  }, [maximo, duracao]);

  return (
    <div className="flex animate-fade-in">
      <div className="w-[85%] flex flex-col">
        <div className="flex flex-col">
          <h1 className="font-Carbona text-white text-[120%] mb-[5%]">Visão Geral</h1>
          <div className="flex flex-col rounded-[24px] boreder-solid border-[#44D62D] border-[1px]
        px-[6%] py-[4%] filter backdrop-blur-2xl bg-black bg-opacity-50">
            <div className="flex justify-between w-full">
              <div className="flex flex-col">
                <h1 className="font-Carbona text-white text-[145%]">Olá, Loren lipton</h1>
                <h2 className="font-Carbona text-white text-[90%]">Adquira seus pontos e concorra.</h2>
              </div>
              <div className=" flex flex-col bg-[#CACED3] bg-opacity-15 rounded-[16px]
            w-[48%] px-[4%] py-[2%]">
                <div className="flex items-center">
                  <LuWallet
                    size={28}
                    color="#44D62D"
                    className="bg-Azul-Gol outline-4 outline outline-[#0a1835]
                rounded-full p-1"/>
                  <h1 className="italic font-CarbonaBold text-white text-[120%] ml-3">Carteira</h1>
                </div>
                <div className="flex my-[7%] items-center">
                  <img src={GolFCLogo}
                    className="w-[34%] h-auto" />
                  <div className="flex flex-col w-[66%] text-white ml-4 justify-between h-full">
                    <p className="font-Carbona text-[90%]">Seu saldo atual</p>
                    <div className="w-full h-full tracking-widest text-[250%] font-tuskerGrotesk">
                      {saldo}
                    </div>
                  </div>
                  <h1 className="text-white font-Carbona"></h1>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between w-full mt-[2%]">
              <div className="flex items-center cursor-pointer group">
                <IoReloadSharp
                  size={28}
                  color="white" />
                <h1 className="font-Carbona text-white text-[100%] ml-2 relative group">Atualizar
                  <div className="absolute bottom-0 left-0 ease-in-out transition-all duration-300
                  bg-white h-[1px] group-hover:w-full w-0"/>
                </h1>
              </div>
              <button className="bg-[#44D62D] text-white font-Carbona text-[100%] px-[36px] 
                py-[8px] rounded-[24px]">Comprar</button>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between mt-[3%]">
          <div className="w-[48%] md:h-[26vh] rounded-[24px] cursor-pointer
          border-[1px] border-solid border-[#44D62D] flex items-center justify-center
          px-[2%] bg-black bg-opacity-50 relative overflow-hidden group">
            <img 
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 min-w-[120%]"
            src={EstadioImg}/>
            <div 
            className="w-full h-full bg-black bg-opacity-40 absolute rounded-[24px] shadow-2xl shadow-inner-custom"/>
            <AiOutlineHistory
            color="#44D62D"
            size={28}
            className="z-10 mr-2"/>
            <h1 className="font-NorthZone text-[#44D62D] text-[150%] z-10">Minhas compras</h1>
          </div>
          <div className="w-[48%] md:h-[26vh] rounded-[24px] cursor-pointer
          border-[1px] border-solid border-[#44D62D] flex items-center justify-center
          px-[2%] bg-black bg-opacity-50 relative overflow-hidden group">
            <img 
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 min-w-[120%]"
            src={ProximosSorteiosImg}/>
            <div 
            className="w-full h-full bg-black bg-opacity-40 absolute rounded-[24px] shadow-2xl shadow-inner-custom"/>
            <BiSolidStopwatch
            color="#44D62D"
            size={28}
            className="z-10 mr-2 rotate-[15deg]"/>
            <h1 className="font-NorthZone text-[#44D62D] text-[150%] z-10">Próximos sorteios</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[15%] animate-fade-in justify-center items-center gap-y-3">
        <div className="flex flex-col items-center text-center cursor-pointer w-[80%] py-3 ease-in-out duration-300
        transition-all outline hover:outline-white outline-transparent outline-[1px] rounded-[24px]
        animate-fade-in">
          <RiBarcodeFill
          color="#0a1835"
          size={45}
          className="bg-white rounded-full p-1"/>
          <h1 className="font-Carbona text-white text-[90%] text-wrap leading-6 w-fit">Códigos Promocionais</h1>
        </div>
        <div className="flex flex-col items-center text-center cursor-pointer w-[80%] py-3 ease-in-out duration-300
        transition-all outline hover:outline-white outline-transparent outline-[1px] rounded-[24px]">
          <MdPersonAdd
          color="#0a1835"
          size={45}
          className="bg-white rounded-full p-1"/>
          <h1 className="font-Carbona text-white text-[90%] text-wrap leading-6 w-fit">Convidar amigos</h1>
        </div>
      </div>
    </div>);
}
