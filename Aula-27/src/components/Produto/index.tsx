import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'
import { Item } from '../../types/produtos'
import { Link } from 'react-router-dom'



function Produto() {

  const params = useParams<any>()
  const [item, setItem] = useState<Item>()

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.dynamic}`)
      .then(resposta => setItem(resposta.data))
  }, [])

  return (
    <>
      <Helmet>
        <title>Produto</title>
      </Helmet>
      <div>
        <p>  <Link to="/">voltar para Home</Link></p>   <br />

        <strong> Categoria :  {item?.category}  </strong> <br />
        <strong>  {item?.title}     </strong>
        <img src={item?.image} />
        <p> Preço : {item?.price}     </p>
        <p> Descrição: {item?.description} </p>
      </div>

    </>
  );
} export default Produto