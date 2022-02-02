import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import logoWhite from '../../assets/logo-white.png';

import Social from './componets/Social';
import ButtonAction from '../button';

function Footer() {
    
    return (
        <footer>
            <div className="container">
                <div className="context">
                    <div className="apresentation">
                        <img src={logoWhite} 
                                titulo='Consultoria Fiscal e Tributária' 
                                classe='logo' 
                                color='white' />
                        <h3> O objetivo da nossa empresa de contabilidade vai além da execução das rotinas legais impostas pelo fisco. </h3>
                        <p>Oferecemos a nossos clientes, uma relação próxima e transparente, onde a troca de experiência e conhecimento faz parte do dia-a-dia.</p>
                       
                    <ButtonAction url="/contato/" titulo="Faça seu orçamento"/>
                    </div>
                    <nav>
                        <div className="menuItem">
                            <div className="header">
                             <span> Serviços </span>                            
                            </div>
                            <ul>
                                <li><Link to="/segmentos/contabilidade-para-medicos/">Contabilidade para Médicos</Link></li>
                                <li><Link to="/segmentos/contabilidade-para-advogados/">Contabilidade para Advogados</Link></li>
                                <li><Link to="/segmentos/contabilidade-para-ti/">Contabilidade para TI</Link></li>
                                <li><Link to="/segmentos/contabilidade-para-mei/">Contabilidade MEI</Link></li>                                
                            </ul>
                        </div>
                        <div className="menuItem">
                            <div className="header">
                             <span> Outros </span>                            
                            </div>
                            <ul>
                                <li><Link to="/privacidade/">Privacidade</Link></li>
                                 {/* eslint-disable-next-line */}
                                <li><a href="http://consultoriatributariaefiscal.blogspot.com/" rel="noopener" target="_blank">Blog</a></li>
                            </ul>
                        </div>
                        <div className="menuItem contato">
                            <div className="header">
                             <span> Contato </span>                            
                            </div>
                            <ul>
                                <li>Fique à vontade para entrar em contato conosco por telefone ou enviar mensagem.</li>
                                <li><a href='tel:1123381893'>(11) 2338-1893</a></li>
                                <li><a href='tel:964674634'>(11) 9 6467-4634</a></li>
                                <li><a href='mailto:contato@clf.srv.br?subject=gostaria de solicitar um orçamento'>contato@clf.srv.br</a></li>
                            </ul>
                        </div>                
                    </nav>
                </div>
                <div className="container-bottom">
                    <span>©JC 2022, todos os direitos reservados.</span>

                    <Social 
                    facebook="https://www.facebook.com/clf.consultoriatributaria" 
                    instagram="https://www.instagram.com/clf.consultoriatributaria/" 
                    linkedin="https://www.linkedin.com/in/clfconsultoriafiscal-clf-35637020b/" />

                </div>
            </div>
        </footer>
    );
}

export default Footer;