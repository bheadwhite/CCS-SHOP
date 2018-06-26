import {createStore, combineReducers} from 'redux';
import navbarReducer from './redux/navbar'

export default createStore(
    combineReducers({
        navbar: navbarReducer
    })
)