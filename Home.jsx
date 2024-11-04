import React from 'react';
import { Link } from 'react-router-dom';
import {useState} from "react";
import menuMobileTop from '../assets/menu_mobile_top.svg';
import linha from '../assets/linha.svg';
import Produto from '../assets/produtoEX.svg';
import Compostagem from '../assets/compostagem.svg';
import Projeto from '../assets/projeto.png';
import Logo from '../assets/logo2.svg';
import Seta from '../assets/seta.svg'
import Planta1 from "../assets/planta1.svg"
import Planta2 from "../assets/planta2.svg"
import Planta3 from "../assets/planta3.svg"
import Hamburguer from "../assets/Hamburguer.svg"


export default Home;
function Home() {
    return (
      <div className="relative lg:flex lg:flex-col">
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
     
      
      {/* Banner and Logo */}
      <div className="relative flex justify-center mt-12 lg:mt-36">
        <img src={Planta1} className="w-32 lg:w-[600px] absolute inset-y-0 left-0" alt="Planta 1"/>
        <div className="w-[12vh] lg:w-[52vh] h-[12vh] lg:h-[52vh] rounded-full  bg-dark_green border-8 border-bg_green flex 
         items-center justify-center">
          <img src={Logo} className="w-18" alt="Logo" />
        </div>
        <img src={Planta2} className="w-32 lg:w-[600px] absolute inset-y-0 right-0" alt="Planta 2"/>
      </div>
    
      <h1 className="text-[18px] lg:text-[32px] font-regular text-title_green mt-10 flex justify-center lg:mt-32">SEJA BEM-VINDO</h1>
      <img className="mt-10 lg:mt-32" src={linha} alt="linha" />

      <div className="mt-20">
        <h1 className="font-semibold text-[18px] mb-10 text-left text-title_green lg:text-[32px] lg:mb-0 px-10 lg:px-48">VISÃO GERAL</h1>
        <div className="flex flex-col md:flex-row items-center ">
          <div className="px-10 lg:px-48">
            <p className="text-[14px] text-justify mb-4 lg:text-[16px]/[28px]">O projeto “Green Box” consiste em uma composteira totalmente automatizada que conta com diversas funções únicas; Ele possui um design compacto, interface intuitiva, uma estrutura de fácil manuseio, e um aplicativo próprio desenvolvido para dispositivos móveis, que permite o seu monitoramento remoto e esclarecimento de dúvidas quanto á sua utilização.</p>
            <p className="text-[14px] text-justify lg:text-[16px]/[28px] ">O resultado final de tudo isso é um equipamento de alta tecnologia capaz de produzir um fertilizante 100% natural e riquíssimo em nutrientes e que foi projetado com o objetivo de tornar a compostagem um processo muito mais fácil e prático, especialmente para pessoas que vivem em apartamentos ou em casas pequenas que não possuem um espaço que possibilite o uso de uma composteira tradicional.</p>
          </div>
          <img src={Produto} className="w-[200px] h-auto border-8 my-10 border-dark_green rounded-xl mx-8 lg:w-[300px] lg:h-[300px] lg:mb-0 lg:ml-32 lg:mr-64 " alt="produto" />
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <img className="hidden lg:inline lg:w-[300px] lg:mr-72 lg:inset-y-0 ]"src={Planta3} alt="mato" />
          <div className="px-10 lg:px-48 lg:pb-48 lg:mt-20">
            <p className="text-[14px] text-justify mb-4  lg:text-[16px]/[28px] ">O principal diferencial do nosso produto é que, diferentemente das composteiras tradicionais, o adubo que é produzido por ela não é líquido, mas sólido, o que permite que tal adubo possua um tempo de produção muito menor comparado ao líquido e um manuseio bem mais simplificado, além de ser totalmente silenciosa e não emitir nenhum tipo de odor.</p>
            <p className="text-[14px] text-justify lg:text-[16px]/[28px] ">Mas pode ficar tranquilo: as diferenças entre o adubo líquido e o sólido param apenas por aí; Não existe nenhuma perda de nutrientes entre os dois tipos de adubo.</p>
          </div>
        </div>
      </div>
      
    
      {/* Compostagem Section */}
      <div className="">
        <h1 className=" font-semibold text-[16px] flex justify-center text-title_green mb-14 pt-20 lg:justify-start lg:px-48 lg:text-[32px] lg:pt-0">AS VANTAGENS DA PRÁTICA DA COMPOSTAGEM:</h1>
        <div className="px-10 lg:px-48 flex flex-col md:flex-row items-center">
          <ul className="list-disc text-justify">
            <li className="text-[14px] lg:text-[16px]/[28px]">Redução da Poluição: Menos resíduos em aterros significam menos lixo contaminando o solo e a água subterrânea.</li>
            <li className="mt-10 text-[14px] lg:text-[16px]/[28px]">Educação e Conscientização Ambiental: A prática de compostagem é um meio educativo de aumentar a conscientização sobre gestão de resíduos e sustentabilidade.</li>
            <li className="mt-10 text-[14px] lg:text-[16px]/[28px]">Economia de Recursos: Compostar resíduos orgânicos pode reduzir custos de coleta e tratamento de lixo, além de diminuir a necessidade de comprar fertilizantes e outros produtos para o solo</li>
            <li className="mt-10 text-[14px] lg:text-[16px]/[28px]">Reciclagem de Nutrientes: A compostagem recicla nutrientes que seriam perdidos. Isso mantém o ciclo de nutrientes natural e sustentável</li>
          </ul>
          <img src={Compostagem} className="w-[200px] border-8 border-dark_green mt-12 mb-20 rounded-xl lg:w-[500px] lg:ml-96" alt="Compostagem" />
        </div>
      </div>
      

      {/* Footer */}
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


