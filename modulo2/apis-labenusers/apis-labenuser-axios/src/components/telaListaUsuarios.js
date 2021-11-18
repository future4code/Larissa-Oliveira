import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {Container, PosicaoB} from '../style'

const CardUser = styled.div`
display: flex;
padding: 2px;
justify-content: space-between;

button{
    margin: 10px;
}

`

export default class TelaListaUsuarios extends React.Component {
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
    deleteUsers = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
            headers: {
                Authorization: "larissa-matos-carver"
            }
        }).then((response) => {
            this.getAllUsers()
            alert('O Usuario foi excluido')
        }).catch((error) => {
            console.log(error.response.data)
            alert('Não foi possivel excluir o usuario')
        })
    }
    render() {
        const userslist = this.state.users.map((user) => {
            return (
                <CardUser>
                <li key={user.id}>
                    {user.name} 
                    <button onClick={() => this.deleteUsers(user.id)}>x</button>
                </li>
                </CardUser>
            )
        })

        return (
            <Container>
                
                    <h2>Lista de Usuários</h2>
                    <ul>
                        {userslist}
                    </ul>
            <PosicaoB>
                <button onClick={this.props.irParaCadastro}>Ir para página de Cadastro</button>
            </PosicaoB>
                
            </Container>
        )
    }
}