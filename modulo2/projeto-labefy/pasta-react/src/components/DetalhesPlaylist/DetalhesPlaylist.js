import React from 'react';
import axios from 'axios';
import { Container, Botao } from './Style'

export default class DetalhesPlaylist extends React.Component {
    state = {

    }

    render() {
        return (
            <Container>
                <h2>Detalhes Playlist</h2>
                <Botao>
                    <button onClick={this.props.irParaCriarPlaylist}>Criar Playlist</button>
                </Botao>
            </Container>
        )
    }
}