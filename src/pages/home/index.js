import React from "react";
import './style.css';

import DefaultComponent from '../../components/default-component';
import Banner from '../../components/mainBanner';
import TextWithAction from '../../components/text-with-action';
import TextWithActionOne from '../../components/text-with-action-one-action';
import Beneficios from '../../components/beneficios';
import ListaServicos from '../../components/lista-servicos';
import ImageWithText from '../../components/image-with-text';
import Servicos from '../../components/servicos';
import Precos from '../../components/precos';

import bannerImg from '../../assets/banner-1.jpg';
import ImageWithTextImg from '../../assets/grupo-conversando.jpg';

function Home() {

    return (
        <DefaultComponent navAction="home">
            <section className="home">
                <Banner
                    titulo="Contabilidade para Micro, Pequenas Empresas e Empreendedores"
                    subtitulo="Conheça nossos serviços"
                    urlImg={bannerImg} />

                <TextWithAction
                    titulo="Contabilidade para PMEs"
                    subTitulo="Realizamos toda a CONTABILIDADE da sua empresa de forma SEGURA, FÁCIL E ÁGIL, aliando alta tecnologia com planos adequados a sua necessidade"
                    contexto="Na OSP a contabilidade da sua empresa é realizada por pessoas, especialistas no seu segmento de atuação, utilizando o melhor que a tecnologia pode oferecer."
                    btnObj={[
                        {
                            url_: "/nova-empresa/",
                            titulo_: "Abrir uma empresa",
                            classAdicional_: "bg-black"
                        },
                        {
                            url_: "",
                            ancora: "1400",
                            titulo_: "Transferir minha empresa",
                            classAdicional_: "bg-beige"
                        }
                    ]}
                />

                <Beneficios />
                <ListaServicos />
                <ImageWithText
                    titulo="Porque Escolher a JC Contabilidade?"
                    subtitulo="Possuímos experiência nos mais diversos segmentos do mercado"
                    paragrafo="A JC Contabilidade é uma empresa de contabilidade que nasce do desejo, de entregar um atendimento ágil e eficiente a empreendedores que buscam se destacar no mercado.                                        
                    Agende uma reunião conosco."
                    urlImg={ImageWithTextImg}
                    btn={{
                        ancora:"3900",
                        cta: "Planos",
                        url: "#",
                        classAdd: "bg-black"
                    }}
                />

                <TextWithActionOne
                    titulo="GARANTIA OSP"
                    subtitulo="SE EM 30 DIAS VOCÊ NÃO FICAR SATISFEITO NÓS DEVOLVEMOS SUA MENSALIDADE"
                    paragrafo="Na OSP Digital você tem garantia de atendimento as suas expectativas!"
                    btnAction={{
                        cta: "Fale com nosso especialista",
                        url: "/contato/",
                        classAdd: "bg-black"
                    }}
                />
                <Servicos />
                <Precos />

                <TextWithActionOne
                    titulo="Interessado?"
                    subtitulo="Solicite uma reunião On Line."
                    paragrafo="30 dias de Garantia Incondicional."
                    btnAction={{
                        cta: "Solicite agora",
                        url: "/contato/",
                        classAdd: "bg-black"
                    }}
                />
            </section>
        </DefaultComponent>
    );
}

export default Home;