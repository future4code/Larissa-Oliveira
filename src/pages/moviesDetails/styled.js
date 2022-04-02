import styled from 'styled-components'

export const TitleContainer = styled.div`
  width: 100%;
  max-width: 100%;

  p {
    text-align: center;
    color: yellow;
    text-shadow: rgb(0, 0, 0) 2px 2px 2px;
    margin-right: 40px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
    /* margin: 10px 10px 10px; */

  }
`

export const ContainerCover = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 10px;
  max-width: 600px;
  min-width: 300px;
  background-color: rgba(77, 77, 77, 0.56);
  border-radius: 10px;

  p {
    color: rgb(255, 255, 255);
    text-shadow: rgb(0, 0, 0) 2px 2px 2px;
    margin-right: 40px;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
    height: 100%;
    margin: 10px 10px 10px;
  }
`

export const MainTitle = styled.div`
  line-height: 1.1em;
  font-weight: 700;
  font-size: 1.7rem;
  font-size: 35px;
  color: rgb(255, 255, 255);
  text-shadow: rgb(0, 0, 0) 2px 2px 2px;

  @media screen and (max-width: 800px) {
    line-height: 1.2em;
  }
`

export const OriginalTitle = styled.p`
  line-height: 1.3em;
  color: rgb(255, 255, 255);
  text-shadow: rgb(0, 0, 0) 2px 2px 2px;
`

export const DateRunTime = styled.div`
display: flex;
justify-content: space-around;
justify-content: left;

  p {
    color: rgb(255, 255, 255);
    text-shadow: rgb(0, 0, 0) 2px 2px 2px;
    margin-right: 40px;
  }
`

export const Overview = styled.p`
  text-align:justify;
  line-height: 1.7;
  color: rgb(255, 255, 255);
  text-shadow: rgb(0, 0, 0) 2px 2px 2px;
`

export const GenderWrap = styled.div`
  display: flex;
  justify-content: left;

  p {
  margin-right: 50px;
  border: 2px solid yellow;
  border-radius: 10px;
  padding: 10px;
  align-items: center;
  color: rgb(255, 255, 255);
  text-shadow: rgb(0, 0, 0) 2px 2px 2px;
  }

  @media screen and (max-width: 810px) {
    flex-wrap: wrap;

    p {
      margin-right: 20px;
    }
  }
`
export const BackButton = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  margin-top: 20px;
`