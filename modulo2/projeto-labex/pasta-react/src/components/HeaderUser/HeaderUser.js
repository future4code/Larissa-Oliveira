import React from 'react'
import { useHistory } from 'react-router-dom';
import { goToHomePage, goBack, goToLoginPage } from '../../Router/goToPages';
import { Header, NavMenu, Link, GlobalStyle, Logo, Area } from './styled.js'
import logoFoguete from '../img/logoFoguete.png'

const HeaderUser = (props) => {
    const history = useHistory()

    return (
        <Header>
            <GlobalStyle />
            <Logo>
                <img src={logoFoguete} onClick={() => goToHomePage(history)} />
            
                <h1>LabeX </h1>
            
            </Logo>
            <Area>
            <h1>Escolha o seu destino</h1>
            </Area>


            <NavMenu>
                {/* <Link onClick={()=>goToListTripsPage(history)}>Viagens</Link>
                    <Link onClick={()=>goToApplicationFormPage(history)}>Cadastre-se</Link> */}
                <Link onClick={() => goToHomePage(history)}>Home</Link>
                <Link onClick={() => goBack(history)}>voltar</Link>
                <Link onClick={() => goToLoginPage(history)}>Login</Link>
            </NavMenu>
        </Header>
    )
}

export default HeaderUser