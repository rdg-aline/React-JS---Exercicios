import React from 'react'
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, watch, errors } = useForm();
 
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const casado = watch("casado");


  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Hook Form</h2>

        <div>
          <label>Nome:</label>
          <input name="nome" ref={register({ required: true })} placeholder="digite seu nome" />
          {errors.nome && <p>Nome e obrigatório</p>}
        </div>



        <div>
          <label>Cidade:</label>
          <input name="cidade" ref={register} placeholder="cidade" />

        </div>

        <div>
          <label>E-mail</label>
          <input name="email" ref={register({ pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, required: true })}
            placeholder="digite seu email" />
          {errors.email && <p>E-mail em formato invalido</p>}
        </div>



        <div>
          <label>Idade:</label>
          <select name="idade" ref={register({ required: true })}>
            <option>Selecione</option>
            <option> +18  -  30</option>
            <option> 30  -  +50</option>
          </select>
          {errors.idade && <p>Selecione a faixa etaria </p>}
        </div>






        <div>
          <label>Solteiro: </label>
          Sim <input name="solteiro" type="checkbox" ref={register ({ required: false })} />
          Não <input name="casado" type="checkbox" ref={register} />
          {casado && (
            <div>
              <label>Nome do conjugue :</label>
              <input type="text" name="conjugue" ref={register} />
            </div>
          )}
        </div>





        <button>enviar</button>
      </form>
    </div>
  );
}

export default App;
