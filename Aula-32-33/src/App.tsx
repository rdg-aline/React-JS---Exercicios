import React from 'react';
import './App.css';
import Heroi from './component/Heroi'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Heroi />
      </Provider>
    </div>
  );
}

export default App;

