import React from 'react';
import {Container, GlobalStyle} from './Style'
import TelaCriarPlaylist from './components/TelaCriarPlaylist/TelaCriarPlaylist';
import TelaTodasPlaylist from './components/TelaTodasPlaylist/TelaTodasPlaylist';
import AdicionarMusica from './components/AdicionarMusica/AdicionarMusica';
import DetalhesPlaylist from './components/DetalhesPlaylist/DetalhesPlaylist'

export default class App extends React.Component {
  state = {
    telaAtual: "CriarPlaylist"
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "CriarPlaylist":
        return<TelaCriarPlaylist irParaAdicionarMusica ={this.irParaAdicionarMusica }/>
      case "AdicionarMusica":
        return<AdicionarMusica irParaListaPlaylist={this.irParaListaPlaylist}/>
      case "ListaPlaylist":
         return<TelaTodasPlaylist irParaDetalhesPlaylist={this.irParaDetalhesPlaylist}/>
      case "DetalhesPlaylist":
        return <DetalhesPlaylist irParaCriarPlaylist={this.irParaCriarPlaylist}/>
      default:
        return<TelaCriarPlaylist />
    }
  }

  irParaCriarPlaylist = () =>{
    this.setState({telaAtual: "CriarPlaylist"})
  }
  irParaListaPlaylist = () =>{
    this.setState({telaAtual: "ListaPlaylist"})
  }
  irParaAdicionarMusica =()=>{
    this.setState({telaAtual: "AdicionarMusica"})
  }
  irParaDetalhesPlaylist =()=> {
    this.setState({telaAtual: "DetalhesPlaylist"})
  }

  render() {
    return (
      <Container>
        <GlobalStyle />
        {this.escolheTela()}
      </Container>
    );

  }

}
