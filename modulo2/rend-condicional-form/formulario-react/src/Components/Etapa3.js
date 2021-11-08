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

export default class Etapa3 extends React.Component {
    render() {
        return (
            <ContainerApp>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DO ENSINO</h1>
                <Titulos>
                    <h2>7. Porque que você não terminou um curso de graduação</h2>
                    <input></input>
                </Titulos>
                <Titulos>
                    <h2>8. Você fez algum curso complementar? </h2>
                    <select>
                        <option Value='ensino medio incompleto'>Ensino
                            Médio Incompleto</option>
                    </select>
                </Titulos>
            </ContainerApp>
        );
    }
}