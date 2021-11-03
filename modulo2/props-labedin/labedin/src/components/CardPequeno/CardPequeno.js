import React from 'react';
import styled from "styled-components";

const CardContainerPequeno = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 70px;
`;

const CardImg = styled.img`
    width: 40px;
    margin-right: 10px;
    border-radius: 50%;
`;

const CardTitulo = styled.h1`
    font-size: medium;
`;

const CardSubtitulo = styled.p`
    margin-left: 10px;
`;

const ContainerNome = styled.div`
    display: flex;
    flex-direction:row;
    justify-items: flex-start;
`;


function CardPequeno(props) {
    return (
        <CardContainerPequeno>
            <CardImg src={props.imagem} alt = {props.nome} />
            <ContainerNome>
            <CardTitulo>{props.endereco}</CardTitulo>
            <CardSubtitulo> {props.texto}</CardSubtitulo> 
            </ContainerNome>
        </CardContainerPequeno>
    )
}
export default CardPequeno;