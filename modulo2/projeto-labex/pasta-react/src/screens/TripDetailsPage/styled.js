import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
`

export const DetailsContent = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 5vw;
  padding: 0;
  list-style-type: none;
  border-radius: 10px;
  h1{
   color: rgb(33,189,253);
   font-size: 40px;
  }
  

`
export const Details = styled.div `
    background: rgb(33,189,253);
    background: linear-gradient(180deg, rgba(33,189,253,1) 0%, rgba(143,33,253,1) 24%, rgba(183,33,255,1) 49%, rgba(166,75,244,1) 100%);
    border-radius: 10px;
    overflow: hidden;
    padding: 77px 55px 33px;
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 10%);
    -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
    -webkit-box-shadow: 0 5px 10px 0 rgb(0 0 0 / 10%);
    -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
    -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
    h2{
    display: block;
    font-size: 30px;
    color: rgb(253, 178, 2);
    line-height: 1.5;
    text-align: center;
    }
  width: 100%;
  position: relative;
  display: block;
  height: 100%;  
  overflow: hidden;
  text-decoration: none;
  box-shadow: 10px 5px 5px black;

padding: 10px;
box-sizing: border-box;
`
export const CandidatesList = styled.div `
    background: rgb(33,189,253);
    background: linear-gradient(180deg, rgba(33,189,253,1) 0%, rgba(143,33,253,1) 24%, rgba(183,33,255,1) 49%, rgba(166,75,244,1) 100%);
    border-radius: 10px;
    overflow: hidden;
    padding: 77px 55px 33px;
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 10%);
    -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
    -webkit-box-shadow: 0 5px 10px 0 rgb(0 0 0 / 10%);
    -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
    -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
    h2{
        display: block;
    font-family: Poppins-Bold;
    font-size: 30px;
    color: #333;
    line-height: 1.2;
    text-align: center;
    }
  width: 100%;
  position: relative;
  display: block;
  height: 100%;  
  overflow: hidden;
  text-decoration: none;
  box-shadow: 10px 5px 5px black;

padding: 10px;
box-sizing: border-box;
`

export const ContainerItem = styled.div `
color:black;
display: flex;
align-items: center;
justify-content: space-around;
width: 50%;
/* padding: 10px; */
box-sizing: border-box;
margin: 10px;
cursor: pointer;
:hover{
    box-shadow: 0 5px 10px 0 rgb(0 0 7 / 10%);
    border-radius: 5px;
}
`

export const BtnTrue = styled.button `
    border: 1px solid #fff;
    cursor: pointer;
    padding: 5px;
    background-color: rgba(33,189,253,1);
    color: #FFF;
    border-radius: 5px;
    :hover{
        background-color: #eee;
        color: rgba(33,189,253,1);
        border: 1px solid rgba(33,189,253,1);
    }
`
export const BtnFalse = styled.button `
    border: 1px solid rgb(33,189,253);
    cursor: pointer;
    padding: 5px;
    background-color: red;
    color: #FFF;
    border-radius: 5px;
    :hover{
        background-color: #eee;
        color: red;
        border: 1px solid red;
    }
`

export const CandidateInfo = styled.div `
    background: rgb(33,189,253);
    background: linear-gradient(180deg, rgba(33,189,253,1) 0%, rgba(143,33,253,1) 24%, rgba(183,33,255,1) 49%, rgba(166,75,244,1) 100%);
    border-radius: 10px;
    overflow: hidden;
    padding: 77px 55px 33px;
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 10%);
    -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
    -webkit-box-shadow: 0 5px 10px 0 rgb(0 0 0 / 10%);
    -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
    -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
    h2{
        display: block;
    font-family: Poppins-Bold;
    font-size: 30px;
    color: #333;
    line-height: 1.2;
    text-align: center;
    }
  width: 100%;
  position: relative;
  display: block;
  height: 100%;  
  overflow: hidden;
  text-decoration: none;
  box-shadow: 10px 5px 5px black;

padding: 10px;
box-sizing: border-box;
`