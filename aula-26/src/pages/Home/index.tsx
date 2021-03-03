import React from 'react';
import { Helmet } from 'react-helmet'
import { useState, useRef } from 'react'
import { Redirect } from 'react-router-dom'


const Home = () => {


  const [acesso, setAcesso] = useState<Boolean>(false);

  let inputNome = useRef<HTMLInputElement>(null);
  let inputSenha = useRef<HTMLInputElement>(null);

  const nome = inputNome.current?.value
  const senha = inputSenha.current?.value


  const sendForm = () => {
    const usuario = "teste";
    const password = "123";
    if (nome === usuario && senha === password) {
      setAcesso(true);
    }
  }


  return (
    <>
      <Helmet>
        <title> Home</title>
      </Helmet>
      <h1>Form</h1>
      {

        acesso === true ? <Redirect to="/login" /> :
          <>
            <input type="text" placeholder="usuario" ref={inputNome} /> <br />
            <input type="password" placeholder="senha" ref={inputSenha} /> <br />
            <button onClick={sendForm} > Enviar</button>
          </>
      }
    </>
  );
}

export default Home;