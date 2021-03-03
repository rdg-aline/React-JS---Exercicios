import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const ToDos = () => {
    const dispatch = useDispatch()

    const tarefas = useSelector((state: any) => state.todo.ToDo)
   

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(resposta => dispatch({ type: "GET_TODO", payload: resposta.data }))
    }, [])


    return (
        <div>
            { 
             tarefas.map((item: any) => (
                <li key={item.id}>
                {item.title} | ID:{item.id} </li>
            ))}

        </div>);
}
export default ToDos;