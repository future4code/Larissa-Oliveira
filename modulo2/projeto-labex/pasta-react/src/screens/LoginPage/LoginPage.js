import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { login } from '../../services/Api'
import { goToAdminHomePage, goToLoginPage, } from '../../Router/goToPages'
import { GlobalStyle, Container } from './styled'

const LoginPage = (props) => {

    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        const token = window.localStorage.getItem("token");

        if (token) {
            goToAdminHomePage(history)
        } else {
            goToLoginPage(history)
        }
    }, [history]);

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }



    return (
        <Container>
            <GlobalStyle />
            <h2>Login</h2>
            <div>
                <div>
                    <label>Email</label>
                    <input type="email"
                        value={email}
                        onChange={onChangeEmail}
                    />
                </div>
                <div>
                    <label>Senha</label>
                    <input type="password"
                        value={password}
                        onChange={onChangePassword}
                    />
                </div>

                <button onClick={() => login(email, password, goToAdminHomePage, history)}>Login</button>
            </div>
        </Container>
    )
}
export default LoginPage