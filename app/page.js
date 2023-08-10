import Image from 'next/image'
import Banner from './Components/banner'
import About from './Components/sobre'
import Servicos from './Components/servicos'
import Etapas from './Components/etapas'
import Projetos from './Components/projetos'
import Contato from './Components/contato'
import Footer from './Components/footer'


export default function Home() {

  return (
    <>
      <Banner />
      <About />
      <Servicos />
      <Etapas />
      <Projetos />
      <Contato />
      <Footer />     
    </>
  )
}
