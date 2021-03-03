import axios from 'axios'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { ItensProdutos } from '../../types/ItensProdutos'




function Produtos() {

  const [produto, setProdutos] = useState([])
  const token = localStorage.getItem("token")



  const listaProdutos = () => {

    const headers = {
      'Authorization': `Bearer ${token}`
    }


    axios.get("http://localhost:4000/products", { headers: headers })
      .then(resposta => setProdutos(resposta.data))


  }



  return (
    <>
      <Helmet>
        <title>Produto</title>
      </Helmet>



      {
        token != null ? <button onClick={listaProdutos}>ver produtos </button>
          :
          <Link to="/"> <button> Faltou cadastro </button></Link>
      }



      {
        produto.map((item: ItensProdutos) => (
          <ul key={item.id}>
            <strong>Produto: {item.title} </strong><br />
            <img src={item.image} />
            <li>Preço:{item.price}</li>
            <li>Descrição:{item.description}</li>
          </ul>
        ))
      }






    </>
  );
} export default Produtos