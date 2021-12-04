
import React from 'react';
import { PhotoContainer, InfoContainer } from './Styled'

export default function Profile(props) {
    const photo = () => {
        if (Object.entries(props.x).length === 0) {
            return <p>Carregando...</p>
        } else {
            return (
                <div>
                    <img src={props.photo} alt={props.name} />
                    <InfoContainer>
                        <h2>{props.name}, {props.age}</h2>
                        <p>{props.bio}</p>
                    </InfoContainer>
                </div>
            )
        }
    }

    return (
        <PhotoContainer background={props.photo}>
            {photo()}
        </PhotoContainer>
    );
}