import { combineReducers } from 'redux'
import char from './character'
import characters from './characters'
import film from './film'
import films from './films'

export default combineReducers({
    char,
    characters,
    film,
    films
})