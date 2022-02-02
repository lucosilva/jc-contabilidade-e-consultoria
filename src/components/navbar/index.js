import React, { useEffect } from "react";
import './style.css';
import { Link } from 'react-router-dom';
import ButtonAction from '../../components/button';
import logo from '../../assets/logo.png';
// import logoWhite from '../../assets/logo-white.png';

function NavBar({ active }) {

    useEffect(() => {

        window.addEventListener('scroll', onScroll);

        const linkEl = document.querySelectorAll(".nav-link");
        const elList = [...linkEl];

        elList.map(el => {
            el.classList.remove("active");
        });

        switch (active) {
            case "home": linkEl[0].classList.add("active");
                break;

            case "abra-sua-empresa": linkEl[1].classList.add("active");
                break;

            case "segmento": linkEl[2].classList.add("active");
                break;

            case "blog": linkEl[3].classList.add("active");
                break;

            case "fale-conosco": linkEl[4].classList.add("active");
                break;
        }

        window.scrollTo(0, 0)

    }, []);

    function onScroll() {
        let topo = parseInt(window.scrollY);
        let navbarEl = document.querySelector(".navbar");
        let socialEl = document.querySelector(".social");
        let btnScrollTopEl = document.querySelector(".btn-scroll-top");

        if (topo > 300) {
            navbarEl.classList.add("effectShadow");
            socialEl.classList.add("social-on");
            btnScrollTopEl.classList.add("btn-scroll-top-on");
        } else {
            navbarEl.classList.remove("effectShadow");
            socialEl.classList.remove("social-on");
            btnScrollTopEl.classList.remove("btn-scroll-top-on");
        }
    }


    return (

        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">

                <div className="me-sm-3">
                    <Link to="/">
                        <img className="navbar-brand"
                            src={logo}
                            alt="logo" />
                    </Link>
                </div>



                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item me-xl-3">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item me-xl-3">
                            <Link className="nav-link" to="/nova-empresa/">Abra sua Empresa</Link>
                        </li>
                        <li className="nav-item dropdown me-xl-3">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Troque de contador
                            </Link>
                            <ul className="dropdown-menu bg-light bg-opacity-75" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/segmentos/contabilidade-para-medicos/">Contabilidade para Médicos</Link></li>
                                <li><Link className="dropdown-item" to="/segmentos/contabilidade-para-advogados/">Contabilidade para Advogados</Link></li>
                                <li><Link className="dropdown-item" to="/segmentos/contabilidade-para-ti/">Contabilidade para TI</Link></li>
                                <li><Link className="dropdown-item" to="/segmentos/contabilidade-para-mei/">Contabilidade MEI</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item me-xl-3">
                            <a className="nav-link" href="http://consultoriatributariaefiscal.blogspot.com/">Blog</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contato/">Fale Conosco</Link>
                        </li>

                    </ul>
                        <ButtonAction url="/contato/" titulo="Faça seu orçamento" classAdd="ms-sm-auto me-sm-3 btn-contrate " />
                </div>

                

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            </div>
        </nav>
    );
}

export default NavBar;