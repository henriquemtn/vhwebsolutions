import Image from 'next/image'
import Banner from './Components/banner'
import About from './Components/sobre'
import Servicos from './Components/servicos'
import Etapas from './Components/etapas'
import Projetos from './Components/projetos'
import Footer from './Components/footer'
import ContatoProvisorio from './Components/contato2'


export default function Home() {

  return (
    <>
      <Banner />
      <About />
      <Servicos />
      <Etapas />
      <Projetos />
      <ContatoProvisorio />
      <Footer />     
    </>
  )
}
