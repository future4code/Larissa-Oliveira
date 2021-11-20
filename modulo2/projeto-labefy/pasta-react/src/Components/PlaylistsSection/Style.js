import styled from 'styled-components'

export const ContainerList = styled.div`
    list-style-type:none;
`

export const Div = styled.div`
    font-size: calc(25px + 2vmin);
    color: #C6EBBE; 
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    font-size: calc(10px + 2vmin);
`
export const Button = styled.button`
    border-radius: 12px;
    padding: 5px 30px;
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

export const Button2 = styled.button`
    margin: 0 20px 0;
    border-radius: 12px;
    padding: 1px 5px;
    border: none;
    background: red;
    color: #C6EBBE;
    -webkit-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
    -moz-box-shadow:    9px 7px 5px rgba(50, 50, 50, 0.77);
    box-shadow:         9px 7px 5px rgba(50, 50, 50, 0.77);
    :hover{
        background: #5CF64A;
        color: #282C34;
    }
`