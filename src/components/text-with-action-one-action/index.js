import React from 'react';
import './style.css';
import ButtonAction from '../button';

function TextWithActionOnAction({titulo, subtitulo, paragrafo, btnAction }) {
    
    const {cta, url, classAdd} = btnAction;

    return (
        <section className="container-text-with-action-one">
            <div className="container">
                <div className="container-context">
                    <span>{titulo}</span>
                    <div className="context">
                        <h4>{subtitulo}</h4>
                        <p>{paragrafo}</p>
                    </div>
                </div>
                <div className="container-action">
                    <ButtonAction url={url} titulo={cta} classAdd={classAdd} />                   
                </div>
            </div>
        </section>
    );
}

export default TextWithActionOnAction;
