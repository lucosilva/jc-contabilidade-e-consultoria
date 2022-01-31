import React from "react";
import './style.css';

import Button from './../button';
import { FiX } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";

function CardPrice({ titulo, children, cta, urlAction, price}) {
    
    const lista = [...children];

    
                {/* <CardPrice icon={FiBox} titulo="Início Brilhante" price="300,00" cta="Escolher Plano" urlAction="#" >
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
                </CardPrice> */}
    
    return (
        <div className="card-price">
            <h4>{titulo}</h4>
            <div className="price">
                <p><span>R$ </span>{price}</p>
            </div>
            <div className="plano">
                <span>mensal</span>
            </div>
            <ul>
                {
                    lista.map((itemLista)=>{
                        const {contempla, text} = itemLista;
                        const classesCss = 'icon-container-price '+ contempla;
                        const Icon = contempla == 'yes' ? FiCheck : FiX;
                        return <li><span className={classesCss}><Icon/></span>{text}</li>
                    })
                }                             
            </ul>

            <Button url={urlAction} titulo={cta}/>
        </div>
    );
}

export default CardPrice;