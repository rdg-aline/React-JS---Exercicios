import React  from 'react';
import './App.css';
import axios from 'axios'
import {useRef} from 'react'

function App() {


  let inputNome = useRef<HTMLInputElement>(null)
  let inputIdade = useRef<HTMLInputElement>(null)
  let inputEmpresa = useRef<HTMLInputElement>(null)
  let inputTelefone = useRef<HTMLInputElement>(null)

  const sendForm = () => {
    const nome = inputNome.current?.value
    const idade = inputIdade.current?.value
    const empresa = inputEmpresa.current?.value
    const telefone = inputTelefone.current?.value


    axios.post("http://localhost:4000/usuarios", {
      name: nome,
      age: idade,
      company: empresa,
      phone: telefone
    }).then(resposta => console.log(resposta))

  }



  return (
    <div className="App">
      <h1>Form</h1>
      <input type="text"  placeholder="nome" ref={inputNome}/><br/>
      <input type="text"  placeholder="idade" ref={inputIdade}/><br/>
      <input type="text"  placeholder="empresa" ref={inputEmpresa}/><br/>
      <input type="text"  placeholder="telefone" ref={inputTelefone}/><br/>

      <button onClick={sendForm} > Enviar</button>
    </div>
  );
}

export default App;
