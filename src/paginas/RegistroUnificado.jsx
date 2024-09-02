import React, { useState } from 'react'
import { Link } from "react-router-dom";

const RegistroUnificado = () => {
    const [texts1, setTexts1] = useState({
        0: {
            title: "Nome:",
            value: "",
            content: "exemplo: João Gol da Silva",
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

    React.useEffect(() => {
      console.log(texts1);
      console.log(texts2);
      console.log(texts3)
    }, [texts1])

    return (
        <div className=' bg-Registro bg-cover h-screen flex justify-center '>
            <div className="w-[90%] md:w-[30%] justify-center h-[80%] md:h-[97%] mt-[10%] md:mt-[1%] bg-blue-950 bg-opacity-20 rounded-lg border border-gray-300 p-4 flex flex-col ">
                <div className='flex justify-center mt-[5%] ml-[5%]'>
                    <div className={`rounded-full flex justify-center ${valorTexto === 0 ? 'text-white' : 'text-gray-400'} hover:bg-white hover:text-black border mt-2 w-[10%] md:w-[9%] mr-[10%] h-[86%]`}>
                        1
                    </div>
                    <div className={`rounded-full flex justify-center ${valorTexto === 1 ? 'text-white' : 'text-gray-400'} border mt-2 mr-[10%]  md:w-[9%] w-[10%] h-[86%]`}>
                        2
                    </div>
                    <div className={`rounded-full flex justify-center ${valorTexto === 2 ? 'text-white' : 'text-gray-400'} border mt-2 w-[10%]  md:w-[9%] h-[86%]`}>
                        3
                    </div>
                </div>
                <p className="font-Carbona text-xl text-center text-white mt-4 mb-2">Crie sua conta</p>
                {Object.values(handleValueChange()).map((item, index) => (
                    <div key={index}>
                        <p className="text-gray-300 font-Carbona text-base  text-left w-full">{item.title}</p>
                        <input
                            type="text"
                            placeholder={item.content}
                            value={item.value}
                            onChange={(event) => handleInputChange(event, index)}
                            className="w-[97%] text-white mb-[4%] bg-Azul-Gol border border-white rounded-2xl px-2"
                        />
                    </div>
                ))}
                <div className='flex justify-end'>
                    <div className=''>
                        <Link to={valorTexto === 2 ? "/HomeLogada" : "#"}>
                            <button
                                onClick={() => setValorTexto(valorTexto < 2 ? valorTexto + 1 : valorTexto)}
                                className="justify-center p-1 text-align: center h-[90%] mr-[3%] flex bg-Verde-Gol text-white font-Carbona rounded-2xl hover:bg-verde-gol-escuro focus:ring-2"
                            >
                                <span className='mt-[6%]'>Próximo </span><span className='mt-[0%] text-white ml-[3%]'></span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistroUnificado;
