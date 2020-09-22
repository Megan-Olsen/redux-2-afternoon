import {createStore, applyMiddleware, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import {composeWithDevTools} from 'redux-devtools-extension'
import budgetReducer from './budgetReducer'

export default createStore(
    budgetReducer,
    composeWithDevTools(applyMiddleware(promiseMiddleware))
)

