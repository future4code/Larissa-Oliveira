import React from 'react';
import axios from 'axios';
import AddTrackToPlaylist from '../AddTrackToPlaylist/AddTrackToPlaylist';
import {B, Button2, CardList, Musica } from './Style'

const axiosConfig = {
    headers: {
        Authorization: "larissa-matos-carver"
    }
}

export default class PlaylistDetails extends React.Component {
    state = {
        tracks: []
    }


    componentDidUpdate = () => {
        this.getPlaylistTracks()
    }

    addPlaylistTrack = (name, artist, url) => {
        const body = {
            "name": name,
            "artist": artist,
            "url": url
        }

        axios
            .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`,
                body,
                axiosConfig
            )
            .then(() => {
                this.getPlaylistTracks()
            }).catch((error) => {
                window.alert("Não foi possivel adicionar a musica")
                console.log(error)
            })
    }

    getPlaylistTracks = () => {
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`,
                axiosConfig
            ).then((response) => {
                this.setState({ tracks: response.data.result.tracks })
                console.log(response.data.result.tracks)
            })
    }

    deleteTrack = (trackId) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks/${trackId}`,
            axiosConfig
        )
            .then(() => {
                this.getPlaylistTracks()
            })
            .catch((error) => {
                console.log(error)
                window.alert("Não foi possivel excluir")
            })
    }


    render() {
        const playlistTracks = this.state.tracks.map(track => {
            return (
                <B key={track.id}>
                    <Musica>
                        <span>{track.name}</span>
                        <audio controls src={track.url}></audio>
                    </Musica>
                    <Button2 onClick={() => this.deleteTrack(track.id)}>X</Button2>
                </B>
            )
        })
        return (
            <div>
                <CardList >
                    <h1>{this.props.playlistName}</h1>
                    <AddTrackToPlaylist
                        functionAddTrack={this.addPlaylistTrack}
                    />
                </CardList>
                <ul>
                    {playlistTracks}
                </ul>
            </div>
        )
    }
}