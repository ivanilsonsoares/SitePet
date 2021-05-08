import { Browser } from "../../Common/Browser/Browser";
import { Footer } from "../../Common/Footer/Footer";

export function Contacts() {
    return (
        <div>
            <Browser></Browser>
            <div className="Banner">
                <div className="info">
                    <h1>Ensino,</h1>
                    <h1>Pesquisa</h1>
                    <h1>e Extensão</h1>
                    <p>São os pilares do Programa de Educação Tutorial - Sistemas de informação</p>
                </div>
            </div>
            <h1 className="title">Princiapais contatos</h1>
            <div className="content">

                <div className="three-pillars" style={{height:'250px'}}>
                    <h1 className="fa">&#xf2b6;</h1>
                    <h2>Email</h2>
                    <p>petsiqxd@ufc.br</p>
                </div>
                <div className="three-pillars" style={{height:'250px'}}>
                    <h1 className="fa">&#xf09a;</h1>
                    <h2>Facebook</h2>
                    <p>petsiufc</p>
                </div>
                <div className="three-pillars" style={{height:'250px'}}>
                    <h1 className="fa">&#xf16d;</h1>
                    <h2>Instagram</h2>
                    <p>@petsi.ufc</p>
                </div>
            </div>

            <div className="enter-contact">
                <div className="contact">
                    <h1>
                        Se você tiver quaisquer perguntas, comentários ou sugestões,
                        por favor entre em contato conosco na nossa comunidade do Discord.
                </h1>
                    <a className="fa" href="https://discord.gg/vfDzqaKKpS">&#xf0e0; Enviar uma mensagem</a>
                </div>
            </div>
            <Footer></Footer>


        </div>
    )
}
