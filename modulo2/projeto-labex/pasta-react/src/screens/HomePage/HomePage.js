import React from 'react'
import { useHistory } from 'react-router-dom';
import { goToApplicationFormPage, goToAdminHomePage } from '../../Router/goToPages';
// import ListTripsPage from '../ListTripsPage/ListTripsPage';
import CardPublico from '../../components/HeaderUser/CardPublico';
import CardPrivado from '../../components/HeaderUser/CardPrivado';
import { TripContainer, TripGrid, GlobalStyle } from './styled'

const HomePage = () => {
    const history = useHistory()

    return (
        <TripContainer>
            <GlobalStyle />
            <TripGrid>
                <CardPrivado handleClick={() => goToAdminHomePage(history)} />
                <CardPublico handleClick={() => goToApplicationFormPage(history)} />
            </TripGrid>
        </TripContainer>
    )
}
export default HomePage