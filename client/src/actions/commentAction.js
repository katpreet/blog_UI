import axios from 'axios'

export const setComments = (comments) => {
    return {
        type: 'SET_COMMENTS',
        payload: comments
    }
}

export const startGetComments = (id) => {
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/comments`)
    .then((response) => {
        console.log("API called for comments")
        const comments = response.data
        //console.log(comments)
        dispatch(setComments(comments))
    })
    .catch((err) => {
        console.log(err)
    })
}
}