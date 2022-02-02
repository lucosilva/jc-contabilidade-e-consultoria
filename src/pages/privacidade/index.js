import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import DefaultComponent from '../../components/default-component';

function Privacidade() {
    return (
        <DefaultComponent>
            <div className="privacyPolicy">

                <div className="container">
                    <span>Atualizado em Fevereiro de 2022</span>
                    <h1>Termos de Uso e Politica de Privacidade</h1>

                    <p>O JC Contabilidade e Consultoria, apoia a transparência com nossos clientes.
                        Apresentamos os nossos Termos de Uso e a nossa Política de Privacidade para que os nossos Usuários compreendam facilmente as condições para uso do nosso Site e a forma como coletamos, usamos ou de outra forma tratamos estas informações e Dados Pessoais de usuários de acordo com a LGPD - Lei Geral de Proteção de Dados Pessoais <a target="_blank" rel="noreferrer" href="https://www.gov.br/defesa/pt-br/acesso-a-informacao/lei-geral-de-protecao-de-dados-pessoais-lgpd">(Lei nº 13.709)</a>, e demais legislações aplicáveis.
                        Se tiver dúvidas, entre em contato conosco pelos nossos <Link to="/contato/">canais de atendimento</Link>.
                    </p>

                    <h3>Índice</h3>
                    <ol>
                        <li>Conteúdos enviados por Usuários</li>
                        <li>Links para sites e aplicativos de terceiros</li>
                        <li>Sobre os Cookies</li>
                    </ol>


                    <ol>
                        <h4><li>Conteúdos enviados por Usuários</li></h4>
                        <p>Nosso Site permite que os Usuários enviem conteúdo para fins de orçamento, dados como nome, telefone e e-mail, os conteúdos enviados, poderão ser visualizados por membros da JC Contabilidade e Consultoria.
                            Os conteúdos enviados não ficarão disponíveis em áreas aberta do Site.
                            Lembramos que, os conteúdos enviados serão de responsabilidade de quem os enviou.
                        </p>

                        <h4><li>Links para sites e aplicativos de terceiros</li></h4>
                        <p>
                            Nosso Site pode conter links para sites e aplicativos de terceiros. Note que dentro destes sites e aplicativos você estará sujeito a outros termos de uso e a outras políticas de privacidade.
                        </p>

                        <h4><li>Sobre os cookies</li></h4>
                        <p>
                            Os cookies permitem a coleta de dados relacionadas à navegação dependendo do tipo de dispositivo usado, das autorizações concedidas por você através das configurações de seu dispositivo e das funcionalidades utilizadas em cada aplicação. Podemos utilizar cookies próprios ou de terceiros em nosso Site.
                        </p>

                    </ol>


                </div>
            </div>
        </DefaultComponent>
    )
}

export default Privacidade;