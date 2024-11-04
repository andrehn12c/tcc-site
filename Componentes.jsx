import React from 'react';
import { Link } from 'react-router-dom';
import menuMobileTop from '../assets/menu_mobile_top.svg';
import Motor from '../assets/motor.png'
import Rele from '../assets/rele.png'
import Temperatura from '../assets/temperatura.png'
import Board from '../assets/board.png'
import Cabo from '../assets/cabo.png'
import Placa from '../assets/placa.png'
import Logo from '../assets/logo2.svg'
import LinhaV from '../assets/linhavertical.svg'
import Seta from '../assets/seta.svg'
import Hamburguer from "../assets/Hamburguer.svg"

function Componentes() {
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
    <div>
        <h1 className="font-semibold text-[20px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[32px] flex justify-center lg:justify-start lg:ml-20  text-title_green my-12"> Componentes do projeto :</h1>
    </div> 


   
    <div className="lg:grid grid-rows-3 grid-flow-col  ">
    

      <div className="bg-gradient-to-r from-green-500 to-green-700 my-5 mx-5 text-[10px]/[20px] pl-[10px] rounded-lg flex items-center md:mx-20 lg:mx-30 ">
        <img src={Motor} className="w-20 max-h-48 rounded-lg md:size-24 lg:size-28 2x1:size-32 lg:hover:size-[150px] lg:absolute " alt="motor" />
        <li className="list-none my-6 pr-10 lg:ml-32">
          <p className="pl-[32px] text-[12px] md:text-[16px] lg:text-[20px] text-white ">Motor DC 24V:</p>
          <p className="pl-[32px] mt-2 text-[8px]/[10px] md:text-[12px]/[16px] lg:text-[16px]/[20px] text-white text-justify lg:mr-20">Ideal para uso em máquinas e equipamentos industriais que necessitam de motores eficientes e silenciosos. </p>
          <p className="pl-[32px] mt-2 text-[12px] md:text-[16px] lg:text-[20px] lg:mt-6 text-white text-nowrap">R$ 59,80</p>
        </li>
      </div>


      <div className="bg-gradient-to-r from-green-500 to-green-700 my-5 mx-5 text-[10px]/[20px] pl-[10px] rounded-lg flex items-center md:mx-20 lg:mx-30 ">
        <img src={Rele} className="w-20 max-h-48 rounded-lg md:size-24 lg:size-28 2x1:size-32 lg:hover:size-[150px] lg:absolute" alt="relé" />
        <li className="list-none my-6 pr-10 lg:ml-32">
          <p className="pl-[32px] text-[12px] md:text-[16px] lg:text-[20px] text-white ">Módulo Relé 2 canais 5V:</p>
          <p className="pl-[32px] mt-2 text-[8px]/[10px] md:text-[12px]/[16px] lg:text-[16px]/[20px] text-white text-justify lg:mr-20">Através do relé, é possível controlar cargas maiores e dispositivos como motores AC ou DC, eletroímãs, solenóides e lâmpadas incandescentes.</p>
          <p className="pl-[32px] mt-2 text-[12px] md:text-[16px] lg:text-[20px] lg:mt-6 text-white">R$ 12,26</p>
        </li>
      </div>

        
      <div className="bg-gradient-to-r from-green-500 to-green-700 my-5 mx-5 text-[10px]/[20px] pl-[10px] rounded-lg flex items-center md:mx-20 lg:mx-30 ">
        <img src={Temperatura} className="w-20 max-h-48 rounded-lg md:size-24 lg:size-28 2x1:size-32 lg:hover:size-[150px] lg:absolute" alt="sensor de temperatura" />
        <li className="list-none my-6 pr-10 lg:ml-32">
          <p className="pl-[32px] text-[12px] md:text-[16px] lg:text-[20px] text-white">Sensor de temperatura e umidade DHT22:</p>
          <p className="pl-[32px] mt-2 text-[8px]/[10px] md:text-[12px]/[16px] lg:text-[16px]/[20px] text-white text-justify lg:mr-20">É capaz de medir a umidade e temperatura com precisão em uma ampla faixa de operação (-40ºC a +80ºC), oferece dados essenciais para sistemas de automação residencial, estufas, sistemas HVAC e aplicações agrícolas.</p>
          <p className="pl-[32px] mt-2 text-[12px] md:text-[16px] lg:text-[20px] lg:mt-6 text-white text-nowrap ">R$ 42,00</p>
        </li>
      </div>

      <div className="bg-gradient-to-r from-green-500 to-green-700 my-5 mx-5 text-[10px]/[20px] pl-[10px] rounded-lg flex items-center md:mx-20 lg:mx-30 ">
        <img src={Board} className="w-20 max-h-48 rounded-lg md:size-24 lg:size-28 2x1:size-32 lg:hover:size-[150px] lg:absolute" alt="proto board" />
        <li className="list-none my-6 pr-10 lg:ml-32">
          <p className="pl-[32px] text-[12px] md:text-[16px] lg:text-[20px] text-white ">Protoboard 830 pontos:</p>
          <p className="pl-[32px] mt-2 text-[8px]/[10px] md:text-[12px]/[16px] lg:text-[16px]/[20px] text-white text-justify">Ideal para uso em máquinas e equipamentos industriais que necessitam de motores eficientes e silenciosos. </p>
          <p className="pl-[32px] mt-2 text-[12px] md:text-[16px] lg:text-[20px] lg:mt-6 text-white text-nowrap">R$ 15,99</p>
        </li>
      </div>


      <div className="bg-gradient-to-r from-green-500 to-green-700 my-5 mx-5 text-[10px]/[20px] pl-[10px] rounded-lg flex items-center md:mx-20 lg:mx-30 ">
        <img src={Cabo} className="w-20 max-h-48 rounded-lg md:size-24 lg:size-28 2x1:size-32 lg:hover:size-[150px] lg:absolute" alt="cabo extensor" />
        <li className="list-none my-6 pr-10 lg:ml-32">
          <p className="pl-[32px] text-[12px] md:text-[16px] lg:text-[20px] text-white">Cabo Extensor 19cm Servo Motor:</p>
          <p className="pl-[32px] mt-2 text-[8px]/[10px] md:text-[12px]/[16px] lg:text-[16px]/[20px] text-white text-justify">Tem a finalidade de aumentar a distância do cabo de conexão de servo motores de 3 fios.</p>
          <p className="pl-[32px] mt-2 text-[12px] md:text-[16px] lg:text-[20px] lg:mt-6 text-white">R$ 9,90</p>
        </li>
      </div>


      <div className="bg-gradient-to-r from-green-500 to-green-700 mt-5 mb-32 mx-5 text-[10px]/[20px] pl-[10px] rounded-lg flex items-center md:mx-20  lg:mb-5">
        <img src={Placa} className="w-20 max-h-48 rounded-lg md:size-24 lg:size-28 2x1:size-32 lg:hover:size-[150px] lg:absolute" alt="placa" />
        <li className="list-none my-6 pr-10 lg:ml-32">
          <p className="pl-[32px] text-[12px] md:text-[16px] lg:text-[20px] text-white">Placa arduíno MEGA ATMEGA2560 R3 CH340 com cabo USB :</p>
          <p className="pl-[32px] mt-2 text-[8px]/[10px] md:text-[12px]/[16px] lg:text-[16px]/[20px] text-white text-justify">Ela contém tudo o que é necessário para dar suporte ao microconrolador; basta conectar a um computador com um cabo USB ou a uma fonte de alimentação.</p>
          <p className="pl-[32px] mt-2 text-[12px] md:text-[16px] lg:text-[20px] lg:mt-6 text-white">R$ 151,90</p>
        </li>
      </div>
    </div> 

    <div className="bg-gradient-to-b from-marrom to-amber-950 pt-8 pb-8 text-sm mt-auto w-full flex lg:mt-20">
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
  )
}

export default Componentes