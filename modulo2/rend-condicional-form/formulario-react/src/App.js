import React from 'react';
import Etapa1 from './Components/Etapa1'
import Etapa2 from './Components/Etapa2'
import Etapa3 from './Components/Etapa3'
import Final from './Components/Final'
import styled from 'styled-components';

const ContainerApp = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export default class App extends React.Component {
  state = {
    etapa: 1
  }
  proximaEtapa = () => {
    this.setState ({
      etapa: this.state.etapa + 1
    })
  }
  renderizaPagina = () => {
    switch(this.state.etapa){
      case 1:
      return<Etapa1/>
      case 2:
      return<Etapa2/>
      case 3:
      return<Etapa3/>
      default:
      return<Final/>
    }
  }
  render () {
    <Etapa1/>

    return(
      <ContainerApp>
      {this.renderizaPagina()}
      <button onClick={this.proximaEtapa}>Próxima etapa</button>
      </ContainerApp>
    )
  }
}

// export default App;
