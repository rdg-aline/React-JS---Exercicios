import React from 'react'
import { useRef, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'


function Form() {

    const usuario = useRef<HTMLInputElement>(null)
    const senha = useRef<HTMLInputElement>(null)

    const cadastrar = () => {

        const requisicao = {
            email: usuario.current?.value,
            password: senha.current?.value
        }
    
        axios.post("http://localhost:4000/users", requisicao)
            .then(resposta => localStorage.setItem("token", resposta.data.accessToken))
    
}


    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
    
            <input type="email" placeholder="digite seu email" ref={usuario} />
            <input type="password" placeholder="digite sua senha" ref={senha} />
          < Link to={"/produto"}>
                <button onClick={cadastrar}> cadastrar</button>
            </Link>
     
        </>


    );
} export default Form