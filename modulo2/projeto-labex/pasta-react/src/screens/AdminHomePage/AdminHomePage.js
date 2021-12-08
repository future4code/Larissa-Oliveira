import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getTrips } from '../../services/Api'
import { DashBoardContainer, TripGrid } from './styled'
import { goToLoginPage, goToTripDetailsPage } from '../../Router/goToPages'
import TripCard from '../../components/TripCard/TripCard'

const AdminHomePage = (props) => {
    const history = useHistory()
    const [tripList, setTripList] = useState([])

    useEffect(() => {
        getTrips(setTripList)
    }, [])

    useEffect(() => {
        const token = window.localStorage.getItem("token");

        if (token) {
            history.push('/admin')
        } else {
            goToLoginPage(history)
        }
    }, [history]);

    const details = (event) => {
        goToTripDetailsPage(history, event.target.id)
    }

    return (
        <DashBoardContainer>  
                <h2>Viagens</h2>
                <TripGrid>
                    {tripList.map((trip) => {
                        return (
                            <div onClick={details} >
                                <TripCard
                                    key={trip.id}
                                    tripID={trip.id}
                                    data={trip}
                                    handleClick={props.handleClick}
                                />
                            </div>
                        )
                    })}
                </TripGrid>
            
        </DashBoardContainer>
    )
}
export default AdminHomePage