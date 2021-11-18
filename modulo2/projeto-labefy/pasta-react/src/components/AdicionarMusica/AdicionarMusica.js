import React from 'react';
import axios from 'axios';
import { Container, Botao } from './Style'

export default class AdicionarMusica extends React.Component {
    state = {
        nomeDaMusica: "",
        artista:"",
        linkDaMusica: ""
    }

    handleNomeDaMusica = (e) => {
        this.setState({ nomeDaMusica: e.target.value })
    }
    handleArtista = (e) => {
        this.setState({ artista: e.target.value })
    }
    handleLinkDaMusica = (e) => {
        this.setState({ linkDaMusica: e.target.value })
    }

    createPlaylist = () => {
        const body = {
            name: this.state.nomeDaMusica,
            artist: this.state.artista,
            url: this.state.linkDaMusica
        }
        axios
            .post(
                'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks',
                body,
                {
                    headers: {
                        Authorization: 'larissa-matos-carver'
                    }
                })
            .then(() => {
                this.setState({ nomeDaMusica: "" })
                this.setState({ artista: "" })
                this.setState({ linkDaMusica: "" })
                alert('Musica adicionada com sucesso!')
            })
            .catch((erro) => {
                console.log(erro.response.data)
                alert('Não foi possível criar a Playlist')
            })
    }

    render() {

        return (
            <Container>
                <h2>Adicionar Musicas</h2>
                <input
                    placeholder={'Nome da Musica'}
                    value={this.state.nomeDaMusica}
                    onChange={this.handleNomeDaMusica}
                />
                <input
                    placeholder={'Nome do Artista'}
                    value={this.state.artista}
                    onChange={this.handleArtista}
                />
                <input
                    placeholder={'Nome da Playlist'}
                    value={this.state.linkDaMusica}
                    onChange={this.handleLinkDaMusica}
                />
                <button onclick={this.createPlaylist}>Criar</button>
                <Botao>
                    <button onClick={this.props.irParaListaPlaylist}>Lista de Playlist</button>
                </Botao>
            </Container>
        )
    }
}