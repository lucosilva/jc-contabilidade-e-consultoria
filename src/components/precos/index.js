import React from 'react';
import './style.css';

import CardPrice from '../../components/card-price';

function Precos() {
    return (
        <section className='precos'>

            <div className="precos-title">
                <div className="container">
                    <h3>Traga sua empresa para a JC contabilidade e Consultoria</h3>
                    <p>Conheça nossos planos.</p>
                </div>
            </div>

            <div className="container">
                <div className="precos-container">
                    <CardPrice titulo="Bronze" price="" cta="Escolher Plano" urlAction="/contato/" >
                        {[
                            {
                                contempla: 'yes',
                                text: 'Fatura até R$ 20.000/Mês'
                            },
                            {
                                contempla: 'yes',
                                text: 'Seus Impostos Mensais'
                            },
                            {
                                contempla: 'yes',
                                text: 'Suporte Completo'
                            },
                            {
                                contempla: 'no',
                                text: 'Folha de Pagamento'
                            },
                            {
                                contempla: 'no',
                                text: 'Gestão financeira'
                            }
                        ]}
                    </CardPrice>
                    <CardPrice titulo="Prata" price="300,00" cta="Escolher Plano" urlAction="/contato/" >
                        {[
                            {
                                contempla: 'yes',
                                text: 'Fatura até R$ 50.000/Mês'
                            },
                            {
                                contempla: 'yes',
                                text: 'Seus Impostos Mensais'
                            },
                            {
                                contempla: 'yes',
                                text: 'Suporte Completo'
                            },
                            {
                                contempla: 'yes',
                                text: 'Folha de Pagamento até 3 funcionários'
                            },
                            {
                                contempla: 'yes',
                                text: 'Gestão financeira'
                            }
                        ]}
                    </CardPrice>
                    <CardPrice titulo="Ouro" price="300,00" cta="Escolher Plano" urlAction="/contato/" >
                        {[
                            {
                                contempla: 'yes',
                                text: 'Fatura até R$ 100.000/Mês'
                            },
                            {
                                contempla: 'yes',
                                text: 'Seus Impostos Mensais'
                            },
                            {
                                contempla: 'yes',
                                text: 'Suporte Completo'
                            },
                            {
                                contempla: 'yes',
                                text: 'Folha de Pagamento até 5 funcionários'
                            },
                            {
                                contempla: 'yes',
                                text: 'Gestão financeira'
                            }
                        ]}
                    </CardPrice>
                </div>
            </div>
        </section>
    )
}

export default Precos;
