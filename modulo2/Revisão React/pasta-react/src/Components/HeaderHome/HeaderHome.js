import React from 'react'
import { useHistory } from 'react-router-dom';
import { Header, NavMenu, Link, Link1, GlobalStyle, Logo, Area } from "./Styled"
import Button from '@material-ui/core/Button'


const HeaderAdminPage = (props) => {
    const history = useHistory()

    return (
        <Header>
            <GlobalStyle />
            <Logo>
                {/* <img src={logoFoguete} onClick={() => goToHomePage(history)} /> */}

                <h1>Logo </h1>

            </Logo>
            <Area>

            </Area>

            <NavMenu>
                <Button variant="outlined" color="primary">
                    Outlined
                </Button>
                {/* <Link onClick={() => goToHomePage(history)}>Home</Link> */}
                {/* <Link onClick={() => goBack(history)}>voltar</Link> */}
                {/* <Link onClick={() => goToCreateTripPage(history)}> Viagem</Link> */}
                {/* <Link1 onClick={() => goToLoginPage(history)}>logout</Link1> */}
            </NavMenu>

        </Header>
    )
}

export default HeaderAdminPage