import Header from "../components/HeaderHomeLogado";
import { PiGearSix } from "react-icons/pi";
import { RiHistoryLine } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { IoGiftSharp } from "react-icons/io5";
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
  
  return(
    <div className="w-screen min-h-screen bg-[#0b1835]">
      <Header/>
      <div className="flex w-full min-h-full px-[10%] justify-center">
        <div className="w-[25%] flex justify-between h-[98vh] border-[#44D62D] border-b-2
        border-r-2 filter backdrop-blur-xl
        border-solid rounded-[24px] bg-Azul-Gol bg-opacity-50 flex-col 
        py-[15%] px-[3%]">
          <div className="flex items-center">
            <div className="rounded-full bg-white h-12 w-12 mr-2"/>
            <div className="flex flex-col">
              <p className="font-CarbonaBold text-white text-[100%]">Nome Usuário</p>
              <p className="font-Carbona text-white text-[100%] opacity-75 -mt-1">usuario@golfc.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
              {Object.entries(secoesPerfil).map(([index, secao]) => (
                <div 
                key={index}
                className="flex gap-x-2">
                  {secao.icone}
                  <h1 className="text-white text-[100%] font-CarbonaBold">{index}</h1>
                </div>
              ))}
            </div>
            <div className="flex">
              <h1 className="font-Carbona text-white text-[100%]">Sair</h1>
            </div>
        </div>
      </div>
    </div>
  )
}