import { GET_DATA, UPDATE_CHARACTERS, SET_ERROR } from "../actions";


const initialState = {
    characters: [],
    isFetchingData: false,
    error: ''
};

// export const getData = () => {
//     return {

//     }
// }

export const charactersReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                isFetchingData: true,
       
            };
        case UPDATE_CHARACTERS:
            return {
                ...state,
                characters: action.payload,
                isFetchingData: false
            }
        case SET_ERROR:
            return{
                ...state,
                isFetchingData: false,
                error: action.payload
            }
        default: 
            return state;
    }

}