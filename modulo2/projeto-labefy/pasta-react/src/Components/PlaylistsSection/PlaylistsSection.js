import React from 'react';
import axios from 'axios';
import {Container, ContainerList, Div,Button,Button2  } from './Style'

const axiosConfig = {
    headers: {
        Authorization: "larissa-matos-carver"
    }
}

export default class PlaylistsSection extends React.Component {
    state = {
        playlists: []
    }

    deletePlaylist = (playlistId) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`
            , axiosConfig)
            .then(() => {
                this.props.getAllPlaylists()
            })
            .catch((error) => {
                window.alert("Erro ao excluir playlist")
            })
    }

    render() {
        const myPlaylists = this.props.playlists.map(playlist => {
            return (
                <ContainerList >
                <li key={playlist.id}>
                    <Button  onClick={() => this.props.playlistDetails(playlist.id, playlist.name)}>{playlist.name}</Button>
                    <Button2  onClick={() => { this.deletePlaylist(playlist.id) }}>X</Button2>
                </li>
                </ContainerList>
            )
        })

        return (
            <Div>
                <h2>PLAYLISTS</h2>
                 <Container>
                <ul>{myPlaylists}</ul>
                </Container>
            </Div>
        )
    }




}