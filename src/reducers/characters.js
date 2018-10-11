import {
    CHAR_SELECTED
} from '../actions/character'

const characters = (state={}, action) => {
    switch (action.type) {
        case (CHAR_SELECTED):
            return Object.assign({}, state, { [action.n]: action.char })
        default:
            return state
    }
}

export default characters