import './App.css'
import Navbar from './components/navbar/Navbar'
import IconTudoAqui from './assets/icons/icone-tudoaqui-acesso.png'
import Footer from './components/footer/Footer'
import Icon1 from './assets/icons/whatsapp.png'
import Icon2 from './assets/icons/instagram.png'
import Icon3 from './assets/icons/gmail.png'


function App() {
  
  return (
    <>
      <Navbar 
        image={IconTudoAqui} 
        imageWidth={null}
        imageHeight={null}  
        placeholder="Pesquisar comércio"  
        titleButton="Pesquisar"
        backgroundColor="rgb(110, 35, 160)"
      />      
      <Footer
        backgroundColor="#6E23A0"
        image={IconTudoAqui}
        imageWidth={null}
        imageHeight={null}
        links={[
          { label: "Sobre nós", href: "" },
          { label: "Termos e Política", href: "" }
        ]}
        contacts={[
          { icon: Icon1, text: "+55 64 99224-0834", href: "" },
          { icon: Icon2, text: "tudoaqui.solucoes", href: "" },
          { icon: Icon3, text: "tudoaquisolucoes@gmail.com", href: "" }
        ]}
      />

    </>
  )
}

export default App
