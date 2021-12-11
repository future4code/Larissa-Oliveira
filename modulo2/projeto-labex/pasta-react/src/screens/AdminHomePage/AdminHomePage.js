import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getTrips } from '../../services/Api'
import { DashBoardContainer, TripGrid, Card, Button, Info } from './styled'
import { goToLoginPage, goToTripDetailsPage } from '../../Router/goToPages'
import TripCard from '../../components/TripCard/TripCard'

const AdminHomePage = (props) => {
    const history = useHistory()
    const [tripList, setTripList] = useState([])

    useEffect(() => {
        getTrips(setTripList)
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

    const newListTrips = tripList.map((trip) => {
        return (
            <TripCard
                key={trip.id}
                tripID={trip.id}
                data={trip}
                handleClick={details}
            />
        )
    })


    return (
        <DashBoardContainer>
            <Info>
            </Info>
            
            <TripGrid>

                {newListTrips}

            </TripGrid>
        </DashBoardContainer>
    )
}
export default AdminHomePage