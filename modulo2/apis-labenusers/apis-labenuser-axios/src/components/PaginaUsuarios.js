import React from 'react';
import axios from 'axios';
import {Container, PosicaoB} from '../style'

export default class PaginaUsuarios extends React.Component {
    state = {
        users: []
    }
    componentDidMount() {
        this.getAllUsers()
    }
    //lista de usuarios 
    getAllUsers = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers: {
                Authorization: "larissa-matos-carver"
            }
        }).then((response) => {
            this.setState({ users: response.data })
        }).catch((error) => {
            console.log(error.response.data)
        })
    }

    //deletar usuario
    deleteUsers = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id", {
            headers: {
                Authorization: "larissa-matos-carver"
            }
        }).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error.response.data)
        })
    }
    render() {
        const userslist = this.state.users.map((user) =>
            <li key={user.id}>{user.name} - <button>Deletar</button></li>)
        return (
            <Container>
                    <h2>Lista de Usuários</h2>
                    <ul>
                        {userslist}
                    </ul>
            <PosicaoB>Página Inicial</PosicaoB>
                
            </Container>
        )
    }
}