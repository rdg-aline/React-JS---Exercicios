import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Helmet from 'react-helmet'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'
import { Itens } from '../../store/ducks/Cart/types'
import toast, { Toaster } from 'react-hot-toast'


function Home() {

    const [categoria, setCategoria] = useState([])
    const [itens, setItens] = useState([])
    const token = localStorage.getItem("token")


    const Produtos = async () => {
        const headers = {
            'Authorization': `Bearer ${token}`
        }

        try {
            const request = await axios.get("http://localhost:4000/categories", { headers: headers })
            setCategoria(request.data)

            const request1 = await axios.get("http://localhost:4000/beers", { headers: headers })
            setItens(request1.data)

        } catch (erro) {
            if (erro.response.status === 404) {
                toast.error('Existe erro na url')
            } else {
                console.log(erro)
            }
        }
    }

    useEffect(() => {


        if (token !== null) {
            Produtos()
        }

    }, [])


    return (
        <>
            <Helmet> <title>Home</title> </Helmet>

            <Header />

            <div className="food-beer-list ">
                <p>
                    <ul>
                        {categoria?.map((item: any) => (
                            <li key={item.id}>
                                {item}  |
                            </li>
                        ))}
                    </ul>
                </p>
            </div>



            <div className="food-container">
                {
                    itens?.map((item: Itens) => (
                        <div className="beer" key={item.id}>
                            <div className="imagem" >
                                <img src={item.image} alt="beers" />
                            </div>

                            <div >
                                <span>{item.description}</span>
                                <strong>{item.title}</strong>
                                <span>{item.price}</span>
                            </div>

                            <Link to={`/carrinho`} >
                                <button className="button">
                                    Go to cart</button>
                            </Link>
                        </div>
                    ))
                }
            </div>

        </>

    );
}
export default Home

