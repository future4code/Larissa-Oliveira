import React from 'react';
import axios from 'axios';
import { Container, PosicaoB } from '../style'
import TelaListaUsuarios from './telaListaUsuarios'

export default class TelaCadastro extends React.Component {
    state = {
        nomeUsuario: this.props.nomeUsuario,
        emailUsuario: this.props.emailUsuario
    }

    handleNomeUsuario = (e) => {
        this.setState({ nomeUsuario: e.target.value });
    };

    handleEmailUsuario = (e) => {
        this.setState({ emailUsuario: e.target.value });
    };

    createUser = () => {
        const body = {
            name: this.state.nomeUsuario,
            email: this.state.emailUsuario
        }
        axios
        .post(
            'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
            body,
            {
                headers: {
                    Authorization: 'larissa-matos-carver'
                }
            })
        .then(() => {
            this.setState({ nomeUsuario: '' })
            this.setState({ emailUsuario: '' })
            alert('Usuário registrado')
        })
        .catch((err) => {
            console.log(err.response.data);
            alert('Não foi possível registrar o usuario')
        });
        console.log(body)
    }




    render() {
        return (
            <Container>
                <h2>Cadastro</h2>
                {this.escolheTela}
                <input
                    placeholder={'Nome:'}
                    value={this.state.nomeUsuario}
                    onChange={this.handleNomeUsuario}
                />
                <input
                    placeholder={'Email:'}
                    value={this.state.emailUsuario}
                    onChange={this.handleEmailUsuario}
                />
                <button onClick={this.createUser}>Cadastrar</button>
                <PosicaoB>
                    <button onClick={this.props.irParaLista}>Ir para página de lista</button>
                </PosicaoB>
            </Container>
        )
    }
}