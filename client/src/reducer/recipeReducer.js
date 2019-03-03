import {
    SET_RECIPE
} from '../actions/actionTypes'

const initialState = {
    _id: '',
    name: '',
    recipe: []
}

const recipeReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_RECIPE: 
            return {
                ...state,
                recipe: action.recipe
            }
        default: 
            return state
    }
}

export default recipeReducer