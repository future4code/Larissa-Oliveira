import React from 'react'
import {Card,Header, Cards, Overlay, P,Status} from './styled'


const TripCard = (props) => {
    const {name, description, planet, durationInDays, date}= props.data
    return(
        <Cards>
        <Card>
            <img src="https://i.pinimg.com/564x/f5/03/b5/f503b574a78f5ada5ccb58880e60d621.jpg" onClick={props.handleClick} id={props.tripID}/>
            <Overlay>
            
                <h2>{name}</h2>
                <h3>{planet} dia {date}</h3>
                <p>Duração da viagem: {durationInDays} dias</p>
  
                
                    <P>{description}</P>
                
            </Overlay>
        </Card>
        </Cards>
    )
}

export default TripCard