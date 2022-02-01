import axios from 'axios';
import {BASE_URL} from '../Constants/ConfigApi'
import { goToHome } from '../Router/Coordinator'

export const login = (body, resetState, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        resetState()
        goToHome(history)
        setRightButtonText("Logout")
    })
    .catch((err)=>
    alert(err.response.data))
}

export const signUp = (body, resetState, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        resetState()
        goToHome(history)
        setRightButtonText("Logout")
        alert("Cadastro efetuado com sucesso")
    })
    .catch((err)=>
    alert(err.response.data))
    
}