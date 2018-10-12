import React from 'react'
import { connect } from 'react-redux'

const createList = (mapActions, mapKeys) => {
    const Discovered = ({ data, onSelect }) => (
        <ul>
            {Object.keys(data).map(i => (
                <li
                  key={i}
                  onClick={() => onSelect(Number(i))}
                >
                    {data[i][mapKeys.info]}
                </li>
            ))}
        </ul>
    )

    return connect(
        state => ({ data: state[mapKeys.data].group }),
        { onSelect: mapActions.select }
    ) (Discovered)
}

export default createList
