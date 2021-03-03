import { combineReducers } from "redux"

import reducerHerois from './herois'

const createRootReducer = () => combineReducers({
   reducerHerois
})

export default createRootReducer
