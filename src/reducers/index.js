import {combineReducers} from 'redux';
import items from './items'

export const itemApp = combineReducers({
    items
})

export default itemApp