import axios from 'axios';
import { BASE_URL } from '../constants/configApi'

export const login = (email, password, goToDashBoard, history) => {
    const body = {
        "email": email,
        "password": password
    }
    axios.post(`${BASE_URL}/login`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            goToDashBoard(history)
        })
        .catch((error) => {
            // console.log(error.data)
        })
}
export const getTrips = (setListTrips) => {
    axios.get(`${BASE_URL}/trips`)
        .then((response) => {
            setListTrips(response.data.trips)
            console.log(response.data.trips)
        })
        .catch((error) => {
            // console.log(error.data)
        })
}
export const createTrip = (body) => {
    const token = localStorage.getItem('token')
    axios.post(`${BASE_URL}/trips`, body, { headers: { auth: token } })
        .then((response) => {
            alert('Sua viagem foi cadastrada com sucesso!')
        })
        .catch((error) => {
            // console.log(error.data)
        })
}
export const getTripDetail = (id, setCandidate, setTrip) => {
    const token = localStorage.getItem('token')
    axios.get(`${BASE_URL}/trip${id}`, { headers: { auth: token } })
        .then((response) => {
            setTrip(response.data.trip)
            setCandidate(response.data.trip.candidates)
        })
        .catch((error) => {
            // console.log(error.data)
        })
}
export const applyToTrip = (user) => {
    const body = {
        "name": user.name,
        "age": user.age,
        "applicationText": user.applicationText,
        "profession": user.profession,
        "country": user.country
    }
    axios.post(`${BASE_URL}/trips/${user.tripID}/apply`,body)
    .then((response)=>{
        alert('Sua solicitação foi enviada!')
    })
        .catch((error) => {
            // console.log(error.data)
        })
}
export const decideCandidate = (approve, tripId, candidateId) => {
    const token = localStorage.getItem('token')
    const body = {
        "approve": approve
    }
    axios.put(`${BASE_URL}/trips/${tripId}/candidates/${candidateId}/decide`, body, { headers: { auth: token } })
        .then(() => {
            approve ?
                alert("Candidato aprovado!")
                :
                alert("Candidato recusado!")
        })
}



