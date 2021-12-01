import axios from 'axios';

const apiUrl = `http://us-central1-missao-newton.cloudfunctions.net/astroMatch/LarissaMatos`

export const getProfileToChoose = (setProfile) => {
    axios.get(`${apiUrl}/person`)
    .then((response)=>{
        if(Object.entries(response.data.profile).length > 0){
            setProfile(response.data.profile)
        }
    })
    .catch(()=>{
    })
}

export const getMatches = (setListMatch) => {
    axios.get(`${apiUrl}/matches`)
    .then((response)=>{
        setListMatch(response.data.matches) 
    })
    .catch((error)=>{
    })
}

export const choosePerson = (id) => {
    const body = { "id": `${id}`, "choice": true }

    axios.post(`${apiUrl}/choose-person`, body)
    .then((response)=>{
    })
    .catch((error)=>{
    })
}

export const clearMatches = () => {
    axios.put(`${apiUrl}/clear`)
    .then((response)=>{
    })
    .catch((error)=>{
    })
}