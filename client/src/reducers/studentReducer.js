import {GET_STUDENT, POST_STUDENT, GET_STUDENTS, DELETE_STUDENTS} from '../actions/types'

const initialState = {
    student : []
}

export default function (state = initialState, action){
    switch(action.type){
        case POST_STUDENT :return{
            ...state,
            student : [...state.student, action.payload]
        }
        case GET_STUDENT : return{
            ...state,
            student : [...state.student]
        }
        case GET_STUDENTS: return {
            ...state,
            student : [...state.student, ...action.payload]
        }
        case DELETE_STUDENTS: return{
            ...state,
            student : state.student.filter(({_id}) => _id !== action.payload)
        }
        default : return state

    }
}