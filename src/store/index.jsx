import { createStore, combineReducers } from 'redux'
import Reducer from './Reducer.jsx'

const Reducers = combineReducers({
    Reducer
})

const Store = new createStore(Reducers)
export default Store