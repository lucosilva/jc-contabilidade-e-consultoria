import React from 'react';
import './style.css';
import { FiX } from "react-icons/fi";
import qrcode from './../../assets/qrcode.svg';

function ButtonWhatsApp() {

    function onChange(){
        var modal = document.querySelector('.container-modal-whatsapp');
        modal.classList.toggle("open-container");  
        setTimeout(()=>{
            modal.classList.toggle("open-modal-whats");  
        },200) 
    }

    return (
        <>           
            <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5511964674634&text=Olá, JC Contabilidade e Consultoria" className='whatsApp btn-mobile'></a>
            <button className='whatsApp btn-desk' onClick={()=>{onChange()}}></button>

            <div className="container-modal-whatsapp">
                <div className="modal-whatsapp">
                    <div className="modal-whatsapp-header">
                        <button onClick={()=>{onChange()}}>
                            <FiX />
                        </button>
                    </div>
                    <div className="modal-whatsapp-body">
                        <h2 className="title"> Escaneie o QRCode e tire dúvidas pelo WhatsApp </h2>
                        
                        <img aria-hidden="false" className="qr-code" src={qrcode} alt="Qrcode para acessar o atendimento por whatsapp no celular."/>
                        
                        <p>Para acessar nosso canal no Whatsapp e tirar dúvidas, escaneie o QR Code
                             com a câmera do seu smartphone ou adicione o numero (11) 96467-4634 em seus contatos.</p>                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default ButtonWhatsApp;