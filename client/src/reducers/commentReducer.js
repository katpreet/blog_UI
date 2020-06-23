const commentInitialState = []

const commentReducer = (state=commentInitialState,action) => {
    switch(action.type)
    {
        case 'SET_COMMENTS' : {
            return [].concat(action.payload)
        }
        default:  {
            return [...state]
        }
    }
}

export default commentReducer