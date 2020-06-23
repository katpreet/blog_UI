import React from 'react' 
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

function UserShow(props){
    
        return (
            <div>
                {
                (props.user && props.posts) ?
                (<div>   
                <h3>Username : {props.user.name} </h3>
                <h3> Posts Written by users : </h3>
                <ul>
                    {
                        props.posts.map(post => {
                            return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title} </Link>
                            </li>
                        })
                    }
                </ul>
                </div>):
                <p>Loading user details....</p>
                }   
            </div>
        )
 }


const mapStateToProps = (state,props) => {
    console.log("mapstate of user")
     
    
       return {
        user: state.users.find(usr => usr.id === parseInt(props.match.params.id)),
        posts: state.posts.filter(post => post.userId === parseInt(props.match.params.id ))
        
    }
}
export default connect(mapStateToProps)(UserShow)