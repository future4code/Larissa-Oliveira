import React from 'react'
import { useHistory } from 'react-router-dom';
import { goToListTripsPage, goToApplicationFormPage, goToLoginPage} from '../../Router/goToPages';
import {Header, NavMenu, Link, GlobalStyle} from './styled.js'

const HeaderHome = (props) => {
    const history = useHistory()

    return(
        <Header>
            <GlobalStyle />
                <img src="../../../public/logoFoguete.png" alt="logo"/>
                <h1>LabeX - Viagens Espaciais</h1>
                <NavMenu>
                    <Link onClick={()=>goToListTripsPage(history)}>Viagens</Link>
                    <Link onClick={()=>goToApplicationFormPage(history)}>Cadastre-se</Link>
                    <Link onClick={()=>goToLoginPage(history)}>Login</Link>
                </NavMenu>
        </Header>
    )
}

export default HeaderHome