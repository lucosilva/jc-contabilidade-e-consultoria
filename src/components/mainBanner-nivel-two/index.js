import react from "react";
import './style.css';

function MainBanner({titulo, subtitulo, urlImg}) {
    return (
        <div className="container-main-banner-nivel-two" style={{backgroundImage : `url(${urlImg})`}}>
            <div className="container">
                <div className="context">
                    <h1>{titulo}</h1>
                    <p>{subtitulo}</p>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;