import React from 'react';
import { InputsContainer } from './Styled'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useForm } from '../../hooks/useForm'
import { login } from '../../Services/user'
import { useHistory } from 'react-router-dom'

const LoginForm = ({ setRightButtonText }) => {
    const history = useHistory()

    const [form, onChange, resetState] = useForm(
        {
            email: "",
            password: ""
        })

    const onSubmitForm = (event) => {
        login(form, resetState, history, setRightButtonText)
        event.preventDefault()
    }


    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name='email'
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    margin={"dense"}
                    type={"email"}
                    required
                    fullWidth
                />
                <TextField
                    type={"password"}
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    variant={"outlined"}
                    margin={"dense"}
                    fullWidth
                    required
                />

                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                >
                    Logar-se
                </Button>
            </form>
        </InputsContainer>
    )
}

export default LoginForm