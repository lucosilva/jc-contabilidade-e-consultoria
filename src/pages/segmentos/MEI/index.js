import React from "react";

import DefaultComponent from '../../../components/default-component';
import Banner from '../../../components/mainBanner-nivel-two';
import ImageWithText from '../../../components/image-with-text';
import Form from '../../../components/full-form';

import imgBanner from '../../../assets/duas-pessoas-segurando-uma-caixa-de-madeira.jpg';
import imgText from '../../../assets/banner-1.jpg';

function SegmentoMEI() {

    return (
        <DefaultComponent navAction="segmento">
            <section className="segmento-MEI">

                <Banner
                    titulo="Contabilidade para MEI"
                    subtitulo="Segmentos"
                    urlImg={imgBanner}
                />

                <ImageWithText
                    titulo="Para crescer, comece com o pé direito."
                    subtitulo="Destaque-se dentre os Microempreendedores Individuais, contrate uma assessoria contábil e esteja preparado para o crescimento."
                    paragrafo="Com a JC Contabilidade, é possível organizar as suas contas e obrigações contábeis com o melhor custo-benefício e sem burocracia. E com assessoria de um especialista que conhece bem o seu segmento, conseguirá atingir oportunidades que trarão expansão e grandes resultados"
                    urlImg={imgText}
                    btn={{
                        ancora: "1000",
                        ancoraMobile: "1350",
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

export default SegmentoMEI;