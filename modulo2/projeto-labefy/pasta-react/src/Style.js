import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
`

export const Header = styled.div`
margin: 0 20px 0;
/* border:1px solid blue; */
display: flex;
flex-direction: column;
align-items: center;
flex-direction: column;
align-items: center;
color: #C6EBBE; 
`

export const Container = styled.div`

    height: 100%;
    min-height: 100vh;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    background-color: #282c34;
    color: #C6EBBE; 


`
export const ContainerDetalhesPlaylists = styled.div`
border:1px solid pink;
width: 50vw;
display: flex;
border-radius: 15px;
background: #F72585;
flex-direction: column;
box-shadow: 10px 5px 5px black;


`

export const CButton =styled.div`
height: 10vh;
width: 50vw;
display: flex;
flex-direction: row;
align-items: center;
align-content: space-around;
flex-direction: row;
justify-content: space-around;
`


export const Button = styled.button`
display: flex;
border-radius: 12px;
padding: 1% 5%;
border: none;
background: #7CA5B8;
color: #C6EBBE;
-webkit-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
-moz-box-shadow:    9px 7px 5px rgba(50, 50, 50, 0.77);
box-shadow:         9px 7px 5px rgba(50, 50, 50, 0.77);
:hover{
    background: #5CF64A;
    color: #282C34;
}
`

