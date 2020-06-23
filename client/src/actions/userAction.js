import axios from 'axios'

export const setUsers = (users) => {
    return { 
        type: 'SET_USERS',
        payload: users
    }
}

export const startGetUsers = () => {
    return(dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            console.log("API called for users")
            const users = response.data
            dispatch(setUsers(users))
        })
        .catch((err) => {
            console.log(err)
        })

    }
}