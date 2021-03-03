import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import { Provider } from 'react-redux'
import { store } from './store'

//console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <Routes />
        </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

