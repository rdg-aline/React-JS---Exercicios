import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const User = () => {
    const dispatch = useDispatch()

    const nome = useSelector((state: any) => state.usuario.name)
    const nome_user = useSelector((state: any) => state.usuario.username)
    const email = useSelector((state: any) => state.usuario.email)


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users/1")
            .then(resposta => dispatch({ type: "GET_USER", payload: resposta.data }))
    }, [])

    return (
        <p>     
            {nome} <br/>
            {nome_user} | {email}</p>
    );
}
export default User;