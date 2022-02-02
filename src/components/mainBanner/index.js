import React, { useEffect } from "react";
import './style.css';
import ArrowScroll from '../ArrowScroll';

import videoBanner from '../../assets/banner.mp4';

function MainBanner({ titulo, subtitulo, urlImg }) {

    return (
        <div className="container-main-banner">
            <div className="container">
                <div className="context">
                    <div className="title">
                        <h1>{titulo}</h1>
                        <p>{subtitulo}</p>
                    </div>

                    {/* style={{ backgroundImage: `url(${urlImg})` }} */}
                    <div className="bg-main-banner" >
                        <video id="videoBanner" autoplay="autoplay" muted="muted" loop="loop" >
                            <source id="sourceVideoBanner" src={videoBanner} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
            <ArrowScroll />
        </div>
    )
}

export default MainBanner;