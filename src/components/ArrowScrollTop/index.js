import React from 'react';
import "./style.css";

import { FiChevronUp } from "react-icons/fi";

function ArrowScrollTop(){

    function scrollTop(){
        window.scrollTo(0,0);
    }
    return(
        <>
            <button className='btn-scroll-top' onClick={scrollTop}>
                voltar ao topo
                <FiChevronUp/>
            </button>
        </>
    )
}

export default ArrowScrollTop;