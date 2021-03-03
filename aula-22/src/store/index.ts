import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { User } from '../types/InterfaceUser'
import { InterfaceTodo } from '../types/interfaceTodo'


const initialStateUser: User = {
    name: "",
    username: "",
    email: ""
}


const initialStateTodo: InterfaceTodo = {
    ToDo: []
}


function reducerUser(state = initialStateUser, action: any) {
    switch (action.type) {
        case 'GET_USER':
            return {
                name: action.payload.name,
                username: action.payload.username,
                email: action.payload.email
            }
        default:
            return state
    }

}



function reducerTodo(state = initialStateTodo, action: any) {
    switch (action.type) {
        case 'GET_TODO':
            return {
                ...state,
                ToDo: action.payload,
                         }
        default:
            return state
    }
}

const RootReducer = () => combineReducers({
    usuario: reducerUser,
    todo: reducerTodo
})

const store = createStore(RootReducer(), composeWithDevTools())

export { store }