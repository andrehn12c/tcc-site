import React from 'react';
function Header() {
    return(
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
        </div>

    )
}