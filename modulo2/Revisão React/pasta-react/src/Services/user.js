import axios from 'axios';
import {BASE_URL} from '../Constants/ConfigApi'
import { goToReceitas } from '../Router/Coordinator'

export const login = (body, resetState, history) => {
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        resetState()
        goToReceitas(history)
    })
    .catch((err)=>alert("Senha ou login invalido, tente novamente."))
}

export const signUp = (body, resetState, history) => {
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        resetState()
        goToReceitas(history)
    })
    .catch((err)=>
    console.log(err)
    )
}