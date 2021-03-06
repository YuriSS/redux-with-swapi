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

    const select = n => ({
      type: mapActions.SELECT,
      [mapKeys.number]: n
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
        return dispatch(selected.apply(null, getData(getState())))
    }

    const getNext = () => (dispatch, getState) => {
        dispatch(next())
        dispatch(fetchOrGet())
    }

    const getPrev = () => (dispatch, getState) => {
        dispatch(prev())
        dispatch(fetchOrGet())
    }

    const get = n => (dispatch, getState) => {
        dispatch(select(n))
        dispatch(fetchOrGet())
    }

    const hasToRequest = state => state[mapKeys.data].group.hasOwnProperty(state[mapKeys.data].number)

    const getData = state => [state[mapKeys.data].group[state[mapKeys.data].number], state[mapKeys.data].number]

    return { selected, failed, next, prev, getNext, getPrev, get }
}

export default stack
