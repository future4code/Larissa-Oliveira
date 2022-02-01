import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import { login } from '../../services/Api'
import { goToAdminHomePage, goToLoginPage, } from '../../Router/goToPages'
import { GlobalStyle, Container, Wrap, CButton, Button,Form } from './styled'

const LoginPage = (props) => {
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token");

        if (token) {
            goToAdminHomePage(history)
        } else {
            goToLoginPage(history)
        }
    }, [history]);

    const { form, onChange, resetState } = useForm(
        {
            email: '',
            password: ''
        })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        onChange(name, value);
    }

    const formSubmit = (event) => {
        event.preventDefault()
        resetState()
        login(form)
    }



    return (
        <Container>
            <GlobalStyle />
            <Wrap>
            <h2>Login</h2>
            <form onSubmit={formSubmit}>
                <div>
                    <label forHtml="email">Email</label>
                    <input
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="Email invalido"
                        required
                    />
                </div>
                <div>
                    <label forHtml="password">Senha</label>
                    <input
                        name="password"
                        value={form.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <CButton>
                    <Button>
                        <Form></Form>
                        <button onclick={goToAdminHomePage(history)}>Login</button>
                    </Button>
                </CButton>
            </form>
            </Wrap>
        </Container>
    )
}
export default LoginPage