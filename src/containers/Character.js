import React from 'react'
import { connect } from 'react-redux'
import { getNext, getPrev, selectChar } from '../actions/character'
import createButtons from './Buttons'

class Character extends React.Component {
    Buttons = createButtons({ data: 'char' }, { getNext, getPrev })

    componentDidMount() {
        this.props.fetchChar()
    }

    selectVal = () => {
        this.props.onSelect(this.select.value)
        this.select.value = ''
    }

    render() {
        const { char, error } = this.props
        return (
            <div>
                {char.cata({
                    None: handleNone(error),
                    Some: handleSome
                })}
                <this.Buttons />
                <div>
                  <input
                    type='text'
                    ref={node => this.select = node}
                  />
                  <button onClick={this.selectVal}>select</button>
                </div>
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

const handleSome = char => (
    <ul>
        <li>Name: {char.name}</li>
        <li>Gender: {char.gender}</li>
        <li>Films: {char.films.length}</li>
    </ul>
)

export default connect(
    state => ({ char: state.char.current.data, error: state.char.current.error }),
    { fetchChar: getNext, onSelect: selectChar }
) (Character)
