import React from 'react';
import { Link } from 'react-router-dom';
import menuMobileTop from '../assets/menu_mobile_top.svg';
import Malu from "../assets/malu.png"
import Paiva from "../assets/paiva.png"
import Andre from "../assets/andre.png"
import Carol from "../assets/carol.png"
import Logo from '../assets/logo2.svg';
import Seta from '../assets/seta.svg'
import Hamburguer from "../assets/Hamburguer.svg"


function Integrantes() {
  return (
    <div>
    <div>
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
    
<h1 className="font-semibold text-[20px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[32px] lg:ml-32 text-title_green lg:my-12 mt-10 mb-8 mx-5  ">Integrantes :</h1>
<body className="lg:grid grid-rows-2  grid-flow-col gap-4 ">
  <div className="bg-gradient-to-r from-green-500 to-green-700 mg-5 mt-10 mx-5 text-[10px]/[20px] pl-[10px] rounded-2xl flex items-center lg:my-5 lg:ml-32 lg:pl-5">

    <img src={Malu} className="w-20 max-h-48 lg:size-28 2x1:size-32 lg:my-5" alt="Malu" />
    
    <li className="list-none  my-2">
      <p className="pl-[10px] md:text-[12px]/[24px] lg:text-[16px]/[28px] text-white">NOME:  Maria Luisa Ferraz</p>
      <p className="pl-[10px] md:text-[12px]/[24px] lg:text-[16px]/[28px] text-white"><a className="hover:text-dark_green  hover:underline decoration-1" href=" https://www.linkedin.com/in/malu-f-11b3472b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
">LINKEDIN: Malu Ferraz</a></p>
      <p className="pl-[10px] md:text-[12px]/[24px] lg:text-[16px]/[28px] text-white"><a className="hover:text-dark_green  hover:underline decoration-1" href=" mariamaluferraz@gmail.com">E-MAIL: mariamaluferraz@gmail.com</a></p>
      <p className="pl-[10px] md:text-[12px]/[24px] lg:text-[16px]/[28px] text-white"><a className="hover:text-dark_green  hover:underline decoration-1" href="https://www.instagram.com/malu_fz?igsh=cjEwamt0OG85dHdo">INSTAGRAM: @Malu_fz</a></p>
    </li>
  </div>



  <div className="bg-gradient-to-r from-green-500 to-green-700 my-5 mx-5 text-[10px]/[20px] pl-[10px] rounded-2xl flex items-center lg:ml-32 lg:pl-5">
    <img src={Paiva} className="w-20 max-h-48 lg:size-28 2x1:size-32 lg:my-5" alt="Eduardo" />
    <li className="list-none  my-2">
      <p className="pl-[10px] md:text-[12px]/[24px] lg:text-[16px]/[28px] text-white">NOME:  Eduardo Paiva Cavalcante</p>
      <p className="pl-[10px] md:text-[12px]/[24px] lg:text-[16px]/[28px] text-white"><a className="hover:text-dark_green  hover:underline decoration-1" href="https://www.linkedin.com/in/eduardo-paiva-86aa572b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
">LINKEDIN: Eduardo Paiva</a></p>
      <p className="pl-[10px] md:text-[12px]/[24px] lg:text-[16px]/[28px] text-white"><a className="hover:text-dark_green  hover:underline decoration-1" href="https://www.instagram.com/eduardopaiva_c?igsh=dzUzNWg5anRhOWY1">E-MAIL: eduardo.pcavalcante@eaportal.org</a></p>
      <p className="pl-[10px] md:text-[12px]/[24px] lg:text-[16px]/[28px] text-white"><a className="hover:text-dark_green  hover:underline decoration-1" href="https://www.instagram.com/eduardopaiva_c?igsh=dzUzNWg5anRhOWY1">INSTAGRAM: @eduardopaiva_c</a></p>
    </li>
  </div>

  <div className="bg-gradient-to-r from-green-500 to-green-700 my-5 mx-5 text-[10px]/[20px] pl-[10px] rounded-2xl flex items-center lg:mr-32 lg:pl-5">
    <img src={Andre} className="w-20 max-h-48 lg:size-28 2x1:size-32 lg:my-5" alt="Andre" />
    <li className="list-none  my-2">
      <p className="pl-[10px] md:text-[12px]/[24px] lg:text-[16px]/[28px] text-white">NOME: André Henrique de Almeida Nascimento</p>
      <p className="pl-[10px] md:text-[12px]/[24px] lg:text-[16px]/[28px] text-white"><a className="hover:text-dark_green  hover:underline decoration-1" href=" https://www.linkedin.com/in/andr%C3%A9-henrique-d-b04674255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
">LINKEDIN: André Henrique de Almeida Nascimento</a></p>
      <p className="pl-[10px] md:text-[12px]/[24px] lg:text-[16px]/[28px] text-white"><a className="hover:text-dark_green  hover:underline decoration-1" href="andrehenriquenascimento1@gmail.com">E-MAIL: andrehenriquenascimento1@gmail.com</a></p>
      <p className="pl-[10px] md:text-[12px]/[24px] lg:text-[16px]/[28px] text-white"><a className="hover:text-dark_green  hover:underline decoration-1"href="https://www.instagram.com/andrenacss?igsh=MTBoY24yczFwOWJlZQ==">INSTAGRAM: @andrenacss</a></p>
    </li>
  </div>

  <div className="bg-gradient-to-r from-green-500 to-green-700 mt-5 mb-40 mx-5 text-[10px]/[20px] pl-[10px] rounded-2xl flex items-center lg:mb-5  lg:mr-32 lg:pl-5 ">
    <img src={Carol} className="w-20 max-h-48 lg:size-28 2x1:size-32 lg:my-5" alt="Carol" />
    <li className="list-none my-2">
      <p className="pl-[10px] md:text-[12px]/[24px] lg:text-[16px]/[28px] text-white">NOME: Ana Carolina Feliciana Martins</p>
      <p className="pl-[10px] md:text-[12px]/[24px] lg:text-[16px]/[28px] text-white"><a className="hover:text-dark_green  hover:underline decoration-1" href=" https://www.linkedin.com/in/ana-carolina-m-7b5838276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
">LINKEDIN: Ana Carolina Martins</a></p>
      <p className="pl-[10px] md:text-[12px]/[24px] lg:text-[16px]/[28px] text-white"><a className="hover:text-dark_green  hover:underline decoration-1" href="anacarolinam665@gmail.com">E-MAIL: anacarolinam665@gmail.com</a></p>
      <p className="pl-[10px] md:text-[12px]/[24px] lg:text-[16px]/[28px] text-white"><a className="hover:text-dark_green  hover:underline decoration-1" href="https://www.instagram.com/caroliinaaxs_?igsh=MWU3Zmw5aHE0MDgwZA==
">INSTAGRAM: @Caroliinaaxs_</a></p>
    </li>
  </div> 
</body>   

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
    </div>
    </div>
  );
}

export default Integrantes