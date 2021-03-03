import React, { useState } from 'react';
import Axios from 'axios'
import { CEP } from './types/CEP'


function App() {

  const [numCep, putCep] = useState<String>("")

  const [cep, setCep] = useState<CEP>()

  //13010150
  const getCep = () => {
    Axios.get(`https://viacep.com.br/ws/${numCep}/json/`)
      .then(resposta => setCep(resposta.data))
  }

  console.log(cep)

  return (
    <>
      <input type="text" onChange={(event) => putCep(event.target.value)} />
      <button onClick={getCep}>Ver CEP </button>

      { 
      <div><br/>
          <strong> CEP {cep?.cep}</strong>
          <p>CIDADE: {cep?.localidade}</p>
          <p> BAIRRO: {cep?.bairro}</p>
          <p>LOGRADOURO: {cep?.logradouro}</p>
          <p>COMPLEMENTO: {cep?.complemento}</p>
          <p>UF: {cep?.uf}</p>
          <p>DDD: {cep?.ddd}</p>
          <p>IBGE: {cep?.ibge}</p>
        </div>
      }

    </>
  )
}

export default App;
