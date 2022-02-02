import React from "react";
import './style.css';
import { Link } from 'react-router-dom';
import DefaultComponent from '../../components/default-component';
import img404 from '../../assets/page_not_found.svg';

function Error404() {
    return (
        <DefaultComponent>
            <div className="nofind">
                <div className="container">
                    <img src={img404} alt='alt'/>
                    <h1>não encontramos essa pagina.</h1>                    
                    <Link to="/">ir para Inicio</Link>
                </div>
            </div>
        </DefaultComponent>
    );
}

export default Error404;