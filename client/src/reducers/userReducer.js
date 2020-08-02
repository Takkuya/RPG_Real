import {POST_USER, GET_USER} from '../actions/types'

const initialState = {
    nome: '',
    email: '',
    senha: ''
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_USER: return{
            ...state,

            ...action.payload
        }

        case POST_USER:
            return{
                ...state,

                ...action.payload
            }
            default:
                return state
    }
}