import axios from 'axios'

export const setPosts = (posts) => {
    return {
        type: 'SET_POSTS',
        payload: posts
    }
}

export const startGetPosts = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then((response) => {
            console.log("API called for post")
            const posts = response.data
            dispatch(setPosts(posts))
        })
        .catch(err => {
            console.log(err)
        })

    }
}