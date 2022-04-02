import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useHistory } from "react-router-dom";
import { API_KEY, BASE_URL, LINK_IMAGE } from '../../constantes/BASE_URL';
import { Container, ContainerCover, TitleContainer, MainTitle, OriginalTitle, DateRunTime, Overview, GenderWrap, BackButton } from './styled'
import { goToMovies } from '../../router/coordinator';

export const MoviesDetails = () => {
    const history = useHistory()
    const path = useParams();
    const [movieDetail, setMovieDetail] = useState([]);

    useEffect(() => {
        getMovieDetail()
    }, [])

    const getMovieDetail = () => {
        axios
            .get(` ${BASE_URL}${'/movie/'}${path.id}?api_key=${API_KEY}&language=pt-BR`)
            .then((res) => {
                setMovieDetail(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    const revenue = movieDetail && movieDetail.revenue

    const numberDollar = revenue && revenue.toLocaleString("pt-BR", { style: "currency", currency: "USD" })

    const genres = movieDetail.genres


    const ConvertedTime = () => {
        const runtime = movieDetail && movieDetail.runtime
        const hours = Math.floor(runtime / 60);
        const minutes = runtime % 60;

        return `${hours} h ${minutes} min`
    }
    return (
        <Container
            background={`${LINK_IMAGE}${movieDetail.backdrop_path}`}
            src={`${LINK_IMAGE}${movieDetail.poster_path}`}
        >
            <ContainerCover>
                <MainTitle>
                    {movieDetail.title}
                </MainTitle>
                <OriginalTitle>Título original: {movieDetail.original_title}</OriginalTitle>
                <DateRunTime>
                    <p>{movieDetail.release_date}</p>
                    <p>{ConvertedTime()}</p>
                </DateRunTime>

                <Overview>{movieDetail.overview}</Overview>
                <p>Avaliação do TMDB: ⭐ <strong>{movieDetail.vote_average}</strong></p>
                <p>Arrecadação: {numberDollar}</p>
                <GenderWrap>
                    {genres && genres.map((item) =>

                        <p key={item.id}>{item.name}</p>

                    )}
                </GenderWrap>
                <BackButton onClick={() => goToMovies(history)} aria-label="Botão para Voltar" >
                    <TitleContainer>
                        <p>Voltar</p>
                    </TitleContainer>
                </BackButton >
            </ContainerCover>

        </Container>
    )
}