import React from 'react';
import styled from 'styled-components'
// import Etapa2 from './Components/Etapa2'

const ContainerApp = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const Titulos = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

export default class Etapa2 extends React.Component {
    render() {
        return (
            <ContainerApp>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <Titulos>
                    <h2>5. Qual curso?</h2>
                    <input></input>
                </Titulos>
                <Titulos>
                    <h2>6. Qual a unidade de ensino</h2>
                    <input></input>
                </Titulos>
            </ContainerApp>
        );
    }
}