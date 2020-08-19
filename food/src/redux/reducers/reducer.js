let initialState = {
    restaurants: []
}
//action = {type: 'SET_EXPRESSION', payload: expression}
// return state, setState
const reducer = (state = initialState, action) => {
    let stateCopy = { ...state } // reference
    switch (action.type) {
        case 'SET_RESTAURANTS':
            stateCopy.restaurants = action.payload;
            return stateCopy;
        case 'LATEST_RESTAURANTS':
            stateCopy.restaurants = action.payload;
            return stateCopy;
        default:
            return stateCopy;
    }
}

export default reducer;