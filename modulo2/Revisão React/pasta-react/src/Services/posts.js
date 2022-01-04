import axios from 'axios';
import {BASE_URL} from '../Constants/ConfigApi'
import { goToHome } from '../Router/Coordinator'

export const getPost = (body, resetState, history, setRightButtonText) => {
    axios.get(`${BASE_URL}/posts`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        resetState()
        goToHome(history)
        setRightButtonText("Logout")
    })
}
export const createPost = (body, resetState, history, setRightButtonText, setPosts) => {
    axios.post(`${BASE_URL}/posts`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        resetState()
        goToHome(history)
        setRightButtonText("Logout")
        getPost(setPosts)
        alert("Post criado com sucesso!")
    })
}
export const getPostDetail = (id, setPost, setComments, resetState, setRightButtonText) =>{
    axios.get(`${BASE_URL}/posts/${id}`)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        resetState()
        setRightButtonText("Logout")
        setPost(res.data.post)
        setComments(res.data.post.comments)
    })  
}


    export const putVote = (body, id, setPosts, resetState, setRightButtonText) =>{
        axios.put(`${BASE_URL}/posts/${id}/votes`, body)
        .then((res)=>{
            getPost(setPosts)
            localStorage.setItem("token", res.data.token)
            resetState()
            setRightButtonText("Logout")
        })
    }
    
    export const putVoteComment = (body, postId, id,setPost, setComments,resetState, setRightButtonText) =>{
        axios.put(`${BASE_URL}/comments/${id}/votes`, body)
        .then((res)=>{
            localStorage.setItem("token", res.data.token)
            resetState()
            setRightButtonText("Logout")
           getPostDetail(postId,setPost,setComments)
        })
    }

