import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Medico from './pages/segmentos/medicos';
import Advogados from './pages/segmentos/advogados';
import TI from './pages/segmentos/TI';
import Influencer from './pages/segmentos/Influencer';
import MEI from './pages/segmentos/MEI';
import Geral from './pages/segmentos/geral';

import NovaEmrpresa from './pages/nova-empresa';
import Contato from './pages/contato';
import Privacidade from './pages/privacidade';

import Page404 from './pages/page404';

function RoutesPage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/nova-empresa/" element={<NovaEmrpresa />} />
                <Route path="/contato/" element={<Contato />} />
                <Route path="/privacidade/" element={<Privacidade />} />
                <Route path="/segmentos/contabilidade-para-medicos/" element={<Medico />} />
                <Route path="/segmentos/contabilidade-para-advogados/" element={<Advogados />} />
                <Route path="/segmentos/contabilidade-para-ti/" element={<TI />} />
                <Route path="/segmentos/contabilidade-para-mei/" element={<MEI />} />
                <Route path="/segmentos/contabilidade-para-influenciadores/" element={<Influencer />} />
                <Route path="/segmentos/contabilidade-para-comercios-em-geral/" element={<Geral />} />

                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>     
    )
}

export default RoutesPage;