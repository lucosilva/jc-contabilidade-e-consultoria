import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";


function Button({url, titulo, classAdd, ancora}) {
    
    var classes = "button-action bg-warning text-dark " + classAdd;
    
    function ancoragem(){
        if(ancora){
            let ancoraValue = parseInt(ancora); 
            window.scrollTo(0,ancoraValue);
        }
    }

    return (
        <Link className={classes} to={url} onClick={ancoragem}>
            {titulo}
            <FiArrowRight />
        </Link>
    );
}

export default Button;