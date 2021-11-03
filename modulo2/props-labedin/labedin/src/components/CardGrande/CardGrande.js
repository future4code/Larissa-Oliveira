import React from 'react';
import styled from "styled-components";


const BigCardContainer  = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`;

const ContainerNome = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

const ImagemBigCard = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`;

const SubTitulo = styled.h4 `
    margin-bottom: 15px;
`;

function CardGrande(props) {
    return <BigCardContainer>
            <ImagemBigCard src={ props.imagem } alt= {props.nome} />
            <ContainerNome>
            <SubTitulo> <h4>{ props.nome } </h4> </SubTitulo>
                <p>{ props.descricao }</p>
            </ContainerNome>
        </BigCardContainer>
}

export default CardGrande;