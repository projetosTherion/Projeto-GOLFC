import Card from "../componentesHomeLogado/Card";

export default function ProdutosRelacionados() {
  return(
    <div className="flex flex-col w-auto">
      <h1 className="font-tuskerGrotesk text-white text-customResponsiveTitulo">PRODUTOS RELACIONADOS</h1>
      <div className="bg-white w-full h-[1px] mt-4 mb-8"/>
      <div className="flex w-full justify-between flex-1 mb-16">
        {["", "", "", ""].map((key, index) => (
          <div className="flex justify-center" key={key}>
            <Card/>
          </div>
        ))}
      </div>
    </div>
  )
}