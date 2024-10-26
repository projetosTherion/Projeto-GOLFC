import React, { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const RegistroUnificado = () => {
    useEffect(() => {
        document.title = "Registro - GolFC"
      }, [])
    const [texts1, setTexts1] = useState({
        0: {
            title: "Nome:",
            value: "",
            content: "João da Silva",
        },
        1: {
            title: "Cpf, SSN ou NIF:",
            value: "",
            content: "00.000.000-00",
        },
        2: {
            title: "Email:",
            value: "",
            content: "exemplo@golfc.com",
        },
        3: {
            title: "Telefone:",
            value: "",
            content: "+55 (00) 0000-000",
        },
    });

    const [texts2, setTexts2] = useState({
        0: {
            title: "CEP:",
            value: "",
            content: "00000-0",
        },
        1: {
            title: "País:",
            value: "",
            content: "País em que o usuário reside",
        },
        2: {
            title: "Estado:",
            value: "",
            content: "Estado aonde você reside",
        },
        3: {
            title: "Cidade:",
            value: "",
            content: "exemplo@golfc.com",
        },
        4: {
            title: "Rua:",
            value: "",
            content: "Nome da rua onde o usuário mora",
        },
        5: {
            title: "Número:",
            value: "",
            content: "N 123",
        },
        6: {
            title: "Complemento:",
            value: "",
            content: "Informações adicionais ",
        },
    });

    const [texts3, setTexts3] = useState({
        0: {
            title: "Selecionar:",
            value: "",
            content: "Encontre o time do seu coração!",
        },
    });

    const [valorTexto, setValorTexto] = useState(0);

    const handleValueChange = () => {
        switch (valorTexto) {
            case 0:
                return texts1;
            case 1:
                return texts2;
            case 2:
                return texts3;
            default:
                return {};
        }
    }

    const handleInputChange = (event, index) => {
        const newValue = event.target.value;
        switch (valorTexto) {
            case 0:
                setTexts1(prevState => ({
                    ...prevState,
                    [index]: { ...prevState[index], value: newValue }
                }));
                break;
            case 1:
                setTexts2(prevState => ({
                    ...prevState,
                    [index]: { ...prevState[index], value: newValue }
                }));
                break;
            case 2:
                setTexts3(prevState => ({
                    ...prevState,
                    [index]: { ...prevState[index], value: newValue }
                }));
                break;
            default:
                break;
        }
    };

    return (
        <div className=' bg-Registro bg-cover min-h-screen flex justify-center items-center ease-in-out duration-300 transition-all'>
            <div className="w-[90%] md:w-[30%] justify-around h-[80%] md:min-h-[20%] md:my-[1%]  bg-opacity-20 rounded-xl border border-gray-300 p-4 flex flex-col ease-in-out transition-all duration-300">
                <div className='flex justify-center mt-[5%]'>
                    <div 
                    onClick={() => valorTexto === 0 ? null : setValorTexto(0)}
                    className={`rounded-[100%] flex justify-center ${valorTexto === 0 ? 'bg-white text-Azul-Gol' : 'text-gray-400 hover:text-white hover:font-bold cursor-pointer'} border w-7 h-7 items-center mr-[10%] mt-2 ease-in-out transition-colors duration-300`}>
                        1
                    </div>
                    <div 
                    onClick={() => valorTexto === 1 ? null : setValorTexto(1)}
                    className={`rounded-[100%] flex justify-center ${valorTexto === 1 ? 'bg-white text-Azul-Gol' : 'text-gray-400 hover:text-white hover:font-bold cursor-pointer'} border w-7 h-7 items-center mr-[10%] mt-2 ease-in-out transition-colors duration-300`}>
                        2
                    </div>
                    <div 
                    onClick={() => valorTexto === 2 ? null : setValorTexto(2)}
                    className={`rounded-[100%] flex justify-center ${valorTexto === 2 ? 'bg-white text-Azul-Gol' : 'text-gray-400 hover:text-white hover:font-bold cursor-pointer'} border w-7 h-7 items-center mt-2 ease-in-out transition-colors duration-300`}>
                        3
                    </div>
                </div>
                <p className="font-Carbona text-xl text-center text-white mt-4 mb-2">Crie sua conta</p>
                <div 
                className="flex flex-col">
                    {Object.values(handleValueChange()).map((item, index) => (
                        <div key={index}>
                            <p className="text-gray-300 font-Carbona text-base  text-left w-full">{item.title}</p>
                            <input
                                type="text"
                                placeholder={item.content}
                                value={item.value}
                                onChange={(event) => handleInputChange(event, index)}
                                className="w-[97%] text-white mb-[3%] bg-[#060f20] rounded-2xl px-2 py-2"
                            />
                        </div>
                    ))}
                </div>
                <div className='flex justify-end'>
                    <div className=''>
                        <Link to={valorTexto === 2 ? "/Home" : "#"}>
                            <button
                                onClick={() => setValorTexto(valorTexto < 2 ? valorTexto + 1 : valorTexto)}
                                className="justify-center hover:animate-pulse items-center p-2 mr-[3%] flex bg-Verde-Gol font-Carbona text-black rounded-2xl hover:bg-verde-gol-escuro focus:ring-2"
                            >
                                Próximo
                                <IoIosArrowDroprightCircle
                                size={22}
                                className='ml-2 fill-[#0a1835]'/>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistroUnificado;
