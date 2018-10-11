import React from 'react'
import { connect } from 'react-redux'
import { getNext, getPrev } from '../actions/films'
import createButtons from './Buttons'

class Film extends React.Component {
    Buttons = createButtons({ data: 'film' }, { getNext, getPrev })

    componentDidMount() {
        this.props.fetchFilm()
    }

    render() {
        const { film, error } = this.props
        return (
            <div>
                {film.cata({
                    None: handleNone(error),
                    Some: handleSome
                })}
                <this.Buttons />
            </div>
        )
    }
}

const handleNone = error => () => (
    error.cata({
        None: () => (<div>Loading...</div>),
        Some: (e) => <div>API Error: {e}</div>
    })
)

const handleSome = film => (
    <ul>
        <li>Name: {film.title}</li>
        <li>Producer: {film.producer}</li>
    </ul>
)

export default connect(
    state => ({ film: state.film.current.data, error: state.film.current.error }),
    { fetchFilm: getNext }
) (Film)