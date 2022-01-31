import React from 'react';
import './style.css';
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Social(props) {

    return (
        <div className="social-container">
            <a target="_blank" rel="noreferrer" href={props.facebook}>
                <FaFacebookF />
            </a>
            <a target="_blank" rel="noreferrer" href={props.instagram}>
                <FaInstagram />
            </a>
            <a target="_blank" rel="noreferrer" href={props.linkedin}>
                <FaLinkedinIn />
            </a>
        </div>
    )
}

export default Social;