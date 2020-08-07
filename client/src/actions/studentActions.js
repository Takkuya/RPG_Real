import {POST_STUDENT, GET_STUDENT} from './types'
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
export const getStudent = (nome) => dispatch =>{
    console.log(nome)
    axios.get(`/student/${nome}`).then(res =>{
        dispatch({
            type: GET_STUDENT,
            payload : res.data
        })
    })
}