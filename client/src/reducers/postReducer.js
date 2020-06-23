const postInitialState = []

const postReducer = (state = postInitialState, action) => {
    switch(action.type)
    {
        case 'SET_POSTS': {
            return [].concat(action.payload)
        }
        default: {
            return [...state]
        }

    }
}

export default postReducer