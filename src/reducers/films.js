import {
    FILM_SELECTED
} from '../actions/films'

const films = (state={}, action) => {
    switch (action.type) {
        case (FILM_SELECTED):
            return Object.assign({}, state, { [action.n]: action.film })
        default:
            return state
    }
}

export default films