import React from 'react';
import { ScreenContainer, LogoImage, SignUpButtonContainer } from './Styled'
import logo2 from '../../Assets/Logo2.png'
import Button from '@material-ui/core/Button'
// import { useForm } from '../../hooks/useForm'
import LoginForm from './LoginForm'
import {goToCadastro} from '../../Router/Coordinator'
import { useHistory } from 'react-router-dom';
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const LoginPage = ({setRightButtonText}) => {
    useUnprotectedPage()

    const history = useHistory()

    return (
        <ScreenContainer>
            <LogoImage src={logo2} />
            <LoginForm setRightButtonText={setRightButtonText}/>
            <SignUpButtonContainer>
                <Button
                    onClick={()=> goToCadastro(history)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                >
                    Cadastre-se
                </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage