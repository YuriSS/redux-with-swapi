import { Some, None, fromNull } from '../helpers/Option'
import { combineReducers } from 'redux'
import stack from './stack'

const createData = (mapActions, mapKeys) => {
  const current = (
    state={
            data: None,
            error: None
        },
        action
    ) => {
        switch (action.type) {
            case (mapActions.SELECTED):
                return Object.assign({}, state, { data: fromNull(action[mapKeys.key]), error: None })
            case (mapActions.NEXT):
                return Object.assign({}, state, { data: None, error: None })
            case (mapActions.PREV):
                return Object.assign({}, state, { data: None, error: None })
            case (mapActions.FAILED):
                return Object.assign({}, state, { error: Some('Ferrou') })
            default:
                return state
        }
    }
  
    const group = (state={}, action) => {
        switch (action.type) {
            case (mapActions.SELECTED):
                return Object.assign({}, state, { [action[mapKeys.number]]: action[mapKeys.key] })
            default:
                return state
        }
    }

    return combineReducers({
        current,
        number: stack({ NEXT: mapActions.NEXT, PREV: mapActions.PREV }),
        group
    })
}

export default createData
