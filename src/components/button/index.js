import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";


function Button({url, titulo, classAdd, ancora, ancoraMobile}) {
    
    var classes = "button-action bg-warning text-dark " + classAdd;
    
    function ancoragem(){
        var largura = window.screen.width;
        var ancoraValue;
        var ancoraValueMobile;
        
        if(largura >= 768){
            if(ancora){
                ancoraValue = parseInt(ancora); 
                window.scrollTo(0,ancoraValue);
            }           
        }else{
            if(ancoraMobile){
                ancoraValueMobile = parseInt(ancoraMobile); 
                window.scrollTo(0,ancoraValueMobile);
            }
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