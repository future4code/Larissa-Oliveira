import styled from 'styled-components'

export const Container = styled.div`
margin-top:40px;
text-align: center;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`
export const Botao = styled.div`
    position: absolute;
    top: 30px;
    left: 30px;
`

export const DivInputsButton = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 15vh;
justify-content: space-evenly;
flex-direction: column;

`

export const Inputs = styled.input`

    border: 1px solid #EAD5E6;
    border-radius: 15px;
    margin-left: 10px;
    background: #F3E0EC;
    ::placeholder{
        color:#282C34;
        text-align:center
    } 
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