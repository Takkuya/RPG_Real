import {GET_STUDENT, POST_STUDENT} from '../actions/types'

const initialState = {
    student : []
}

export default function (state = initialState, action){
    switch(action.type){
        case POST_STUDENT :return{
            ...state,
            student : [...state.student]
        }
        case GET_STUDENT : return{
            ...state,
            student : [...state.student]
        }
        default : return state

    }
}