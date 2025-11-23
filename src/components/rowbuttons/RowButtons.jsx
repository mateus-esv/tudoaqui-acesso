import ButtonImage from "../buttons/ButtonImage";
import Sidebar from '../sidebar/Sidebar';
import Sofa from '../../assets/icons/sofa.png'
import Smartphone from '../../assets/icons/smartphone.png'
import Saude from '../../assets/icons/saude.png'
import Mouse from '../../assets/icons/rato.png'
import Moda from '../../assets/icons/moda.png'
import Esporte from '../../assets/icons/esportes.png'
import './RowButtons.css';

const RowButtons = ()=> {
    return(
            <div id="div-rowbuttons">
                <ButtonImage text="Móveis" icon={Sofa} />
                <ButtonImage text="Eletrodomésticos" icon={Smartphone} />
                <ButtonImage text="Saúde" icon={Saude} />
                <ButtonImage text="Esportes" icon={Esporte} />
                <ButtonImage text="Moda" icon={Moda} />
                <ButtonImage text="Informática" icon={Mouse} />
                <Sidebar />
            </div>
    )
}

export default RowButtons;