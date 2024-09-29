import Footer from "../components/Footer";
import HeaderHomeLogado from "../components/HeaderHomeLogado";
import Categorias, { info } from "../componentsPaginaPesquisa/categorias";
import GolcardsPesquisa from "../componentsPaginaPesquisa/golcardsPesquisa";

/* 
glr do back (tutu aqui), a ideia é o seguinte: tao vendo aquele import de Categorias? ent,
tem junto dele uma variável chamada info (q é um dicionário) q contém todas as informações do q ta sendo selecionado
nos filtros de pesquisa, a partir desse componente da pagina de pesquisa faz a requisição pro banco usando 
a variável info q ta sendo importada do componente Categorias e dps da resposta do banco joga como parâmetro
pro componente GolcardsPesquisa pro site souber quais golcards mostrar (caso tiverem dúvida pd chamar nois ou eu msm sla)
*/

export default function PaginaPesquisa() {

  return(
    <div className="max-w-screen min-h-screen bg-Azul-Gol overflow-x-hidden">
      <div className="overflow-hidden w-full max-w-screen">
        <HeaderHomeLogado/>
      </div>
      <div className="flex md:flex-row flex-col md:items-start items-center px-[5%] pt-[2%] justify-around w-full h-full">
        <div className="md:w-[40%] w-[90%] mb-6">
        <Categorias/>
        </div>
        <div className="w-full md:ml-[5%]">
          <GolcardsPesquisa/>
        </div>
      </div> 
      <div className="mt-4">
      <Footer/> 
      </div>
    </div>
  )
}