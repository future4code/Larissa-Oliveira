import React from 'react';
import axios from 'axios';
import {Container, PosicaoB} from './style';
import TelaCadastro from './components/telaCadastro';
import TelaListaUsuarios from './components/telaListaUsuarios';

export default class App extends React.Component {
  state={
    telaAtual: "cadastro",
    nomeUsuario: "",
    emailUsuario: "",
    listaDeUsuario:[],
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaListaUsuarios irParaCadastro={this.irParaCadastro}/>
      default:
        return <TelaCadastro />    
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
    
  }
  irParaLista = () => {
    this.setState({telaAtual: "lista"})
    
  }

  getUserById = () => {
    axios
    .get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id', {
        headers:{
          Authorization: 'larissa-matos-carver'
        }
      })
    
    .then((resposta) => {
      console.log(resposta)
    })
    .catch((erro) => {
      console.log(erro.response)
    })
  }

  searchUsers =() => {
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=&email=',
      {
        headers:{
          Authorization: 'larissa-matos-carver'
        }
      }
    )
  }

  

  editUser = () => {
    axios
    .put(
      'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id',
      {
        headers:{
          Authorization: 'larissa-matos-carver'
        }
      }
    )
  }

  render() {
    return(
      <Container>
        {this.escolheTela()}
      </Container>
    )
  

}
}


