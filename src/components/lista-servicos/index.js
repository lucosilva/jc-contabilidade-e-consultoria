import React from 'react';
import './style.css';
import CardContainer from '../../components/card-container';

function ListaServicos() {
    return (
        <section className='lista-servicos-container'>
            <div className="container">
                <div className="lista-servicos-title">
                    <h3>Traga sua empresa para a JC contabilidade e Consultoria</h3>
                    <p>Temos uma GRANDE expertise nos seguintes setores.</p>
                </div>
            </div>

            <CardContainer
                typeCard="card-with-button"
                objCard={[
                    {
                        title: "Serviços Médicos",
                        context: "Contabilidade para médicos, dentistas, fisioterapeutas, fonoaudiólogos. Dezenas de profissionais da saúde já foram beneficiados pelo planejamento tributário executado por nossos profissionais. Faça o seu contato agora.",
                        cta: "Fazer contato agora",
                        urlAction: "/segmentos/contabilidade-para-medicos/"
                    },
                    {
                        title: "Advogados",
                        context: "Atuando como Pessoa Jurídica o profissional do direito pode ter uma economia de até 80% no pagamento dos seus tributos? Somos especialistas no atendimento a profissionais do direito e estamos prontos para ajudá-lo.",
                        cta: "Fazer contato agora",
                        urlAction: "/segmentos/contabilidade-para-advogados/"
                    },
                    {
                        title: "Serviços de TI",
                        context: "Atuando como PJ o profissional de tecnologia tem uma economia tributária e também a flexibilidade de não ficar restrito as regras de uma relação de emprego. Programadores, Desenvolvedores, Designers e outros. Faça o seu contato agora e saiba como podemos ajudá-lo.",
                        cta: "Fazer contato agora",
                        urlAction: "/segmentos/contabilidade-para-ti/"
                    },
                    {
                        title: "MEI",
                        context: "Destaque-se dentre os Microempreendedores individuais, contrate uma assessoria contábil e esteja preparado para o crescimento.",
                        cta: "Fazer contato agora",
                        urlAction: "/segmentos/contabilidade-para-mei/"
                    },                   
                    {
                        title: "Digital Influencer",
                        context: "Produtores de conteúdo, youtubers, afiliados, blogger, ou qualquer atividade digital. Conhecemos profundamente esse segmento e oferecemos o planejamento tributário e contábil adequado a suas necessidades.",
                        cta: "Fazer contato agora",
                        urlAction: "/segmentos/contabilidade-para-influenciadores/"
                    },
                    {
                        title: "Comércios em geral",
                        context: "Bares, restaurantes, padarias, adegas, perfumarias, autopeças, pet shop, drogarias, pizzarias, mercados, lojas de roupas, etc.",
                        cta: "Fazer contato agora",
                        urlAction: "/segmentos/contabilidade-para-comercios-em-geral/"
                    }                    

                ]}
                buttonAction={{
                    active: false,
                    url: "#",
                    title: "Outros segmentos",
                    classAdicional: "bg-black"
                }}
            />
        </section>
    )
}

export default ListaServicos;