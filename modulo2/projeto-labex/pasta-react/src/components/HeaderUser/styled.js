import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
`

export const Card = styled.div `
background-color: #191923;
width: 370px;
height: 300px;
background-color: yellow;
margin: 20px;
position: relative;
cursor: pointer;
    h2 {
        color:#191923;
        position: absolute;
        padding: 5px;
        top: 0px;
        left: 0px;
        background-color: rgb(253, 178, 2);
    }
img {
    width: 100%;
    height: 300px;
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }

}
`
export const Info = styled.div `
width: 100%;
height: 30%;
padding: 5px 10px;
color:#fff;
`

export const Header = styled.header`
background-color: #201335;
height: 100px;
width: 100%;
padding: 0.5%;
color: #fff;
display: flex;
justify-content: space-between;
align-items: flex-end;
position: relative;
h1 {
        /* position: absolute; */
        padding: 5px;
        top: 0px;
        left: 0px;
        /* background-color: rgba(0,0,0,0.5); */
    }
img {
    width: 7%;
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
`


export const NavMenu = styled.div`
display: flex;
justify-content: space-around;
align-items: flex-end;
width: 30%;
height: 50%;
`

export const Link = styled.p`
font-size:22px;
padding: 3px;
color: #fff;
text-decoration: none;
cursor: pointer;
:hover {
    background: #fff;
    color: #000;
}

`