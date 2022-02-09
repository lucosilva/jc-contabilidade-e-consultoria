import React, { useState } from 'react';
import './style.css';
import ButtonAction from '../button';
import nodemailer from 'nodemailer';

function Form() {
    
    var transporter;

    async function handleSubmit(e){
        e.preventDefault();

        transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: 'naoresponda@jcconsultoria.srv.br', // generated ethereal user
                pass: 'Cosmo@2022', // generated ethereal password
            },
        });

        transporter.sendMail({
            from: 'naoresponda@jcconsultoria.srv.br', // sender address
            to: "naoresponda@jcconsultoria.srv.br", // list of receivers
            subject: "teste", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
            stream: false,
          });
    }

    return (
        <section className='form-container'>
            <form>
                <h3>
                    Deseja solicitar um orçamento agora ?
                </h3>

                <p>Preencha o nosso formulario, entraremos em contato com você o mais breve possivel.</p>

                <div className="form-floating">
                    <input type="text" class="form-control" id="nome" placeholder="Francisco Alves" />
                    <label for="nome">Informe seu nome:</label>
                </div>

                <div className="form-floating">
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                    <label for="email">E-mail</label>
                </div>

                <div className="form-floating">
                    <input type="tel" className="form-control" id="telefone" placeholder="11 9xxx-xxxx" />
                    <label for="telefone">Telefone</label>
                </div>

                <div className="form-floating">
                    <select className="form-select" id="estado" aria-label="Estados">
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
                    <input type="text" class="form-control" id="cidade" placeholder="Francisco Alves" />
                    <label for="cidade">Informe seu município</label>
                </div>

                <div className="form-floating">
                    <select className="form-select" id="assunto" aria-label="Estados">
                        <option selected>Nenhum</option>
                        <option value="1">Abertura de empresa</option>
                        <option value="2">Serviço de Assessoria Contabil</option>
                        <option value="3">Sou um Fornecedor</option>
                        <option value="4">Outros</option>
                    </select>
                    <label for="assunto">Qual é o assunto?</label>
                </div>

                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="comentarios" style={{ 'height': '100px' }}></textarea>
                    <label for="comentarios">Escreva sua mensagem:</label>
                </div>

                <button onClick={(e)=>{handleSubmit(e).catch(console.error)}} >Solicitar Orçamento</button>
            </form>
        </section>
    )
}

export default Form;
