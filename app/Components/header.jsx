'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '../../public/logo-white.png';
import { Link } from 'react-scroll';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Atualizar 'isMobile' no carregamento da página e quando a janela for redimensionada
    setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    // Remover o evento de redimensionamento ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="text-white body-font bg-vhblue fixed w-full z-20 h-20">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row justify-between relative">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 md:order-first logo-container">
          <a>
            <Image src={Logo} alt="Logo" className="w-14" />
          </a>
          <span className="ml-1 text-xl text-white">Web Solutions</span>
        </div>

        <button
          className={`md:hidden focus:outline-none hamburger ${
            menuOpen ? 'active' : ''
          } flex flex-col justify-center items-center absolute top-8 right-3 transition-transform duration-300`}
          onClick={toggleMenu}
        >
          <span
            className={`hamburger-bar w-7 h-0.5 bg-white mb-1 ${
              menuOpen ? 'transform rotate-45 -translate-y-1 translate-x-1' : ''
            }`}
          ></span>
          <span
            className={`hamburger-bar w-7 h-0.5 bg-white mb-1 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`hamburger-bar w-7 h-0.5 bg-white ${
              menuOpen ? 'transform -rotate-45 translate-y-1 -translate-x-1' : ''
            }`}
          ></span>
        </button>

        <nav
          className={`${
            menuOpen ? 'flex animate-fadeIn' : 'hidden'
          } md:flex md:ml-auto md:mr-auto xl:pr-50px items-center text-base justify-center gap-3 bg-vhblue `}
          style={{
            marginTop: isMobile && menuOpen ? '3rem' : 0,
            position: isMobile && menuOpen ? 'fixed' : 'static',
            width: isMobile && menuOpen ? '100%' : 'auto',
            left: isMobile && menuOpen ? 0 : 'auto',
            height: isMobile ? '5vh' : 'auto',
            top: isMobile && menuOpen ? 'calc(1rem + 15px)' : 'auto', // Ajuste de espaçamento
          }}
        >
          <Link to="home" spy={true} smooth={true} offset={-60} duration={500} className="hover:text-gray-200 cursor-pointer">
            Início
          </Link>
          <Link to="sobre" spy={true} smooth={true} offset={-60} duration={500} className="hover:text-gray-200 cursor-pointer">
            Sobre
          </Link>
          <Link to="servicos" spy={true} smooth={true} offset={-60} duration={500} className="hover:text-gray-200 cursor-pointer">
            Serviços
          </Link>
          <Link to="projetos" spy={true} smooth={true} offset={-120} duration={500} className="hover:text-gray-200 cursor-pointer">
            Projetos
          </Link>
          <Link to="contato" spy={true} smooth={true} offset={-60} duration={500} className="hover:text-gray-200 cursor-pointer">
            Contato
          </Link>
        </nav>
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 md:order-second logo-container">
        {isMobile ? (
          <span></span>
        ) : (
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="https://api.whatsapp.com/send/?phone=5548984737009&text=Ol%C3%A1,+estou+interessado+em+contratar+o+servi%C3%A7o+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0" class="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" 
                fill="currentColor" viewBox="0 0 24 24"> <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                 </svg>
            </a>
            <a href='https://twitter.com/vhwebsolutions' class="ml-3 text-white">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
            </a>
            <a href='https://instagram.com/vhwebsolutions' class="ml-3 text-white">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a href='https://www.linkedin.com/company/97895498/admin/feed/posts/?feedType=following' class="ml-3 text-white">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        )}
      </div>
      </div>
    </header>
  );
};

export default Header;
