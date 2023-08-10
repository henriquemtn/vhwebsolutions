import React from 'react'
import Image from 'next/image'
import Building from '../../public/building.png'
import Sea7 from '../../public/sea7.png'
import Alecrim from '../../public/alecrim.png'
import DaTerra from '../../public/daterra.png'
import FadeInOnScroll from '../Scripts/FadeInOnScroll'

const Projetos = () => {
  return (
    <section class="text-gray-600 body-font" id='projetos'>
        <div class="container px-5 pb-14 mx-auto">
        <FadeInOnScroll>
            <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Todos os nossos projetos</h1>
                <div class="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Desde a simplicidade elegante até a complexidade inteligente, nossos projetos refletem uma mistura única de criatividade e inovação. cada projeto conta uma história autêntica de colaboração, visão e sucesso conjunto.</p>
            </div>
            <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 drop-shadow-xl p-6 rounded-lg">
                <Image class="h-40 rounded w-full object-cover object-center mb-6" src={Sea7} alt="content" />
                <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">Website + Sistema</h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Sea7 Group</h2>
                <p class="leading-relaxed text-base"> Somos corretores náuticos, que unem clientes que estão em busca, e ou vendendo uma embarcação.</p>
                <a href='https://www.sea7.com.br/' class="mt-3 text-blue-500 inline-flex items-center">Ver site
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 drop-shadow-xl p-6 rounded-lg">
                <Image class="h-40 rounded w-full object-cover object-center mb-6" src={DaTerra} alt="content" />
                <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">Website + Blog</h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">DaTerra Natural</h2>
                <p class="leading-relaxed text-base">Cozinha orgânica de receitas criativas veganas e vegetarianas em self-service de ambiente despretensioso.</p>
                <a href='https://www.restaurantedaterra.com.br/' class="mt-3 text-blue-500 inline-flex items-center">Ver site
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 drop-shadow-xl p-6 rounded-lg">
                <Image class="h-40 rounded w-full object-cover object-center mb-6" src={Alecrim} alt="content" />
                <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">Website + Sistema</h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Alecrim - Sabores do Mundo</h2>
                <p class="leading-relaxed text-base">Fazemos seviços de elaboração e entrega de comidas saudável e saborosa, com especialidade comida etnica.</p>
                <a href='https://www.alecrimsaboresdomundo.com.br/' class="mt-3 text-blue-500 inline-flex items-center">Ver site
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 drop-shadow-xl p-6 rounded-lg">
                <Image class="h-40 rounded w-full object-cover object-center mb-6" src={Building} alt="content" />
                <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">Website + Sistema</h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">VS Advocacia</h2>
                <p class="leading-relaxed text-base">Estamos prontos para oferecer soluções jurídicas excepcionais para uma variedade de questões legais.</p>
                <a href='https://www.vsadvocacia.adv.br/' class="mt-3 text-blue-500 inline-flex items-center">Ver site
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                </div>
            </div>
            </div>
        </FadeInOnScroll>
        </div>
        <div class="p-2 w-full mt-5 border-t border-gray-200 text-center"></div>
    </section>
  )
}

export default Projetos