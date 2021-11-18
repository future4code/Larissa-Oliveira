import React from 'react';
import axios from 'axios';
import { Container, Botao } from './Style'

export default class TelaCriarPlaylist extends React.Component {
    state = {
        playlist: ""
    }

    componentDidMount(){
        
    }

    handlePlaylist = (e) => {
        this.setState({playlist: e.target.value})
    }

    createPlaylist = () => {
        const body={
            name: this.state.playlist
        }
        axios
        .post(
            'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
            body,
            {
                headers:{
                    Authorization: 'larissa-matos-carver'
                }
            })
        .then(()=>{
            this.setState({ playlist: ""})
            alert('Playlist criada com sucesso!')
        })
        .catch((erro)=>{
            console.log(erro.response.data)
            alert('Não foi possível criar a Playlist')
        }) 
    }

    render() {
        return (
            <Container>
                <h2>Criar Playlist</h2>
                <input 
                    placeholder={'Nome da Playlist'}
                    value={this.state.playlist}
                    onChange={this.handlePlaylist}
                />
                <button onClick={this.createPlaylist}>Criar</button>
                <Botao>
                    <button onClick={this.props.irParaAdicionarMusica}>Adicionar Musica</button>
                </Botao>
            </Container>
        )
    }
}