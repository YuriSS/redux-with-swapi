import stack from './stack'

export const CHAR_SELECTED = 'character.CHAR_SELECTED'
export const CHAR_SELECT = 'character.CHAR_SELECT'
export const CHAR_FAILED = 'character.CHAR_FAILED'
export const NEXT_CHAR = 'character.NEXT_CHAR'
export const PREV_CHAR = 'character.PREV_CHAR'

const { selected, get, failed, next, prev, getNext: _getNext, getPrev: _getPrev } = stack({
    SELECTED: CHAR_SELECTED,
    FAILED: CHAR_FAILED,
    NEXT: NEXT_CHAR,
    PREV: PREV_CHAR,
    SELECT: CHAR_SELECT
}, {
    data: 'char',
    number: 'n',
    url: 'people'
})

export const charSelected = selected
export const charFailed = failed
export const nextChar = next
export const prevChar = prev
export const selectChar = get

export const getNext = _getNext
export const getPrev = _getPrev
