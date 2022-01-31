import React from 'react';
import './style.css';

import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Social() {
    return (
        <>

            <section className='social'>
                <a href="#">
                    <FaInstagram />
                </a>
                <a href="#">
                    <FaFacebookF />
                </a>
                <a href="#">
                    <FaTwitter />
                </a>
                <a href="#">
                    <FaLinkedinIn />
                </a>

            </section>
        </>
    )
}

export default Social;