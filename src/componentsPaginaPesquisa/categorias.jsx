import { IoIosArrowDown } from "react-icons/io";
import Accordion from "../componentesGenericos/Accordion";
import { useEffect, useState } from "react";

let info = {
  ligas: {},
  campeonatos: {},
  temporadas: {},
  clubes: {}
}

export default function Categorias() {
  const [availableToggle, setAvailableToggle] = useState(true);
  const ligas = ["Liga A", "Liga B", "Liga C", "Liga D"];
  const campeonatos = ["Campeonato A", "Campeonato B", "Campeonato C", "Campeonato D"];
  const temporadas = ["Temporada A", "Temporada B", "Temporada C", "Temporada D"];
  const clubes = ["Clube A", "Clube B", "Clube C", "Clube D"];
  const [openAccordion, setOpenAccordion] = useState("");
  // guarda os nomes das ligas selecionadas
  const [selectedLigas, setSelectedLigas] = useState([]);
  const [selectedCampeonatos, setSelectedCampeonatos] = useState([]);
  const [selectedTemporadas, setSelectedTemporadas] = useState([]);
  const [selectedClubes, setSelectedClubes] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const [isOpenFilterOptions, setIsOpenFilterOptions] = useState(false);

  useEffect(() => {
    // nn é o método mais eficiente possível, mas funciona
    info["ligas"] = selectedLigas;
    info["campeonatos"] = selectedCampeonatos;
    info["temporadas"] = selectedTemporadas;
    info["clubes"] = selectedClubes;
    console.log(info);
  }, [selectedCampeonatos, setSelectedClubes, selectedLigas, selectedTemporadas]);

  return (
    <div className="flex flex-col overflow-hidden">
      <h1 className="text-white font-CarbonaBold text-2xl mb-10">Mercado</h1>
      <input
          id="textInput"
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="p-2 bg-transparent mb-6 border-b-[1px] border-white border-solid text-white
          font-Carbona"
          placeholder="Procure aqui"
        />
        <div
        onClick={() => setIsOpenFilterOptions(!isOpenFilterOptions) }
        className="w-full flex justify-between cursor-pointer items-center p-2 border-b-[1px] border-solid font-CarbonaBold text-responsive border-white text-white">
        Filtros de pesquisa
        <IoIosArrowDown 
        className={`${isOpenFilterOptions && `rotate-180`} transition-all ease-in-out duration-300`}/>
      </div>
      <Accordion
      hasDelay={false}
      isOpen={isOpenFilterOptions}>
        <div 
          onClick={() => setAvailableToggle(!availableToggle)}
          className="w-full flex cursor-pointer items-center p-2 border-b-[1px] border-solid font-Carbona text-responsive border-white text-white">
          <div 
            className="cursor-pointer h-[1px] bg-white w-6 relative mr-4">
            <div className={`w-3 h-3 absolute left-0 top-1/2 -translate-y-1/2 border-[2px] border-white border-solid transition-all ease-in-out duration-300 rounded-full
              ${availableToggle ? `bg-white translate-x-[100%]` : `bg-Azul-Gol`}`}/>
          </div>
          Disponível
        </div>
        <div className="flex flex-col">
          <div
            onClick={() => openAccordion !== "accordionLiga" ? setOpenAccordion("accordionLiga") : setOpenAccordion("") }
            className="w-full flex justify-between cursor-pointer items-center p-2 border-b-[1px] border-solid font-Carbona text-responsive border-white text-white">
            Liga
            <IoIosArrowDown 
            className={`${openAccordion === "accordionLiga" && `rotate-180`} transition-all ease-in-out duration-300`}/>
          </div>
          <Accordion
            isOpen={openAccordion === "accordionLiga"}>
            {ligas.map((liga) => (
              <div 
                onClick={() => {
                  // Se já está selecionado, remove-o; caso contrário, adiciona
                  setSelectedLigas(prevState => 
                    prevState.includes(liga) 
                      ? prevState.filter(item => item !== liga) // Remove o item
                      : [...prevState, liga] // Adiciona o novo item
                  );
                }}
                className="flex cursor-pointer w-fit items-center text-white font-Carbona py-1.5"
                key={liga}>
                <div 
                  className={`w-4 h-4 mx-3 outline transition-colors ease-in-out duration-300 rounded-md outline-offset-2 outline-white outline-1
                    ${selectedLigas.includes(liga) ? `bg-white` : `bg-transparent` }`}/>
                {liga}
              </div>
            ))}
          </Accordion>
        </div>
        <div className="flex flex-col">
          <div
            onClick={() => openAccordion !== "accordionCampeonato" ? setOpenAccordion("accordionCampeonato") : setOpenAccordion("") }
            className="w-full flex justify-between cursor-pointer items-center p-2 border-b-[1px] border-solid font-Carbona text-responsive border-white text-white">
            Campeonatos
            <IoIosArrowDown 
            className={`${openAccordion === "accordionCampeonato" && `rotate-180`} transition-all ease-in-out duration-300`}/>
          </div>
          <Accordion
            isOpen={openAccordion === "accordionCampeonato"}>
            {campeonatos.map((campeonato) => (
              <div 
                onClick={() => {
                  // Se já está selecionado, remove-o; caso contrário, adiciona
                  setSelectedCampeonatos(prevState => 
                    prevState.includes(campeonato) 
                      ? prevState.filter(item => item !== campeonato) // Remove o item
                      : [...prevState, campeonato] // Adiciona o novo item
                  );
                }}
                className="flex cursor-pointer w-fit items-center text-white font-Carbona py-1.5"
                key={campeonato}>
                <div 
                  className={`w-4 h-4 mx-3 outline transition-colors ease-in-out duration-300 rounded-md outline-offset-2 outline-white outline-1
                    ${selectedCampeonatos.includes(campeonato) ? `bg-white` : `bg-transparent` }`}/>
                {campeonato}
              </div>
            ))}
          </Accordion>
        </div>
        <div className="flex flex-col">
          <div
            onClick={() => openAccordion !== "accordionTemporada" ? setOpenAccordion("accordionTemporada") : setOpenAccordion("") }
            className="w-full flex justify-between cursor-pointer items-center p-2 border-b-[1px] border-solid font-Carbona text-responsive border-white text-white">
            Temporadas
            <IoIosArrowDown 
            className={`${openAccordion === "accordionTemporada" && `rotate-180`} transition-all ease-in-out duration-300`}/>
          </div>
          <Accordion
            isOpen={openAccordion === "accordionTemporada"}>
            {temporadas.map((temporada) => (
              <div 
                onClick={() => {
                  // Se já está selecionado, remove-o; caso contrário, adiciona
                  setSelectedTemporadas(prevState => 
                    prevState.includes(temporada) 
                      ? prevState.filter(item => item !== temporada) // Remove o item
                      : [...prevState, temporada] // Adiciona o novo item
                  );
                }}
                className="flex cursor-pointer w-fit items-center text-white font-Carbona py-1.5"
                key={temporada}>
                <div 
                  className={`w-4 h-4 mx-3 outline transition-colors ease-in-out duration-300 rounded-md outline-offset-2 outline-white outline-1
                    ${selectedTemporadas.includes(temporada) ? `bg-white` : `bg-transparent` }`}/>
                {temporada}
              </div>
            ))}
          </Accordion>
        </div>
        <div className="flex flex-col">
          <div
            onClick={() => openAccordion !== "accordionClube" ? setOpenAccordion("accordionClube") : setOpenAccordion("") }
            className="w-full flex justify-between cursor-pointer items-center p-2 border-b-[1px] border-solid font-Carbona text-responsive border-white text-white">
            Clubes
            <IoIosArrowDown 
            className={`${openAccordion === "accordionClube" && `rotate-180`} transition-all ease-in-out duration-300`}/>
          </div>
          <Accordion
            isOpen={openAccordion === "accordionClube"}>
            {clubes.map((clube) => (
              <div 
                onClick={() => {
                  // Se já está selecionado, remove-o; caso contrário, adiciona
                  setSelectedClubes(prevState => 
                    prevState.includes(clube) 
                      ? prevState.filter(item => item !== clube) // Remove o item
                      : [...prevState, clube] // Adiciona o novo item
                  );
                }}
                className="flex cursor-pointer w-fit items-center text-white font-Carbona py-1.5"
                key={clube}>
                <div 
                  className={`w-4 h-4 mx-3 outline transition-colors ease-in-out duration-300 rounded-md outline-offset-2 outline-white outline-1
                    ${selectedClubes.includes(clube) ? `bg-white` : `bg-transparent` }`}/>
                {clube}
              </div>
            ))}
          </Accordion>
        </div>
      </Accordion>
      <button className="font-CarbonaBold w-full py-2 text-Azul-Gol bg-white rounded-2xl mt-6
      ease-in-out transition-colors duration-300 hover:text-white hover:bg-transparent border border-solid border-white">
        Pesquisar
      </button>
    </div>
  );
}

export { info };