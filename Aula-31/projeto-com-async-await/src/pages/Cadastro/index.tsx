import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Helmet from 'react-helmet'
import toast, { Toaster } from 'react-hot-toast'




function Cadastro() {

    let nomeInput = useRef<HTMLInputElement>(null)
    let emailInput = useRef<HTMLInputElement>(null)
    let senhaInput = useRef<HTMLInputElement>(null)
    let idadeInput = useRef<HTMLInputElement>(null)


    const [logado, setLogado] = useState<Boolean>(false)




    const Logar = async () => {

        const requisicao = {
            name: nomeInput.current?.value,
            email: emailInput.current?.value,
            password: senhaInput.current?.value,
        }

        try {
            const request = await axios.post("http://localhost:4000/register", requisicao)
            localStorage.setItem("token", request.data.accessToken)
            setLogado(true)
           
           toast.success('Login realizado com sucesso')
        } catch (erro) {
            if (erro.response.status === 400) {
                toast.error('Não foi possível carregar o site')
            }
        }
    }




    const Cadastrar = async () => {

        const age: any = idadeInput.current?.value
        parseInt(age)


        if (age >= 18) {
            Logar()
        } else {
            setLogado(false)
        }
    }


    return (

        <>

            <Helmet>
                <title>Cadastro</title>
            </Helmet>

            <div className="Form">
                <div className="formulario">
                    <br />  <h2>Faça o cadastro</h2>
                    
                            <input type="text" placeholder="nome" ref={nomeInput} />
                            <input type="text" placeholder="e-mail" ref={emailInput} />
                            <input type="password" placeholder="senha" ref={senhaInput} />
                            <input type="text" placeholder="idade" ref={idadeInput} id="idade" /><br />
                            <button onClick={Cadastrar}>Entrar</button>
                            
                    { logado  && (<Redirect to="/home" />) }             
                          <Toaster />



                </div>
            </div>
        </>

    );
}
export default Cadastro