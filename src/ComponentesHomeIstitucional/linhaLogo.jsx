import React from 'react';
import Logo from '../imagens/logo 16 13.png'

const linhaLogo = () => {
    const imageUrl = Logo; // Substitua pela URL da sua imagem

    const repeatCount = 19; // Defina quantas vezes deseja repetir a imagem
  
    const imageElements = Array.from({ length: repeatCount }, (_, index) => (
      <img key={index} src={imageUrl} alt={`Imagem ${index + 1}`} className='w-[6%] h-[10%] md:w-fit md:h-fit' />
    ));
  
    return <div className='bg-Azul-Gol flex  justify-between'>{imageElements}</div>;
  }
  
  export default linhaLogo;