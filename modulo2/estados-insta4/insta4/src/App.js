import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Larissa'}
          fotoUsuario={'https://cdn-icons-png.flaticon.com/512/3220/3220315.png'}
          fotoPost={'https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE'}
        />
        <Post
          nomeUsuario={'Rodrigo'}
          fotoUsuario={'https://image.freepik.com/free-vector/man-shows-gesture-great-idea_10045-637.jpg'}
          fotoPost={'https://picsum.photos/id/1005/367/267'}
        />
      </MainContainer>
    );
  }
}

export default App;
