import React from 'react';
import axios from 'axios';
import CreatePlaylistSection from './Components/CreatePlaylistSection/CreatePlaylistSection';
import PlaylistsSection from './Components/PlaylistsSection/PlaylistsSection';
import PlaylistDetails from './Components/PlaylistDetails/PlaylistDetails'
import {GlobalStyle, Container, ContainerDetalhesPlaylists, Button, CButton, Header} from './Style'

const axiosConfig = {
    headers: {
        Authorization: "larissa-matos-carver"
    }
}

export default class App extends React.Component {
    state = {
        screen: "home",
        playlists: [],
        tracks: [],
        id: "",
        playlistName: ""
    }

    componentDidMount = () => {
        this.getAllPlaylists()
    }

    createPlaylist = (name) => {
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", 
        {name: name}, 
        axiosConfig
        )
        .then((response) => {
            this.getAllPlaylists()
    
        }).catch((error) => {
            window.alert(`Erro ao cadastrar playlist`)
            console.log(error)
        })
    }

    getAllPlaylists = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",axiosConfig
        )
        .then(response => {
            this.setState({ playlists: response.data.result.list})
        })
    }

    changeToMainPage = () => {
        this.setState({screen: "home"})
    }

    changeToPlaylistDetails = (playlistId, name) => {
        this.setState({screen: "playlistDetails", id: playlistId, playlistName: name })
        console.log(this.state.id)
    }
  
    render () {
        const changeScreen = () => {
            switch (this.state.screen) {
                case "home":
                  return ;
                case "playlistDetails":
                  return (
                  <ContainerDetalhesPlaylists>
                    <CButton>
                      <Button onClick={this.changeToMainPage}>Voltar</Button>
                    </CButton>
                      <PlaylistDetails
                          playlistId={this.state.id}
                          playlistName={this.state.playlistName}
                      />
                      
                  </ContainerDetalhesPlaylists>
                  )
            }
        }

      return (
          <Container>
            <GlobalStyle />
            <Header>
                <CreatePlaylistSection
                    functionCreatePlaylist={this.createPlaylist}              
                />
                <PlaylistsSection
                    playlists={this.state.playlists}
                    playlistDetails={this.changeToPlaylistDetails}
                    getAllPlaylists={this.getAllPlaylists}
                />
            </Header>
            <div>
                {changeScreen()}
            </div>
            
          </Container>
          

      ) 
      
    }
  
}