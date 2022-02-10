import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';

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

    function sendEmail() {

        const API_URL = "https://app-send-email-v2.herokuapp.com/data/form/";

        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(dataForm),
        })
            .then(async (dataServer) => {

                if (dataServer.ok) {
                    history('/formulario/sucesso/');                    
                    return await dataServer.json();
                } 
                throw new Error('server fora do ar')
            });
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

    function handleSubmit(e) {
        e.preventDefault();
        sendEmail();
        clearForm();
    }


    return (
        <section className='form-container'>
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
                    <input type="tel" className="form-control" id="telefone" placeholder="11 9xxx-xxxx"
                        onChange={(event) => {
                            handleChange('tel', event.target.value);
                        }}
                        value={dataForm.tel}
                    />
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
        </section>
    )
}

export default Form;
