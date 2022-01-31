import React from "react";
import './style.css';

import Button from './../button';
import { FiX } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";

function CardPrice({ titulo, children, cta, urlAction, price}) {
    
    const lista = [...children];            
    
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
                    lista.map((itemLista,index)=>{
                        const {contempla, text} = itemLista;
                        const classesCss = 'icon-container-price '+ contempla;
                        const Icon = contempla === 'yes' ? FiCheck : FiX;
                        return <li key={index}><span className={classesCss}><Icon/></span>{text}</li>
                    })
                }                             
            </ul>

            <Button url={urlAction} titulo={cta}/>
        </div>
    );
}

export default CardPrice;