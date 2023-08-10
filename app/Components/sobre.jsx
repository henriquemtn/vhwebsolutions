import React from 'react'
import Image from 'next/image'
import Henrique from '../../public/henrique.png'
import Vitor from '../../public/vitor.png'
import FadeInOnScroll from '../Scripts/FadeInOnScroll'

const About = () => {
  return (
    <section className="text-gray-600 body-font" id="sobre">
        <div className="flex flex-col text-left w-full mb-10" />
        <FadeInOnScroll>
            <div className="flex flex-col text-left xl:w-full mb-20 mdm:px-7">  
                <h1 className="text-3xl font-medium text-center title-font mb-4 text-gray-700">Sobre a nossa equipe</h1>      
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base pb-2">Bem-vindo(a) à VH Web Solutions,</p>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base pb-2">Somos uma equipe apaixonada por tecnologia, dedicada a criar soluções digitais inovadoras para impulsionar o seu negócio. Com uma vasta experiência no mercado, estamos prontos para enfrentar desafios e entregar resultados excepcionais, sempre com foco na satisfação dos nossos clientes.</p>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base pb-2">Nossa missão é tornar a sua presença online única e impactante. Acreditamos que cada empresa é única, e é por isso que nos dedicamos a desenvolver sistemas personalizados e sites sob medida, de acordo com as necessidades e objetivos específicos de cada cliente.</p>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base pb-2">Entendemos a importância da primeira impressão. Por isso, criamos interfaces atraentes e funcionais, garantindo que seus clientes tenham uma experiência memorável ao interagir com o seu site.</p>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base pb-2">Além disso, sabemos que a manutenção contínua é essencial para garantir o bom funcionamento dos sistemas e sites. Nossa equipe está sempre à disposição para oferecer suporte técnico ágil e eficiente, garantindo que você esteja sempre um passo à frente da concorrência.</p>
            </div>
        </FadeInOnScroll>
            <div className="flex justify-center flex-wrap">
            <div class="p-4 lg:w-1/4 md:w-1/2">
        <FadeInOnScroll>
                <div class="h-full flex flex-col items-center text-center p-8 bg-white drop-shadow-xl	 rounded-xl">
                <Image alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center mb-4" src={Vitor} />
                <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-gray-900">Vitor Barcellos</h2>
                    <h3 class="text-gray-500 mb-3">Desenvolvedor Back-End</h3>
                    <p class="mb-4">"Tenho como objetivo projetar e implementar soluções eficazes que impulsionam a funcionalidade e a eficiência dos aplicativos."</p>
                    <span class="inline-flex">
                    <a href='https://www.linkedin.com/in/vitor-barcellos-da-silva-3a38a4185/' class="text-gray-500">
                        <svg fill="currentColor" viewBox="0 0 24 24" class="h-5 w-5">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                    </a>
                    <a href='https://github.com/VitorBarcelloss' class="ml-2 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                    <a href='https://www.instagram.com/vbsoum/' class="ml-2 text-gray-500">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </a>     
                    </span>
                </div>
                </div>
            </FadeInOnScroll>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
            <FadeInOnScroll>
                <div class="h-full flex flex-col items-center text-center p-8 bg-white drop-shadow-xl	 rounded-xl">
                <Image alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center mb-4" src={Henrique} />
                <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-gray-900">Henrique Silveira</h2>
                    <h3 class="text-gray-500 mb-3">Desenvolvedor Front-End</h3>
                    <p class="mb-4">"Tenho como objetivo facilitar a interação no uso da aplicação, trazendo uma melhor experiência visual e interativa para o usuário."</p>
                    <span class="inline-flex">
                    <a href='https://www.linkedin.com/in/henriquemtn/' class="text-gray-500">
                        <svg fill="currentColor" viewBox="0 0 24 24" class="h-5 w-5">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                    </a>
                    <a href='https://github.com/henriquemtn' class="ml-2 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                    <a href='https://www.instagram.com/henriquemtn/' class="ml-2 text-gray-500">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </a>      
                    </span>
                </div>
                </div>
            </FadeInOnScroll>
            </div>
        </div>

    </section>
  )
}

export default About