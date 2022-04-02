import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { GlobalStateContext } from './GlobalStateContext'
import { API_KEY, BASE_URL, LINK_IMAGE } from '../constantes/BASE_URL'

export const GlobalState = (props) => {
    const [moviePopular, setMoviePopular] = useState([])
    const [movieDetail, setMovieDetail] = useState([])
    const [page, setPage] = useState(1)
    const [linkImage, setLinkImage] = useState(`${LINK_IMAGE}`)
    const [currentPageUrl, setCurrentPageUrl] = useState(`${BASE_URL}${'/movie/popular'}?api_key=${API_KEY}&language=pt-BR&page=${page}`)

    console.log(movieDetail)

    useEffect(() => {
        getMovie()
    }, [])

    const getMovie = () => {
        axios
            .get(currentPageUrl)
            .then((res) =>
                setMoviePopular(res.data))
            .catch((error) =>
                console.log(error.message))
    }

    const data = {
        moviePopular, setMoviePopular,
        movieDetail, setMovieDetail,
        page, setPage,
        linkImage, setLinkImage,
        currentPageUrl, setCurrentPageUrl
    }

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}