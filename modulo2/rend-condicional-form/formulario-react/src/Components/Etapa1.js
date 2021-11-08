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



export default class Etapa1 extends React.Component {
    render () {
        return (
            <ContainerApp>
              <h1>ETAPA 1 - DADOS GERAIS</h1>
              <Titulos>
              <h2>1. Qual o seu nome?</h2>
              <input></input>
              </Titulos>
              <Titulos>
              <h2>2. Qual sua idade?</h2>
              <input></input>
              </Titulos>
              <Titulos>
              <h2>3. Qual seu email?</h2>
              <input></input>
              </Titulos>
              <Titulos>
              <h2>4. Qual a sua escolaridade?</h2>
              <select>
                  <option Value='ensino medio incompleto'>Ensino 
                  Médio Incompleto</option>
                  <option Value='ensino medio completo'>Ensino 
                  Médio Completo</option>
                  <option Value='ensino superior incompleto'>Ensino 
                  Superior Incompleto</option>
                  <option Value='ensino superior completo'>Ensino 
                  Superior Completo</option>
              </select>
              </Titulos>
            </ContainerApp>
          );
    }
}