import React from 'react';
import axios from 'axios';
import { Container,Botao } from './Style'

export default class TelaTodasPlaylist extends React.Component {
    state = {

    }

    render() {
        return (
            <Container>
                <h2>Todas as Playlists</h2>
                <Botao>
                    <button onClick={this.props.irParaDetalhesPlaylist}>Playlist completa</button>
                </Botao>
            </Container>
        )
    }
}