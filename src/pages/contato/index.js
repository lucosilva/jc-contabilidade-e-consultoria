import React from 'react';
import './style.css';

import DefaultComponent from '../../components/default-component';
import Form from '../../components/full-form';

function Contato() {
    return (
        <section className='contatos'>
            <DefaultComponent navAction="fale-conosco">
                <div className="container">
                    <div className="contatos-lista-container">
                        <div className="context-container">
                            <div className="left">
                                <div className="enderecos">
                                    <span>Endereço</span>
                                    <p>Rua Dr. Silva Mendes, 855, Vila Industrial, Campinas-SP CEP13035-580</p>
                                </div>
                                <div className="atendimento">
                                    <span>Atendimento</span>
                                    <p>Segunda-Sexta: 7:30 às 17:30</p>
                                </div>
                                <div className="contato-atendimento">
                                    <span>Telefone</span>
                                    <p>(11) 2338-1893 <br />(11) 9 6467-4634</p>
                                </div>
                            </div>
                            <div className="right">
                                <div className="text">
                                    <h4>Oferecemos a nossos clientes, uma relação próxima e transparente, onde a troca de experiência e conhecimento faz parte do dia-a-dia.</h4>
                                </div>
                                <div className="email">
                                    <p>contato@clf.srv.br</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Form />
            </DefaultComponent>
        </section>
    )
}

export default Contato;