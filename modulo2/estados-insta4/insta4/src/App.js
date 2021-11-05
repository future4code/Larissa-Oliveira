import React from 'react';
import styled from 'styled-components';
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const ContainerAdd = styled.div`
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  align-items: center;
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "Larissa",
        fotoUsuario: "https://cdn-icons-png.flaticon.com/512/3220/3220315.png",
        fotoPost: "https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE"
      },
      {
        nomeUsuario: "Rodrigo",
        fotoUsuario: "https://image.freepik.com/free-vector/man-shows-gesture-great-idea_10045-637.jpg",
        fotoPost: "https://picsum.photos/id/1005/367/267"
      },
    ],

    valorInputUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  };
  adicionarPots = () => {
    const novoUsuario = {
      nomeUsuario: this.state.valorInputUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost,
    };
    const novoUsuarios = [...this.state.posts, novoUsuario]
    this.setState({ posts: novoUsuarios })
  }

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value })
  }
  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value })
  }
  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value })
  }
  render() {
    const listaDeComponentes = this.state.posts.map((usuario) => {
      return (
        <Post 
          nomeUsuario={usuario.nomeUsuario}
          fotoUsuario={usuario.fotoUsuario}
          fotoPost={usuario.fotoPost} 
          />
      )
    })
    return (
      <MainContainer>
        <h1>Adicionar novo post</h1>
        <ContainerAdd>
          <input
            // Mesma lógica do exemplo anterior
            value={this.state.valorInputUsuario}
            // Repare na função que é passada aqui no onChange
            onChange={this.onChangeInputUsuario}
            placeholder={"Nome do usuario "}
          />
          <input
            // Diferente do input acima, a variável de estado aqui é outra
            value={this.state.valorInputFotoUsuario}
            // E a função também é outra
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Foto do perfil"}
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto do post"}
          />
          <button onClick={this.adicionarPots}>Adicionar</button>
        </ContainerAdd>
        <p>{listaDeComponentes}</p>
      </MainContainer>
    )
  }

}

export default App;