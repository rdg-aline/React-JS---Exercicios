import React from 'react';


/**
 * Clone esse projeto https://github.com/jenicarvalho/fake-api-produtos, entre na pasta e digite:

npm install e em seguida

json-server db.json -m ./node_modules/json-server-auth -r routes.json --port 4000

Deixe o terminal rodando enquanto estiver no exercício

Crie um formulário e cadastre um usuário (fique ATENTO a erros no console, pois a api não aceita usuários
repetidos)

Use essa api para cadastro: http://localhost:4000/users envie no corpo da requisição email e password

Ao cadastrar você ira receber o token, guarde o token no localstorage

Ao cadastrar redirecione o usuário para a rota /produtos

Faça a requisição em http://localhost:4000/products envie nos headers da requisição o token

Valide essa página usando o token, caso não tenha token redirecione para a home, caso tenha mostre os
produtos
 
 */
function App() {
  return (
    <div className="App"></div>
   
    );
}

export default App;
