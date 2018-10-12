import Character from '../containers/Character'
import Film from '../containers/Film'
import createList  from '../containers/Discovered'
import React from 'react'
import { selectChar } from '../actions/character'
import { selectFilm } from '../actions/films'
import { Provider } from 'react-redux'

const DiscoveredCharacters = createList({ select: selectChar }, { info: 'name', data: 'char' })
const DiscoveredFilms = createList({ select: selectFilm }, { info: 'title', data: 'film' })

const Root = ({ store }) => (
    <Provider store={store}>
        <div>
            <Character />
            <Film />
            <DiscoveredCharacters />
            <DiscoveredFilms />
        </div>
    </Provider>
)

export default Root
