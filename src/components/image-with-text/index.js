import React from 'react';
import './style.css';

import ButtonAction from '../button';

function ImageWithText({titulo, subtitulo, urlImg, paragrafo, btn}) {
    const {cta, url, classAdd, ancora} = btn;
    return (
        <section className='image-with-text'>
            <div className="container">
                <div className="image-container" style={{backgroundImage : `url(${urlImg})`}}>
                </div>
                <div className="context">
                    <h3>{titulo}</h3>
                    <h4>{subtitulo}</h4>
                    <p>{paragrafo}</p>

                    <ButtonAction url={url} titulo={cta} classAdd={classAdd} ancora={ancora}/>
                </div>
            </div>
        </section>
    );
}

export default ImageWithText;