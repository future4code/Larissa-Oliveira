import React from 'react'
import { useHistory } from 'react-router-dom';
import { Header, NavMenu, Link, Link1, GlobalStyle, Logo,Area } from "./Styled"


const HeaderReceitas = (props) => {
    const history = useHistory()

    return (
        <Header>
            <GlobalStyle />
            <Logo>
                {/* <img src={logoFoguete} onClick={() => goToHomePage(history)} /> */}

                <h1>Logo </h1>

            </Logo>
            <Area>
            <h1>Administração</h1>
            </Area>
            
            <NavMenu>
                {/* <Link onClick={() => goToHomePage(history)}>Home</Link> */}
                {/* <Link onClick={() => goBack(history)}>voltar</Link> */}
                {/* <Link onClick={() => goToCreateTripPage(history)}> Viagem</Link> */}
                {/* <Link1 onClick={() => goToLoginPage(history)}>logout</Link1> */}
            </NavMenu>

        </Header>
    )
}

export default HeaderReceitas