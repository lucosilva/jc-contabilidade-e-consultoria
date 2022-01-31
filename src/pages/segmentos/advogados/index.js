import React from "react";

import DefaultComponent from '../../../components/default-component';
import Banner from '../../../components/mainBanner-nivel-two';
import ImageWithText from '../../../components/image-with-text';
import Form from '../../../components/full-form';

import imgBanner from '../../../assets/homem-segurando-maleta.jpg';
import imgText from '../../../assets/dois-homens-se-comprimentando.jpg';

function SegmentoAdvogados() {

    return (
        <DefaultComponent navAction="segmento">
            <section className="segmento-advogados">

                <Banner
                    titulo="Contabilidade para Advogados"
                    subtitulo="Segmentos"
                    urlImg={imgBanner}
                />

                <ImageWithText
                    titulo="Serviços contábeis para quem é referência no segmento jurídico"
                    subtitulo="A JC Contabilidade traz um serviço exclusivo e dedicado de Contabilidade para Advogados e Escritórios de Advocacia."
                    paragrafo="Seja pela modalidade Sociedade Unipessoal de Advogados, ou outra modalidade societária, seja qual for o enquadramento do seu negócio, a contabilidade especializada para advogados pode oferecer amparo na organização de seu faturamento, impostos e tributos mensais, entre outras demandas."
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

export default SegmentoAdvogados;