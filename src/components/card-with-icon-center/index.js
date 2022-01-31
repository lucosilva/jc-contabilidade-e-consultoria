import React from "react";
import './style.css';


function CardWithIconCenter(props) {
    const { titulo, icon, children } = props;
    const Icon = icon;

    return (
        <div className="card-with-icon-center">
            <div className="icon-container">              
                <img src={Icon} alt="" />  
            </div>
            <h4>{titulo}</h4>
            <p>{children}</p>
        </div>
    );
}

export default CardWithIconCenter;