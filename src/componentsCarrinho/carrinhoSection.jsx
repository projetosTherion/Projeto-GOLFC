import { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoTrash } from "react-icons/io5";
import LogoRedonda from "../imagens/logoRedonda.png";
import Cards from "../componentesHomeLogado/Card";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";

export default function CarrinhoSection() {
  const golCardInfo = {
    "Giorgian de Arrascaeta": {
      preco: "100",
      dataSorteio: "09/05/2003",
      min: 1,
      max: 9,
      id: "#0123456789",
    },
    "Giorgian de Arrascaeta1": {
      preco: "1000",
      dataSorteio: "09/05/2003",
      min: 1,
      max: 9,
      id: "#0123456789",
    },
    "Giorgian de Arrascaeta2": {
      preco: "10000",
      dataSorteio: "09/05/2003",
      min: 1,
      max: 9,
      id: "#0123456789",
    },
  };

  const [qtd, setQtd] = useState({});
  const [valorTotal, setValorTotal] = useState(0);
  const [totalItens, setTotalItens] = useState(0);

  const handleChange = (event, key) => {
    setQtd({ ...qtd, [key]: event.target.value });
  };

  useEffect(() => {
    // Calculando a quantidade de itens
    const totalItems = Object.keys(golCardInfo).length;
    setTotalItens(totalItems);

    // Calculando o valor total
    let total = 0;
    Object.values(golCardInfo).forEach(({ preco }) => {
      total += parseFloat(preco);
    });
    setValorTotal(total);
  }, []);

  return (
    <div className="w-[95%] md:w-[85%] h-auto flex flex-col justify-center">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <IoCartOutline size={30} color="#44d62d" className="mr-2" />
          <h1 className="font-tuskerGrotesk text-white text-[130%] text-nowrap">
            CARRINHO DE COMPRAS
          </h1>
        </div>
        <div className="w-[23%]">
          <p className="text-[85%] text-white tracking-wide leading-3 md:inline hidden">Preço</p>
        </div>
      </div>
      <div className="w-full my-3 h-[2px] bg-white" />
      {Object.entries(golCardInfo).map(([index, { preco, dataSorteio, min, max, id }]) => (
        <div key={index} className="flex flex-col">
          <div className="flex justify-between md:flex-row flex-col">
            <div className="flex items-center">
            <input type="checkbox" className="md:inline hidden w-6 h-6 bg-gray-300 mx-4" />
              <div className="w-[30%] h-auto md:inline hidden">
                <Cards />
              </div>
              <div className="flex flex-col justify-between h-full md:ml-[2%] text-nowrap max-w-[70%]">
                <div className="flex flex-col">
                  <h2 className="font-Carbona text-white text-wrap">
                    Golcard - {index}
                  </h2>
                  <h3 className="font-CarbonaBold text-white">
                    Data do sorteio: {dataSorteio}
                  </h3>
                </div>
                <div className="flex flex-col md:hidden my-3">
                  <div className="flex items-center relative">
                    <img src={LogoRedonda} alt="Logo Gol" className="w-[7vw] h-auto mr-2" />
                    <div className="text-[120%] font-CarbonaBold tracking-[0.3em] text-[#44d62d]">
                      {preco}
                    </div>
                  </div>
                  <div className="uppercase text-[80%] font-Carbona text-white">
                    Golcard: {id}
                  </div>
                </div>
                <div className="flex mt-2 md:items-center md:flex-row flex-col">
                  <div className="flex items-center justify-start mb-2">
                  <div className="flex text-Azul-Gol bg-white text-center font-CarbonaBold items-center p-1 border-2 border-solid border-white rounded-2xl">
                    <p className="font-CarbonaBold tracking-wide">Qtd:</p>
                    <FaCirclePlus
                    className="w-5 h-5 fill-Azul-Gol mx-1"
                    onClick={() => totalItens < 9 ? setTotalItens(totalItens + 1) : null}/>
                    {totalItens}
                    <FaCircleMinus
                    className="w-5 h-5 fill-Azul-Gol mx-1"
                    onClick={() => totalItens === 1 ? null : setTotalItens(totalItens - 1)}/>
                  </div>
                  <div className="h-[65%] w-[1px] bg-white mx-5" />
                  <div className="flex cursor-pointer">
                    <IoTrash color="white" size={20} className="mr-1" />
                    <p className="text-white tracking-wide font-Carbona text-[100%]">Excluir</p>
                  </div>
                  </div>
                  <div className="h-[65%] w-[1px] bg-white mx-5 md:inline hidden" />
                  <p className="md:text-white md:rounded-none rounded-2xl bg-white md:bg-transparent w-fit text-Azul-Gol tracking-wide font-CarbonaBold p-2 text-[100%] cursor-pointer">Compartilhar</p>
                </div>
              </div>
              <div className="md:hidden flex justify-end w-[full] h-fit  items-center">
                <Cards/>
              </div>
            </div>
            <div className="md:flex hidden w-[23%] flex-col justify-between">
              <div className="flex items-center relative">
                <img src={LogoRedonda} alt="Logo Gol" className="w-[10%] h-auto absolute left-0 -translate-x-[140%]" />
                <div className="text-[120%] font-CarbonaBold tracking-[0.3em] text-[#44d62d]">
                  {preco}
                </div>
              </div>
              <div className="uppercase text-[80%] font-Carbona text-white">
                Golcard: {id}
              </div>
            </div>
          </div>
          <div className="w-full my-3 h-[2px] bg-white" />
        </div>
      ))}
      <div className="flex justify-between md:flex-row flex-col items-center my-3">
        <div className="flex items-center mb-3 md:mb-0">
          <h1 className="text-white font-tuskerGrotesk text-nowrap">SUBTOTAL ({totalItens} itens): </h1>
          <h1 className="text-white font-CarbonaBold ml-[3%] flex items-center">
            <img src={LogoRedonda} alt="Logo Gol" className="w-[26%] h-auto mr-1" />
            {valorTotal}
          </h1>
          <div className="h-[65%] w-[1px] bg-white mx-1" />
          <h1 className="text-white font-CarbonaBold ml-[3%]">R${valorTotal / 5},00</h1>
        </div>
        <button className="px-[4%] py-1 text-white font-Carbona tracking-wide hover:opacity-70
        to-verde-gol-escuro bg-gradient-to-b from-Verde-Gol rounded-2xl">
          Fechar pedido
        </button>
      </div>
    </div>
  );
}
