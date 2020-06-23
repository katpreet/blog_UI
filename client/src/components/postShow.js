import React from 'react' 
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import {startGetPosts} from  '../actions/postAction'
import {startGetComments} from '../actions/commentAction'

function PostShow(props) { 

      return (
            <div>
                {
                (props.user && props.post)?    
                (<div>
                <h4> Username: {props.user.name}</h4>    
                <hr /> 
                <h4> Title : {props.post.title}</h4>
                <p> Body : {props.post.body}</p>
                <h4>Comments : </h4>
                <ul>
                    {
                        props.comments.map(com => {
                            return <li key={com.id}>{com.body}</li>
                        })
                    }
                </ul>
                <Link to={`/users/${props.user.id}`}> More about Author </Link> <br />
                <Link to={`/posts`}> Link to more Posts </Link>    
                </div>):
                <p> Loading post details ... </p>
                }  
            </div>
           
        )
  }

 


const mapStateToProps = (state,props) => {
    console.log("mapstate of post")
    console.log(state.comments)
    return {
        user: state.users.find(usr => usr.id === parseInt(props.match.params.id)),
        post: state.posts.find(post => post.id === parseInt(props.match.params.id)),
        comments : state.comments.filter(comment => comment.postId === parseInt(props.match.params.id))
            }
}
export default connect(mapStateToProps)(PostShow)
 