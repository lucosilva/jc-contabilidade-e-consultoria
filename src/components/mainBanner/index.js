import React from "react";
import './style.css';
import ArrowScroll from '../ArrowScroll';

// import videoBanner from '../../assets/banner-video2.mp4';

function MainBanner({ titulo, subtitulo, urlImg }) {

    return (
        <div className="container-main-banner">
            <div className="container">
                <div className="context">
                    <div className="title">
                        <h1>{titulo}</h1>
                        <p>{subtitulo}</p>
                    </div>

                    <div className="bg-main-banner" style={{ backgroundImage: `url(${urlImg})` }}> 
                        {/* <video autoplay="autoplay" muted="muted" loop="loop"  >
                            <source src={videoBanner} type="video/mp4" />
                        </video> */}
                    </div>
                </div>
            </div>
            <ArrowScroll />
        </div>
    )
}

export default MainBanner;