import { createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import{combineReducers} from 'redux'
import reducerUsuario from '../store/ducks/Usuario' 
import {  reducerPost} from '../store/ducks/Posts' 

const createRootReducer =() => combineReducers({
    user : reducerUsuario,
    posts: reducerPost,
    
})

const store = createStore(createRootReducer(), composeWithDevTools())

export { store }