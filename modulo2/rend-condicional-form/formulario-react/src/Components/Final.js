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

export default class Final extends React.Component {
    render() {
        return (
            <ContainerApp>
                <h1>O FORMULÁRIO ACABOU</h1>
                <Titulos>
                    <h2>Muito obrigada por participar! Entraremos em contato"</h2>
                </Titulos>
            </ContainerApp>
        )
    }
}