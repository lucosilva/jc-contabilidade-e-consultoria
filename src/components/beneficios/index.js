import React from 'react';
import CardContainer from '../../components/card-container';
import img1 from '../../assets/revenue.svg';
import img2 from '../../assets/investing.svg';
import img4 from '../../assets/texting.svg';

function Beneficios() {
    return (
        <>
            <CardContainer
                typeCard="card-with-icon-center"
                objCard={[
                    {
                        title: "Contabilidade Especializada",
                        icon_main: img1,
                        context: "A OSP Digital atua com contabilidade especializada em Micro e Pequenas Empresas, Advogados, Médicos e MEI"
                    },
                    {
                        title: "Atendimento Pessoal",
                        icon_main: img4,
                        context: "Na OSP Contabilidade Digital você é atendido por pessoas de verdade, utilizando ferramentas como Whatsapp e Vídeo Conferência na comodidade do seu escritório"
                    },
                    {
                        title: "Internet e Tecnologia",
                        icon_main: img2,
                        context: "Utilizamos tecnologia para que você tenha mais tempo no desenvolvimento do seu negócio"
                    }
                ]}
                action={{active:false}}
            />
        </>
    )
}

export default Beneficios;