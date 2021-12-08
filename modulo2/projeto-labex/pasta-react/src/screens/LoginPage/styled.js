import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
`

export const Container = styled.div`
/* background-color: #fff; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #86BBD8;
`