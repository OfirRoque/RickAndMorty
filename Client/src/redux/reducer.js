import { ADD_FAV, REMOVE_FAV } from "./actions-types";

const initialState = {
    myFavorites: []
}


const reducer = (state = initialState, actions) => {
    switch(actions.type){
        case ADD_FAV:
            return { ...state, myFavorites: actions.payload, allCharacters: actions.payload };
        case REMOVE_FAV:
            return { ...state, myFavorites: actions.payload };
        default: 
            return {
                ...state
            }
    }
}

export default reducer;

