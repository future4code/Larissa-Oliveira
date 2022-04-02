import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ContainerPagination, Container, ContainerImg, All, Img, TitleContainer } from './styled'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { goToMovieDetails } from '../../router/coordinator'
import { LINK_IMAGE } from '../../constantes/BASE_URL'
import Pagination from '@mui/material/Pagination';

export const CardMovie = (props) => {
    const history = useHistory()

    const {
        moviePopular,
        page, setPage
    } = useContext(GlobalStateContext)

    const { results } = moviePopular

    const handleChange = (event, value) => {
        setPage(value)
    }

    return (
        <All>
            {results && results.map((item) => {
                return (
                    <Container key={item.id}>
                        <ContainerImg>
                            <Img
                                onClick={() => goToMovieDetails(history, item.id)}
                                src={`${LINK_IMAGE}${item.poster_path}`}
                                alt={item.title}
                            />
                            <TitleContainer>
                                <p>{item.title}</p>
                            </TitleContainer>
                        </ContainerImg>
                    </Container>
                )
            })}
            <ContainerPagination>
                {/* <Pagination
                    handleChange={handleChange}
                    page={page}
                    count={10} 
                    size='large'
                    variant="outlined" 
                    shape="rounded"
                    color='secondary'
                />   */}
            </ContainerPagination>
        </All>
    )

}
