import React, { useState } from 'react';
import './style.css';
import { useNavigate, Link } from 'react-router-dom';
import InputMask from 'react-input-mask';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const quinzeSegundosDuracaoNotificacao = 15 * 1000;
toast.configure({ autoClose: quinzeSegundosDuracaoNotificacao, theme: "dark" });


function Form() {

    const history = useNavigate();
    const valueInit = {
        name: "",
        email: "",
        tel: "",
        estado: "Nenhum",
        municipio: "",
        assunto: "Nenhum",
        msg: ""
    }

    const [dataForm, setDataForm] = useState(valueInit);

    function handleChange(key, newValue) {
        setDataForm({
            ...dataForm,
            [key]: newValue
        });
    }

    async function sendEmail() {

        const API_URL = "https://app-send-email-v2.herokuapp.com/data/form/";

        const response = await toast.promise(
            fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(dataForm),
            }),
            {
                pending: 'Estamos recebendo os seus dados...',
                success: 'Tudo ok. recebemos tudo! 👌',
                error: 'Server fora do ar, favor nos envie um e-mail. 🤯'
            },
            {
                position: toast.POSITION.TOP_CENTER,
                theme: "dark"
            }
        );


        if (response.ok) {
            history('/formulario/sucesso/');
            return await response.json();
        } else {
            toast.dismiss();
            toast.error('Nosso servidor está indisponivel no momento.🤯 \n Tente novamente mais tarde ou nos envie um e-mail',
                {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "dark"
                });
        }
        throw new Error('server fora do ar');
    }

    function handleSelect(key, event) {

        let option = event[event.selectedIndex];
        let newValue = option.text;

        setDataForm({
            ...dataForm,
            [key]: newValue
        });
    }

    function clearForm() {
        setDataForm(valueInit);

        let estadoEl = document.querySelector("#estado");
        let assuntoEl = document.querySelector("#assunto");

        let optionEstado = estadoEl[estadoEl.selectedIndex];
        let optionAssunto = assuntoEl[assuntoEl.selectedIndex];

        optionEstado.selected = false;
        optionAssunto.selected = false;
    }

    function validateForm() {
        return {
            email: validateEmail(),
            tel: validateTel(),
            name: validateName(),
            estado: validateEstado(),
            municipio: validateMunicipio(),
            asunto: validateAssunto()
        }
    }

    function validateTel() {
        const sizeTel = dataForm.tel.length;

        if (sizeTel < 17) {
            //Não é um telefone válido
            return false;
        } else {
            return true;
        }
    }

    function validateName() {
        const sizeName = dataForm.name.length;

        if (sizeName < 1) {
            //campo de texto vazio
            return false;
        } else {
            return true;
        }
    }

    function validateEmail() {

        let valueEmail = dataForm.email;

        let IsOthersChar = [];
        const positionAT = valueEmail.indexOf("@"); //@
        const positionDOT = valueEmail.lastIndexOf("."); //(.)

        const othersChar = [' ', '!', '#', '$', '%', '¨', '&', '*', '(', ')', '-', '=', ',', '?', '´', '^', '~', '}', '{', '[', ']', ';', ':', '|', '₢', '/', '°'];

        // eslint-disable-next-line
        othersChar.map((charItem) => {
            IsOthersChar.push(valueEmail.indexOf(charItem) > 0); // se retornar true, a string contem uma um char especial nela. 
        })


        if (positionAT < 1 || positionDOT < positionAT + 2 || positionDOT + 2 >= valueEmail.length || IsOthersChar.indexOf(true) >= 0) {
            //Não é um endereço de e-mail válido
            return false;
        } else {
            return true;
        }
    }

    function validateMunicipio() {
        const sizeMunicipio = dataForm.municipio.length;

        if (sizeMunicipio < 1) {
            //campo de texto vazio
            return false;
        } else {
            return true;
        }
    }

    function validateEstado() {
        let estadoEl = document.querySelector("#estado");
        let optionEstado = estadoEl[estadoEl.selectedIndex];
        let optionValue = optionEstado.value;

        if (optionValue === 'Nenhum') {
            //campo de invalido
            return false;
        } else {
            return true;
        }
    }

    function validateAssunto() {
        let assuntoEl = document.querySelector("#assunto");
        let optionAssunto = assuntoEl[assuntoEl.selectedIndex];
        let optionValue = optionAssunto.value;

        if (optionValue === 'Nenhum') {
            //campo de invalido
            return false;
        } else {
            return true;
        }
    }


    function handleSubmit(e) {
        e.preventDefault();
        toast.dismiss();

        const {
            email,
            tel,
            name,
            estado,
            municipio,
            asunto
        } = validateForm();

        if (email && tel && name && estado && municipio && asunto) {

            sendEmail();
            clearForm();
        }

        if (email === false) {
            //toast de aviso email invalido    
            toast.error('Endereço de e-mail não é válido. Tente novamente');
        }

        if (tel === false) {
            //toast de aviso tel invalido
            toast.warn('Telefone não é válido. Tente novamente');
        }

        if (name === false) {
            //toast de aviso nome invalido
            toast.warn('Campo de nome vazio, favor preencher.');
        }

        if (estado === false) {
            //toast de aviso estado invalido
            toast.warn('Campo de estado não selecionado, favor selecionar uma opção.');
        }

        if (asunto === false) {
            //toast de aviso asunto invalido
            toast.warn('Campo de asunto não selecionado, favor selecionar uma opção.');
        }

        if (municipio === false) {
            //toast de aviso municipio invalido
            toast.warn('Campo de municipio vazio, favor preencher.');
        }
    }


    return (
        <>
            <section className='container'>
                <div className="form-container">
                    <form>
                        <h3>
                            Deseja solicitar um orçamento agora ?
                        </h3>

                        <p>Preencha o nosso formulario, entraremos em contato com você o mais breve possivel.</p>

                        <div className="form-floating">
                            <input type="text" class="form-control" id="nome" placeholder="Francisco Alves"
                                onChange={(event) => {
                                    handleChange('name', event.target.value);
                                }}
                                value={dataForm.name}
                            />
                            <label for="nome">Informe seu nome</label>
                        </div>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="email" placeholder="name@example.com"
                                onChange={(event) => {
                                    handleChange('email', event.target.value);
                                }}
                                value={dataForm.email}
                            />
                            <label for="email">E-mail</label>
                        </div>

                        <div className="form-floating">
                            <InputMask type="tel" mask="(99) 9 9999 - 9999" maskChar={null} className="form-control" id="telefone" placeholder="11 9xxx-xxxx"
                                onChange={(event) => {
                                    handleChange('tel', event.target.value);
                                }}
                                value={dataForm.tel}
                            >
                            </InputMask>
                            <label for="telefone">Telefone</label>
                        </div>

                        <div className="form-floating">
                            <select className="form-select" id="estado" aria-label="Estados"
                                onChange={(event) => {
                                    handleSelect('estado', event.target);
                                }}
                            >
                                <option selected>Nenhum</option>
                                <option value="1">Acre - AC</option>
                                <option value="2">Alagoas - AL</option>
                                <option value="3">Amapá - AP</option>
                                <option value="4">Amazonas - AM</option>
                                <option value="5">Bahia - BA</option>
                                <option value="6">Ceará - CE</option>
                                <option value="7">Distrito Federal - DF</option>
                                <option value="8">Espírito Santo - ES</option>
                                <option value="9">Goiás - GO</option>
                                <option value="10">Maranhão - MA</option>
                                <option value="11">Mato Grosso - MT</option>
                                <option value="12">Mato Grosso do Sul - MS</option>
                                <option value="13">Minas Gerais - MG</option>
                                <option value="14">Pará - PA</option>
                                <option value="15">Paraíba - PB</option>
                                <option value="16">Paraná - PR</option>
                                <option value="17">Pernambuco - PE</option>
                                <option value="18">Piauí - PI</option>
                                <option value="19">Roraima - RR</option>
                                <option value="20">Rondônia - RO</option>
                                <option value="21">Rio de Janeiro - RJ</option>
                                <option value="22">Rio Grande do Norte - RN</option>
                                <option value="23">Rio Grande do Sul - RS</option>
                                <option value="24">Santa Catarina - SC</option>
                                <option value="25">São Paulo - SP</option>
                                <option value="26">Sergipe - SE</option>
                                <option value="27">Tocantins - TO</option>
                            </select>
                            <label for="estado">Selecione o seu estado</label>
                        </div>

                        <div className="form-floating">
                            <input type="text" class="form-control" id="cidade" placeholder="Francisco Alves"
                                onChange={(event) => {
                                    handleChange('municipio', event.target.value);
                                }}
                                value={dataForm.municipio}
                            />
                            <label for="cidade">Informe seu município</label>
                        </div>

                        <div className="form-floating">
                            <select className="form-select" id="assunto" aria-label="assunto"
                                onChange={(event) => {
                                    handleSelect('assunto', event.target);
                                }}
                            >
                                <option selected>Nenhum</option>
                                <option value="1">Abertura de empresa</option>
                                <option value="2">Serviço de Assessoria Contabil</option>
                                <option value="3">Sou um Fornecedor</option>
                                <option value="4">Outros</option>
                            </select>
                            <label for="assunto">Qual é o assunto?</label>
                        </div>

                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="comentarios" style={{ 'height': '100px' }}
                                onChange={(event) => {
                                    handleChange('msg', event.target.value);
                                }}
                                value={dataForm.msg}
                            ></textarea>
                            <label for="comentarios">Escreva sua mensagem:</label>
                        </div>

                        <button onClick={(e) => { handleSubmit(e) }} >Solicitar Orçamento</button>
                    </form>
                </div>
            </section>
            <div className="container">
                <div className="container-policy">
                    <p className="alertPolicy">*Enviando os dados, você declara estar ciente com os nossos <Link to="/privacidade/">Termos de Uso e Política de Privacidade</Link>.</p>
                </div>
            </div>
        </>
    )
}

export default Form;
