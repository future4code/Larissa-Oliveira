import React from 'react'
import { useHistory } from 'react-router-dom';
import { goToApplicationFormPage, goToAdminHomePage } from '../../Router/GoToPages';
import { TripContainer, TripGrid, GlobalStyle } from './Styled'

const HomePage = () => {
    const history = useHistory()

    return (
        <TripContainer>
            <GlobalStyle />
            <TripGrid>
                <h1>Home Page</h1>
            </TripGrid>
        </TripContainer>
    )
}
export default HomePage