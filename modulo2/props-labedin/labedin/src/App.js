import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled from "styled-components";
import GlobalStyle from './components/GlobalStyle/GlobalStyle';


const ContainerApp = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const PageSectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
`;

const Titulos = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;



function App() {
  return (
    <ContainerApp>
      <GlobalStyle/>
      <PageSectionContainer>
        <Titulos>Dados pessoais</Titulos>
        <CardGrande
          imagem="https://cdn-icons-png.flaticon.com/512/4433/4433179.png"
          nome="Larissa Matos"
          descricao="Oi, eu sou a Larissa. Sou aluna da Labenu. Adoro aprender coisas novas com a Labenu."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <CardPequeno
          imagem="https://cdn-icons.flaticon.com/png/512/69/premium/69957.png?token=exp=1635959769~hmac=aee584d48b0f690be8bf6560712412d0"
          endereco="Email: "
          texto ="Larissa-Matos@email.com"
        />

        <CardPequeno
          imagem="https://as2.ftcdn.net/v2/jpg/01/26/90/51/500_F_126905192_bCCuxEd97GviRhJNYcq7KTSgPdCZ1PvS.jpg"
          endereco="Endereço:" 
          texto ="Americo do Acopagam N-27"
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <Titulos>Experiências profissionais</Titulos>
        <CardGrande
          imagem="https://cdn-icons-png.flaticon.com/512/4433/4433174.png"
          nome="Larissa Matos"
          descricao="Estudando para me formar como desenvolvedora para o mercado de trabalho!"
        />

        <CardGrande
          imagem="https://cdn-icons-png.flaticon.com/512/4481/4481293.png"
          nome="Labenu"
          descricao="FullStack"
        />
      </PageSectionContainer>

      <PageSectionContainer>
      
        <Titulos>Minhas redes sociais</Titulos>
        
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />
        
        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />

      </PageSectionContainer>
    </ContainerApp>
  );
}

export default App;
