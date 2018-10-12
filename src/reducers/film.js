import {
    FILM_FAILED,
    FILM_SELECTED,
    NEXT_FILM,
    PREV_FILM
} from '../actions/films'
import createData from './data'

export default createData({
  SELECTED: FILM_SELECTED,
  NEXT: NEXT_FILM,
  PREV: PREV_FILM,
  FAILED: FILM_FAILED
}, {
  key: 'film',
  number: 'n'
})
