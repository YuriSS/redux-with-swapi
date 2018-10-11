import { swapi } from '../helpers/request'

const stack = (mapActions, mapKeys) => {
    const selected = (data, n) => ({
        type: mapActions.SELECTED,
        [mapKeys.data]: data,
        [mapKeys.number]: n
    })

    const failed = () => ({
        type: mapActions.FAILED
    })


    const next = () => ({
        type: mapActions.NEXT
    })

    const prev = () => ({
        type: mapActions.PREV
    })

    const fetch = n => dispatch => {
        return swapi(`${mapKeys.url}/${n}/`)
            .then(
                data => data.detail ? dispatch(failed()) : dispatch(selected(data, n)),
                e => dispatch(failed())
            )
    }

    const fetchOrGet = () => (dispatch, getState) => {
        if (!hasToRequest(getState())) {
            return dispatch(fetch(getState()[mapKeys.data].number))
        }
        return dispatch(selected.apply(null, get(getState())))
    }

    const getNext = () => (dispatch, getState) => {
        dispatch(next())
        dispatch(fetchOrGet())
    }

    const getPrev = () => (dispatch, getState) => {
        dispatch(prev())
        dispatch(fetchOrGet())
    }

    const hasToRequest = state => state[mapKeys.dataMap].hasOwnProperty(state[mapKeys.data].number)

    const get = state => [state[mapKeys.dataMap][state[mapKeys.data].number], state[mapKeys.data].number]

    return { selected, failed, next, prev, getNext, getPrev }
}

export default stack