import React, { useState, useEffect } from 'react';
import Logo from '../imagens/logo 16 13.png';

const LinhaLogo = () => {
  const imageUrl = Logo; // Substitua pela URL da sua imagem
  const [repeatCount, setRepeatCount] = useState(19); // Estado inicial

  useEffect(() => {
    const updateRepeatCount = () => {
      const screenWidth = window.innerWidth;
      const newRepeatCount = Math.floor(screenWidth / 50); // Ajuste o divisor conforme necessário
      setRepeatCount(newRepeatCount);
    };

    updateRepeatCount(); // Atualiza o repeatCount na montagem do componente
    window.addEventListener('resize', updateRepeatCount); // Atualiza o repeatCount ao redimensionar a janela

    return () => window.removeEventListener('resize', updateRepeatCount); // Limpa o event listener ao desmontar o componente
  }, []);

  const imageElements = Array.from({ length: repeatCount }, (_, index) => (
    <img key={index} src={imageUrl} alt={`Imagem ${index + 1}`} className='w-[6%] h-[10%] md:w-fit md:h-fit' />
  ));

  return <div className='bg-Azul-Gol flex justify-between'>{imageElements} </div>;
};

export default LinhaLogo;
