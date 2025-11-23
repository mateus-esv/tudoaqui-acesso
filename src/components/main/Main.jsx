import CardBusiness from "../cards/CardBusiness";
import "./Main.css";
import Com1 from '../../assets/comercio1.jpg';
import Com2 from '../../assets/comercio2.jpeg';
import Com4 from '../../assets/comercio4.jpg';
import Com5 from '../../assets/comercio5.png';
import Com6 from '../../assets/comercio6.jpeg';
import Com7 from '../../assets/comercio7.jpeg';
import Com8 from '../../assets/comercio8.jpeg';
import Com9 from '../../assets/comercio9.avif';
import Carousel from "../carousel/Carousel";
import RowButtons from "../rowbuttons/RowButtons";



const Main = () => {
    return (
         <>
            <Carousel />
            <RowButtons/>
            <div className="main-layout">
                <div id="div-main-cards-business">
                    <CardBusiness image={Com1} text="Cacau Show — Chocolate premium para todos os momentos." />
                    <CardBusiness image={Com2} text="Farmácia Medalha Milagrosa — Saúde, confiança e atendimento humanizado." />
                    <CardBusiness image={Com4} text="Japinha Sushi — O melhor da culinária japonesa na cidade." />
                    <CardBusiness image={Com5} text="Vitória Móveis — Conforto e estilo para o seu lar." />
                    <CardBusiness image={Com6} text="O Boticário — Beleza e fragrâncias que inspiram." />
                    <CardBusiness image={Com7} text="Eduarda Rocha Docerias — Delícias artesanais que adoçam seu dia." />
                    <CardBusiness image={Com8} text="Padaria do Genário — Pães fresquinhos e sabor que faz parte da sua rotina." />
                    <CardBusiness image={Com9} text="Pizzaria Novo Sabor — Pizzas irresistíveis feitas comercio ingredientes selecionados." />
                </div>
            </div>
        </>
    )
}

export default Main;