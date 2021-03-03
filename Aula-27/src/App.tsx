import React from 'react';
import './App.css';

/**
 *Crie 2 componentes: Home e Produto

Crie rotas para os dois, o produto terá rota dinamica

Na home, faça uma requisição listando todos os produtos daqui: https://fakestoreapi.com/products

Liste apenas o nome, valor e coloque um link para a rota dinamica usando para isso a rota /produto e
o id do produto

No componente produto, recupere o id enviado na url e faça uma nova requisição para a api acima
passando o id informado, por exemplo: https://fakestoreapi.com/products/3

Liste as informações referente a esse produto no componente Produto

Lembre-se: a primeira API retorna um array, a segunda retorna apenas um objeto
 */

function App() {
  return (
    <div className="App"></div>
      );
}

export default App;
