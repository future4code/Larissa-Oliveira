import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { getTripDetail, decideCandidate } from '../../services/Api'
import { goToLoginPage } from '../../Router/goToPages'
import { Details, DetailsContent, CandidateInfo, ContainerItem, CandidatesList, BtnTrue, BtnFalse, GlobalStyle } from './styled'

const TripDetailsPage = (props) => {
    const [ trip, setTrip ] = useState({})
    const [ candidateList, setCandidates ] = useState([])
    const [ contentInfo, setContentInfo] = useState(false)
    const [ candidate, setCandidate] = useState({})
    
    const parm = useParams()
    const history = useHistory()


    useEffect(() => {
        const token = window.localStorage.getItem("token");
        if (token) {
            getTripDetail(setTrip, setCandidates, parm.id)
        } else {
            goToLoginPage(history)
        }

    }, [history, candidateList]);

    const info = (index) => {
        setCandidate(candidateList[index])
        setContentInfo(!contentInfo)
    }

   
    return(
        <>
        <DetailsContent>
            <Details>
                <h1>Viagem</h1>
                <h2># {trip.name}</h2>
                <h3>{trip.planet} dia: {trip.date}</h3>
                <p>{trip.description}</p>
                <small>Duração da viagem: {trip.durationInDays} dias</small>

                <br/>
            </Details>

            <CandidatesList>
                <h1>Candidatos</h1>
                {candidateList.map((candidate, index)=>{
                    return(
                        <ContainerItem>
                            <p onClick={()=>info(index)}>{candidate.name}</p>
                            <BtnTrue onClick={()=>decideCandidate(true, parm.id, candidate.id)}>Aprovar</BtnTrue>
                            <BtnFalse onClick={()=>decideCandidate(false, parm.id, candidate.id)}>Recusar</BtnFalse>
                        </ContainerItem>
                        )
                    })}
            
            </CandidatesList>

            {contentInfo && 
                <CandidateInfo>
                    <h1>Informações</h1>
                    <p>{candidate.name}</p>
                    <p>{candidate.age} anos</p>
                    <p>{candidate.country}</p>
                    <p>{candidate.profession}</p>
                    <p>Informações: "{candidate.applicationText}"</p>
                </CandidateInfo>
            }

        </DetailsContent>
        </>
    )
}

export default TripDetailsPage