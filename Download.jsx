import React from 'react';
import { Link } from 'react-router-dom';
import menuMobileTop from '../assets/menu_mobile_top.svg';
import Logo from '../assets/logo2.svg'
import qrcode from '../assets/qrcode.svg'
import Seta from '../assets/seta.svg'
import Hamburguer from "../assets/Hamburguer.svg"


function Download() {
  return (
    <div>
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
      {/* Banner */}
    
      <div className="lg:grid grid-flow-row grid-cols-2 ">
        
        <div>
          <h1 className="font-semibold pl-10 pt-16 text-[20px] text-title_green mb-6 lg:text-[32px] lg:pl-32 lg:text-nowrap ">Download do Aplicativo Mobile</h1>
          <li className="list-none border-r-2 border-gray-300 " >
          <p className="px-10 mb-3 text-sm text-justify lg:text-[16px]/[28px] lg:pl-32 lg:mb-8 ">A fim de melhorar a experiência de nossos clientes, foi desenvolvido um Aplicativo Mobile, ou seja, compatível com qualquer aparelho móvel, com o intuito de possibilitar que o cliente tenha o controle da Green Box na palma de suas mãos. Além do controle de funcionamento, o App também é um meio de comunicação entre o cliente e nós desenvolvedores caso haja algum problema funcional ou de manuseio, e precise ser feita a troca do produto.</p>
          <p className="px-10 mb-8 text-sm text-justify lg:text-[16px]/[28px] lg:pl-32 lg:mb-[100px]">O aplicativo se chama Green Box App, e pode ser feito o download pela App Store (caso seu aparelho seja  IOS) ou pela Play Store (caso seu aparelho seja Android). Como o objetivo central é praticidade e eficácia, a seguir disponibilizamos um QR Code que ao ser escaneado, irá direcioná-lo diretamente a página de download do aplicativo. Aproveite sua Green Box!</p>
          </li>
           </div>
        <div className="">
          <div className=" px-10 text-sm font-bold lg:text-[20px]/[28px] lg:pt-20 flex justify-center">
              <p className="lg:hidden">Clique no botão para download do aplicativo:</p>
              <p className="hidden lg:inline ">Instale diretamente pelo QR Code:</p>
          </div > 
          <div className="flex justify-center">
            <img src={qrcode} className="w-96 mb-20 mt-8 box-border border-gray-300  border-4 lg:mb-[188px] hidden lg:inline" alt="qrcode" />
            <button className="cursor-pointer lg:hidden py-4 px-10 mt-10 mb-14 rounded-[30px] bg-bg_green hover:bg-dark_green "><a href="https://play.google.com/store/games?device=windows&&utm_source=latam_Med&utm_medium=hasem&utm_content=Dec1622&utm_campaign=Evergreen&pcampaignid=MKT-EDR-latam-br-1707532-Med-hasem-py-Evergreen-Dec1622-Text_Search_BKWS-id_102353_%7CEXA%7CONSEM_kwid_43700074624718482_adgroupid_145056776616_keywordid_kwd-41905086&gad_source=1&gclid=Cj0KCQjwt4a2BhD6ARIsALgH7DpcrB084Yg5wWF_gVUatvzmowvp950KQyV5P8FTcUVdPck3YwWa5U0aAnSCEALw_wcB&gclsrc=aw.ds" className="text-white ">Download</a></button>
          </div> 
        </div>
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

export default Download;
