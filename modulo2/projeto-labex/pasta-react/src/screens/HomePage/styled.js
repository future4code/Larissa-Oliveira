import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
`

export const TripContainer = styled.div`
/* background-color: #fff; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #86BBD8;
`
export const TripGrid = styled.div`
background-color: #86BBD8;
display:flex;
flex-wrap: wrap;
justify-content: center;
`