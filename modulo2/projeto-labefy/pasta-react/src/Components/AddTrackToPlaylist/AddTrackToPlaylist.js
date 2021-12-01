import React from 'react';
import {Inputs, DivInputsButton,Button} from './Style'

export default class AddTrackToPlaylist extends React.Component {
    state = {
        inputMusicName: "",
        inputArtist: "",
        inputUrl: "",
        tracks: []

    }

    onChangeInputMusicName = (event) => {
        this.setState({ inputMusicName: event.target.value })
    }

    onChangeInputArtist = (event) => {
        this.setState({ inputArtist: event.target.value })
    }

    onChangeInputUrl = (event) => {
        this.setState({ inputUrl: event.target.value })
    }

    handleClickButton = () => {
        this.props.functionAddTrack(this.state.inputMusicName, this.state.inputArtist, this.state.inputUrl)
        this.setState({
            inputMusicName: "",
            inputArtist: "",
            inputUrl: ""
        })
    }

    render() {
        return (
            <DivInputsButton>
                <Inputs
                    placeholder="Música"
                    type="text"
                    onChange={this.onChangeInputMusicName}
                />
                <Inputs
                    placeholder="Artista/Banda"
                    type="text"
                    onChange={this.onChangeInputArtist}
                />
                <Inputs
                    placeholder="url"
                    type="url"
                    onChange={this.onChangeInputUrl}
                />
                <Button onClick={this.handleClickButton}>Adicionar</Button>
            </DivInputsButton>
        )
    }
}
