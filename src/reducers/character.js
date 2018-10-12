import {
    CHAR_FAILED,
    CHAR_SELECTED,
    NEXT_CHAR,
    PREV_CHAR
} from '../actions/character'
import createData from './data'

export default createData({
  SELECTED: CHAR_SELECTED,
  NEXT: NEXT_CHAR,
  PREV: PREV_CHAR,
  FAILED: CHAR_FAILED
}, {
  key: 'char',
  number: 'n'
})
