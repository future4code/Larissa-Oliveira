import React from 'react'
import { CardMovie } from '../../components/CardMovie/cardMovie'
import { Header } from '../../components/Header/header'

export const Movies = () => {
    return (
        <div>
            <Header />
            
            <CardMovie />
        </div>
    )
}