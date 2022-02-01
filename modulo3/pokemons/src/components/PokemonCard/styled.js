import styled from "styled-components";
import { backgroundCard } from "../../constants/colors";

export const PokeCardContainer = styled.div`
  height: 35vh;
  width: 250px;
  margin: 10px;
  display: grid;
  grid-template-rows: 70% 10% 20%;
`;

export const ImgContainer = styled.div`
  background: ${backgroundCard};
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10%;
  border-top-right-radius: 10%;
`;

export const PokeImg = styled.img`
  height: 60%;
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const NameContainer = styled.div `
  font: 14pt;
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
  `