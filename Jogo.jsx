import React from 'react';
import { Link } from 'react-router-dom';
import menuMobileTop from '../assets/menu_mobile_top.svg';
import Logo from '../assets/logo2.svg'
import Seta from '../assets/seta.svg'
import Hamburguer from "../assets/Hamburguer.svg"

function Funcionamento() {
  return (
    <div className="relative flex flex-col">
      <div className="bg-gradient-to-b from-dark_green to-bg_green shadow-2xl lg:pb-4">
      <div className="flex">
          <a href="/"><img src={Logo} className="hidden lg:inline justify-center w-24 lg:w-52 lg:mr-48 " alt="Logo" /></a>
          <div className="hidden lg:inline mt-14 relative">
            <ul className="flex gap-16 text-white ">
              <ul className="group">
                <button className="absolute flex hover:pb-[100px] hover:text-gray-100">
                  <li className="mr-4">PRODUTO</li>
                  <img className="w-6 group-hover:rotate-180" src={Seta} alt="seta" />
                  <div className="hidden group-hover:block pl-4 pr-28 w-fit list-none rounded-xl absolute bg-dark_green lg:opacity-90 mt-8  ">
                    <ul className="text-left ">
                      <li className="text-[8px] lg:text-[16px]  mt-2 mb-8 hover:text-gray-200 text-white"><a href="#"></a> <Link to="/Funcionamento">FUNCIONAMENTO</Link></li>
                      <li className="text-[8px] lg:text-[16px]  mb-8 hover:text-gray-200 text-white"><a href="#"></a> <Link to="/Componentes">COMPONENTES</Link></li>
                      <li className="text-[8px] lg:text-[16px]  mb-4 hover:text-gray-200 text-white"><a href="#"></a> <Link to="/JOGO">JOGO</Link></li>
                      
                    </ul>
                  </div>
                </button>
              </ul>
              <li className="text-[8px] lg:text-[16px] lg:pl-28 hover:text-gray-200 text-white"><a href="#"></a> <Link to="/">PÁGINA INICIAL</Link></li>
              <li className="text-[8px] lg:text-[16px] hover:text-gray-200 text-white"><a href="#"></a> <Link to="/referencias">REFERÊNCIAS</Link></li>
              <li className="text-[8px] lg:text-[16px] hover:text-gray-200 text-white"><a href="#"></a> <Link to="/integrantes">INTEGRANTES</Link></li>
              <li className="text-[8px] lg:text-[16px] hover:text-gray-200 text-white"><a href="#"></a> <Link to="/Dicas">DICAS</Link></li>
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
                <li className="text-[8px] lg:text-[16px] hover:text-gray-200 text-white px-10 mb-6"><a href="#"></a> <Link to="/">PAGINA INICIAL</Link></li>
                <li className="text-[8px] lg:text-[16px]  mb-8 hover:text-gray-200 text-white px-10"><a href="#"></a> <Link to="/Integrantes">INTEGRANTES</Link></li>
                <li className="text-[8px] lg:text-[16px]  mb-8 hover:text-gray-200 border-gray-300 mx-2 px-10"><a href="#"></a> <Link to="/Referencias">REFERENCIAS</Link></li>
                <li className="text-[8px] lg:text-[16px]  mb-8 hover:text-gray-200 text-white px-10"><a href="#"></a> <Link to="/Jogo">JOGO</Link></li>
                <li className="text-[8px] lg:text-[16px]  mb-8 hover:text-gray-200 text-white border-b-2 border-gray-300 pb-10 mx-2 px-10"><a href="#"></a> <Link to="/Dicas">DICAS</Link></li>
                <button className="text-[14px]  px-4 py-2 rounded-xl bg-dark_green shadow hover:bg-bg_green hover:border border-white"><a href="/Download">Download</a></button>
              </ul>
              
            </div>
          </button>
        </ul>
        <a href="/"><img src={Logo} alt=""className="w-32 ml-20 -mt-2 -py-2 justify-center" /></a>
      </div>
      </div>
      {/*Banner*/}
    <div>
      </div>   
      <h1 className="mt-5 px-8 font-semibold text-[20px] lg:text-[40px] text-title_green mb-10 lg:mb-16 lg:mt-16 lg:pl-[380px]">Funcionamento</h1>
      {/* Vídeo Responsivo */}
      <div className=" mx-10 flex ">
        <iframe
          className="w-96 h-52 lg:w-[35%] lg:h-[400px] rounded-2xl border-8 border-dark_green lg:ml-80"
          src="https://www.youtube.com/embed/bv3hXOCfdAw" // Substitua pelo URL do vídeo do YouTube
          title="Vídeo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>

        <ul className="text-[10px] list-decimal my-10 text-nowrap lg:text-[20px] lg:my-20 lg:ml-10 hidden lg:inline">
          <li className="mb-4 lg:mb-8"><p>Antes de tudo separe os ingredientes que serão usados na compostagem; </p></li>
          <li className="mb-4 lg:mb-8"><p>Coloque os ingredientes no dispenser de forma igualada de cada lado; </p></li>
          <li className="mb-4 lg:mb-8"><p>Ligue a composteira e aguarde o tempo indicado;</p></li>
        </ul>
      </div>

      <div className="px-10 lg:flex  lg:justify-center lg:gap-10 lg:mt-10 lg:mx-72 ">
        
      <ul className="text-[10px] list-decimal my-10 text-nowrap lg:text-[20px] lg:my-20 lg:ml-10 lg:hidden">
          <li className="mb-4 lg:mb-8"><p>Antes de tudo separe os ingredientes que serão usados na compostagem; </p></li>
          <li className="mb-4 lg:mb-8"><p>Coloque os ingredientes no dispenser de forma igualada de cada lado; </p></li>
          <li className="mb-4 lg:mb-8"><p>Ligue a composteira e aguarde o tempo indicado;</p></li>
        </ul>
        <ul className="list-disc mb-8 lg:mb-16 lg:bg-gradient-to-r lg:from-green-500 lg:to-green-700 from-25%  lg:list-inside lg:p-10 lg:rounded-2xl">  
          <h2 className="font-bold text-[14px] mb-2 lg:text-[24px]">Instruções de uso:</h2>
          <li className="text-[10px] lg:text-[20px] lg:mb-4">Não deixe no alcance de crianças</li>
          <li className="text-[10px] lg:text-[20px] lg:mb-4">Não interfira quando o processo de compostagem começar</li>
          <li className="text-[10px] lg:text-[20px] lg:mb-4">Quando o processo acabar, tire todo o produto e limpe para o próximo </li>
        </ul>

        <ul className="list-disc mb-8 lg:mb-16 lg:bg-gradient-to-r lg:from-green-500 lg:to-green-700 from-25%  lg:list-inside lg:p-10 lg:rounded-2xl">  
          <h2 className="font-bold text-[14px] mb-2 lg:text-[24px]">Para limpeza:</h2>
          <li className="text-[10px] lg:text-[20px] lg:mb-4">Tire da tomada para evitar acidentes com as lâminas e com o calor</li>
          <li className="text-[10px] lg:text-[20px] lg:mb-4">Use um pano fino para limpar as laterais e as lâminas</li>
        </ul>

        <ul className="list-disc mb-8 lg:mb-16 lg:bg-gradient-to-r lg:from-green-500 lg:to-green-700 from-25%  lg:list-inside lg:p-10 lg:rounded-2xl">  
          <h2 className="font-bold text-[14px] mb-2 lg:text-[24px]"> Cuidados:</h2>
          <li className="text-[10px] lg:text-[20px] lg:mb-4">Use luvas para evitar cortes e queimaduras</li>
          <li className="text-[10px] lg:text-[20px] lg:mb-4">Não coloque as mãos no dispenser enquanto estiver ligado</li>
          <li className="text-[10px] lg:text-[20px] lg:mb-4">Não encoste no aparelho quando o processo estiver ativado, perigo de queimações</li>
        </ul>
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
          <li className="text-[8px] lg:text-[14px] lg:mb-2 text-branco hover:text-gray-200">
            <Link to="/Jogo">jogo</Link>
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
          <li className="px-8 text-[8px] lg:text-[14px] lg:mb-2 text-branco hover:text-gray-200">
          <Link to="/Dicas">dicas</Link>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Funcionamento;