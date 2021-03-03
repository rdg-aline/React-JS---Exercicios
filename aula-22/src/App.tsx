import React from 'react';
import {store} from './store'
import {Provider} from 'react-redux'
import User from './components/User'
import ToDos from './components/ToDos'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <User/>
      <ToDos/>
      </Provider>
    </div>
  );
}

export default App;
