import Header from "../components/HeaderHomeLogado";
import { PiGearSix } from "react-icons/pi";
import { RiHistoryLine } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { IoGiftSharp } from "react-icons/io5";
import { useState, lazy, Suspense } from "react";
import { FiLoader } from "react-icons/fi";
import Inicial from "../secoesPaginaPerfil/Inicial";
import CampoImg from "../imagens/image 167 (1).jpg";
import { IoExitOutline } from "react-icons/io5";
import { useEffect, useRef } from "react";
export default function Perfil() {
  const secoesPerfil = {
    "Histórico de compras": {
      componente: null,
      icone: <RiHistoryLine
      size={20}
      color="#44D62D"/>
    },
    "Dados do usuário": {
      componente: null,
      icone: <IoMdPerson
      size={20}
      color="#44D62D"/>
    },
    "Configurações": {
      componente: null,
      icone: <PiGearSix
      size={20}
      color="#44D62D"/>
    },
    "Promoções": {
      componente: null,
      icone: <IoGiftSharp
      size={20}
      color="#44D62D"/>
    },
  }

  const LoadingScreen = (
  <div className="flex justify-center items-center w-full h-full border border-solid
  border-[#44D62D] rounded-[24px] animate-fade-in flex-col">
    <FiLoader 
    size={35}
    color="#44D62D"
    className="animate-spin-infinite"/>
    <h1 className="font-tuskerGrotesk text-[#44D62D] uppercase mt-2 text-[120%]">carregando</h1>
  </div>
  );

  const [secaoAtual, setSecaoAtual] = useState("Inicial");
  const [menuLateralFixo, setMenuLateralFixo] = useState(false);
  const pontoReferenciaRef = useRef(null);

//  const refMenuLateral = useRef(null);
//  const [larguraMenuLateral, setLarguraMenuLateral] = useState(0);
//
//  useEffect(() => {
//     if(refMenuLateral !== null) {
//         setLarguraMenuLateral(refMenuLateral.current.clientWidth);
//    }
//    }, [refMenuLateral]);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      // Atualiza o estado com base na visibilidade do componente
      setMenuLateralFixo(entry.isIntersecting);
    },
    {
      root: null, // Observa em relação ao viewport
      threshold: 0.1, // Dispara quando 10% do componente entra ou sai da área visível
    }
  );

  if (pontoReferenciaRef.current) {
    observer.observe(pontoReferenciaRef.current);
  }

  // Limpeza ao desmontar
  return () => {
    if (pontoReferenciaRef.current) {
      observer.unobserve(pontoReferenciaRef.current);
    }
  };
}, []);

const [posicaoX, setPosicaoX] = useState(0);
const [posicaoY, setPosicaoY] = useState(0);
const [larguraMenu, setLarguraMenu] = useState(0);
const [alturaMenu, setAlturaMenu] = useState(0);

const flexRef = useRef(null);

const menuLateralRef = useRef(null);

  useEffect(() => {
    if(menuLateralRef !== null && posicaoX === 0) {
      setPosicaoX(menuLateralRef.current.offsetLeft);
      setPosicaoY(menuLateralRef.current.offsetTop);
      setLarguraMenu(menuLateralRef.current.clientWidth);
      setAlturaMenu(menuLateralRef.current.clientHeight);
    }
  }, [menuLateralRef])


  return(
    <div className="w-screen min-h-screen bg-[#0b1835]">
      <Header/>
      <div 
        ref={flexRef}
        id="start"
        className="flex max-w-screen w-full h-screen px-[5%] mt-[2%] justify-center relative">
          <div 
            ref={pontoReferenciaRef}
            className="absolute top-1 bg-white w-[1px] h-[1px]"/>
        <div 
        className={`${!menuLateralFixo ? `w-[25%] h-[1px]` : `w-0`}`}/>        
        <div className={`h-screen w-[25%] flex items-center ${!menuLateralFixo ? `fixed left-0 top-0 flex justify-center items-center` : ``}`}>
          <div 
          ref={menuLateralRef}
          style={{
            left: posicaoX,
            top: posicaoY,
            width: larguraMenu !== 0 ? larguraMenu : "auto",
          }}
          className={`w-full flex justify-between h-[80vh] border-[#44D62D] border-b-2
          border-r-2 filter backdrop-blur-xl
          border-solid rounded-[24px] bg-Azul-Gol bg-opacity-50 flex-col 
          py-[25%] px-[6%] self-center`}>
            <div className="flex items-center">
              <div className="rounded-full bg-white h-12 w-12 mr-2"/>
              <div className="flex flex-col">
                <p className="font-CarbonaBold text-white text-[100%]">Nome Usuário</p>
                <p className="font-Carbona text-white text-[100%] opacity-75 -mt-1">usuario@golfc.com</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-3">
                {Object.entries(secoesPerfil).map(([index, secao]) => (
                  <a 
                  className="w-fit relative group"
                  href="#start"
                  onClick={() => setSecaoAtual(index)}>
                  <div 
                  key={index}
                  className="flex gap-x-2">
                    {secao.icone}
                    <h1 className="text-white text-[100%] font-CarbonaBold">{index}</h1>
                  </div>
                    <div className="bg-[#44D62D] h-[1px] group-hover:w-full w-0 ease-in-out duration-300 transition-all"/>
                  </a>
                ))}
              </div>
              <div className="flex rounded-2xl border-[1px] border-solid border-white w-fit py-1 px-2
                  transition-all ease-in-out duration-300 relative group overflow-hidden cursor-pointer">
                <IoExitOutline
                  size={25}
                  className="ease-in-out duration-300 transition-colors group-hover:stroke-[#0a1835] stroke-white z-10"/>
                <h1 className="font-Carbona text-white text-[100%] ml-2 z-10 ease-in-out transition-colors duration-300 group-hover:text-[#0a1835]">Sair</h1>
                <div className="bg-white w-full ease-in-out duration-300 transition-all group-hover:h-full h-0
                  absolute bottom-0 left-0"/>
              </div>
          </div>
        </div>
        <div  className="w-full min-h-[600vh] mx-[5%] py-[3%]">
          <Suspense fallback={LoadingScreen}>
            {secaoAtual === "Inicial" ? <Inicial/> : secoesPerfil[secaoAtual].componente}
          </Suspense>
        </div>
      </div>
    </div>
  )
}
