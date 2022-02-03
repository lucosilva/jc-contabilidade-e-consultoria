import React from "react";

import DefaultComponent from '../../../components/default-component';
import Banner from '../../../components/mainBanner-nivel-two';
import ImageWithText from '../../../components/image-with-text';
import Form from '../../../components/full-form';

import imgBanner from '../../../assets/influencer.jpg';
import imgText from '../../../assets/influencer2.jpg';

function SegmentoInfluencer() {

    return (
        <DefaultComponent navAction="segmento">
            <section className="segmento-influencer">

                <Banner
                    titulo="Contabilidade para Influenciadores Digitais"
                    subtitulo="Segmentos"
                    urlImg={imgBanner}
                />

                <ImageWithText
                    titulo="Consultoria e assessoria contábil para quem é referência no mercado digital"
                    subtitulo="Produtores de conteúdo, afiliados, bloggers ou empreendedores digitais de qualquer segmento."
                    paragrafo="Seja para grandes influenciadores ou profissionais ainda iniciantes nesta carreira, a contabilidade é necessária, não apenas cumprir com suas obrigações tributárias e fiscais, bem como indicar novas possibilidades de crescimento para o seu negócio"
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

export default SegmentoInfluencer;