import React from "react";
import './style.css';

import Button from './../button';

function CardWithIcon({ titulo, children, cta, urlAction}) {

    return (
        <div className="card-with-button">
            <h4>{titulo}</h4>
            <p>{children}</p>
            <Button url={urlAction} titulo={cta}/>
        </div>
    );
}

export default CardWithIcon;