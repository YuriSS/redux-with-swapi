import React from 'react'
import { connect } from 'react-redux'
import Option from '../helpers/Option'

const all = (f, args) => args.reduce((res, arg) => res && f(arg), true)

const Buttons = ({ onNext, onPrev, current, isLoading }) => (
    <div>
        <button disabled={isLoading} onClick={onPrev}>prev</button>
        <span>{current}</span>
        <button disabled={isLoading} onClick={onNext}>next</button>
    </div>
)

const createButton = (mapKeys, { getNext, getPrev }) => connect(
    state => ({
        current: state[mapKeys.data].number,
        isLoading: all(Option.None.is.bind(Option.None), [state[mapKeys.data].current.data, state[mapKeys.data].current.error])
    }),
    { onNext: getNext, onPrev: getPrev }
) (Buttons)

export default createButton