import {POST_USER, GET_USER} from './types'
import axios from 'axios'

export const postUser = ({nome, email, senha}) => (dispatch) =>{
    const body = JSON.stringify({nome, email, senha})
    
    const config = {
        headers : {
            'Content-type': 'Application/json'
        }
    };
   
    axios
        .post('/user/cadastro', body, config)
        .then((res) =>{
            dispatch({
                type: POST_USER,
                payload: res.data
            });
        })
        .catch((err) =>{
            console.log(err)
        });

}

export const getUser = ({email, senha}) => (dispatch) =>{
    const body = JSON.stringify({email, senha})

    const config ={
        headers : {
            'content-type' : 'Application/json'
        }
    }
    axios.post('/user/login', body, config)
    .then((res) =>{
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    })
}