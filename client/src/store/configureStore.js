import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import userReducer from '../reducers/userReducer'
import postReducer from '../reducers/postReducer'
import commentReducer from '../reducers/commentReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        users: userReducer,
        posts: postReducer,
        comments: commentReducer
    }), applyMiddleware(thunk))
    
    return store
    
}

export default configureStore

