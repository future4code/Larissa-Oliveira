import React from 'react';
import { useForm } from '../../hooks/useForm'
import CadastroForm from './CadastroForm'
import logo2 from '../../Assets/Logo2.png'
import { ScreenContainer, LogoImage } from './Styled'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const CadastroPage = () => {
    useUnprotectedPage()

    return (
        <ScreenContainer>
        <LogoImage src={logo2} />
        <CadastroForm />
    </ScreenContainer>
    )
}

export default CadastroPage