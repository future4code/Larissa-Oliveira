import React from 'react';
import { InputsContainer } from './Styled'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useForm } from '../../hooks/useForm'
import { signUp } from '../../Services/user'
import { useHistory } from 'react-router-dom'
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

const CadastroForm = ({setRightButtonText}) => {
    const history = useHistory()
    useUnprotectedPage()

    const [form, onChange, resetState] = useForm(
        {
            username: "",
            email: "",
            password: ""
        });

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, resetState, history, setRightButtonText)
    }

    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={'username'}
                    value={form.username}
                    onChange={onChange}
                    label={"Nome"}
                    variant={"outlined"}
                    margin={"dense"}
                    type={"name"}
                    required
                    autoFocus
                    fullWidth
                />
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
                    Cadastrar-se
                </Button>
            </form>
        </InputsContainer>
    )
}

export default CadastroForm