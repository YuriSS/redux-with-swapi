import stack from './stack'

export const FILM_SELECTED = 'films.FILM_SELECTED'
export const FILM_FAILED = 'films.FILME_FAILED'
export const NEXT_FILM = 'films.NEXT_FILM'
export const PREV_FILM = 'films.PREV_FILM'

const { selected, failed, next, prev, getNext: _getNext, getPrev: _getPrev } = stack({
    SELECTED: FILM_SELECTED,
    FAILED: FILM_FAILED,
    NEXT: NEXT_FILM,
    PREV: PREV_FILM
}, {
    data: 'film',
    number: 'n',
    url: 'films'
})

export const filmSelected = selected
export const filmFailed = failed
export const nextFilm = next
export const prevFilm = prev

export const getNext = _getNext
export const getPrev = _getPrev
