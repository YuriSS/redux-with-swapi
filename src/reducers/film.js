import {
    FILM_FAILED,
    FILM_SELECTED,
    NEXT_FILM,
    PREV_FILM
} from '../actions/films'

import { Some, None, fromNull } from '../helpers/Option'

import { combineReducers } from 'redux'

import stack from './stack'

const current = (
    state={
        data: None,
        error: None
    },
    action
) => {
    switch (action.type) {
        case (FILM_SELECTED):
            return Object.assign({}, state, { data: fromNull(action.film), error: None })
        case (NEXT_FILM):
            return Object.assign({}, state, { data: None, error: None })
        case (PREV_FILM):
            return Object.assign({}, state, { data: None, error: None })
        case (FILM_FAILED):
            return Object.assign({}, state, { error: Some('Ferrou') })
        default:
            return state
    }
}

const film = combineReducers({
    current,
    number: stack({ NEXT: NEXT_FILM, PREV: PREV_FILM })
})

export default film