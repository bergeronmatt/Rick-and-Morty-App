import axios from 'axios'

export const GET_DATA = 'GET_DATA'
export const UPDATE_CHARACTERS = 'UPDATE_CHARACTERS'
export const SET_ERROR = 'SET_ERROR'

export const getData = () => dispatch => {
    dispatch({type: GET_DATA})
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(res => {
        console.log(res.data.results)
        dispatch({type: UPDATE_CHARACTERS, payload: res.data.results})
    })
    .catch(err => {
        console.log(`error catching data from api: ${err}`);
        dispatch({type: SET_ERROR, payload: 'error fetching data from api' })
    })
}