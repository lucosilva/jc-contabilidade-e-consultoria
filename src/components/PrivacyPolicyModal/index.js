import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { FiX } from "react-icons/fi";

function PrivacyPolicyModal(props) {

    const [display, setDisplay] = useState("block");

    useEffect(() => {
        
        var check = checkCookie("PrivacyPolicyJC");
        if (check) {
            setDisplay("none");
        }
        // eslint-disable-next-line
    }, [])

    function closeAction() {
        setCookie("PrivacyPolicyJC", "true");
        setDisplay("none");
    }

    function checkCookie(cname) {
        var username = getCookie(cname);
        return username !== "" ? true : false;
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function setCookie(cookname, cookValue) {
        var d = new Date();
        d.setTime(d.getTime() + (365*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();

        document.cookie = cookname + ' = ' + cookValue + ";"+ expires + ";";
    }


    return (

        <div style={{ "display": display }}>
            <div className="PrivacyPolicyModal">
                <div onClick={closeAction}>
                    <FiX />
                </div>
                <p>
                    Este site usa cookies para aprimorar sua experiência, ao continuar navegando, você declara estar ciente com os nossos <Link to="/privacidade/">Termos de Uso e Política de Privacidade</Link>.
            </p>
            </div>
        </div>
    );
}


export default PrivacyPolicyModal;