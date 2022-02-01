import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
`

export const Card = styled.div `
/* background-color: #191923; */
cursor: pointer;
width: 570px;
margin: 20px;
position: relative;
cursor: pointer;
text-decoration: none;
border-radius: 10px;
box-shadow: 0 5px 10px 0 rgb(0 0 0 / 10%);
background: rgb(33,189,253);
background: linear-gradient(180deg, rgba(33,189,253,1) 0%, rgba(143,33,253,1) 24%, rgba(183,33,255,1) 49%, rgba(166,75,244,1) 100%);
overflow: hidden;
padding: 7px 5px 3px ;
box-sizing: border-box;
    h2 {
        color: black;
        line-height: 1.2;
        position: absolute;
        padding: 5px;
        top: 0px;
        left: 0px;
        background: rgb(33,189,253);
        border-radius: 5px;
    }


`
export const Info = styled.div `
width: 100%;
height: 30%;
padding: 5px 10px;
color:#fff;
`
export const Imagem = styled.div`

    :hover {
        opacity: 40%;
        cursor: pointer;
    }
    img {
    width: 100%;
    border-radius: 10px;
    cursor: pointer;

}
`

export const Header = styled.header`
    position:relative;
    overflow:hidden;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    align-content: flex-start;
    color:#eee;
`
export const Area = styled.div`
padding:3% 0;
width: 22%;
text-align: center;
h1{
    font-size:22px;
    padding: 8px;
    color: #fff;
    text-decoration: none;
    } 
`


export const Logo = styled.div`
    padding:1.1% 0;  
    width:22%;
    text-align: center;
  border-radius:3px;
  text-decoration:none;
  display:inline-flex;
  align-items:center;
  align-content:center;
  font-weight:900;
  font-size:1.1em;
  line-height:1;
  box-sizing:border-box;
    h1 {
        color: #eee;
        font-size: 3.125rem;
        line-height: 3.125rem;
        text-decoration: none;
    }

    img {
    vertical-align: -1px;
    font-weight: 700;
    white-space: normal;
    vertical-align: -4px;
    line-height: 2rem !important;
    width: 30%;
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
}

`




export const NavMenu = styled.div`
padding:3% 0;
width: 22%;
text-align: center;
display: flex;
justify-content: space-around;
align-items: flex-end;
`

export const Link = styled.p`
font-size:22px;
padding: 8px;
color: #fff;
text-decoration: none;
cursor: pointer;
:hover {
    background: rgb(253, 178, 2);
    color: #000;
    border-radius: 10px;
}

`