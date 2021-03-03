import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'


interface listaProduto {
    title: string,
    price: number,
    id: number
    
}


function Home() {
    const [produto, setProdutos] = useState([])


    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(resposta => setProdutos(resposta.data))
    }, [])

   


    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            {
                produto.map((item: listaProduto) => (
                    <ul key={item.id}>
                        <li>Produto: {item.title} </li>
                        <li>Preço:{item.price}
                        <button>                        
                         < Link to={`/produto/${item.id}`}> detalhes </Link>
                        </button></li>
                    </ul>
                ))
            }


        </>
    );
} export default Home