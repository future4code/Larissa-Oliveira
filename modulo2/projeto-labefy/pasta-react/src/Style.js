import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
`
export const Container = styled.div`
    height: 100%;
    min-height: 100vh;
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap

`
export const Botao = styled.div`
    position: absolute;
    top: 5px;
    left: 5px;
`