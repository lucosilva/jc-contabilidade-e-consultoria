import React from "react";

import DefaultComponent from '../../../components/default-component';
import Banner from '../../../components/mainBanner-nivel-two';
import ImageWithText from '../../../components/image-with-text';
import Form from '../../../components/full-form';

import imgBanner from '../../../assets/banner-segmento-medico.jpg';
import imgText from '../../../assets/doutor.jpg';

function SegmentoMedico() {

    return (
        <DefaultComponent navAction="segmento">
            <section className="segmento-medico">

                <Banner
                    titulo="Contabilidade para Médicos"
                    subtitulo="Segmentos"
                    urlImg={imgBanner}
                />

                <ImageWithText
                    titulo="Soluções contábeis para médicos, clínicas e consultórios."
                    subtitulo="Tratar das demandas do seu empreendimento no segmento de saúde de forma especializada."
                    paragrafo="Nossa expertise permite que você tenha o controle completo de suas obrigações tributárias e fiscais, com um atendimento direcionado às oportunidades econômicas e de adequação tributária para que o seu negócio tenha mais sucesso."
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

export default SegmentoMedico;