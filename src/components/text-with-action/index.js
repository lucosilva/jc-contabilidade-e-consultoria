import React from 'react';
import './style.css';
import ButtonAction from '../button';

function TextWithAction({titulo, subTitulo, contexto, btnObj }) {

    const lista = [...btnObj];

    return (
        <section className="container-text-with-action">
            <div className="container">
                <div className="container-context">
                    <span>{titulo}</span>
                    <div className="context">
                        <h4>{subTitulo}</h4>
                        <p>{contexto}</p>
                    </div>
                </div>
                <div className="container-action">
                    {lista.map(({url_, titulo_, classAdicional_, ancora}, index)=>{
                        return <ButtonAction key={index} url={url_} titulo={titulo_} classAdd={classAdicional_} ancora={ancora}/>
                    })}                    
                </div>
            </div>
        </section>
    );
}

export default TextWithAction;
