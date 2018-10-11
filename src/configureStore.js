import rootReducer from './reducers/'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'

const middleware = applyMiddleware(
    createLogger(),
    thunk
)

const configureStore = initState =>
    createStore(
        rootReducer,
        initState,
        middleware
    )

export default configureStore