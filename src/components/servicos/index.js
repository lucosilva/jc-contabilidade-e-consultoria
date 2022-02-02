import React from 'react';
import './style.css';

import CardContainer from '../../components/card-container';

import { FiCheckCircle } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { FiDollarSign } from "react-icons/fi";
import { GoGift } from "react-icons/go";
import { BiBulb } from "react-icons/bi";
import { BiConversation } from "react-icons/bi";


function Servicos() {
    return (
        <section className='servicos'>

            <div className="servicos-title">
                <div className="container">
                    <h3>Traga sua empresa para JC contabilidade e Consultoria</h3>
                    <p>Temos uma GRANDE expertise nos seguintes setores.</p>
                </div>
            </div>

            <CardContainer
                typeCard="card-with-icon"
                objCard={[
                    {
                        title: "Abertura de Empresas",
                        icon_main: FiCheckCircle,
                        context: "Aqui na JC contabilidade e Consultoria você começa com o pé direito. Centenas de clientes satisfeitos."
                    },
                    {
                        title: "Folha e Pró Labore",
                        icon_main: FiDollarSign,
                        context: "Controle sua folha de pagamento e pró labore de maneira fácil e intuitiva."
                    },
                    {
                        title: "Planejamento tributário",
                        icon_main: GoGraph,
                        context: "Aqui você tem a certeza de estar pagando o imposto certo."
                    },
                    {
                        title: "Contabilidade inteligente",
                        icon_main: BiBulb,
                        context: "Fazemos a sua contabilidade de maneira simples através do seu extrato bancário digital, sem a necessidade de sistemas e gastos extras."
                    },
                    {
                        title: "Atendido humano eficiente",
                        icon_main: BiConversation,
                        context: "Atendimento 100% humanizado realizado através do Whatsapp, e-mail, nossa plataforma on-line e pessoal."
                    },
                    {
                        title: "Atendimento especializado",
                        icon_main: GoGift,
                        context: "Nossos contadores são especialistas no atendimento ao seu segmento, entendemos do seu dia-a-dia e principalmente suas dores."
                    }
                ]}
                action={{ active: false }}
            />
        </section>
    )
}
export default Servicos;