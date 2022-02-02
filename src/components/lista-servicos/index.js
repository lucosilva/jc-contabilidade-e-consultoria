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
                    // {
                    //     title: "Empregada Doméstica",
                    //     context: "Aqui o a sua doméstica fica 100% dentro da Lei e com todos os seus direitos garantidos. Gerenciamento completo, guia DAE, envio de documentação do mês, suporte telefônico, chat e e-mail, fazemos seu cadastro no eSocial, emitimos todos os documentos de admissão.",
                    //     cta: "Fazer contato agora",
                    //     urlAction: "#"
                    // },
                    // {
                    //     title: "Youtuber",
                    //     context: "Digital Influencer Produtores de conteúdo, afiliados, blogger, ou qualquer atividade digital. Conhecemos profundamente esse segmento e oferecemos o planejamento tributário e contábil adequado a suas necessidades.",
                    //     cta: "Fazer contato agora",
                    //     urlAction: "#"
                    // }

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