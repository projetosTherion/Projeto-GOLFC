import Cards from "../componentesHomeLogado/Card"

export default function GolcardsPesquisa() {
  const obj = ["","","","","","","","","","","","","","","",""];
  
  return(
    <div className="flex flex-wrap md:justify-normal justify-around items-center gap-4">
      {Object.entries(obj).map((index) => (
        <div className="w-[45%] md:w-[30%] h-auto flex justify-center">
          <Cards/>
        </div>
      ))}
    </div>
  )
}