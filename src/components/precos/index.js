import React from 'react';
import './style.css';

import CardPrice from '../../components/card-price';

function Precos() {
    return (
        <section className='precos'>

            <div class="precos-title">
                <div class="container">
                    <h3>Traga sua empresa para a OSP</h3>
                    <p>Temos uma GRANDE expertise nos seguintes setores.</p>
                </div>
            </div>

            <div className="container">
                <div className="precos-container">
                    <CardPrice titulo="Início Brilhante" price="300,00" cta="Escolher Plano" urlAction="/contato/" >
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
                        ]}
                    </CardPrice>
                    <CardPrice titulo="Hora da Arrancada" price="300,00" cta="Escolher Plano" urlAction="/contato/" >
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
                        ]}
                    </CardPrice>
                    <CardPrice titulo="Enterprise" price="300,00" cta="Escolher Plano" urlAction="/contato/" >
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
                        ]}
                    </CardPrice>
                </div>
            </div>
        </section>
    )
}

export default Precos;
