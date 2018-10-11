import {
    CHAR_FAILED,
    CHAR_SELECTED,
    NEXT_CHAR,
    PREV_CHAR
} from '../actions/character'

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
        case (CHAR_SELECTED):
            return Object.assign({}, state, { data: fromNull(action.char), error: None })
        case (NEXT_CHAR):
            return Object.assign({}, state, { data: None, error: None })
        case (PREV_CHAR):
            return Object.assign({}, state, { data: None, error: None })
        case (CHAR_FAILED):
            return Object.assign({}, state, { error: Some('Ferrou') })
        default:
            return state
    }
}

const character = combineReducers({
    current,
    number: stack({ NEXT: NEXT_CHAR, PREV: PREV_CHAR })
})

export default character