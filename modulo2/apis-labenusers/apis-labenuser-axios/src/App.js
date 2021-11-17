import React from 'react';
import axios from 'axios';
import {Container, PosicaoB} from './style';
import PaginaUsuarios from './components/paginaUsuarios';

export default class App extends React.Component {
  state={
    nomeUsuario: "",
    emailUsuario: "",
    listaDeUsuario:[],
    botao: false,
  }

  setRedirect = () => {
    this.setState({
      botao: true,
    })
  }
  renderRedirect = () => {
    if (this.state.botao) {
      return <PaginaUsuarios to={PaginaUsuarios} />
    }
  }

  componentDidMount() {
    this.getAllUsers()
  }

  handleNomeUsuario = (e) => {
    this.setState({ nomeUsuario: e.target.value });
  };

  handleEmailUsuario = (e) => {
    this.setState({ emailUsuario: e.target.value });
  };

  getAllUsers = () => {
    axios
    .get(
      'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
      {
        headers:{
          Authorization: 'larissa-matos-carver'
        }
      }
    )
    .then((res)=>{
      this.setState({ listaDeUsuario: res.data.result.users})
      console.log(res.data.result.users)
    })
    .catch((err)=> {
      console.log(err.response)
    })
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

  createUser = () => {
    const body = {
      name: this.state.nomeUsuario,
      email: this.state.emailUsuario
    }
    axios
    .post(
      'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
      body,
      {
        headers:{
          Authorization: 'larissa-matos-carver'
        }
      })
    .then(() => {
      this.setState({nomeUsuario: ''})
      this.setState({emailUsuario: ''})
      alert('Usuário registrado')
    })
    .catch((err) => {
      console.log(err.response.data);
      alert('Não foi possível registrar o usuario')
    });
    console.log(body)
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

  deleteUser = (id) => {
    axios
    .delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
      {
      headers:{
        Authorization: 'larissa-matos-carver'
      }
    })
    .then(() => {
      this.setState({listaDeUsuario: ''})
      alert('Usuario deletado')
    })
    .catch((err) => {
      console.log(err.response.data)
      alert('Não foi possível deletar o usuario')
    })
  }


  
// <button onClick={this.mudaBotao}>{this.state.botao ? 'Clica' : 'Clica de novo'}</button>

  render() {
    console.log(this.state.listaDeUsuario)

    return(
      <Container>
        <input 
        placeholder={'Nome:'}
        value={this.state.nomeUsuario}
        onChange={this.handleNomeUsuario}
        />
      <input 
        placeholder={'Email:'}
        value={this.state.emailUsuario}
        onChange={this.handleEmailUsuario}
        />
        <button onClick={this.createUser}>Salvar</button>
        <PosicaoB>
          {this.renderRedirect}
        <button onClick={this.setRedirect}> Ir para página de lista</button>
        </PosicaoB>
      </Container>
    )
  

}
}


