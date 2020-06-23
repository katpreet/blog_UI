
const userInitialState = []

const userReducer= (state = userInitialState, action) => {
    switch(action.type)
    {
        case 'SET_USERS' : {

            return [].concat(action.payload)
            //return []...action.payload]
        }
        default: {
            return [...state]
        }
    }
}

export default userReducer