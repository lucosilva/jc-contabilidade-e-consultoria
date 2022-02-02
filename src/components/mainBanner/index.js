import React, { useEffect } from "react";
import './style.css';
import ArrowScroll from '../ArrowScroll';

import videoBanner5 from '../../assets/banner-video5.mp4';
import videoBanner4 from '../../assets/banner-video4.mp4';
import videoBanner3 from '../../assets/banner-video3.mp4';
import videoBanner2 from '../../assets/banner-video2.mp4';
import videoBanner1 from '../../assets/banner-video1.mp4';

function MainBanner({ titulo, subtitulo, urlImg }) {

    useEffect(() => {
        const videoEl = document.querySelector("#videoBanner");
        const sourceVideoEl = document.querySelector("#sourceVideoBanner");

        var count = 2;
        var videoSelected = "";

        videoEl.addEventListener('ended', function () {

            switch (count) {
                case 1: videoSelected = videoBanner1;
                    break;
                case 2: videoSelected = videoBanner2;
                    break;
                case 3: videoSelected = videoBanner3;
                    break;
                case 4: videoSelected = videoBanner4;
                    break;
                default: videoSelected = videoBanner5;
                    count = 0;         
            }

            sourceVideoEl.setAttribute('src', videoSelected);
            videoEl.load();

            count++;
        });
    }, []);

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
                        <video id="videoBanner" autoplay="autoplay" muted="muted"   >
                            <source id="sourceVideoBanner" src={videoBanner1} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
            <ArrowScroll />
        </div>
    )
}

export default MainBanner;