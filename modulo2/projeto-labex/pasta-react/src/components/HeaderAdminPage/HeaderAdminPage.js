import React from 'react'
import { useHistory } from 'react-router-dom';
import { goToAdminHomePage, goToCreateTripPage, goToLoginPage, goToHomePage } from '../../Router/goToPages';
import {Header, NavMenu, Link, BntLogout, GlobalStyle} from "./styled"
import logoFoguete from '../img/logoFoguete.png'

const HeaderAdminPage = (props) => {
     const history = useHistory()

    return(
        <Header>
            <GlobalStyle />
            <img src={logoFoguete} onClick={() => goToHomePage(history)}/>
                <h1>Área do Administrador</h1>
                <NavMenu>
                    <Link onClick={()=>goToAdminHomePage(history)}>Viagens</Link>
                    <Link onClick={()=>goToCreateTripPage(history)}>Nova Viagem</Link>
                </NavMenu>
                <BntLogout onClick={()=>goToLoginPage (history)}>logout</BntLogout>
        </Header>
    )
}

export default HeaderAdminPage