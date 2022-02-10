import React from 'react';
import './style.css';

import Default from '../../components/default-component';
import imgSucesso from '../../assets/undraw_Order_confirmed_re_g0if.svg';
import Button from '../../components/button';

function Success() {
    return (
        <Default>
            <div className="success">
                <div className="container">
                    <h1>
                        Pegamos todas <br/>as informações.
                    </h1>

                    <img src={imgSucesso} alt="" />

                    <p>Logo, entraremos em contato.</p>

                    <Button url="/" titulo="voltar ao inicio"/>
                </div>
            </div>
        </Default>
    );
}

export default Success;