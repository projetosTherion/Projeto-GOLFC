import HeaderHomeLogado from "../components/HeaderHomeLogado"
import imagemCarrinho from "../imagens/imagemCarrinho.png"
import { IoIosArrowBack } from "react-icons/io";
import CarrinhoSection from "../componentsCarrinho/carrinhoSection";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function Carrinho() {
  useEffect(() => {
    document.title = "Carrinho - GolFC"
  }, [])
  
  return(
    <div 
    className="bg-[#0A1835] max-w-[100vw] w-full overflow-hidden">
      <div 
      className="md:absolute top-0 left-0 w-full max-w-[100vw] h-auto z-50">
      <HeaderHomeLogado/>
      </div>
      <div className="relative">
      <img 
      className="w-screen max-w-screen h-auto"
      src={imagemCarrinho}/>  
      <Link
      to="/Home">
      <button
      className="bg-white text-[#0A1835] absolute bottom-0 left-[5%] md:left-[10%] md:-translate-x-[50%]
      translate-y-1/2 py-1 px-2 font-Carbona rounded-2xl flex items-center">
        <IoIosArrowBack
        className="mb-0.5 hover:animate-pulse"
        size={20}/>
        Voltar
      </button>
      </Link>
      </div>
      <div 
      style={{
        maxWidth: "100vw"
      }}
      className="max-w-[100vw] mt-8 overflow-hidden flex w-full justify-center">
      <CarrinhoSection/>
      </div>
      <div className="mb-3">
      <Footer/>
      </div>
    </div>
  )
}