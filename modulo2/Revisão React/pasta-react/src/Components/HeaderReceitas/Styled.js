import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
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

export const Link1 = styled.p`
font-size:22px;
padding: 8px;
color: red;
text-decoration: none;
border:none;
cursor: pointer;
border-radius: 50%;
:hover {
    background: red;
    color: #000;
    border-radius: 10px;
}
`