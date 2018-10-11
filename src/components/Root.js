import Character from '../containers/Character'
import Film from '../containers/Film'
import React from 'react'
import { Provider } from 'react-redux'

const Root = ({ store }) => (
    <Provider store={store}>
        <div>
            <Character />
            <Film />
        </div>
    </Provider>
)

export default Root