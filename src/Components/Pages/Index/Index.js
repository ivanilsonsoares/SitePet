import { Browser } from "../../Common/Browser/Browser";
import { Footer } from "../../Common/Footer/Footer";
import Ufc from '../../../Images/ufc-preto.png'
import Pet from '../../../Images/pet-preto.png'
import './Index.css'

export function Index() {
    return (
        <div>
            <Browser></Browser>
            <div className="Banner">
                <div className="info"></div>
            </div>
            <div>
                <h2>dd</h2>
                <h2>dd</h2>
                <h2>dd</h2>
                <h2>dd</h2>
                <h2>dd</h2>
                <h2>dd</h2>
                <h2>dd</h2>
                <h2>dd</h2>
            </div>

            <div className="support">
                <div className="logos">
                    <img src={Pet} alt="Ufc" className="pet"></img>
                    <img src={Ufc} alt="Ufc"></img>
                </div>
            </div>

            <div className="enter-contact">
                <div className="contact">
                    <h1>
                        Se você tiver quaisquer perguntas, comentários ou sugestões,
                        por favor entre em contato conosco.
                </h1>
                    <button className="fa">&#xf0e0; Enviar uma mensagem</button>
                </div>
            </div>
            <Footer></Footer>


        </div>
    )
}
