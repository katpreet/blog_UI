import React from 'react'
import App from './App'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import {startGetUsers} from './actions/userAction'
import {startGetPosts} from './actions/postAction'
import {startGetComments} from './actions/commentAction'

const store = configureStore()
store.subscribe( () => {
     console.log(store.getState())
})

//handle page reload
store.dispatch(startGetUsers())
store.dispatch(startGetPosts())
store.dispatch(startGetComments())

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)
ReactDOM.render(jsx,document.getElementById('root'))