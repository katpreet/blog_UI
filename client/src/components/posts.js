import React from 'react'

import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function PostsList(props) {
    return (
    
            <div>
                <h2>User Posts - {props.posts.length}</h2>
                <ul>
                    {
                        props.posts.map(post => {
                            return <li key={post.id}>
                                 <Link to={`/posts/${post.id}`}>{post.title} </Link></li>
                        })
                    }
                </ul>
            </div>
               
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps)(PostsList)