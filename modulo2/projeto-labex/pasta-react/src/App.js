import React from 'react';
import Routers from './Router/Routers'
import styled from 'styled-components'

const Container = styled.div`
    font-family: 'Raleway', sans-serif;
    height: 100%;
    min-height: 100vh;
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
    /* flex-wrap: wrap; */
    /* align-items: center; */
    background: rgb(2,0,36);
background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(105,234,231,1) 44%, rgba(0,212,255,1) 100%);

`

const App = () => {

  return (
    <Container>
      <Routers />
    </Container>
    
  )

}
export default App;
