import styled from 'styled-components'

export const ContainerPagination = styled.div`
  width: 40%;
  margin: 0 auto;

  @media(max-width: 420px){
    width: 60%;
  }
`

export const Container =styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 2px;
  width: 90%;
  height: 97%;
  margin: 4px 5px 40px 5px;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-items: center;
    align-items: center;
  }
`

export const Img = styled.img`
  width: 100%;
  height: 90%;
  border-radius: 3px;    
  object-fit:cover;
  -webkit-box-reflect:below 2px linear-gradient( transparent, #0004);
  transform-origin:center;
  transform:perspective(800px) rotateY(25deg);
  transition:0.5s;
  @media screen and (max-width: 800px) {
    width: 100%;
  height: 90%;
  border-radius: 3px;    
  object-fit:cover;
  -webkit-box-reflect:below 2px linear-gradient( transparent, #0004);
  transform-origin:center;
  transform:perspective(0px) rotateY(0deg);
  transition:0.5s;
  }
`

export const All = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: start;
  width: 100vw;
  max-width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-items: center;
    align-items: center;
  }
`

export const TitleContainer = styled.div`
  width: 80%;
  max-width: 100%;
  text-align: center;
  object-fit:cover;

  P {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const ContainerImg  = styled.div`
  padding: 1px;
  width: 100%;
  height: 100%;
  display: grid;
  -webkit-align-items: start;
  -webkit-box-align: start;
  -ms-flex-align: start;
  overflow: hidden;
  justify-items: center;
  align-items: center;
  align-content: center;

  :hover img {
    opacity:0.3;
    cursor: pointer;
  }
  img:hover {
    transform:perspective(800px)       
    rotateY(0deg);
    opacity:1;
  }
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-items: center;
    align-items: center;


  }
`