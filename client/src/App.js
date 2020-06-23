import React from 'react'
import {BrowserRouter, Link, Route} from 'react-router-dom'
import Home from './components/home'
import UsersList from './components/users'
import PostsList from './components/posts'
import UserShow from './components/userShow'
import PostShow from './components/postShow'

function App() {
    return(
        <BrowserRouter>
        <div>
            <h1> Welcome to Blog Listing</h1>

            <Link to="/" > Home |</Link>
            <Link to="/users" > Users |</Link>
            <Link to="/posts" > Posts </Link>
            

            <Route exact path='/' component={Home}  />  
            <Route exact path='/users' component={UsersList}  />  
            <Route exact path='/posts' component={PostsList} />  
            <Route exact path='/users/:id' component={UserShow}  /> 
            <Route exact path='/posts/:id' component={PostShow}  /> 
           
        </div>
        </BrowserRouter>
    )

}
export default App
