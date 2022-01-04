import React from 'react'
import { useHistory } from 'react-router-dom';
import { TripContainer, TripGrid } from './Styled'
import useProtectedPage from '../../hooks/useProtectedPage'
import RecipeCard from '../../Components/RecipeCard/RecipeCard'
import { BASE_URL } from '../../Constants/ConfigApi'
import useRequestData from '../../hooks/useRequestData'
import CreateNewPost from '../../Components/CreateNewPost/CreateNewPost'
import { createPost, getPost } from '../../Services/posts'
import { useState, useEffect } from 'react'
import { goToLogin } from '../../Router/Coordinator';
import { postVote } from '../../utils/vote';

const HomePage = (props) => {
    useProtectedPage()

    const [posts, setPosts] = useState([])
    const [form, setForm] = useState({ text: '', title: '' })
    const history = useHistory()
    const posta = useRequestData([], `${BASE_URL}/posts`)

    useEffect(()=>{
        const token = localStorage.getItem("token")
        token? getPost(setPosts)  : goToLogin(history)
    },[history])

    const post = (event) => {
        event.preventDefault()

        if (form.text.trim() !== '' && form.title.trim() !== '') {
            createPost(form, setPosts)
            setForm({ text: '', title: '' })
        } else {
            alert("campos vazios")
        }
    }

    const handleForm = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

    const postCards = posta.map((post) => {
        return (
            <RecipeCard
                key={post.id}
                username={post.username}
                title={post.title}
                body={post.body}
                image={"https://img.ibxk.com.br/2017/07/13/13160112901226.jpg"}
                onClick={() => null}
                color={"secondary"}
                
            />
        )
    })


    return (
        <TripContainer color={"secondary"}>
            <h1>Home Page</h1>
            <TripGrid>
                <CreateNewPost
                    submit={post}
                    textValue={form.text}
                    onChangeText={handleForm}
                    titleValue={form.title}
                    onChangeTitle={handleForm}
                />
                <section>
                    {posts.sort((a, b) => b.createdAt - a.createdAt).map((post, index) => {
                        return (
                            index < 50 &&
                            <RecipeCard
                                key={post.id}
                                data={post}
                                clickUp={() => postVote("up", post.id, setPosts)}
                                clickDown={() => postVote("down", post.id, setPosts)}
                            />
                        )
                    })}
                </section>
                {postCards}
            </TripGrid>
        </TripContainer>
    )
}
export default HomePage