import React, { useEffect, useRef, useState } from 'react';
import HeaderHomeLogado from "../components/HeaderHomeLogado";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import FundoCertificacao from '../imagens/FundoCertificacao.png';
import Certificado from '../imagens/Certificado.png';
import { IoIosArrowBack } from "react-icons/io";

const Login = () => {
  
  useEffect(() => {
    document.title = "Certificacao - GolFC";
  }, []);

  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);
  const styles = {
    container: {
      backgroundImage: `url(${FundoCertificacao})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '150vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      paddingBottom: '100px',
      position: 'relative',
    },
    
    // Estilo do Header
    headerContainer: {
      width: '100%',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      zIndex: 1000,
    },
  
    backButtonContainer: {
      position: 'absolute',
      top: '13%',
    },
    
    content: {
      paddingTop: navHeight,
      paddingBottom: "10%",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: "center",
      position: "relative"
    },
  
    certificadoContainer: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    
    certificado: {
      width: '800px',
    },
  };

  useEffect(() => {
    if(navRef.current) {
      setNavHeight(navRef.current.clientHeight);
    }
  }, [navRef]);

  return (
    <div
    className='bg-Azul-Gol relative'>
      <img 
      src={FundoCertificacao}
      className='bg-cover absolute top-0 left-0'/>
      <div 
        ref={navRef}
        className="md:absolute top-0 left-0 w-full max-w-[100vw] h-auto z-50 bg-Azul-Gol filter backdrop-blur-xl bg-opacity-50">
        <HeaderHomeLogado />
      </div>
      
      <div style={styles.content}>
        <div className="flex flex-col text-start mt-[10%] relative">
        <button className="bg-Azul-Gol text-white absolute top-0 -translate-y-[300%] left-0 py-1 px-[8px] font-Carbona rounded-[8px] font-[900] tracking-widest flex items-center
          border-[1px] border-[#44D62D] border-solid text-[85%]">
            <IoIosArrowBack
            className="mr-1 hover:animate-pulse"
            size={20}/>
            Voltar
          </button>
          <h1 className="text-white text-3xl font-tuskerGrotesk z-10">
            PARABÉNS,
          </h1>
          <h1 className="text-white text-lg font-tuskerGrotesk z-10 mb-[2%]">
            VOCÊ AGORA DETÉM UM COLECIONÁVEL ÚNICO E EXCLUSIVO. ESSA LEMBRANÇA ESPECIAL É SUA.
          </h1>
        </div>

        {/* Container para imagem com texto sobreposto */}
        <div style={styles.certificadoContainer}>
          <img src={Certificado} alt="Certificado" style={styles.certificado} />
        </div>
      </div>

      <Footer style={styles.footer} />
    </div>
  );
}

export default Login;
