import React from "react";
import './style.css';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import ButtonWhatsApp from '../../components/button_whatsapp';
import Social from '../../components/social';
import BtnScrollTop from '../../components/ArrowScrollTop';
import PrivacyPolicyModal from '../../components/PrivacyPolicyModal';

function DefaultComponent({ navAction ,children }) {
    return (
        <>
            <NavBar active={navAction} />
            <main>
                {children}
                <ButtonWhatsApp />
                <Footer />
            </main>
            <Social/>
            <BtnScrollTop />
            <PrivacyPolicyModal/>
        </>
    )
}

export default DefaultComponent;