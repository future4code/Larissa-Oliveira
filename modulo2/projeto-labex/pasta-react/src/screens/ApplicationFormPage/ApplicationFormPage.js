import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { countries } from '../../constants/countries'
import { applyToTrip, getTrips } from '../../services/Api'
import { CButton, FormContainer, Form, Label, Input, Textarea, Select, GlobalStyle } from './styled'

const ApplicationFormPage = () => {
    const [tripList, setTripList] = useState([])

    useEffect(() => {
        getTrips(setTripList)
    }, [])

    const { form, onChange, resetState } = useForm(
        {
            name: '',
            tripID: '',
            age: 0,
            applicationText: '',
            profession: '',
            country: ''
        })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        onChange(name, value);
    }

    const formSubmit = (event) => {
        event.preventDefault()
        applyToTrip(form)
        resetState()
    }

    return (
        <FormContainer>
            <GlobalStyle />
            <Form onSubmit={formSubmit}>
            <h2>Cadastre-se</h2>
                <div>
                    <Label>Nome</Label>
                    <Input
                        value={form.name}
                        name='name'
                        onChange={handleInputChange}
                        pattern="^[a-z\u00C0-\u00ff A-Z]{3,}"
                        title="Nome invalido"
                        required
                    />
                </div>
                <div>
                    <Label>Idade</Label>
                    <Input
                        value={form.age}
                        name='age'
                        onChange={handleInputChange}
                        min='18'
                        type='number'
                        required
                    />
                </div>
                <div>
                    <Label>Profissão</Label>
                    <Input
                        value={form.profession}
                        name='profession'
                        onChange={handleInputChange}
                        pattern="^[a-z\u00C0-\u00ff A-Z]{10,}"
                        required
                    />
                </div>
                <div>
                    <Label>País</Label>
                    <Select
                        value={form.country}
                        name='country'
                        onChange={handleInputChange}
                        required
                    >
                        <option value=''>--selecione o país--</option>
                        {countries.map((country, index) => {
                            return (
                                <option value={country.nome} key={index}>
                                    {country.nome}
                                </option>
                            )
                        })}
                    </Select>
                </div>
                <div>
                    <Label>Viagem</Label>
                    <Select
                        value={form.tripID}
                        name='tripID'
                        onChange={handleInputChange}
                        required
                    >
                        <option value=''>--Selecione a Viagem--</option>
                        {tripList.map((trip, index) => {
                            return (
                                <option value={trip.id} key={index}>
                                    {trip.name}
                                </option>
                            )
                        })}
                    </Select>
                </div>
                <div>
                    <Label>Porque você merece essa viagem?</Label>
                    <Textarea
                        name='applicationText'
                        value={form.applicationText}
                        onChange={handleInputChange}
                        minLength="30"
                        required
                    />
                </div>
                <CButton>
                <button>Enviar a solicitação</button>
                </CButton>
            </Form>
        </FormContainer>
    )
}
export default ApplicationFormPage