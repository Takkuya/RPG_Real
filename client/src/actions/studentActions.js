import {POST_STUDENT, GET_STUDENT,GET_STUDENTS, DELETE_STUDENTS} from './types'
import axios from 'axios'

export const postStudent =({nome, curso, idade, email, imagem}) => (dispatch) =>{
    const body = JSON.stringify({nome, curso, idade, email, imagem})
    
    const config = {
        headers : {
            'Content-Type' : 'Application/json'
        }
    }
    axios
        .post('/student/cadastro', body, config)
        .then((res) =>{
            dispatch({
                type: POST_STUDENT,
                payload: res.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
}

export const deleteStudent = (_id) => dispatch =>{
    axios.delete(`/student/${_id}`)
    .then(res => dispatch({
        type: DELETE_STUDENTS,
        payload: res.data
    }))
}

export const getStudent = (nome) => dispatch =>{
    console.log(nome)
    axios.get(`/student/${nome}`).then(res =>{
        dispatch({
            type: GET_STUDENT,
            payload : res.data
        })
    })
}

export const getStudents = () => dispatch => {
    axios.get('/student').then(({data}) => {
        dispatch({
            type : GET_STUDENTS,
            payload : data
        })
    })
}