import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

const enhancer = compose(
    applyMiddleware(thunk)
)

export default function configStore (initialState) {
    const store = createStore(rootReducer, initialState, enhancer)

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}
