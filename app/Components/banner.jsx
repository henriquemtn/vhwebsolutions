import React from 'react';
import BannerImage from '../../public/banner.png';
import FadeInOnScroll from '../Scripts/FadeInOnScroll';

const Banner = () => {
  return (
    <section id='home' className="bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${BannerImage.src})`, height: '100vh'}}>   
      <div className="container mx-auto flex h-full px-5 items-center justify-center flex-col text-white">
        <div className="text-center lg:w-2/3 w-full">
          <FadeInOnScroll>
            <div className="text-center">
              <h1 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-white">DESENVOLVENDO SOLUÇÕES DIGITAIS INOVADORAS PARA O SEU NEGÓCIO!</h1>
              <p className="mb-8 leading-relaxed">Dedicados a impulsionar o seu negócio para novos patamares de sucesso digital. Com uma sólida trajetória, abraçamos desafios com entusiasmo, sempre comprometidos em entregar resultados excepcionais que superem as expectativas dos nossos clientes.</p>
              <div className="flex justify-center">
                <a href="https://api.whatsapp.com/send/?phone=5548984737009&text=Ol%C3%A1,+estou+interessado+em+contratar+o+servi%C3%A7o+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0"><button className="inline-flex text-white bg-vhbtn border-0 py-2 px-3 focus:outline-none hover:bg-vhbtn2 duration-[200ms] rounded text-lg cursor-pointer">Entre em contato<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2 mt-1.5" fill="currentColor" viewBox="0 0 24 24"> <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /> </svg></button></a>
                <a href='https://instagram.com/vhwebsolutions'><button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 duration-[200ms] rounded text-lg cursor-pointer">Visite nosso Feed<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-4 w-4 ml-2 mt-1.5" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg></button></a>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}

export default Banner;
