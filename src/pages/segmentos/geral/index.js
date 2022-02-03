import React from "react";

import DefaultComponent from '../../../components/default-component';
import Banner from '../../../components/mainBanner-nivel-two';
import ImageWithText from '../../../components/image-with-text';
import Form from '../../../components/full-form';

import imgBanner from '../../../assets/geral1.jpg';
import imgText from '../../../assets/geral.jpg';

function SegmentoGeral() {

    return (
        <DefaultComponent navAction="segmento">
            <section className="segmento-influencer">

                <Banner
                    titulo="Contabilidade para Comércios em geral"
                    subtitulo="Segmentos"
                    urlImg={imgBanner}
                />

                <ImageWithText
                    titulo="Consultoria e assessoria contábil para comércios em geral"
                    subtitulo=""
                    paragrafo="Bares, restaurantes, padarias, adegas, perfumarias, autopeças, pet shop, drogarias, pizzarias, mercados, lojas de roupas, outros."
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

export default SegmentoGeral;