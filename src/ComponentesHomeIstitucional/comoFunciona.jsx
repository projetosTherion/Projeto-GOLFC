import React from 'react';
import LogoBranca from '../imagens/logo 05 6.svg'
import  Ficha from '../imagens/Frame 4797.png'
import  cartao from '../imagens/Frame 4795 (1).png'
import bola from '../imagens/Frame 4796.png'
const comoFunciona = () => {
  return (
    <div className='bg-Estadio text-white bg-cover '>
       <div className='flex justify-center'> 
        <img src={LogoBranca} alt="Logo GOL" className=' h-15 w-17 mt-20' />
       </div>
       <div className='flex justify-center  mt-5 mr-3  text-2xl'> 
        Como funciona?
       </div>

       <div className="flex justify-center">
      <div style={{ width: '900px' }} className=" border  flex h-52   w-31 mt-10  border-white rounded-md p-4">
      
        <img src={Ficha} alt="Gol ponto" className="h-24 mt-9  w-31" />
    
    
        <div className="flex flex-col  ml-20  ">
          <span className=" font-tuskerGrotesk text-responsive">
            
            Compre Créditos

          </span>
          
          <span className="  font-Carbona text-responsive mr-8">
          Adquira Golcoins, moeda oficial da nossa  <br/>plataforma, para ter acesso aos nossos sorteios.
         
          </span>

        </div>
       
      </div>
    </div>
    <div className="flex justify-center font-Carbona">
      <div style={{ width: '900px' }} className= "border font-Carbona flex h-52   w-31 mt-10  border-white rounded-md p-4">
        <img src={cartao} alt="Gol ponto" className="h-24 mt-10  w-31" />
        <div className="flex flex-col  ml-20  ">
          <span className="  font-tuskerGrotesk   text-responsive   ">Adquira seus GolCards</span>
          <span className="  font-Carbona   text-customResponsive mr-8">
          Utilize seus coins para comprar GolCards, que são <br/> suas chaves para concorrer aos sorteios. Cada  <br/> GolCard é único e representa uma chance de ganhar <br/> a bola do gol que você quer.
          </span>

        </div>
       
      </div>
    </div>

    <div className="flex justify-center">
      <div style={{ width: '900px' }} className= "border  flex h-52   w-31 mt-10  border-white rounded-md p-4">
        <img src={bola} alt="Gol ponto" className="h-24 mt-10  w-31" />
        <div className="flex flex-col  ml-20  ">
          <span className=" font-tuskerGrotesk text-responsive  ">Adquira seus GolCards</span>
          <span className=" font-Carbona text-customResponsive mr-8">
          Utilize seus coins para comprar GolCards, que são <br/> suas chaves para concorrer aos sorteios. Cada  <br/> GolCard é único e representa uma chance de ganhar <br/> a bola do gol que você quer.
          </span>

        </div>
       
      </div>
    </div>
    </div>
  );
};

export default comoFunciona;
