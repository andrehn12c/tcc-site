import React from 'react';
import { Link } from 'react-router-dom';
import menuMobileTop from '../assets/menu_mobile_top.svg';
import Planta from '../assets/planta.svg'
import Logo from '../assets/logo2.svg';
import Seta from '../assets/seta.svg'
import Hamburguer from "../assets/Hamburguer.svg"
import menino from "../assets/menino.svg"
function Referencias() {
  return (
    <div className="relative min-h-screen flex flex-col">
      
      <div className="bg-gradient-to-b from-dark_green to-bg_green shadow-2xl lg:pb-4">
      <div className="flex">
          <a href="/"><img src={Logo} className="hidden lg:inline justify-center w-24 lg:w-52 lg:mr-48 " alt="Logo" /></a>
          <div className="hidden lg:inline mt-14 relative">
            <ul className="flex gap-16 text-white ">
              <ul className="group">
                <button className="absolute flex hover:pb-[100px] hover:text-gray-100">
                  <li className="mr-4">PRODUTO</li>
                  <img className="w-6 group-hover:rotate-180" src={Seta} alt="seta" />
                  <div className="hidden group-hover:block pl-4 pr-28 w-fit list-none rounded-xl absolute bg-dark_green lg:opacity-90 mt-8 ">
                    <ul className="text-left">
                      <li className="text-[8px] lg:text-[16px]  mt-2 mb-8 hover:text-gray-200 text-white"><a href="#"></a> <Link to="/Funcionamento">FUNCIONAMENTO</Link></li>
                      <li className="text-[8px] lg:text-[16px]  mb-4 hover:text-gray-200 text-white"><a href="#"></a> <Link to="/Componentes">COMPONENTES</Link></li>
                    </ul>
                  </div>
                </button>
              </ul>
              <li className="text-[8px] lg:text-[16px] lg:pl-28 hover:text-gray-200 text-white"><a href="#"></a> <Link to="/">PÁGINA INICIAL</Link></li>
              <li className="text-[8px] lg:text-[16px] hover:text-gray-200 text-white"><a href="#"></a> <Link to="/referencias">REFERÊNCIAS</Link></li>
              <li className="text-[8px] lg:text-[16px] hover:text-gray-200 text-white"><a href="#"></a> <Link to="/integrantes">INTEGRANTES</Link></li>
              <button className="-mt-6 px-6 rounded-2xl bg-dark_green shadow-2xl text-white ml-[500px] mb-2 hover:bg-bg_green hover:border border-white">
              <li className="text-[8px] lg:text-[16px] hover:text-gray-200 "><a href="#"></a> <Link to="/Download">DOWNLOAD</Link></li>
              </button>
            </ul>
          </div>
        </div>
      </div> 
      <div className="lg:hidden">
      <div className="py-4 bg-gradient-to-b from-dark_green to-bg_green shadow-2xl flex">

        <ul className="group">
          <button className="flex hover:text-gray-100">
            <img className="w-6 group-hover:rotate-180 ml-8 mt-2" src={Hamburguer} alt="seta" />
            <div className="hidden group-hover:block w-fit list-none rounded absolute bg-dark_green lg:opacity-60 h-full -mt-12 z-40 border-r-2 border-bg_green bg-gradient-to-r from-dark_green to-bg_green">
              <ul className="text-">
                <img className="w-24 ml-8 mt-20 pb-10" src={Logo} alt="logo" />
                <li className="text-[8px] lg:text-[16px]  mb-8 hover:text-gray-200 text-white border-t-2 border-gray-300 pt-10 mx-2 px-10"><a href="#"></a> <Link to="/Funcionamento">FUNCIONAMENTO</Link></li>
                <li className="text-[8px] lg:text-[16px]  mt-2 mb-8 hover:text-gray-200 text-white  px-10"><a href="#"></a> <Link to="/Componentes">COMPONENTES</Link></li>
                <li className="text-[8px] lg:text-[16px] hover:text-gray-200 text-white       px-10 mb-6"><a href="#"></a> <Link to="/">PAGINA INICIAL</Link></li>
                <li className="text-[8px] lg:text-[16px]  mb-8 hover:text-gray-200 text-white       px-10"><a href="#"></a> <Link to="/Integrantes">INTEGRANTES</Link></li>
                <li className="text-[8px] lg:text-[16px]  mb-8 hover:text-gray-200 text-white       border-b-2 border-gray-300 pb-10 mx-2 px-10"><a href="#"></a> <Link to="/Referencias">REFERENCIAS</Link></li>
                <button className="text-[14px]  px-4 py-2 rounded-xl bg-dark_green shadow hover:bg-bg_green hover:border border-white"><a href="/Download">Download</a></button>
              </ul>
              
            </div>
          </button>
        </ul>
        <a href="/"><img src={Logo} alt=""className="w-32 ml-20 -mt-2 -py-2 justify-center" /></a>
      </div>
      </div>
      

      <h1 className="mt-10 px-10 font-semibold  text-[20px] text-title_green lg:text-[32px] lg:pl-32 lg:mb-4">Referências</h1>
      <h2 className="mt-3  px-10 font-base flex text-[14px] text-title_green lg:text-[24px] lg:pl-32 lg:mb-12 ">Embasamento Científico do Projeto</h2>

      <div className="flex text-left lg:pb-[500px]">
      <li className="px-10 list-none text-[8px]/[15px] lg:text-[20px]/[24px] lg:pl-32 lg:mr-[1100px] pr-4">
        <div className="border-r-2 border-gray-300 ">
          <p className=" mt-4 mb-2 text-justify">Segundo a ciência, a compostagem é uma forma de eliminar pelo menos metade dos problemas de resíduos sólidos urbanos, dando um destino útil aos resíduos orgânicos indesejados e evitando a acumulação em aterros, melhorando a estrutura do solo e devolvendo à terra os nutrientes que ela precisa.</p>
          <p className=" mt-4 mb-2 text-justify">Se todo o resíduo orgânico produzido no Brasil fosse tratado com compostagem, seria possível evitar emissões de gás metano através da produção de cerca de 37,5 toneladas de húmus por ano. Isso poderia reduzir espaços ocupados em aterros e lixões e a poluição dos solos, dos lençóis freáticos e da atmosfera. </p>
          <p className=" mt-4 mb-2 text-justify">Sendo assim, adquirir uma composteira domésticaé poder transformar lixo orgânico em húmus dentro de sua própria residência, fazendo sua parte ao contribuir para a saúde do meio ambiente.</p>
          
        </div>
        <p className="mt-4 mb-2 text-justify">Este projeto se mostra em completo acordo com a ciência, e sua a eficácia pode ser 100% comprovada.</p>
        <p className="mt-4 lg:mb-0 text-justify">O modelo automático é o mais indicado para quem quer fazer a compostagem doméstica sem utilizar minhocas. Nesse modelo, a compostagem é feita somente por micro-organismos, que possui como vantagem o fato de que a composteira pode ser instalada em qualquer ambiente doméstico e não traz problemas com insetos e odores indesejados.</p>
      </li>  
        <img src={Planta} class="hidden lg:inline lg:w-[500px] lg:absolute lg:mt-[300px] lg:mr-48 rounded-2xl border-8 border-dark_green lg:inset-y-0 lg:right-0 shadow-2xl" alt="imagem da planta" />
        <img src={menino} class="hidden lg:inline lg:w-[500px] lg:absolute lg:mt-[700px] lg:mr-48 rounded-2xl border-8 border-dark_green lg:inset-y-0 lg:right-0 shadow-2xl" alt="imagem do menido"/>
      </div>
 

      <div className="bg-gradient-to-b from-marrom to-amber-950 pt-8 pb-8 text-sm mt-auto w-full flex">
        <a href="/"><img className="w-32 lg:w-64  border-r-2 border-gray-300 mr-10" Link src={Logo} alt="logo"/></a>
        
        <ol className=" lg:pr-10"> 

        <h3 className=" text-[10px] text-branco mb-2 font-semibold lg:text-[16px] lg:mb-4 text-nowrap">Acesso ao site:</h3>
          <li className="text-[8px] lg:text-[14px] lg:mb-2 text-branco hover:text-gray-200">
            <Link to="/">página inicial</Link>
          </li>
          <li className="text-[8px] lg:text-[14px] lg:mb-2 text-branco hover:text-gray-200">
            <Link to="/funcionamento">funcionamento</Link>
          </li>
          <li className="text-[8px] lg:text-[14px] lg:mb-2 text-branco hover:text-gray-200">
            <Link to="/componentes">componentes</Link>
          </li>
        </ol>

        
        <ol>
          <h3 className="px-8 text-[10px] text-branco mb-2 font-semibold lg:text-[16px] lg:mb-4 text-nowrap">Mais Detalhes</h3>

          <li className="px-8 text-[8px] lg:text-[14px] lg:mb-2 text-branco hover:text-gray-200">
            <Link to="/referencias">referências</Link>
          </li>
          <li className="px-8 text-[8px] lg:text-[14px] lg:mb-2 text-branco hover:text-gray-200">
            <Link to="/integrantes">integrantes</Link>
          </li>
          <li className="px-8 text-[8px] lg:text-[14px] lg:mb-2 text-branco hover:text-gray-200">
          <Link to="/download">download</Link>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Referencias;
