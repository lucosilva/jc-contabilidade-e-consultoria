import React from "react";
import './style.css';


function CardWithIcon(props) {
    const { titulo, icon, children } = props;
    const Icon = icon;

    return (
        <div className="card-with-icon">
            <div className="icon-container">
                <Icon />
            </div>
            <h4>{titulo}</h4>
            <p>{children}</p>
        </div>
    );
}

export default CardWithIcon;