import { createStore } from 'redux';
let initialState = {
    favouriteRecipes: []
}

const reducer = (state = initialState, action) => {
    let stateCopy = { ...state };
    switch (action.type) {
        case 'ADD_TO_FAVORITES':
            stateCopy.favouriteRecipes = [...stateCopy.favouriteRecipes, action.payload];
            console.log(stateCopy)
            return stateCopy;
        case 'REMOVE_FROM_FAVOURITES':
            let rId = action.payload;
            let index = stateCopy.favouriteRecipes.findIndex(recipe => recipe.recipe_id === rId);
            console.log(index)
            stateCopy.favouriteRecipes = [
                ...stateCopy.favouriteRecipes.slice(0, index),
                ...stateCopy.favouriteRecipes.slice((index + 1))
            ]
            console.log(stateCopy)
            return stateCopy;
        default:
            return stateCopy;
    }
}

const store = createStore(reducer);
export default store;