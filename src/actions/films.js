import stack from './stack'

export const FILM_SELECTED = 'films.FILM_SELECTED'
export const FILM_SELECT = 'films.FILM_SELECT'
export const FILM_FAILED = 'films.FILME_FAILED'
export const NEXT_FILM = 'films.NEXT_FILM'
export const PREV_FILM = 'films.PREV_FILM'

const { selected, get, failed, next, prev, getNext: _getNext, getPrev: _getPrev } = stack({
    SELECTED: FILM_SELECTED,
    FAILED: FILM_FAILED,
    NEXT: NEXT_FILM,
    PREV: PREV_FILM,
    SELECT: FILM_SELECT
}, {
    data: 'film',
    number: 'n',
    url: 'films'
})

export const filmSelected = selected
export const filmFailed = failed
export const nextFilm = next
export const prevFilm = prev
export const selectFilm = get

export const getNext = _getNext
export const getPrev = _getPrev
