import React from 'react';
import {Container, Div, Inputs,Button} from './Style'

export default class CreatePlaylistSection extends React.Component {
    state = {
        inputName: "",
    }

    onChangeInputName = (event) => {
        this.setState({ inputName: event.target.value })
    }

    handleClickButton = () => {
        this.props.functionCreatePlaylist(this.state.inputName)
        this.setState({ inputName: "" })
    }

    render() {

        return (
            <Div>
                <h2>CRIAR PLAYLIST</h2>
                <Container>
                    <Inputs
                        placeholder={"Nome da playlist"}
                        onChange={this.onChangeInputName}
                        value={this.state.inputName}
                    />
                <Button onClick={this.handleClickButton} >Criar</Button>
                </Container>
            </Div>

        )
    }
}