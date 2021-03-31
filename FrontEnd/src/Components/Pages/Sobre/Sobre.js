import { Browser } from "../../Common/Browser/Browser";
import { Footer } from "../../Common/Footer/Footer";
import './Sobre.css'
export function Sobre(){
    return(
        <div>
            <Browser></Browser>
            <div className="Banner-Sobre">
                <div className="info">
                    <h1>Sobre</h1>
                    <p>Saiba um pouco mais sobre nós</p>
                </div>
            </div>
            <div className="Content">
                <h1>Programas de Educação Tutoria - Sistemas de Informação</h1>
                <h2>Como foi criado o PET?</h2>
                <p>O Programa de Educação Tutorial (PET) foi criado para apoiar
                    atividades acadêmicas que integram ensino, pesquisa e extensão.
                    Formado por grupos tutoriais de aprendizagem, o PET propicia aos
                    alunos participantes, sob a orientação de um tutor, a realização
                    de atividades extracurriculares que complementem a formação acadêmica
                    do estudante e atendam às necessidades do próprio curso de graduação.
                    O estudante e o professor tutor recebem apoio financeiro de acordo com
                    a Política Nacional de Iniciação Científica.
                </p>

            </div>

            <Footer></Footer>
        </div>
    );
}