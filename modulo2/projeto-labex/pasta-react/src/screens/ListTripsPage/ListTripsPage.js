import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import TripCard from '../../components/TripCard/TripCard'
import { getTrips } from '../../services/Api'
import { TripGrid, TripContainer, } from './styled'
import { goToApplicationFormPage } from '../../Router/goToPages'

const ListTripsPage = () => {
    const history = useHistory()
    const [tripList, setTripList] = useState([])

    useEffect(() => {
        getTrips(setTripList)
    }, [])

    return (
        <TripContainer>
            <TripGrid>
                {tripList.map((trip) => {
                    return (
                        // <ListTripsPage handleClick={()=>goToApplicationFormPage(history)}/>
                        <div onClick={() => goToApplicationFormPage(history)}>
                        <TripCard
                            key={trip.id}
                            tripID={trip.id}
                            data={trip}
                        />
                        </div>

                    )

                })}

            </TripGrid>
        </TripContainer>
    )
}
export default ListTripsPage