import React, { useEffect } from 'react';
import HeaderHomeLogado from "../components/HeaderHomeLogado";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import FundoCertificacao from '../imagens/FundoCertificacao.png';
import Certificado from '../imagens/Certificado.png';

const Login = () => {
  
  useEffect(() => {
    document.title = "Certificacao - GolFC";
  }, []);

  return (
    <div style={styles.container}>
      <div 
        className="md:absolute top-0 left-0 w-full max-w-[100vw] h-auto z-50 bg-Azul-Gol">
        <HeaderHomeLogado />
      </div>

      <div style={styles.backButtonContainer}>
        <button className="bg-white text-[#0A1835] absolute bottom-0 left-[5%] py-1 px-2 font-Carbona rounded-2xl flex items-center">
          Voltar
        </button>
      </div>
      
      <div style={styles.content}>
        <h1 className="text-white text-3xl font-tuskerGrotesk mb-4">
          PARABÉNS,
        </h1>
        <h1 className="text-white text-lg font-tuskerGrotesk">
          VOCÊ AGORA DETÉM UM COLECIONÁVEL ÚNICO E EXCLUSIVO. ESSA LEMBRANÇA ESPECIAL É SUA.
        </h1>

        {/* Container para imagem com texto sobreposto */}
        <div style={styles.certificadoContainer}>
          <img src={Certificado} alt="Certificado" style={styles.certificado} />
        </div>
      </div>

      <Footer style={styles.footer} />
    </div>
  );
}

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
    left: '25%',
  },
  
  content: {
    textAlign: 'center',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '230px', // Aumenta o espaço entre o header e a imagem
    marginBottom: '80px', // Aumenta o espaço entre a imagem e o footer
  },

  certificadoContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  overlayText: {
    position: 'absolute',
    color: 'black',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  
  certificado: {
    width: '800px',
    marginTop: '5px',
  },
  
  footer: {
    width: '',
    marginTop: '', // Aumenta o espaço entre a imagem e o footer
  },
};

export default Login;
