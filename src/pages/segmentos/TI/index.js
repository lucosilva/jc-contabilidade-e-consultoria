import React from "react";

import DefaultComponent from '../../../components/default-component';
import Banner from '../../../components/mainBanner-nivel-two';
import ImageWithText from '../../../components/image-with-text';
import Form from '../../../components/full-form';

import imgBanner from '../../../assets/mulher-trabalhando-de-frente-a-dois-monitores.jpg';
import imgText from '../../../assets/mulher-usando-notebook-ao-lado-de-uma-sala-com-servidores.jpg';

function SegmentoTI() {

    return (
        <DefaultComponent navAction="segmento">
            <section className="segmento-TI">

                <Banner
                    titulo="Contabilidade para Profissionais de TI"
                    subtitulo="Segmentos"
                    urlImg={imgBanner}
                />

                <ImageWithText
                    titulo="Soluções contábeis para profissionais de tecnologia"
                    subtitulo="A área de Tecnologia da Informação é uma das que mais crescem em todo o mundo, cada vez mais integrado as estratégias empresariais pelas possibilidades digitais."
                    paragrafo="é muito comum Profissionais de TI atuarem como PJ (Pessoa Jurídica), e com isso, ganham mais mobilidade e liberdade para contribuir com empresas e projetos.
                                A escolha correta do enquadramento contábil é fundamental para o crescimento do negócio."
                    urlImg={imgText}
                    btn={{
                        cta: "Consulte-nos",
                        url: "#",
                        classAdd: "bg-black"
                    }}
                />
                <Form />
            </section>
        </DefaultComponent>
    );
}

export default SegmentoTI;