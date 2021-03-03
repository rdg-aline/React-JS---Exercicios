import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Ler from './components/ler'
import Diminuir from './components/diminuir'
import Aumentar from './components/aumentar'
import { InterfaceEstadoInicial } from './types/InterfaceEstadoInicial'



const initialState: InterfaceEstadoInicial = {
  qtd: 0
}

const aumentar_QTD = (state: any) => (
  state.qtd + 1
)


const reduzir_QTD = (state: any) => (
  state.qtd > 0 ? state.qtd - 1 : state.qtd
)

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case 'INCLUIR_QTD':
      return {
        qtd: aumentar_QTD(state),
      };
    case 'DIMINUIR_QTD':
      return {
        qtd: reduzir_QTD(state),
      };
    default:
      return state
  }
}


const store = createStore(reducer)


function App() {
  return (
    <Provider store={store}>
      <Aumentar />
      <Ler />
      <Diminuir />
    </Provider>
  );
}

export default App;
