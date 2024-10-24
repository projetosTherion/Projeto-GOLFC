import Card from "../componentesHomeLogado/Card";

export default function ProdutosRelacionados() {
  return(
    <div className="flex flex-col w-auto">
      <h1 className="font-tuskerGrotesk text-white text-[125%] md:text-[100%]">PRODUTOS RELACIONADOS</h1>
      <div className="bg-white w-full h-[1px] mt-4 mb-4 md:mb-8"/>
      <div className="flex w-full justify-start md:justify-between flex-1 mb-16 md:overflow-auto overflow-x-scroll">
        {["", "", "", ""].map((key, index) => (
          <div className="flex min-w-48 mb-4 md:mb-0 -mx-3 md:mx-0 md:min-w-0 justify-center" key={key}>
            <Card/>
          </div>
        ))}
      </div>
    </div>
  )
}