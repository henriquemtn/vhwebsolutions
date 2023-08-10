import React from 'react'
import FadeInOnScroll from '../Scripts/FadeInOnScroll'

const Servicos = () => {
  return (
    <section class="text-gray-600 body-font"  id="servicos">
        <div class="p-2 w-full border-t border-gray-200 text-center mt-20"></div>
        <div class="container px-5 py-5 mx-auto">
        <FadeInOnScroll>
            <div class="flex flex-col text-center mb-10">            
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-2">Serviços</h1>
            <h2 class="text-xs text-blue-500 tracking-widest font-medium title-font">DISPONÍVEIS NO MOMENTO</h2>
            </div>
            <div class="flex flex-wrap -m-4">
                <div class="p-4 md:w-1/3 w-full">
                    <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div class="flex items-center mb-3">
                        <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-vhbtn2 text-white flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16"> <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/> </svg>
                        </div>
                        <h2 class="text-gray-900 text-lg title-font font-medium">Criação de Sites</h2>
                    </div>
                    <div class="flex-grow">
                        <p class="leading-relaxed text-base">Sites responsivos e otimizados.</p>
                        <a href="https://api.whatsapp.com/send/?phone=5548984737009&text=Ol%C3%A1,+estou+interessado+em+contratar+o+servi%C3%A7o+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0" class="mt-3 text-blue-500 inline-flex items-center">Entre em contato
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="p-4 md:w-1/3 w-full">
                <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-vhbtn2 text-white flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-kanban" viewBox="0 0 16 16"> <path d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h11zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11z"/> <path d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3z"/> </svg>
                    </div>
                    <h2 class="text-gray-900 text-lg title-font font-medium">Sistemas Personalizados</h2>
                </div>
                <div class="flex-grow">
                    <p class="leading-relaxed text-base">Sistemas personalizados e exclusivos para seu negócio!</p>
                    <a href="https://api.whatsapp.com/send/?phone=5548984737009&text=Ol%C3%A1,+estou+interessado+em+contratar+o+servi%C3%A7o+de+sistemas+personalizados,+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0" class="mt-3 text-blue-500 inline-flex items-center">Entre em contato
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </a>
                </div>
                </div>
            </div>
            <div class="p-4 md:w-1/3 w-full">
                <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-vhbtn2 text-white flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16"> <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/> <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/> </svg>
                    </div>
                    <h2 class="text-gray-900 text-lg title-font font-medium">Manutenção</h2>
                </div>
                <div class="flex-grow">
                    <p class="leading-relaxed text-base">Manutenção semanal para sites já existentes.</p>
                    <a href="https://api.whatsapp.com/send/?phone=5548984737009&text=Ol%C3%A1,+estou+interessado+em+contratar+o+servi%C3%A7o+de+manuten%C3%A7%C3%A3o,+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0" class="mt-3 text-blue-500 inline-flex items-center">Entre em contato
                    <svg fill="white" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </a>
                </div>
                </div>
            </div>
            </div>
        </FadeInOnScroll>
        </div>
        <div class="p-2 w-full pt-8 mt-5 border-t border-gray-200 text-center"></div>
    </section>
  )
}

export default Servicos