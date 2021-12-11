import React from 'react'
import { useHistory } from 'react-router-dom';
import { goToListTripsPage, goToApplicationFormPage, goToLoginPage } from '../../Router/goToPages';
import { Header, NavMenu, Link, GlobalStyle,Logo } from './styled.js'
import logoFoguete from '../img/logoFoguete.png'

const HeaderHome = (props) => {
    const history = useHistory()

    return (
        <Header>
            <GlobalStyle />
            <Logo>
                <img src={logoFoguete} alt='logo' />
                <h1>LabeX</h1>
            </Logo>
            <NavMenu>
                <Link onClick={() => goToLoginPage(history)}>Login</Link>
            </NavMenu>
        </Header>
    )
}

export default HeaderHome